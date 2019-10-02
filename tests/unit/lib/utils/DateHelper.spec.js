import DateHelpers from '../../../../lib/utils/DateHelpers';
import { expect } from 'chai';

describe('Datehelpers', () => {
    describe('#getMonthName', () => {
        it('must return correct month', () => {
            expect(DateHelpers.getMonthName(2)).to.be.equals('March');
        });
    });

    describe('#getDayName', () => {
        it('must return correct day', () => {
            expect(DateHelpers.getDayName(2)).to.be.equals('Tuesday');
        });
    });

    describe('#getHour', () => {
        it('must return correct hout', () => {
            expect(DateHelpers.getHour(24)).to.be.equals('12:00');
            expect(DateHelpers.getHour(1)).to.be.equals('1:00');
            expect(DateHelpers.getHour(14)).to.be.equals('2:00');
            expect(DateHelpers.getHour(0)).to.be.equals('12:00');
        });
    });
});
