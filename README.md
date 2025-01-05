# Sistema de Cadastro de Produtos

Este projeto é um sistema de cadastro de produtos que permite listar e adicionar produtos a um banco de dados SQLite. Ele é composto por um backend em Node.js com Express e um frontend em React.

## Estrutura do Projeto

- **backend/**: Contém o servidor Node.js e a lógica de banco de dados.
  - **server/index.js**: Configuração do servidor Express.
  - **server/controller/produtosController.js**: Controlador para operações de produtos.
  - **server/database/config.js**: Configuração do banco de dados SQLite.

- **frontend/**: Contém a aplicação React.
  - **src/main.tsx**: Ponto de entrada da aplicação React.
  - **src/App.tsx**: Configuração das rotas da aplicação.
  - **src/pages/produtos/**: Páginas para listar e cadastrar produtos.

## Pré-requisitos

- Node.js
- npm ou yarn

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/emeps/node-api.git
   ```

2. Instale as dependências do backend:

   ```bash
   cd backend
   npm install
   ```

3. Instale as dependências do frontend:

   ```bash
   cd ../frontend
   npm install
   ```

## Executando o Projeto

### Backend

1. Inicie o servidor backend:

   ```bash
   cd backend
   npm run dev
   ```

   O servidor estará rodando em `http://localhost:3001`.

### Frontend

1. Inicie o servidor de desenvolvimento do frontend:

   ```bash
   cd frontend
   npm run dev
   ```

   A aplicação estará disponível em `http://localhost:5173`.

## Funcionalidades

- **Listar Produtos**: Visualize todos os produtos cadastrados.
- **Cadastrar Produto**: Adicione novos produtos ao sistema.

## Tecnologias Utilizadas

- **Backend**: Node.js, Express, SQLite
- **Frontend**: React, Vite



