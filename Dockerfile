# Stage - Build
FROM node:12.16.1-alpine AS build

ARG STAGE
ENV BUILD_COMMAND=build:$STAGE
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn cache clean && yarn --update-checksums
RUN yarn ci --only=development
COPY . ./
RUN yarn $BUILD_COMMAND

# Stage - Production
FROM nginx:1.17-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]