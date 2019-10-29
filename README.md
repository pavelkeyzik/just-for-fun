# JUST FOR FUN :sunny:

## No Redux! No REST! Just Hype...

- React Hooks
- GraphQL
- Apollo Client
- TypeScript
- Fractal architecture

## How to contribute

All information is [here](https://github.com/pavelkeyzik/just-for-fun/blob/master/CONTRIBUTING.md).

## FAQ

- Mapbox is not working
  -- You should add access token. Create `.env` file in the root directory of the project. Then add this line to file:

```=env
REACT_APP_MAPBOX_ACCESS_TOKEN="...your_access_token..."
```

## File structure

```
├── CONTRIBUTING.md        # Information how to contribute to the project
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
│   ├── setupTests.ts      # Configuration for tests (Enzyme init)
│   ├── styles.css         # Global styles
│   ├── types/             # Global types and interfaces
│   └── utils/
│       ├── __mocks__/
│       ├── api.ts         # Apollo-client configuration
│       └── schema.ts      # Mocked schema of GraphQL
└── tsconfig.json          # Config for TypeScript
```
