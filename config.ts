import { env } from "process";

export const DIALECT = "postgres";

const LOCAL_CONFIGURATION = {
  DB: "house",
  PASSWORD: "c0$M0$",
  PORT_DB: 5432,
  SERVER: "172.2.0.2",
  USER_DB: "cosmos"
};

const PRODUCTION_CONFIGURATION = {
  DB: env.DB || "prod",
  PASSWORD: env.PASSWORD || "",
  PORT_DB: Number(env.PORT_DB) || 3306,
  SERVER: env.SERVER || "localhost",
  USER_DB: env.USER_DB || "root"
};

export const config = {
  DATABASE:
    env.NODE_ENV === "PRODUCTION"
      ? PRODUCTION_CONFIGURATION
      : LOCAL_CONFIGURATION,
  PORT_APP: 80,
  SECRET: "HltH3R3"
};
