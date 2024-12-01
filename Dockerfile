FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY app.js ./
RUN npm install
ENV PORT=7777
CMD ["node", "app.js"]
