import { routes } from '../config';

describe('Configuration file', () => {
  test('check routes object', () => {
    const objectToCheck = {
      home: '/',
      places: '/places',
      contributors: '/contributors',
      admin: '/admin',
      dashboard: '/admin/dashboard',
    };

    expect(routes).toEqual(objectToCheck);
  });
});
