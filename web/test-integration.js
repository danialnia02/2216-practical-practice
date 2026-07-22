const assert = require("assert");

const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:3000";

async function postPassword(password) {
  const res = await fetch(BASE_URL + "/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ password }).toString(),
  });
  return res.text();
}

async function run() {
  const home = await fetch(BASE_URL + "/").then((r) => r.text());
  assert(home.includes("Login"), "home page should show the login form");

  const shortResult = await postPassword("abc123");
  assert(shortResult.includes("8 characters"), "short password should be rejected");

  const commonResult = await postPassword("password");
  assert(commonResult.includes("too common"), "common password should be rejected");

  const validResult = await postPassword("Tr0ub4dor&3-unique");
  assert(validResult.includes("Welcome"), "valid password should reach the welcome page");

  const logoutResult = await fetch(BASE_URL + "/logout").then((r) => r.text());
  assert(logoutResult.includes("Login"), "logout should return to the login page");

  console.log("All integration tests passed.");
}

run().catch((err) => {
  console.error("Integration test failed:", err.message);
  process.exit(1);
});
