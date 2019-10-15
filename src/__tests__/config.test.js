import { routes, apiBase, projectRepository, projectName, projectName_Accessible } from '../config'; 

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

  test('check api base url', () => {
    expect(apiBase).toEqual('http://localhost:3500/');
  });

  test('check project repository url', () => {
    expect(projectRepository).toEqual('https://github.com/pavelkeyzik/just-for-fun');
  });

  test('check project name', () => {
    expect(projectName).toEqual('JUSTFORFUN');
  });

  test('check accessible project name', () => {
    expect(projectName_Accessible).toEqual('Just for fun');
  });
});
