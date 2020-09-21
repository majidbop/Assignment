import 'mocha';
import * as sinon from 'sinon';
import { expect } from 'chai';
import logger = require('../../../src/logger/log')
import * as consoleLogger from '../../../src/logger/console'
describe("Logger system", () => {
    afterEach(() => {
        sinon.restore();
    })
    it("should not call console log if console log level not presented in env", () => {
        process.env.LOG_CONSOLE_LEVEL = undefined
        const consoleLoggerStub = sinon.stub(consoleLogger, "log");
        logger.debug("Hello");
        expect(consoleLoggerStub.called).to.be.false
    })
    it("should call console log if console log level presented in env", () => {
        process.env.LOG_CONSOLE_LEVEL = "Debug";
        const consoleLoggerStub = sinon.stub(consoleLogger, "log");
        logger.debug("Hello");
        expect(consoleLoggerStub.called).to.be.true
    })
    it("should not call console log if level is not requested", () => {
        process.env.LOG_CONSOLE_LEVEL = "Error";
        const consoleLoggerStub = sinon.stub(consoleLogger, "log");
        logger.debug("Hello");
        expect(consoleLoggerStub.called).to.be.false
    })
    it("should call console log if log level emergency", () => {
        process.env.LOG_CONSOLE_LEVEL = "Debug";
        const consoleLoggerStub = sinon.stub(consoleLogger, "log");
        logger.emerg("Hello");
        expect(consoleLoggerStub.called).to.be.true
    })
    it("should call console log if log level alert", () => {
        process.env.LOG_CONSOLE_LEVEL = "Debug";
        const consoleLoggerStub = sinon.stub(consoleLogger, "log");
        logger.alert("Hello");
        expect(consoleLoggerStub.called).to.be.true
    })
    it("should call console log if log level critical", () => {
        process.env.LOG_CONSOLE_LEVEL = "Debug";
        const consoleLoggerStub = sinon.stub(consoleLogger, "log");
        logger.crit("Hello");
        expect(consoleLoggerStub.called).to.be.true
    })
    it("should call console log if log level error", () => {
        process.env.LOG_CONSOLE_LEVEL = "Debug";
        const consoleLoggerStub = sinon.stub(consoleLogger, "log");
        logger.err("Hello");
        expect(consoleLoggerStub.called).to.be.true
    })
    it("should call console log if log level warning", () => {
        process.env.LOG_CONSOLE_LEVEL = "Debug";
        const consoleLoggerStub = sinon.stub(consoleLogger, "log");
        logger.warn("Hello");
        expect(consoleLoggerStub.called).to.be.true
    })
    it("should call console log if log level notify", () => {
        process.env.LOG_CONSOLE_LEVEL = "Debug";
        const consoleLoggerStub = sinon.stub(consoleLogger, "log");
        logger.not("Hello");
        expect(consoleLoggerStub.called).to.be.true
    })
    it("should call console log if log level info", () => {
        process.env.LOG_CONSOLE_LEVEL = "Debug";
        const consoleLoggerStub = sinon.stub(consoleLogger, "log");
        logger.info("Hello");
        expect(consoleLoggerStub.called).to.be.true
    })
    it("should call console log if log level debug", () => {
        process.env.LOG_CONSOLE_LEVEL = "Debug";
        const consoleLoggerStub = sinon.stub(consoleLogger, "log");
        logger.debug("Hello");
        expect(consoleLoggerStub.called).to.be.true
    })
})