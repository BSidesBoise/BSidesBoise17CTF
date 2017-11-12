FROM node:alpine

RUN mkdir -p /usr/src/qrSocket

WORKDIR /usr/src/qrSocket

COPY package.json /usr/src/qrSocket

RUN npm install

COPY . /usr/src/qrSocket/

CMD ["node", "server.js"]
