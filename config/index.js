const defaultConfig = require('./default');
const developmentConfig = require('./development');
const assign = require('@recursive/assign');


const configByEnvironment = {
    development: developmentConfig,
    test: {},
};

const getConfig = function () {
    const env = process.env.NODE_ENV;

    return assign({}, defaultConfig, configByEnvironment[env]);
};

const config = getConfig();

module.exports.config = config;
module.exports.getConfig = getConfig;
