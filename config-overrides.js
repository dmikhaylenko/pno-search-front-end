const fs = require("fs");
const path = require("path");
const configLoader = require("./scripts/config-loader.js");

const CONFIGURER_REGEX = /\.extension.js$/;

function runConfig(rootPath, regex, config, env) {
    if (fs.existsSync(rootPath)) {
        return configLoader(rootPath, regex, configurers => {
            return configurers.reduce((prevConfig, configurer) => {
                return configurer(prevConfig, env);
            }, config);
        });
    }
    return config;
}

module.exports = {
    webpack: (config, env) => {
        const CONFIGURER_BASE_DIR = "scripts/webpack/";
        return runConfig(path.resolve(CONFIGURER_BASE_DIR), CONFIGURER_REGEX, config, env);
    },
    jest: (config, env) => {
        const CONFIGURER_BASE_DIR = "scripts/testing/";
        const result = runConfig(path.resolve(CONFIGURER_BASE_DIR), CONFIGURER_REGEX, config, env);
        return result;
    },
}