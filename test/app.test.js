const request = require('supertest');
const app = require('../app/app');
const db = require('../app/database');

afterEach((done) => db.disconnect().then(() => done()));

describe('test jobs path', () => {
  test('should respond to Get Method', () => {
    return request(app).get('/job/5c3c983ea30c0d340caaf233').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});

