FROM node:12-alpine as build

# Copy repo files to working directory
COPY . /src
WORKDIR /src

# install, build, prune dependencies
RUN npm install
RUN npm run build
# RUN npm prune --production

FROM node:12-alpine

# Set working directory
WORKDIR /usr/app

# Copy built files to new working directory
COPY --from=build /src/node_modules /usr/app/node_modules
COPY --from=build /src/package.json /usr/app/package.json
COPY --from=build /src/.next /usr/app/.next

# Set ENV variables
ENV NODE_ENV production

EXPOSE 3000

# Start
CMD ["npm", "start"]
