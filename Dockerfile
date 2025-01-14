FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application files
COPY ./ ./

# Expose port and run the application
EXPOSE 8000

# Collect static files
RUN python manage.py collectstatic --noinput

# Run database migrations
RUN python manage.py migrate

# Start the Django development server
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "portfolio.wsgi:application", "--workers=3", "--threads=2", "--timeout=120"]