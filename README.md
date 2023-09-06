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
1. **User Routes**
   - [POST /user](#user-routes)
   - [GET /user/:id](#user-routes)
   - [PATCH /user/:id](#user-routes)
   - [PATCH /user/profileImg/:id](#user-routes)
   - [DELETE /user/:id](#user-routes)

2. **Session Route**
   - [POST /login](#session-route)

3. **Announcement Routes**
   - [POST /announcement/:idUser](#announcement-routes)
   - [GET /announcement/:idAnnouncement](#announcement-routes)
   - [GET /announcement](#announcement-routes)
   - [PATCH /announcement/:idAnnouncement](#announcement-routes)
   - [DELETE /announcement/:idAnnouncement](#announcement-routes)

4. **Comment Routes**
   - [POST /comment/:idUser/:idAnnouncement](#comment-routes)
   - [GET /comment/:idAnnouncement](#comment-routes)
   - [PATCH /comment/:idComment](#comment-routes)
   - [DELETE /comment/:idComment](#comment-routes)

5. **Image Routes**
   - [POST /image/:idAnnouncement](#image-routes)
   - [GET /image/:idAnnouncement](#image-routes)
   - [DELETE /image/:idImage](#image-routes)

6. **Address Routes**
   - [POST /address/:idUser](#address-routes)
   - [GET /address/:idUser](#address-routes)
   - [PATCH /address/:idAddress](#address-routes)
   - [DELETE /address/:idAddress](#address-routes)

<a name='user-routes'></a>
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
```

### GET /user/:id

Retrieve user information by ID.

### PATCH /user/:id

Update user information.

**Request:**

```json
{
  "email": "john@example.com",
  "password": "securepassword",
  "name": "braia",
  "telephone": "123123",
  "birth_date": "12/12/12",
  "is_seller": true,
  "perfilImg": "https://media.istockphoto.com/id/1142192548/pt/vetorial/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=jM0A3ijNgtNtX3HANg6w9v0gttMeFriuA7ms_890hhc=",
  "description": "QUERO COMPRAR UM CARRO"
}
```

**Response:**

```json
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
```

### PATCH /user/perfilImg/:id

Update user perfil image.

**Request:**

```json
{
  "perfilImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRccjCj2NYkgbFbrYYZ1jUyT7ZDOPOojjLsgQ&usqp=CAU"
}
```

**Response:**

```json
{
  "id": 5,
  "name": "braia",
  "email": "braia1@braia.com",
  "telephone": "123121231231233",
  "birth_date": "123123123",
  "is_seller": true,
  "perfilImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRccjCj2NYkgbFbrYYZ1jUyT7ZDOPOojjLsgQ&usqp=CAU",
  "description": null,
  "createdAt": "2023-08-18",
  "updatedAt": "2023-08-23"
}
```

### DELETE /user/:id

Delete the user.

---
<a name='session-route'></a>
## Session Router

### POST /login

Create a new session (login).


**Request:**

```json
{
  "email": "braia@braia.com",
  "password": "123123"
}
```

**Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNfc2VsbGVyIjpmYWxzZSwiaWF0IjoxNjkzOTU3NjA4LCJleHAiOjE2OTM5NjEyMDgsInN1YiI6IjEifQ.o3yswrC0Tp0qX__qqDVt71l27txaXHCMsuUSF8qc8K8",
  "user_id": 1,
  "is_seller": false
}
```

---

## Announcement Router

### POST /announcement/:idUser

Create a new announcement.

**Request:**

```json
{
  "brand": "Hyundai",
  "model": "Elantra",
  "year": "2022",
  "fuel": "Gasoline",
  "km": 22000,
  "color": "Red",
  "good_deal": true,
  "active": true,
  "value": 21000,
  "description": "A stylish Hyundai Elantra.",
  "cover_img": "https://example.com/elantra.jpg"
}
```

**Response:**

```json
{
	"id": 10,
	"brand": "Hyundai",
	"model": "Elantra",
	"year": "2022",
	"fuel": "Gasoline",
	"km": 22000,
	"color": "Red",
	"good_deal": true,
	"active": true,
	"value": 21000,
	"description": "A stylish Hyundai Elantra.",
	"cover_img": "https://example.com/elantra.jpg",
	"createdAt": "2023-09-05",
	"updatedAt": "2023-09-05",
	"user": {
		"id": 1,
		"name": "braia",
		"email": "braia@braia.com",
		"telephone": "11111111111",
		"birth_date": "11111111",
		"is_seller": false,
		"perfilImg": "https://media.istockphoto.com/id/1142192548/pt/vetorial/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=jM0A3ijNgtNtX3HANg6w9v0gttMeFriuA7ms_890hhc=",
		"description": "sfgdsdgsgsdfgdsfg",
		"reset_token": null,
		"createdAt": "2023-09-05",
		"updatedAt": "2023-09-05",
		"addresses": [
			{
				"id": 1,
				"street": "123123123",
				"number": "12312312",
				"complement": "123123123",
				"state": "111",
				"city": "32312134",
				"zip_code": "1111111",
				"createdAt": "2023-09-05",
				"updatedAt": "2023-09-05"
			}
		]
	}
}
```

### GET /announcement/:idAnnouncement

Retrieve announcement information by ID.

### GET /announcement

Retrieve announcements. Supports query params.

### PATCH /announcement/:idAnnouncement

Update the announcement.

**Request:**

```json
{

	"brand": "Cavalo",
	"model": "Cavalo marrom",
	"year": "2018",
	"fuel": "capim",
	"km": 200000,
	"color": "marrom",
	"value":150000,
	"description":" potência de 1(um) cavalo",
	"cover_img": "https://i0.statig.com.br/bancodeimagens/5p/tv/gm/5ptvgmr28jqxt6kvcigsy43pu.jpg",
}
```

**Response:**

```json
{
	"id": 9,
	"brand": "Cavalo",
	"model": "Cavalo marrom",
	"year": "2018",
	"fuel": "capim",
	"km": 200000,
	"color": "marrom",
	"good_deal": true,
	"active": true,
	"value": 150000,
	"description": " potência de 1(um) cavalo",
	"cover_img": "https://i0.statig.com.br/bancodeimagens/5p/tv/gm/5ptvgmr28jqxt6kvcigsy43pu.jpg",
	"createdAt": "2023-09-05",
	"updatedAt": "2023-09-05"
}
```

### DELETE /announcement/:idAnnouncement

Delete the announcement.

---

## Comment Router

### POST /comment/:idUser/:idAnnouncement

Create a new comment.

**Request:**

```json
{
	"comment": "todo arranhado"
}
```

**Response:**

```json
{
	"id": 3,
	"createdAt": "2023-08-23",
	"updatedAt": "2023-08-23",
	"comment": "todo arranhado",
	"user": {
		"id": 5,
		"name": "braia"
	},
	"announcement": {
		"id": 8
	}
}
```

### GET /comment/:idAnnouncement

Retrieve comments for an announcement.

### PATCH /comment/:idComment

Update a comment.

**Request:**

```json
{
	"comment": "carro todo arranhado"
}
```

**Response:**

```json
{
	"id": 1,
	"createdAt": "2023-08-07",
	"updatedAt": "2023-08-07",
	"comment": "carro todo arranhado",
	"user": {
		"id": 3,
		"name": "joao"
	},
	"announcement": {
		"id": 1
	}
}
```

### DELETE /comment/:idComment

Delete a comment.

---

## Image Router

### POST /image/:idAnnouncement

Upload an image for an announcement.

**Request:**

```json
{
	"url":"eita.com.b/1wqwseqwdasdasda"
}
```

**Response:**

```json
{
	"id": 8,
	"url": "eita.com.b/1wqwseqwdasdasda"
}
```

### GET /image/:idAnnouncement

Retrieve images for an announcement.

### DELETE /image/:idImage

Delete an image from an announcement.

---

## Address Router

### POST /address/:idUser

Create a new address for a user.

**Request:**

```json
{
	"street": "rua maçã",
	"number":"332211",
	"complement":"casa",
	"state":"RS",
	"city":"blmenau",
	"zip_code":"2314154"
}
```

**Response:**

```json
{
	"id": 2,
	"street": "rua maçã",
	"number": "332211",
	"complement": "casa",
	"state": "RS",
	"city": "blmenau",
	"zip_code": "2314154",
	"createdAt": "2023-09-06",
	"updatedAt": "2023-09-06"
}
```

### GET /address/:idUser

Retrieve address for a user.

### PATCH /address/:idAddress

Update a user's address.

**Request:**

```json
{
	"street": "rua limão",
	"number": "22",
	"complement": "barco",
	"state": "rio",
	"city": "blmenau",
	"zip_code": "2123123123"
}
```

**Response:**

```json
{
	"id": 2,
	"street": "rua limão",
	"number": "22",
	"complement": "barco",
	"state": "rio",
	"city": "blmenau",
	"zip_code": "2123123123",
	"createdAt": "2023-09-06",
	"updatedAt": "2023-09-06"
}
```

### DELETE /address/:idAddress

Delete a user's address.
