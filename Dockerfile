# Base image for Node.js
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Build the frontend (since it's now in the main root)
FROM base AS frontend-build
COPY . ./
RUN npm install
RUN npm run build

# Prepare backend
FROM base AS backend-build
WORKDIR /app/backend
COPY backend ./ 
RUN npm install

# Final production container
FROM node:20-alpine AS production
WORKDIR /app

# Copy backend and frontend artifacts
COPY --from=backend-build /app/backend /app/backend
COPY --from=frontend-build /app/dist /app/frontend/dist

# Set environment variables
ENV NODE_ENV=production

# Expose backend and frontend ports
EXPOSE 5001 3000

# Start the backend server
CMD ["node", "backend/server.mjs"]
