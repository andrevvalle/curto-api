/*
 * Config environments.
 */
var Config = {};

/*
 * Set current environment.
 */
Config.env = process.env["NODE_ENV"] || "development";

/*
 * Environment: Development.
 */
Config.development = {
  name: "development",
  mongo: "mongodb://localhost/curto-api",
  defaultUrl: "http://localhost",
  serverPort: 3000,
  logNamespace: "development",
  log4js: {
    console: {
      type: "console"
    },
    file: {
      type: "file",
      filename: "development.log",
      maxLogSize: 20480,
      backups: 3,
      pollInterval: 15
    }
  }
};

/*
 * Environment: Production.
 */
Config.production = {
    name: "production",
    mongo: "mongodb://curtocafe:bieltransante@kahana.mongohq.com:10038/app29333960",
    defaultUrl: "http://localhost",
    serverPort: 3000,
    logNamespace: "production",
    log4js: {
        console: {
            type: "console"
        },
        file: {
            type: "file",
            filename: "production.log",
            maxLogSize: 20480,
            backups: 6,
            pollInterval: 15
        }
    }
};

config = Config[Config.env];
config.env = Config.env;
exports.config = config;
