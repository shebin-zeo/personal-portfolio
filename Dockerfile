# Stage 1: Build the Angular Application
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies separately to leverage Docker cache
COPY package.json package-lock.json* ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build --configuration=production

# Stage 2: Serve the application using NGINX
FROM nginx:alpine

# Copy custom NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production build files from Stage 1 to NGINX html directory
COPY --from=build /app/dist/saas-portfolio/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
