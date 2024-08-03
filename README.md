# CAREFINDER Documentation

## Project Overview

CAREFINDER is a web application designed to help users find, export, and share hospital information within Nigeria. It aims to address the challenge of accessing healthcare by providing an easy-to-use tool for locating hospitals based on user input or nearby cities.

## Project Structure

carefinder/
├── backend/
│   ├── app.js
│   ├── db.js
│   └── routes/
│       └── hospitals.js
├── src/
│   ├── components/
│   │   ├── HospitalList.tsx
│   │   ├── HospitalForm.tsx
│   │   ├── SearchBar.tsx
│   │   └── MarkdownEditor.tsx
│   ├── pages/
│   │   ├── api/
│   │   │   └── hospitals.ts
│   │   ├── auth/
│   │   │   ├── login.tsx
│   │   │   └── register.tsx
│   │   ├── hospitals/
│   │   │   ├── index.tsx
│   │   │   └── [id].tsx
│   │   ├── index.tsx
│   │   └── _app.tsx
│   ├── services/
│   │   ├── api.ts
│   │   └── auth.ts
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   │   └── validation.ts
│   └── types/
│       └── toast-ui-react-editor.d.ts
├── tests/
│   ├── api.test.ts
│   ├── validation.test.ts
│   ├── HospitalList.test.tsx
│   ├── MarkdownEditor.test.tsx
│   └── SearchBar.test.tsx
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
└── package.json

## Setup Instructions

### Prerequisites

- Node.js
- npm (or yarn)
- PostgreSQL (or MySQL)

## Installation

1. Clone the repository:
    - git clone <repository_url>
    - cd carefinder

2. Install dependencies:
    - npm install

3. Set up the database:
    - Ensure PostgreSQL (or MySQL) is installed and running. Create a database for the project.

4. Configure environment variables:
    - Create a `.env` file in the root of the project and add the following:

        DATABASE_URL=postgres://user:password@localhost:5432/carefinder
        JWT_SECRET=your_jwt_secret

5. Run database migration:
    - npx prisma migration dev --name init

6. Start the backend server:
    npm run dev

7. Start the frontend development server:
    - cd src
    - npm run dev

## Usage Guide

### Authentication

1. Register:
    - Go to /auth/register to create an admin account.

2. Login:
    - Go to /auth/login to log in with your admin credentials.

## Hospital Management

1. Search Hospitals:
    - Use the search bar on the home page or the hospitals page to find hospitals by location or city.

2. Add Hospital:
    - Admin users can add new hospitals by navigating to the hospital form page and filling out the details.

3. Edit Hospital:
    - Admin users can edit existing hospital details by clicking on a hospital from the list and modifying the details.

4. Delete Hospital:
    - Admin users can delete a hospital from the hospital details page.
    
## Export and Share
    Export Hospitals:
    Use the export button on the hospitals page to download a CSV file of the hospital list.
    Share Hospitals:
    Share the list of hospitals via email or generate a shareable link from the hospitals page.
    Testing

## Running Tests
    To run the tests, use the following command:
    - npm test


## Test Files
tests/api.test.ts: Tests for API endpoints.

tests/validation.test.ts: Tests for validation functions.

tests/HospitalList.test.tsx: Component tests for HospitalList.

tests/MarkdownEditor.test.tsx: Component tests for MarkdownEditor.

tests/SearchBar.test.tsx: Component tests for SearchBar.

## Code Quality

Linting
To run the linter, use the following command:
    - npm run lint

## Formatting
To format the code, use the following command:
    - npm run format

## Deployment

### Build
To build the project for prodection, use the following command:
    - npm run build

## Start
To start the production server, use the following command:
    - npm start

## Contribution
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your fork.
4. Create a pull request to the main repository.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
