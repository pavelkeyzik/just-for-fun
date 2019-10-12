export const isProduction = process.env.NODE_ENV === 'production';

export const apiBase = isProduction
  ? 'https://just-for-fun-server.herokuapp.com/'
  : 'http://localhost:3500/';

export const projectRepository = 'https://github.com/pavelkeyzik/just-for-fun';
export const projectName = 'JUSTFORFUN';
export const projectName_Accessible = 'Just for fun';

export const routes = {
  home: '/',
  places: '/places',
  contributors: '/contributors',
	admin: '/admin',
};
