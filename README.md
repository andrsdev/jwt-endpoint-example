# JWT Auth Strategy for APIs

This is an example on how JWT auth strategy is integrated on API endpoints security. The technolgy stack used is Node.js, Express, JWT and Passport.

## Requirements

The following must be installed in you system.

- [Node.js](https://nodejs.org/) (installation includes npm)
- [npm](https://nodejs.org/) or [yarn](https://classic.yarnpkg.com/en/docs/install)

## Get started

1. `git clone git@github.com:andrsdev/jwt-endpoint-example.git`
2. `cd jwt-endpoint-example`
3. `npm install` or `yarn install`
4. `npm run dev` or `yarn dev`

## How to generate `AUTH_JWT_SECRET`

1. Create a .env file in at the root of the project and copy the contents of `.env.example`
2. You can set the value of `AUTH_JWT_SECRET` to any string but I recommend using a [key generator](https://keygen.io/).
