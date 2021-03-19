# Horus Challenge API 🌟

Horus Challenge API foi criada para a o desafio proposto pela empresa, afim de testar os conhecimentos dos candidatos sobre Amazon AWS, Amazon RDS, Amazon Lambda e Amazon API Gateway.

## Instalação

Use um gerenciador de pacotes como npm ou Yarn e execute o comando abaixo:

```bash
npm install
```

ou

```bash
yarn
```

## Utilização

Acesse um dos Endpoints abaixo com um gerenciador de requisições como o [Postman](https://www.postman.com/):

[Rota GET](https://ceei044emh.execute-api.sa-east-1.amazonaws.com/dev/users/search) para pesquisar usuários cadastrados, retornando todos da base.

[Rota POST](https://ceei044emh.execute-api.sa-east-1.amazonaws.com/dev/users/create) para adicionar um novo usuário a base, mandando uma solicitação em JSON com o seguinte formato:

```
{
  "key1": "nome-do-usuário",
  "key2": "email-do-usuário"
}
```
