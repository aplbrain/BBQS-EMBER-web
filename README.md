# EMBER Archive Portal

This repository contains the web application code for the NIH-funded Brain Behavior Quantification and Synchronization (BBQS) Ecosystem for Multi-modal Brain-behavior Experimentation and Research (EMBER) Data Archive. This web application allows users to view information about the program, search projects, and submit data.

## Development

### Native Development

For native development instructions, please refer to the individual [frontend](frontend/README.md) and [backend](backend/README.md) readme files.
This is the recommended approach for developers looking to make code contributions or perform debugging.

### Docker Development

This is the simplest configuration for developers to get the web application up and running.

#### Prerequisites

- Docker & Docker Compose

#### Environment Setup

1. Create .env.docker file in BBQS-EMBER-web/backend/config. We will add six variables: `DEBUG`, `DATABASE_URL`, `DJANGO_SECRET_KEY`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, and `POSTGRES_DB`.

1. Set debug mode to true, by adding `DEBUG=True` to your .env.docker 

1. Define `DATABASE_URL` following the pattern: `postgres://[user]:[password]@postgres:5432/[dbname]`
    - For example, following the steps above, if we defined:
        - user as "ember"
        - password as "test123"
        - and dbname as "ember_db"  

        ```
        DATABASE_URL=postgres://ember:test123@postgres:5432/ember_db
        ```
    - Please note that within docker the hostname is the Docker service name "postgres" rather than "localhost"

1. Define `POSTGRES_USER`, `POSTGRES_PASSWORD`, and `POSTGRES_DB` using the same user, password, and dbname as above.

1. Run the following to generate a secret key and write it to your .env.docker file:
    ```
    uv run python - <<'EOF' >> backend/config/.env.docker
    from django.core.management.utils import get_random_secret_key
    print(f"DJANGO_SECRET_KEY={get_random_secret_key()}")
    EOF
    ```

1. A complete .env should look like

    ```
    DEBUG=True
    DATABASE_URL=postgres://myusername:mypassword@postgres:5432/mydatabase
    DJANGO_SECRET_KEY=key

    POSTGRES_USER=myusername
    POSTGRES_PASSWORD=mypassword
    POSTGRES_DB=mydatabase
    ```

#### Initial Setup

1. Start the frontend, backend, and database containers:

    ```bash
    docker compose -f docker-compose.dev.yml up -d
    ```

1. Apply database migrations

    ```bash
    docker compose -f docker-compose.dev.yml exec backend uv run manage.py migrate
    ```

1. Create a superuser

    ```bash
    docker compose -f docker-compose.dev.yml exec backend uv run manage.py createsuperuser
    ```

1. Load initial data

    ```bash
    docker compose -f docker-compose.dev.yml exec backend uv run manage.py load_initial_projects
    ```


#### Run Application

On subsequent runs, you will only need to run the first command from the initial setup, listed below for quick reference

1. Start the frontend, backend, and database:
    ```bash
    docker compose -f docker-compose.dev.yml up -d
    ```

1. The frontend should now be running at [http://localhost:8080]() and the backend at [http://localhost:8000]().
    - To view the API endpoints, see [http://localhost:8000/docs]()
    - To view the admin console, see [http://localhost:8000/admin]()

## Contributing

Contibutions are welcome through pull requests. Please notify the BBQS EMBER team for review.