import { env } from "@deps";

await env.load({ export: true });

export const OMNIVORE_KEY = Deno.env.get("OMNIVORE_KEY");
export const SMTP_HOSTNAME = Deno.env.get("SMTP_HOSTNAME");
export const SMTP_PORT = Deno.env.get("SMTP_PORT");
export const SMTP_USERNAME = Deno.env.get("SMTP_USERNAME");
export const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD");
export const SMTP_FROM = Deno.env.get("SMTP_FROM");
export const SMTP_TO = Deno.env.get("SMTP_TO");

if (!OMNIVORE_KEY) {
  throw new Error("OMNIVORE_KEY not found in .env");
}

if (!SMTP_HOSTNAME) {
  throw new Error("SMTP_HOSTNAME not found in .env");
}

if (!SMTP_PORT) {
  throw new Error("SMTP_PORT not found in .env");
}

if (!SMTP_USERNAME) {
  throw new Error("SMTP_USERNAME not found in .env");
}

if (!SMTP_PASSWORD) {
  throw new Error("SMTP_PASSWORD not found in .env");
}

if (!SMTP_FROM) {
  throw new Error("SMTP_FROM not found in .env");
}

if (!SMTP_TO) {
  throw new Error("SMTP_TO not found in .env");
}
