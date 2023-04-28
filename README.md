# Contact Registry

A simple contact registry application built using Next.js and Prisma.

## Features

- Add, edit, and delete contacts
- Search for contacts
- Store contact information, including names, email addresses, and phone numbers

## Prerequisites

- Node.js (v14 or later)
- PostgreSQL
- Docker

## Getting Started

1. Clone the repository:

```
git clone https://github.com/norges-bank/cbdc-sandbox-contact-registry
cd contact-registry
```

2. Install dependencies:

```
npm install
```

3. Create local database

```
npm run docker:postgres
```

3. Configure the environment:

   Copy the `.env.example` file to a new file named `.env` and update the values to match your PostgreSQL database settings.

```
cp .env.example .env.local
```

4. Set up the Prisma ORM:

   Generate the Prisma client:

```
npx prisma generate
```

Run the migrations to create the database schema:

```
npx prisma migrate dev --name init
```

5. Start the development server:

```
npm run dev
```

6. Open your browser and visit http://localhost:3000 to access the application.

## Building and Running in Production

1. Build the application:

```
yarn build
```

2. Start the production server:

```
yarn start
```

3. Open your browser and visit http://localhost:3000 to access the application.
