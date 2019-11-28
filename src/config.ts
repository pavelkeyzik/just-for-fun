export const isProduction = process.env.NODE_ENV === 'production';

export const apiBase = isProduction
  ? 'https://nestjs-just-for-fun-server.herokuapp.com/graphql'
  : 'http://localhost:3500/graphql';

export const projectRepository = 'https://github.com/pavelkeyzik/just-for-fun';
export const projectName = 'JUSTFORFUN';
export const projectNameAccessible = 'Just for fun';

export const mapBoxAPIAccessToken = process.env.MAPBOX_ACCESS_TOKEN;

export const routes = {
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

export const defaultMarkerLat = 53.888019427799776;
export const defaultMarkerLng = 27.544588765497792;

export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
