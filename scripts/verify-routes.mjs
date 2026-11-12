import { spawn } from "child_process";

const routes = [
  "/",
  "/about",
  "/services",
  "/blog",
  "/blog/srilanka-salary-trends-2025",
  "/blog/epf-etf-apit-statutory-compliance-guide",
  "/blog/building-remote-teams-south-asia",
  "/events",
  "/media",
  "/appointment",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
  "/robots.txt",
  "/sitemap.xml",
  "/not-found-test-page",
];

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Starting Next.js production server for verification...");
  const server = spawn("cmd.exe", ["/c", "npx", "next", "start", "-p", "3000"], {
    stdio: "inherit",
  });

  // Wait 4 seconds for server to start
  await sleep(4000);

  console.log("\n==========================================");
  console.log("TESTING ALL ROUTES ON HTTP://LOCALHOST:3000");
  console.log("==========================================");

  let allPassed = true;

  for (const route of routes) {
    const url = `http://localhost:3000${route}`;
    try {
      const res = await fetch(url);
      const is404Route = route === "/not-found-test-page";
      const expectedStatus = is404Route ? 404 : 200;

      if (res.status === expectedStatus) {
        console.log(`[PASS] ${res.status} | ${route}`);
      } else {
        console.error(`[FAIL] ${res.status} (expected ${expectedStatus}) | ${route}`);
        allPassed = false;
      }
    } catch (err) {
      console.error(`[ERR] Failed to reach ${url}:`, err.message);
      allPassed = false;
    }
  }

  // Test API route: /api/appointment with valid payload
  try {
    const apiRes = await fetch("http://localhost:3000/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "Test Executive",
        email: "test@enterprise.lk",
        phone: "+94 77 123 4567",
        company: "Test Enterprise PLC",
        service: "Executive Search",
        companySize: "51-250",
        preferredDate: "2025-06-01",
        preferredTime: "morning",
        message: "Inquiry for CTO headhunting search in Colombo.",
      }),
    });
    const data = await apiRes.json();
    if (apiRes.status === 200 && data.success) {
      console.log(`[PASS] 200 | POST /api/appointment (Zod & Notification check)`);
    } else {
      console.error(`[FAIL] POST /api/appointment:`, data);
      allPassed = false;
    }
  } catch (err) {
    console.error(`[ERR] POST /api/appointment:`, err.message);
    allPassed = false;
  }

  // Test API route: /api/newsletter
  try {
    const newsRes = await fetch("http://localhost:3000/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "subscriber@enterprise.lk" }),
    });
    const newsData = await newsRes.json();
    if (newsRes.status === 200 && newsData.success) {
      console.log(`[PASS] 200 | POST /api/newsletter`);
    } else {
      console.error(`[FAIL] POST /api/newsletter:`, newsData);
      allPassed = false;
    }
  } catch (err) {
    console.error(`[ERR] POST /api/newsletter:`, err.message);
    allPassed = false;
  }

  console.log("==========================================");
  console.log(allPassed ? "ALL 17 ROUTES & APIs VERIFIED SUCCESSFULLY!" : "SOME CHECKS FAILED");
  console.log("==========================================\n");

  server.kill();
  process.exit(allPassed ? 0 : 1);
}

run();

