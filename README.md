# Teste Backend - Let's Delivery

Esse projeto foi desenvolvido utilizando uma arquitetura **serverless** com a finalidade de criar uma **API Rest**.

## Pré-requisitos

- Node.js (versão 20.x ou superior)
- npm (gerenciador de pacotes do Node.js)
- Docker (para rodar o DynamoDB localmente)

## Instalação

1. Instale as dependências:

   ```bash
   npm install

## Configuração do DynamoDB

1. Execute o comando para subir a imagem do DynamoDB no Docker:
   ```
   npm run docker:up
2. Crie a tabela no DynamoDB:
   ```
   npm run create-table
## Executando os testes

Para executar os testes, utilize o seguinte comando:
  ```
  npm run test
