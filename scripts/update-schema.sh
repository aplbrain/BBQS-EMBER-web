cd ../backend
uv run manage.py spectacular --file openapi.yaml
cd ../frontend
yarn openapi-typescript ../backend/openapi.yaml -o src/services/schema.d.ts
