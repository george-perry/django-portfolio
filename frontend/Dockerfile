FROM node:22-alpine AS build

# Set working directory
WORKDIR /frontend

# Copy package files
COPY frontend/package.json frontend/package-lock.json ./

# Install dependencies
RUN npm i

# Build the project
RUN npm run build

# Copy application files
COPY frontend/. ./

# Serve the files.. stage # 2
FROM nginx:stable-alpine

# Copy from build
COPY --from=build /frontend/static/frontend /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start the server
CMD ["nginx", "-g", "daemon off;"]
