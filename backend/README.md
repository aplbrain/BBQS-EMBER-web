# EMBER Archive Portal - Backend

This folder contains a Django backend + PostgreSQL database supporting the EMBER Archive portal

## Prerequisites

- Python 3.12+
- [uv](https://docs.astral.sh/uv/getting-started/installation/)
    - We highly recommend using `uv` to manage Python
- [PostgreSQL](#installing-postgresql)

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
1. Within the `backend/` directory, run the following:
    ```
    uv sync
    ```
1. Create .env file in BBQS-EMBER-web/backend/config. We will add three variables: `DEBUG`, `DATABASE_URL`, and `DJANGO_SECRET_KEY`.

1. Set debug mode to true, by adding `DEBUG=True` to your .env

1. Define `DATABASE_URL` following the pattern: `postgres://[user]:[password]@localhost:5432/[dbname]`
    - For example, following the steps above, we defined:
        - user as "ember"
        - password as "test123"
        - and dbname as "ember_db"
    ```
    DATABASE_URL=postgres://ember:test123@localhost:5432/ember_db
    ```
1. Run the following to generate a secret key and write it to your .env file:
    ```
    uv run python - <<'EOF' >> config/.env
    from django.core.management.utils import get_random_secret_key
    print(f"DJANGO_SECRET_KEY={get_random_secret_key()}")
    EOF
    ```
1. A complete .env should look like

    ```
    DEBUG=True
    DATABASE_URL=postgres://myusername:mypassword@localhost:5432/mydatabase
    DJANGO_SECRET_KEY=key
    ```

## Development

### Initial Setup

1. Apply database migrations

    ```bash
    uv run manage.py migrate
    ```

1. Create a superuser

    ```bash
    uv run manage.py createsuperuser
    ```

1. Load initial data

    ```bash
    uv run manage.py load_initial_projects
    ```

### Run Application

1. Start the backend application

    ```bash
    uv run manage.py runserver
    ```

1. The backend should now be running at [http://localhost:8000](). To view the API endpoints, see [http://localhost:8000/docs](). To view the admin console, see [http://localhost:8000/admin]()

### Schema Migrations

If schema changes are made to any Django models, please follow the steps below: 

1. Generate Python migration files

    ```bash
    uv run manage.py makemigrations
    ```

1. Apply database migrations

    ```bash
    uv run manage.py migrate
    ```

1. Generate TypeScript schema used for API endpoints

    ```bash
    cd ../scripts
    ./update-schema.sh
    ```

    > This will update frontend/src/services/schema.d.ts

1. Check that the frontend services and models still align.  
    Relevant files will be in:
    - frontend/src/services/
    - frontend/src/models/

### Refresh your Database

During the initial phases of database development, you may want or need to wipe your local database and start over. 

The following steps will erase your database and create a fresh one

1. Enter postgres shell 
    ```
    psql -U postgres
    ````
1. Inside postgres shell run
    ```
    DROP DATABASE ember_db;
    CREATE DATABASE ember_db OWNER ember;
    ```
1. Follow [Initial Setup](#initial-setup) again

<!-- ## Testing -->
<!-- TODO -->