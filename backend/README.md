# EMBER Archive Portal - Backend

This folder contains a Django + PostgreSQL backend supporting the EMBER Archive portal

## Prerequisites

- Python 3.12+
- [PostgreSQL](#installing-postgresql)
- (Optional) [uv](https://docs.astral.sh/uv/getting-started/installation/)
    - We recommend using `uv` to manage Python

### Install PostgreSQL

1. Install (MacOS)

    ```bash
    brew install postgresql@18
    ```

    - For Windows, see https://www.postgresql.org/download/windows/

1. Start PostgreSQL

    ```bash
    brew services start postgresql@18
    ```
    
    - To Stop: `brew services stop postgresql@18`

1. Enable globally

    ```bash
    echo 'export PATH="/opt/homebrew/opt/postgresql@18/bin:$PATH"' >> ~/.zshrc
    source ~/.zshrc
    ```

### Set Up Database
1. Create postgres user
    ```
    createuser -s postgres
    ```
1. Enter postgres shell 
    ```
    psql -U postgres
    ````
1. Inside postgres shell run:
    ```
    CREATE USER ember WITH PASSWORD 'test123'; # password is up to you
    CREATE ROLE ember_admin WITH LOGIN SUPERUSER CREATEDB CREATEROLE PASSWORD 'test123'; # password is up to you
    CREATE DATABASE ember_db OWNER ember;
    ```

### Environment Setup
1. Create .env file in BBQS-EMBER-web/backend/ember 
1. In .env file define ```DATABASE_URL``` following the pattern: ```postgres://[user:[password]]@localhost:5432/[dbname]```


## Initial Setup

1. Apply database migrations

    ```bash
    uv run manage.py migrate
    ```

1. Create a superuser

    ```bash
    uv run manage.py createsuperuser
    ```

## Development

1. Start the backend application

    ```bash
    uv run manage.py runserver
    ```

1. The backend should now be running at [http://localhost:8000]().

## Testing

