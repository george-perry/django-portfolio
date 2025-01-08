FROM node:22-alpine AS build

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

# Serve the files.. stage # 2
FROM nginx:stable-alpine

# Copy from build
COPY --from=build /app/static/frontend /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start the server
CMD ["nginx", "-g", "daemon off;"]
