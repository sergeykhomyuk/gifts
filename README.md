# Gifts.

## Run instructions

- Run `npm install`
- Run `npm run start:api` to start express api server.
- Run `npm start` to start react dev server.

## Architecture

Application is based on the NX monorepo architecture and consists of the following application and libraries:

- gifts - application entry point (dummy)
- core - domain-independent utils, helpers, services shared across all modules
- gifts - gifts feature library

NOTE: run `npm run dep-graph` to generate modules dependencies graph.

Application architecture could be easily scaled by adding new libraries and expanding existing ones by adding new feature modules.
The team could easily define new schematics and add them `tools` to scaffold new libraries.

## Backlog

- Integrate with real API (UI shouldn't operate with a such amount of data. BE should compute monthly/cumulative costs)
- Implement unit and e2e tests
- Implement i18n for supported locales and languages
- Implement accessibility features (aria, titles, tooltips, tab indexes, ...)
