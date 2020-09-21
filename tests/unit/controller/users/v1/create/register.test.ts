import 'mocha';
import * as sinon from 'sinon';
import { expect } from 'chai';
import { register } from '../../../../../../src/controller/users/v1/create/register'
import * as tokenServices from '../../../../../../src/services/users/token';
import * as userServices from "../../../../../../src/services/users/user"
import { User } from '../../../../../../src/models/database/user';
import { Token } from '../../../../../../src/models/database/token';
export = () => context('register new user with username and password input', () => {
    afterEach(() => {
        sinon.restore()
    })
    it("should register user if username and password provided", async () => {
        const registerUserStub = sinon.stub(userServices, 'registerUser').callsFake(
            (username, password, name): Promise<User> => { return new Promise((resolve, reject) => resolve(<User>{ username, password, name, id: 1 })); });
        const tokenStub = sinon.stub(tokenServices, 'generateToken').callsFake(
            (user): Promise<Token> => { return new Promise((resolve, reject) => resolve(<Token>{ authToken: "Fake", name, id: 1 })); });
        const req = {
            body: {
                username: "fake",
                password: "fake",
                name: "name"
            }
        }
        const res = {
            send: sinon.stub()
        }
        const next = sinon.stub()
        await register(req, res, next);

        expect(next.called).to.be.true
        expect(registerUserStub.called).to.be.true
        expect(tokenStub.called).to.be.true

    })
    it("should throw an error if username not provided", async () => { })
    it("should throw an error if password not provided", async () => { })
})
