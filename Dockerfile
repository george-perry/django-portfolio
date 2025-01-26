# Step 1: Build React frontend
FROM node:22-alpine AS frontend-build

# Set working directory
WORKDIR /app

# Copy package files
COPY frontend/package.json frontend/package-lock.json ./

# Install dependencies
RUN npm i

# Copy application files
COPY frontend/. ./

# Build the project
RUN npm run build

# Step 2: Build Django backend
FROM python:3.10-slim
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy Django application files
COPY . .

# Copy React build output to Django static directory
COPY --from=frontend-build /app/static/frontend/ /app/frontend/static/

# Use environment variables at runtime
ENV DJANGO_SECRET_KEY=${DJANGO_SECRET_KEY}
ENV DJANGO_DEBUG=${DJANGO_DEBUG}
ENV ALLOWED_HOSTS=${ALLOWED_HOSTS}

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose port and start Gunicorn server
EXPOSE 8000
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "portfolio.wsgi:application", "--workers=3", "--threads=2", "--timeout=120"]
