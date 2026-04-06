# Backend Assessment

A simple REST API built with Express and TypeScript for basic user management.

## Project Overview

This project exposes CRUD-style endpoints for users.

Current capabilities:

- List users by role
- Create a user
- Update a user
- Delete a user

## Tech Stack

- Node.js
- Express
- TypeScript
- pnpm
- tsx (for dev execution)

## Project Structure

```text
user-api/
  src/
    index.ts
    routes/
      userRoutes.ts
    controllers/
      userController.ts
    data/
      users.ts
```

## API Base URL

By default, the server runs on:

```text
http://localhost:3000
```

Routes are mounted at `/users`.

## Endpoints

### 1) Get users by role

- Method: `GET`
- URL: `/users?role=<role>`
- Example: `/users?role=admin`
- Use `/users?role=all` to return all users.

Success response:

- `200 OK` with an array of users

Possible errors:

- `400` if `role` is missing
- `404` if no users match the role

### 2) Create user

- Method: `POST`
- URL: `/users`
- Body:

```json
{
  "name": "Kofi",
  "role": "vendor"
}
```

Success response:

- `201 Created` with created user payload

Possible errors:

- `400` if `name` or `role` is missing

### 3) Update user

- Method: `PATCH`
- URL: `/users/:id`
- Body (partial allowed):

```json
{
  "name": "Kojo Mensah",
  "role": "admin"
}
```

Success response:

- `200 OK` with updated user payload

Possible errors:

- `404` if user does not exist

### 4) Delete user

- Method: `DELETE`
- URL: `/users/:id`

Success response:

- `200 OK`

Possible errors:

- `404` if user does not exist

## Notes

- Data is stored in memory in `user-api/src/data/users.ts` and resets whenever the server restarts.
- The default port is `3000` (defined in `user-api/src/index.ts`).
