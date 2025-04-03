# EMBER Archive Frontend

A Vue.js 3 / Quasar Project

## Prerequisities

- [Node.js](https://nodejs.org/en) v20
  - We recommend using `nvm` to manage Node.js versions. Follow the instructions [here](https://github.com/nvm-sh/nvm) for Linux or [here](https://github.com/coreybutler/nvm-windows) for Windows.

## Install

1. (Recommend) Ensure you have `nvm` installed and enabled

   ```bash
   nvm on
   nvm use
   ```

   _Note: For Windows users, if you needed to modify any environment variables, make sure you close and restart any terminals before trying to run nvm or npm commands_

   - nvm use will activate the Node.js version specified in frontend/.nvmrc

1. Install dependencies

```bash
yarn install
```

## Development

1. Start the application in development mode

   ```bash
   yarn quasar dev
   ```

1. The frontend should now be running at [http://localhost:9000](). The application will reload as you make edits.

## Testing

Our repository includes automated testing and formatting checks using GitLab CI/CD. The following is a list of tests that are run in the pipeline:

- Frontend Linting

  - Job: lint-test-frontend
  - Description: Checks that frontend code follows linting rules using ESLint.
  - Steps to Run:

  ```bash
  yarn run lint
  ```

- Frontend Formatting

  - Job: format-test-frontend
  - Description: Checks that frontend code is formatted correctly using Prettier.
  - Steps to Run:

  ```bash
  yarn run format
  ```

