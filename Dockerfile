FROM node:latest

WORKDIR /app

COPY . .

RUN npm install --omit=dev

CMD ["npm", "start"]