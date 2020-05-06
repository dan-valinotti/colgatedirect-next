FROM node:12-alpine as build

# Copy repo files to working directory
COPY . /src
WORKDIR /src


# install, build, prune dependencies
# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN apk --no-cache --virtual build-dependencies add \
    build-base \
    python \
    make \
    g++ \
    libtool \
    automake \
    autoconf \
    nasm \
    jpeg-dev \
    libpng-dev \
    zlib-dev \
    && npm install \
    && apk del build-dependencies
# RUN npm ci
RUN npm rebuild node-sass

# build
RUN rm -rf ./dist
RUN npm run build
# RUN npm prune --production

FROM node:12-alpine

# Set working directory
WORKDIR /usr/app

# Copy built files to new working directory
COPY --from=build /src/dist /usr/app/dist
COPY --from=build /src/node_modules /usr/app/node_modules
COPY --from=build /src/package.json /usr/app/package.json
COPY --from=build /src/.next /usr/app/.next

# Set ENV variables
ENV NODE_ENV production

EXPOSE 3000

# Start
CMD ["npm", "start"]
