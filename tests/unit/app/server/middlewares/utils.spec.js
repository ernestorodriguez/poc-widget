import chai, { expect } from 'chai';
import { notFound, error } from '../../../../../app/server/middlewares/utils';
import spies from 'chai-spies';

chai.use(spies);

describe('Middlewares Utils', () => {
    describe('#notFound', () => {
        it('must call status and send with correct params', () => {
            const res = {
                status: chai.spy(),
                send: chai.spy(),
            };

            notFound({}, res);
            expect(res.status).to.be.called.once.with(404);
            expect(res.send).to.be.called.once.with('404');
        });
    });

    describe('#error', () => {
        it('must call status and send with correct params', () => {
            const res = {
                status: chai.spy(),
                send: chai.spy(),
            };

            error({}, {}, res);
            expect(res.status).to.be.called.once.with(500);
            expect(res.send).to.be.called.once.with('ups something wen wrong');
        });
    });
});
