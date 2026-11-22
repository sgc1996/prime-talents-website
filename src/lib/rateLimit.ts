import { NextRequest } from "next/server";

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

// In-memory sliding window cache
const rateLimitMap = new Map<string, RateLimitRecord>();

// Periodically clean up expired entries to avoid memory leak
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    rateLimitMap.forEach((record, key) => {
      if (now > record.resetAt) {
        rateLimitMap.delete(key);
      }
    });
  }, 60000); // Clean every minute
}

/**
 * Extracts a dependable client identifier from headers (IP address).
 */
export function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  const cfIp = req.headers.get("cf-connecting-ip");
  if (cfIp) {
    return cfIp.trim();
  }
  return "127.0.0.1";
}

/**
 * Checks if a key exceeds the rate limit.
 * @param key unique identifier (e.g. `contact-ip-1.2.3.4` or `contact-email-user@domain.com`)
 * @param limit maximum allowed requests within the window
 * @param windowMs time window in milliseconds (default: 10 minutes)
 * @returns `{ success: boolean, remaining: number, resetAt: number }`
 */
export function checkRateLimit(
  key: string,
  limit: number = 5,
  windowMs: number = 10 * 60 * 1000
): { success: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetAt) {
    const newRecord: RateLimitRecord = {
      count: 1,
      resetAt: now + windowMs,
    };
    rateLimitMap.set(key, newRecord);
    return {
      success: true,
      remaining: limit - 1,
      resetAt: newRecord.resetAt,
    };
  }

  if (record.count >= limit) {
    return {
      success: false,
      remaining: 0,
      resetAt: record.resetAt,
    };
  }

  record.count += 1;
  return {
    success: true,
    remaining: limit - record.count,
    resetAt: record.resetAt,
  };
}
