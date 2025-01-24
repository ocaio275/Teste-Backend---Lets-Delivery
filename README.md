# Teste Backend - Let's Delivery

Esse projeto foi desenvolvido utilizando uma arquitetura **serverless** com a finalidade de criar uma **API Rest**.

## Pré-requisitos

- Node.js (versão 20.x ou superior)
- npm (gerenciador de pacotes do Node.js)
- Docker (para rodar o DynamoDB localmente)
- Serverless 

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
3. Para executar o programa 
   ```
   sls offline

## Executando os testes


Para executar os testes, utilize o seguinte comando:
      
      npm run test

## Rotas
 * POST - /dev/customer
   
   Body request
   ```JSON
   {
    "fullName": "João gomes",
    "dataOfBirth": "01/01/2000",
    "isActive": true,
    "listAddress": [
        {
            "street": "Av Brasil",
            "number": 5955,
            "complement": "apt 404",
            "neighborhood": "vila california",
            "city": "São Paulo",
            "state": "SP",
            "zipCode": "12345-678"
        }
    ],
    "listContact": [
        {
            "email": "joao@test.com",
            "phone": "(11)99999-9999",
            "isMain": true
        }
    ]
   }
   ```
  * GET /dev/customers
  * GET /dev/customer/{id}
  * PATCH /dev/customer/{id}
  * 
    Exemplo:
    ```JSON
    {
       "fullName": "João Silva",
       "isActive": false,
       "dateOfBirth": "20/02/2000"
    }
    ```
   * DELETE /dev/customer/{id}
