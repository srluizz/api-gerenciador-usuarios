# API de Cadastro de Usuários com Docker

Este projeto é uma API RESTful desenvolvida para o gerenciamento de usuários, permitindo a criação, listagem e exclusão de registros. A aplicação foi construída como objeto de estudo durante o treinamento ministrado por Rodolfo Mori, com foco na integração entre Node.js, ORM Sequelize e ambiente conteinerizado com Docker.

## Tecnologias Utilizadas

- Node.js (Ambiente de execução)
- Express (Framework para rotas HTTP)
- Sequelize (ORM para abstração de banco de dados)
- PostgreSQL (Banco de dados relacional)
- Docker

## Funcionalidades

- Cadastro de usuários através de requisições POST.
- Listagem completa de usuários via requisições GET.
- Exclusão de usuários específicos via parâmetros de URL (ID).

## Pré-requisitos

- Node.js v18 ou superior
- Docker
- Docker Compose

## Estrutura de Diretórios

O projeto segue uma estrutura baseada em separação de preocupações:

```text
├── src
│   ├── config
│   │   └── database.js    # Configurações de conexão (Dialeto Postgres)
│   ├── controllers
│   │   └── userController.js # Lógica de controle e respostas
│   └── models
│       └── User.js        # Definição do modelo de dados
├── routes.js              # Gerenciamento de rotas
└── server.js              # Inicialização e configuração do Express
```

## Instalação

1. Clone o repositório.
2. Instale as dependências necessárias:

```bash
npm install
```

4. Instale as dependências locais (caso deseje executar fora do container ou para suporte do VS Code):

```bash
npm install
```

5. O servidor estará disponível em `http://localhost:3000`.

## Endpoints da API

### Usuários

- **POST** `/usuarios/cadastro`: Realiza o registro de um novo usuário.
  - Corpo da requisição esperado: JSON com dados do usuário.
  
- **GET** `/usuarios/todos`: Retorna a lista completa de usuários armazenados no banco de dados.

- **DELETE** `/usuarios/deletar/:id`: Remove um usuário específico baseado no ID passado como parâmetro na URL.

## Configuração de Banco de Dados

As configurações de conexão, incluindo host, usuário e senha, devem ser gerenciadas preferencialmente via variáveis de ambiente ou através do arquivo localizado em `src/config/database.js`. O Sequelize é inicializado no `server.js` e realiza a autenticação antes de liberar o servidor para conexões.

## Notas de Estudo

Este projeto foi desenvolvido com o objetivo de entender a integração entre uma API Node.js e um banco de dados relacional dentro de um ambiente isolado por containers.

## Licença

Este projeto está sob a licença MIT.

---
Projeto desenvolvido durante estudos práticos.