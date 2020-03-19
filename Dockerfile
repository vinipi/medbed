FROM node:lts-alpine

WORKDIR /app

EXPOSE 3000

ENV NODE_ENV=production

ADD . /app

CMD ["/usr/local/bin/node", "/app/server/dist/main.js"]