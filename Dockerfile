FROM node:14.17 AS development

ENV NODE_ENV development

WORKDIR /app

COPY --chown=node:node ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

FROM node:14.17 AS builder

ENV NODE_ENV production

WORKDIR /app

COPY package*.json .

RUN npm install --production

RUN npm run build

COPY . .

EXPOSE 3000

FROM nginx:1.12.0-alpine AS production

# COPY --from=builder /app/build/usr/nginx/share/html
COPY nginx.conf /etc/nginx/config.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off"]