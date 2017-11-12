FROM node:alpine

RUN mkdir -p /usr/src/jwt

WORKDIR /usr/src/jwt

COPY package.json /usr/src/jwt

RUN npm install

COPY . /usr/src/jwt/

EXPOSE 8080

CMD ["npm", "start"]
