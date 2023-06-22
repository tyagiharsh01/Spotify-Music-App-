# Stage 1: Build the Angular app
FROM node:14 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the Angular app with Nginx
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/SPOTIFY /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]