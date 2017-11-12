FROM node:alpine

RUN mkdir -p /usr/src/eval
WORKDIR /usr/src/eval

COPY package.json /usr/src/eval
RUN npm install
#RUN apt-get update && apt-get -y install python-defusedxml python-bs4
COPY index.js /usr/src/eval/index.js
COPY flag /root/flag

EXPOSE 80

CMD ["npm", "start"]
