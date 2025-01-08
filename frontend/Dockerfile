FROM node:22-alpine

# Set working directory
WORKDIR /frontend

# Copy package files
COPY frontend/package.json frontend/package-lock.json ./

# Install dependencies
RUN npm i

# Copy application files
COPY frontend/. ./

# Build the project
RUN npm run build

# Expose port and serve static files
EXPOSE 3000
CMD ["npm", "run", "dev"]
