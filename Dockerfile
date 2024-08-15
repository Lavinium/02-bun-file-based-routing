FROM oven/bun

WORKDIR /usr/src/app

# Dependency layer
COPY bun.lockb ./
COPY package.json ./
RUN bun install

# Src layer
COPY index.ts ./
COPY src ./src
COPY pages ./pages

# Build layer
RUN bun build:compile

CMD ["./dist/server"]
