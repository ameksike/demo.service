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

afterAll(() => {
  tool.clean();
});

describe('(REST-GATEWAY) INSERT => [POST] /gateway', function() {
    it('responds with json', function(done) {
      request
        .post('/gateway')
        .send({
            "devices":[],
            "_id":"5e1122a6c3d5b526f45214a8",
            "sn":"99A",
            "name":"Gateway 3",
            "ipv4":"192.168.0.3"
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

  
describe('(REST-GATEWAY) INSERT item with bad ipv4 format => [POST] /gateway', function() {
  it('responds with json', function(done) {
    request
      .post('/gateway')
      .send({
          "devices":[],
          "_id":"5e1122a6c3d5b526f45214a8",
          "sn":"99A",
          "name":"Gateway 3",
          "ipv4":"192.168.0.300"
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