FROM node:lts-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN yarn global add pnpm && pnpm i --frozen-lockfile; \

COPY next.config.js ./next.config.js

COPY app ./app
COPY public ./public



