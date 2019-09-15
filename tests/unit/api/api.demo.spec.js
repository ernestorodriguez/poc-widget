import demoEndpoint from '../../../api/demo';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

chai.use(spies);

describe('Api demo', () => {
    it('must call res.send with valid params', () => {
        const res = {
            send: chai.spy()
        };

        demoEndpoint({}, res);
        expect(res.send).to.be.called.once.with('Hello World form Api!');
    });
});
