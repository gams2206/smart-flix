# Usa a versão específica do Node.js (substitua '16' pela versão desejada)
FROM node:16

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o arquivo package.json e o package-lock.json para dentro do container
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto para dentro do container
COPY . .

# Exponha a porta em que o React será servido (geralmente 3000)
EXPOSE 3000

# Comando para rodar a aplicação em modo de desenvolvimento
CMD ["npm", "start"]
