# EMBER Archive

## EMBER: Ecosystem for Multi-modal Brain-behavior Experimentation and Research

EMBER is the NIH BRAIN Initiative data archive for multi-modal neurophysiological and behavioral data, supporting the Brain Behavior Quantification and Synchronization (BBQS) Program.

This repository contains a Vue.js 3 + Quasar frontend supporting the EMBER Archive.

## Prerequisities

- [Node.js](https://nodejs.org/en) v20
    - We recommend using `nvm` to manage Node.js versions. Follow the instructions [here](https://github.com/nvm-sh/nvm) for Linux or [here](https://github.com/coreybutler/nvm-windows) for Windows.

## Install

1. (Recommend) Ensure you have `nvm` installed and enabled

    ```bash
    nvm on
    nvm use
    ```

    ## _Note: For Windows users, if you needed to modify any environment variables, make sure you close and restart any terminals before trying to run nvm or npm commands_
    - nvm use will activate the Node.js version specified in frontend/.nvmrc

2. Install dependencies

    ```bash
    npm install
    ```

## Development

1. Start the application in development mode

    ```bash
    npm run dev
    ```

1. The frontend should now be running at [http://localhost:9000](). The application will reload as you make edits.

## Testing

### Continuous Integration (CI) for Frontend

This repository uses a **GitHub Actions** workflow to ensure code quality by running **ESLint** and **Prettier** checks.

The workflow is triggered **on every pull request** and runs the following jobs:

#### ESLint Check

- **Job**: `link-check`
- **Purpose**: Runs [ESLint](https://eslint.org/) to identify and enforce coding style and best practices.
- **Failure Resolution**:
    - Run `npm run lint` locally to see the errors.
    - Fix the reported linting issues.
        - This can either be done manually, or with `npm run lint-fix`
    - Commit and push the changes.

#### Prettier Check

- **Job**: `format-check`
- **Purpose**: Runs [Prettier](https://prettier.io/) to check if the code follows the required formatting.
- **Failure Resolution**:
    - Run `npm run format-check` locally to see the errors.
    - Run `npm run format` locally to automatically fix formatting issues.
    - Commit and push the changes.
