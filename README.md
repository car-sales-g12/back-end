# Projeto full stack(back-end)

site para venda de carros

## Pré-requisitos

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- npm: [https://www.npmjs.com/](https://www.npmjs.com/)

## Configuração

1. Clone este repositório:

   > git@github.com:car-sales-g12/back-end.git

2. Instale as dependências do projeto:

   > npm install

3. crie um arquivo .env e configure suas variáveis de ambiente conforme o arquivo .env.exemple

4. execute as migrações para a configuração do seu banco de dados

   > npm run typeorm migration:run -- -d src/data-source

5. rode a aplicação:
   > npm run dev

# Routes

## User Router

### POST /user

Create a new user.

### GET /user/:idUser

Retrieve user information by ID.

### PATCH /user/:idUser

Update user information.

### DELETE /user/:idUser

Delete the user.

---

## Session Router

### POST /login

Create a new session (login).

---

## Announcement Router

### POST /announcement/:idUser

Create a new announcement.

### GET /announcement/:idAnnouncement

Retrieve announcement information by ID.

### GET /announcement

Retrieve announcements. Suport query params (page, perPage)

### PATCH /announcement/:idAnnouncement

Update the announcement.

### DELETE /announcement/:idAnnouncement

Delete the announcement.

---

## Comment Router

### POST /comment/:idUser/:idAnnouncement

Create a new comment.

### GET /comment/:idAnnouncement

Retrieve comments for an announcement.

### PATCH /comment/:idComment

Update a comment.

### DELETE /comment/:idComment

Delete a comment.
