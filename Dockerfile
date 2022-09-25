FROM node:18-alpine3.15

RUN mkdir -p /app/src

COPY /src /app/src
COPY package-lock.json package.json server.js /app/
WORKDIR /app

RUN npm install 

CMD [ "node", "/app/server.js" ]