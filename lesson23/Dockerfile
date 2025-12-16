FROM node:20-alpine

RUN apk add --no-cache git chromium \
    harfbuzz \
    ttf-freefont \
    nss \
    udev \
    zip

WORKDIR /app

RUN git clone https://github.com/AhmedShaykh/Expense-Tracker-App-With-React.JS.git ./app-source

WORKDIR /app/app-source

COPY playwright.config.ts ./
COPY src ./src 

RUN npm install --legacy-peer-deps @playwright/test typescript ts-node

RUN npm install --legacy-peer-deps

RUN npm run build
RUN npm install -g serve wait-on