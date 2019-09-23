export const apiBase =
  process.env.NODE_ENV === 'production'
    ? 'https://just-for-fun-server.herokuapp.com/'
    : 'http://localhost:3500/';
