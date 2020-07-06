/*
 * @author		Antonio Membrides Espinosa
 * @email    	tonykssa@gmail.com
 * @date		06/01/2020
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */
process.env.NODE_ENV = 'test';
const path = __dirname + '/../../';
const tool = require( path + 'src/gateway/service/GatewayService.js');
const { app } = require( path + 'src/app/index.js');
const request = require('supertest').agent(app.listen());

beforeAll(() => {
    tool.fill();
});

afterAll(() => {
    tool.clean();
});

describe('(REST-PERIPHERAL) SELECT ALL => [GET] /gateway/98A/peripheral/', () => {
    test('It should response the GET method', (done) => {
        request.get('/gateway/98A/peripheral/').then((response) => {
            expect(response.body.status).toBe(true);
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('(REST-PERIPHERAL) SELECT by UID => [GET] /gateway/98A/peripheral/59', () => {
    test('It should response the GET method', (done) => {
        request.get('/gateway/98A/peripheral/59').then((response) => {
            expect(response.body.status).toBe(true);
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({"status":true,"message":"Success","data":{"_id":"5e11507f093d7615c015f505","uid":59,"vendor":"Device 1","status":true,"created":"2020-01-05"}});
            done();
        });
    });
});


describe('(REST-PERIPHERAL) SELECT item that not exist => [GET] /gateway/98A/peripheral/59999', () => {
    test('It should response the GET method', (done) => {
        request.get('/gateway/98A/peripheral/59999').then((response) => {
            expect(response.body.status).toBe(false);
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
