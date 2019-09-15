import chai, { expect } from 'chai';
import spies from 'chai-spies';
const { getConfig } = require('../../../config');

chai.use(spies);
let enviroment = process.env.NODE_ENV;

describe('Config', () => {
    after(() => {
        process.env.NODE_ENV = enviroment;
    });

    it('must return default config', () => {
        process.env.NODE_ENV = undefined;
        expect(getConfig()).to.be.deep.equals({
            server: { port: '8080',
                basePath: '/',
                apiPath: '/api/',
                staticsFolder: 'dist'
            }
        }
        );
    });

    it('must return development config', () => {
        process.env.NODE_ENV = 'development';
        expect(getConfig()).to.be.deep.equals({
            server: {
                port: '3000',
                basePath: '/',
                apiPath: '/api/',
                staticsFolder: 'dist'
            }
        });
    });
});
