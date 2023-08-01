// export const SERVER_TYPE = "EXPRESS"; //<- grab-market-server 용 (강의)
export const SERVER_TYPE = "NEST"; //<- grab-market-server-nest 용

export const API_URL =
  SERVER_TYPE === "EXPRESS" ? "http://localhost:8080" : "http://localhost:3000";
