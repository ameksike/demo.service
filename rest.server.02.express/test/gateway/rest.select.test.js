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

describe('(REST-GATEWAY) SELECT ALL => [GET] /gateway', () => {
    test('It should response the GET method', (done) => {
        request.get('/gateway').then((response) => {
            expect(response.body.status).toBe(true);
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('(REST-GATEWAY) SELECT by SN => [GET] /gateway/98A', () => {
    test('It should response the GET method', (done) => {
        request.get('/gateway/98A').then((response) => {
            expect(response.body.status).toBe(true);
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({"status":true,"message":"Success","data":{"devices":[{"_id":"5e11507f093d7615c015f505","uid":59,"vendor":"Device 1","status":true,"created":"2020-01-05"},{"_id":"5e1151201ee0df26787dcbb1","uid":60,"vendor":"Device 2","status":true,"created":"2020-01-05"},{"_id":"5e1151261ee0df26787dcbb2","uid":61,"vendor":"Device 3","status":true,"created":"2020-01-05"},{"_id":"5e1151281ee0df26787dcbb3","uid":62,"vendor":"Device 4","status":true,"created":"2020-01-05"},{"_id":"5e11512b1ee0df26787dcbb4","uid":63,"vendor":"Device 5","status":true,"created":"2020-01-05"},{"_id":"5e11512f1ee0df26787dcbb5","uid":64,"vendor":"Device 6","status":true,"created":"2020-01-05"},{"_id":"5e11514d1ee0df26787dcbb7","uid":65,"vendor":"Device 7","status":true,"created":"2020-01-05"}],"_id":"5e1121e8c3d5b526f45214a5","sn":"98A","name":"Gateway 1","ipv4":"192.168.1.1","__v":0}});
            done();
        });
    });
});
