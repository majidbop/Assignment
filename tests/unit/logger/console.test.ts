import 'mocha';
import * as sinon from 'sinon';
import { expect } from 'chai';
import * as consoleLogger from '../../../src/logger/console'
describe("Console section in logger system", () => {
    afterEach(() => {
        sinon.restore();
    })
    it('should print message input to console', () => {
        const log = sinon.stub(console, "log");
        consoleLogger.log("Test", "Tests");
        expect(log.called).to.be.eq(true);
    })
})