/**
 * Security utilities for email payload sanitization and email header injection protection.
 */

/**
 * Escapes characters that could be interpreted as HTML tags or entities.
 * Prevents HTML/XSS injection in HTML email templates.
 */
export function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Strips carriage returns and newlines from strings to prevent email header injection attacks
 * in Subject, From, To, or Reply-To fields.
 */
export function sanitizeHeader(str: string): string {
  if (!str) return "";
  return str.replace(/[\r\n]+/g, " ").trim();
}
