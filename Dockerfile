FROM node:alpine

# Install dependencies in separate layer
ADD package.json /tmp/package.json
# ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm install

RUN mkdir /app
RUN mkdir /config
WORKDIR /app

# Move installed dependencies to app directory
RUN cp -a /tmp/node_modules /app
# Copy executables to app directory
ADD src/ /app
ADD package.json /app

ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "index.js"]
