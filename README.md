# JUST FOR FUN :sunny:

[![CircleCI](https://circleci.com/gh/pavelkeyzik/just-for-fun.svg?style=svg)](https://circleci.com/gh/pavelkeyzik/just-for-fun) [![Netlify Status](https://api.netlify.com/api/v1/badges/9dc3eeaa-5b3c-4867-a472-a21bab476f07/deploy-status)](https://app.netlify.com/sites/pavelkeyzik-just-for-fun/deploys)

## What are we using?

- React && React Hooks
- Reactstrap
- GraphQL
- Apollo Client
- TypeScript
- Fractal architecture
- Jest && Enzyme
- Mapbox

## How to contribute

All information is [here](https://github.com/pavelkeyzik/just-for-fun/blob/master/CONTRIBUTING.md).

## FAQ

- Mapbox is not working
  -- You should add access token. Create `.env` file in the root directory of the project. Then add this line to file:

```=env
MAPBOX_ACCESS_TOKEN="...your_access_token..."
```

## File structure

```
├── CONTRIBUTING.md        # Information how to contribute to the project
├── .circleci/
│   └── config.yml         # Configuration for CircleCI
├── build/                 # Application build
├── public/                # Public files like index.html
├── src/                   # All code is here
│   ├── __tests__/         # Global tests
│   ├── components/        # Global components (For example, Button)
│   ├── config.ts          # Application config (routes, api tokens, etc...)
│   ├── hooks/             # React hooks
│   ├── images/            # Images, icons
│   ├── index.jsx          # React start point, global route and ApolloProvider
│   ├── pages/             # Pages
│   │   ├── Admin.tsx
│   │   ├── Main.tsx
│   │   ├── admin/
│   │   └── main/
│   ├── react-app-env.d.ts
│   ├── styles.css         # Global styles
│   ├── types/             # Global types and interfaces
│   └── utils/
│       ├── api.ts         # Apollo-client configuration
└── tsconfig.json          # Config for TypeScript
```
