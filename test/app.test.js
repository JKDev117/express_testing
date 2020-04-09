//17.5 (p. 23)

//app is the Express application, expect you are already familiar with, 
//supertest is the name we give to the SuperTest function. 
const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('Express App', () => {
  it('should return a message from GET /', () => {
    //To invoke the endpoint we call the supertest method passing it the Express server object, the app.
    return supertest(app)
      //We then invoke the endpoint with one of the built-in methods corresponding to the HTTP methods (verbs). 
      //Since we have a single GET endpoint at the path / we call get('/')
      .get('/')
      //Since we are expecting a 200 status and the body text 'Hello Express!' we can directly assert that.
      .expect(200, 'Hello Express!');
  });
});


//pg 26
describe('GET /quotient', () => {
    //test the normal cases 
    it('8/4 should be 2', () => {
      return supertest(app)
        .get('/quotient')
        //To set a query string we can use the .query method in SuperTest
        .query({ a: 8, b: 4 })
        .expect(200, '8 divided by 4 is 2');
    });

    //test cases for the various error conditions, for example,
    it(`should return 400 if 'a' is missing`, () => {
        return supertest(app)
            .get('/quotient')
            .query({ b: 4 })
            .expect(400, 'Value for a is needed');
        });
  });

/*
The expectations (assertions) that are built into SuperTest are documented here:
https://github.com/visionmedia/supertest



*/