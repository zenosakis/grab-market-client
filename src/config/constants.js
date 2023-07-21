export const API_URL =
  process.env.NODE_ENV === "production"
    ? "http://19.19.20.200:8080"
    : "http://localhost:8080";
