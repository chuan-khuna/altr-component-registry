FROM oven/bun:1.2

WORKDIR /app
COPY package.json .

RUN bun install
RUN bun install -g pnpm@latest-10

COPY . .