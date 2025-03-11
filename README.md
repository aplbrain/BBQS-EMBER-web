# Ember Archive web application

This repository contains the code for the front-end website for the NIH-funded BBQS EMBER Data Archive, allowing users to view information about the program, search projects, and submit data.

## Prerequisities

- [Node.js](https://nodejs.org/en) v20
- Yarn 

## Install

### Frontend

1. Install dependencies

    ```bash
    yarn install
    ```

## Development

### Frontend

1. Start the application in development mode

    ```bash
    yarn quasar dev
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
    - Run `yarn run lint` locally to see the errors.
    - Fix the reported linting issues.
        - This can either be done manually, or with `yarn run lint-fix`
    - Commit and push the changes.

#### Prettier Check

- **Job**: `format-check`
- **Purpose**: Runs [Prettier](https://prettier.io/) to check if the code follows the required formatting.
- **Failure Resolution**:
    - Run `yarn run format-check` locally to see the errors.
    - Run `yarn run format` locally to automatically fix formatting issues.
    - Commit and push the changes.


## Contributing

Contibutions are welcome through pull requests. Please notify the BBQS EMBER team for review.