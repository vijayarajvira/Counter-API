

FROM node:18 AS backend
WORKDIR /app
COPY . .
RUN npm install

FROM nginx:alpine
COPY --from=backend /app /api
COPY index.html /usr/share/nginx/html/index.html

