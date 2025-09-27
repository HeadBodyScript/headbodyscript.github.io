FROM node:22

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# EXPOSE 80
EXPOSE 3000
CMD npm run build && npm start