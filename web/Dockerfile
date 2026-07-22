FROM node:20-slim

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

USER node

CMD ["node", "server.js"]
