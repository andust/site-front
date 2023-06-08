FROM node:19-alpine

WORKDIR /site-front

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]