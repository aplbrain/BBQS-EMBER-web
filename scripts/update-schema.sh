cd ../backend
uv run manage.py spectacular --file openapi.yaml
cd ../frontend
npx openapi-typescript ../backend/openapi.yaml -o src/services/schema.d.ts
