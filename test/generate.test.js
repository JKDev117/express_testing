//pg. 28

const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('GET /generate endpoint', () => {
  it('should generate an array of 5', () => {
    return supertest(app)
      .get('/generate') // invoke the endpoint
      .query({ n: 5 }) // send the query string ?n=5
      .expect(200)  // assert that you get a 200  OK status
      .expect('Content-Type', /json/)
      //.then used to access the response
      .then(res => {
        // make sure you get an array
        expect(res.body).to.be.an('array');
        // array must not be empty
        expect(res.body).to.have.lengthOf.at.least(1);
        /*
        //solution 1
        // this assertion fails because the returned array is randomly ordered (p. 28)
        expect(res.body).to.eql([1,2,3,4,5]);
        */

        /*
        //solution 2
        //The .include function simply checks that each of the given values is present, but does not care if there are extra values. 
        expect(res.body).to.include(5);
        */

        /*
        //solution 3
        //The .have function, however, ensures that the values being compared are the only ones present.
        expect(res.body).to.have.members([1,2,3,4,5]);
        */
        
        //Optionally we can use .a to verify the type and .have or .include in a single chain like this:
        expect(res.body).to.be.an('array').that.have.members([1,2,3,4,5]);

      });
  })
});