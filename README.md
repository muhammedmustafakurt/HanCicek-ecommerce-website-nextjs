Project README
In this project, we will use the db.ts file for database connection and collection management. Both the app and admin sections will interact with the MongoDB database and use the collections outlined here.

Features of the db.ts File
The db.ts file will be used to establish a connection with the MongoDB database and perform necessary operations on the database. Below are the main functions and features of the file:

Database Connection: db.ts establishes the connection to MongoDB, including the necessary connection URI and database name.

Collections: This file contains functions and settings that provide access to collections in the MongoDB database and facilitate operations on them.

Error Handling: Proper error handling for database connection issues and operation failures is managed in this file.

Password Security (argon2): Admin users' passwords will be securely hashed using the argon2 algorithm. This ensures that passwords are not stored in plain text.

Product Addition and Collection Management: As users add products, new collections can automatically be added to the database. However, certain collections are mandatory for the system to function properly.

MongoDB Collections
The following collections must exist in your MongoDB database:

admin: This collection stores admin user information. Admin users' identity details, email addresses, and secure passwords (hashed) are stored here. Admin passwords will be hashed using the argon2 algorithm.

Password Security
Admin users' passwords should not be stored in plain text in the database. For this purpose, the argon2 algorithm will be used. argon2 is a secure password hashing algorithm that ensures strong password security.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
