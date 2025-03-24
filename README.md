### MVC Simulado

### Descrição

Este é um projeto que implementa um padrão **MVC simulado** para gerenciar uma lista de nomes de cachorros. A estrutura do projeto segue a divisão de responsabilidades em:

- **Controllers**: Manipulam as requisições e respostas.
- **Repository**: Lida com a persistência dos dados.
- **Routes**: Define as rotas da aplicação.
- **Services**: Contém a lógica de negócio.

Além disso, o projeto conta com **testes unitários utilizando Jest** para garantir o funcionamento correto das funcionalidades.

## Tecnologias Utilizadas

- Node.js
- Express
- Jest (para testes)

## Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/Gustavo-DSN/dog-MVC-learn.git
   ```
2. Entre no diretório do projeto:
   ```bash
   cd dog-MVC-learn
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Como Usar

### Inicializando o Servidor

Para iniciar o servidor, execute:

```bash
npm run dev
```

### Endpoints Disponíveis

- **GET /api/v1/names** - Retorna a lista de nomes de cachorros.
- **GET /api/v1/name/****:id** - Retorna um nome de cachorro pelo ID.
- **POST /api/v1/name** - Adiciona um novo nome de cachorro.
- **PUT /api/v1/name/****:id** - Altera um nome de cachorro pelo ID.
- **DELETE /api/v1/name/****:id** - Remove um nome de cachorro pelo ID.

### Testes

Para rodar os testes, utilize:

```bash
npm test
```

Os testes foram implementados utilizando Jest para validar a lógica das camadas de **service** e **repository**.

## Estrutura do Projeto

```
 /src
   |-- controllers/
   |-- repository/
   |-- routes/
   |-- services/
   |-- tests/
   |-- server.js
```

## Contribuição

Se quiser contribuir, abra uma **issue** ou um **pull request**. Sugestões são sempre bem-vindas!

## Licença

Este projeto está sob a licença MIT.

