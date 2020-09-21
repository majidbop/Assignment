import 'mocha';
import * as sinon from 'sinon';
import { expect } from 'chai';
import * as traceMiddleWare from '../../../src/middleware/traceId';

describe("Trace Id generator middle ware ", () => {
    it("should return an uuid for trace purpose when middle ware called", () => {
        const next = sinon.stub();
        const res = {};
        const req = {
            traceId: String,
        };
        traceMiddleWare.attachTraceId(req, res, next);
        expect(next.called).to.be.true;
        expect(req.traceId.length).to.be.gte(10)
    })
})