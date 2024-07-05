FROM node:14 as build

WORKDIR /app

COPY AssafaBanking/Frontend/package.json ./
COPY AssafaBanking/Frontend/package-lock.json ./

RUN yarn install

COPY AssafaBanking/Frontend ./

RUN yarn run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
