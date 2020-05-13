<h1 align="center">React + GraphQL + Next.js + Apollo + Scss + Typescript Starter</h1>

<p align="center">
  <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/Typescript-v3.7.2-blue.svg?logo=TypeScript"></a>
  <a href="https://nextjs.org/" target="_blank"><img src="https://img.shields.io/badge/Next.js-v9.1.1-blueviolet.svg"></a>
  <a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/React-v16.10.2-%238DD6F9.svg?logo=React"></a>
  <a href="https://graphql.org/" target="_blank"><img src="https://img.shields.io/badge/GraphQL-v14.5.8-ff69b4.svg?logo=GraphQL"></a>
  <a href="https://github.com/codica2" target="_blank"><img src="https://img.shields.io/badge/licence-MIT-green.svg" /></a>
</p>

## How to use
### Install node dependencies

```shell script
npm i
```
Or:
```shell script
yarn install
```

### Scripts
- `dev`: Start Next.js development server
- `build`: Compile + bundle production build (`/dist`)
- `start`: Run production build locally
- `test`: Open Cypress testing UI
- `test:cmd`: Run all Cypress tests in terminal
- `test:unit`: Run all Jest unit tests
- `test:watch`: Run Jest tests and watch for file changes

### Build docker container
```
docker build -t cd-boilerplate .
docker-compose up -d --build
```

## Environment variables

You can access your .env variables by deconstructing 'process.env' object, both on client and server.
Just make sure that you reboot the server when updating
