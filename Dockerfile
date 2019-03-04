FROM node:10.15.2-alpine

RUN mkdir /app

WORKDIR /app

ENV NODE_ENV=production

ADD server.js /app
ADD version.js /app
ADD README.md /app
ADD package.json /app
ADD package-lock.json /app

RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]
