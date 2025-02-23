# 🏢 BAC Empresas API

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge)
![Node](https://img.shields.io/badge/node-%3E%3D%2016.0.0-brightgreen.svg?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

## 📋 Sobre o Projeto

API para consulta e gerenciamento de dados empresariais, oferecendo endpoints para manipulação de informações sobre empresas, estabelecimentos, sócios e muito mais! 🚀

### ✨ Características

- 🔐 Autenticação segura
- 📊 Documentação interativa com Swagger
- 🎯 Endpoints RESTful
- 🔄 Gerenciamento de processos com PM2
- 📦 ORM Prisma para manipulação do banco de dados
- 🛠️ Desenvolvido com TypeScript

## 🚀 Começando

### Pré-requisitos

- Node.js >= 16.0.0
- npm ou yarn
- PostgreSQL

### 🔧 Instalação

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/seu-usuario/bac-empresas-api.git
   \`\`\`

2. Instale as dependências:
   \`\`\`bash
   npm install
   \`\`\`

3. Configure as variáveis de ambiente:
   \`\`\`bash
   cp .env.example .env

# Edite o arquivo .env com suas configurações

\`\`\`

4. Execute as migrações do banco de dados:
   \`\`\`bash
   npm run prisma:migrate
   \`\`\`

### 🎮 Rodando o projeto

**Desenvolvimento:**
\`\`\`bash
npm run dev
\`\`\`

**Produção com PM2:**
\`\`\`bash
npm run pm2:dev
\`\`\`

## 📚 Documentação da API

Acesse a documentação interativa em:
\`\`\`
http://localhost:3002/api/docs
\`\`\`

### 🛣️ Principais Endpoints

- 📋 GET `/api/empresas` - Lista todas as empresas
- ➕ POST `/api/empresas` - Cria uma nova empresa
- 🔍 GET `/api/empresas/{id}` - Retorna uma empresa específica
- 📝 GET `/api/estabelecimentos` - Lista todos os estabelecimentos
- ✨ POST `/api/estabelecimentos` - Cria um novo estabelecimento

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) - Ambiente de execução
- [Express](https://expressjs.com/) - Framework web
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript
- [Prisma](https://www.prisma.io/) - ORM
- [PM2](https://pm2.keymetrics.io/) - Gerenciador de processos
- [Swagger UI Express](https://github.com/scottie1984/swagger-ui-express) - Documentação interativa

## 📦 Scripts Disponíveis

- \`npm run build\` - Compila o projeto
- \`npm run dev\` - Inicia em modo desenvolvimento
- \`npm run pm2:dev\` - Inicia com PM2
- \`npm run pm2:stop\` - Para os processos PM2
- \`npm run pm2:delete\` - Remove processos PM2
- \`npm run pm2:logs\` - Exibe logs do PM2

## 🔧 Configuração PM2

O projeto utiliza PM2 para gerenciamento de processos em produção. A configuração pode ser encontrada em \`ecosystem.config.js\`:

\`\`\`javascript
{
name: 'bac-empresas-api',
script: './dist/server.js',
instances: 1,
exec_mode: 'fork',
watch: false,
max_memory_restart: '1G'
}
\`\`\`

## 🤝 Contribuindo

1. Faça o fork do projeto
2. Crie sua feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit suas mudanças (\`git commit -m 'Add some AmazingFeature'\`)
4. Push para a branch (\`git push origin feature/AmazingFeature\`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎉 Agradecimentos

- 🙌 Toda a equipe de desenvolvimento
- 💡 Contribuidores do projeto
- 🌟 Comunidade open source

---

<p align="center">
  Feito com ❤️ pela equipe BAC Empresas
</p>
