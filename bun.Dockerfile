FROM oven/bun:1.2

WORKDIR /app
COPY . .

RUN bun install
RUN bun install -g pnpm@latest-10

# COPY . .