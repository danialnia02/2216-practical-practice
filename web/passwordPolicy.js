const fs = require("fs");
const path = require("path");

const MIN_LENGTH = 8;
const MAX_LENGTH = 64;

const COMMON_PASSWORDS_PATH = path.join(__dirname, "data", "common_passwords.txt");

const COMMON_PASSWORDS = new Set(
  fs
    .readFileSync(COMMON_PASSWORDS_PATH, "utf-8")
    .split("\n")
    .map((line) => line.trim().toLowerCase())
    .filter((line) => line.length > 0)
);

/**
 * Validates a password against OWASP Proactive Controls C6 / NIST 800-63b
 * Level 1 password requirements.
 *
 * @param {string} password
 * @returns {string|null} an error message if invalid, or null if it passes.
 */
function validate(password) {
  if (password.length < MIN_LENGTH) { return `Password must be at least ${MIN_LENGTH} characters long.`; }
  if (password.length > MAX_LENGTH) { return `Password must be no more than ${MAX_LENGTH} characters long.`; }
  // No composition rules (no forced uppercase/number/symbol) per NIST 800-63b —
  // don't add those checks even though it might feel incomplete without them.

  if (COMMON_PASSWORDS.has(password.toLowerCase())) { return "This password is too common and has appeared in known breach lists. Please choose another."; }

  return null;
}

module.exports = { validate, MIN_LENGTH, MAX_LENGTH };
