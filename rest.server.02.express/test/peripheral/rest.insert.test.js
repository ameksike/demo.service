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

describe('(REST-PERIPHERAL) INSERT => [POST] /gateway/98A/peripheral', function() {
    it('responds with json', function(done) {
      request
        .post('/gateway/98A/peripheral')
        .send({
          "uid": 70,
          "vendor": "Device 70", 
          "status": true
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(error, response) {
          expect(response.body.status).toBe(true);
          if (error) return done(error);
          done();
        });
    });
});

  
describe('(REST-PERIPHERAL) INSERT item with bad uid and status format  => [POST] /gateway/98A/peripheral', function() {
  it('responds with json', function(done) {
    request
        .post('/gateway/98A/peripheral')
        .send({
          "vendor": "Device 7", 
          "status": "musla 7"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(error, response) {
          expect(response.body.status).toBe(false);
          if (error) return done(error);
          done();
        });
    });
});