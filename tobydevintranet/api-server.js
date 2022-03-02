const RestProxy = require("sp-rest-proxy");

const settings = {
    configPath: './config/private.json', // Location for sharepoint instance mapping and credentials
    port: 8081 /* You may select your own port here */,
};

const restProxy = new RestProxy(settings);
restProxy.serve();
