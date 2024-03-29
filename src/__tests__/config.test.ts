import {
  routes,
  apiBase,
  projectRepository,
  projectName,
  projectNameAccessible,
} from '../config';

describe('Configuration file', () => {
  test('check routes object', () => {
    const objectToCheck = {
      home: '/',
      places: '/places',
      contributors: '/contributors',
      admin: {
        home: '/admin',
        login: '/admin/login',
        places: '/admin/places',
        createNewPlace: '/admin/create-new-place',
        events: '/admin/events',
      },
    };

    expect(routes).toEqual(objectToCheck);
  });

  test('check api base url', () => {
    expect(apiBase).toEqual('http://localhost:3500/graphql');
  });

  test('check project repository url', () => {
    expect(projectRepository).toEqual(
      'https://github.com/pavelkeyzik/just-for-fun',
    );
  });

  test('check project name', () => {
    expect(projectName).toEqual('JUSTFORFUN');
  });

  test('check accessible project name', () => {
    expect(projectNameAccessible).toEqual('Just for fun');
  });
});
