# EMBER Archive Portal

This repository contains the web application code for the NIH-funded Brain Behavior Quantification and Synchronization (BBQS) Ecosystem for Multi-modal Brain-behavior Experimentation and Research (EMBER) Data Archive. This web application allows users to view information about the program, search projects, and submit data.

## Development

### Native Development

For native development instructions, please refer to the individual [frontend](frontend/README.md) and [backend](backend/README.md) readme files.
This is the recommended approach for developers looking to make code contributions or perform debugging.

### Docker Development

This is the simplest configuration for developers to get the web application up and running.

## Prerequisites

- Docker & Docker Compose

## Initial Setup

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

## Run Application

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