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

**Request:**

```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**

```json
{
{
	"id": 17,
	"name": "braia",
	"email": "braia1001@braia.com",
	"telephone": "123123",
	"birth_date": "12/12/12",
	"is_seller": true,
	"perfilImg": "https://media.istockphoto.com/id/1142192548/pt/vetorial/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=jM0A3ijNgtNtX3HANg6w9v0gttMeFriuA7ms_890hhc=",
	"description": "QUERO COMPRAR UM CARRO",
	"reset_token": null,
	"createdAt": "2023-08-25",
	"updatedAt": "2023-08-25"
}
}
```

### GET /user/:id

Retrieve user information by ID.

### PATCH /user/:id

Update user information.

### PATCH /user/perfilImg/:id

Update user perfil image.

### DELETE /user/:id

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

Retrieve announcements. Supports query params.

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

---

## Image Router

### POST /image/:idAnnouncement

Upload an image for an announcement.

### GET /image/:idAnnouncement

Retrieve images for an announcement.

### DELETE /image/:idImage

Delete an image from an announcement.

---

## Address Router

### POST /address/:idUser

Create a new address for a user.

### GET /address/:idUser

Retrieve address for a user.

### PATCH /address/:idAddress

Update a user's address.

### DELETE /address/:idAddress

Delete a user's address.
