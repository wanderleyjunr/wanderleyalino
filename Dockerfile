# Use uma imagem base do Node.js
FROM node:18-alpine AS base

# Instale as dependências necessárias
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copie os arquivos de configuração do projeto
COPY package.json package-lock.json* ./
RUN npm install

# Construa a aplicação
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Construa a aplicação Next.js
RUN npm run build

# Imagem de produção
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public