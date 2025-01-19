import request from 'supertest';
import app from '../server'; // Adjust the path to your Express app

describe('Dashboard API', () => {
  it('should fetch dashboard data', async () => {
    const res = await request(app).get('/dashboard');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
  });

  it('should return 400 for invalid query params', async () => {
    const res = await request(app).get('/dashboard?date=invalid-date');
    expect(res.statusCode).toEqual(400);
  });
});
