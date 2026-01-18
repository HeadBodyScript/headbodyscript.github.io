FROM node:22

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# EXPOSE 80
RUN npm run build
EXPOSE 3000
# CMD npm run build && npm run start
# CMD npm run dev
CMD npm run start
# RUN npm run start