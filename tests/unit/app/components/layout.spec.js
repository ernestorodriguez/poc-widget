import { expect } from 'chai';
import layout  from '../../../../app/components/layout';

describe('components Layout', () => {
    it('must render corrected', () => {
        const mock = {
            body: '[[body]]',
            title: '[[title]]',
            pageId: '[[pageId]]',
        };
        const render = layout(mock);

        expect(render).to.be.contain(mock.body);
        expect(render).to.be.contain(mock.title);
        expect(render).to.be.contain(mock.pageId);
    });
});
