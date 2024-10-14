# Use a imagem oficial do Node.js como base
FROM node:18-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie os arquivos package.json e package-lock.json (se disponível)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie os arquivos do projeto para o container
COPY . .

# Build da aplicação
RUN npm run build

# Expõe a porta que o Next.js usa por padrão
EXPOSE 3000

# Define o comando para iniciar a aplicação
CMD ["npm", "start"]