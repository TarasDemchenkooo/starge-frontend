FROM node:20-alpine3.20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27.4-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]