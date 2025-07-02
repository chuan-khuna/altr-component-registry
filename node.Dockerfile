FROM node:20.19

WORKDIR /app
COPY . .

RUN npm install
RUN npm install -g pnpm@latest-10

# COPY . .