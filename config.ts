import { env } from "process";

export const DIALECT = "mysql";

const LOCAL_CONFIGURATION = {
  DB: "house",
  PASSWORD: "H0u$3",
  PORT_DB: 3306,
  SERVER: "172.2.0.4",
  USER_DB: "root"
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
