# Node.js Template Repository

This repository serves as a template for Node.js projects, providing a structured starting point with essential configurations and tools for development, testing, and linting.

## Features

- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **ESLint**: Linting utility for JavaScript and TypeScript.
- **Prettier**: Code formatter to ensure consistent style.
- **Jest**: JavaScript testing framework.
- **Husky**: Git hooks for automating tasks.
- **Lint-staged**: Run linters on staged git files.

## Project Structure

```
nodejs-template/
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.mjs
├── jest.config.js
├── lint-staged.config.mjs
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts
│   └── index.test.ts
└── .husky/
    └── pre-commit
```

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/baharudin-yusup/nodejs-template.git
   ```

2. **Navigate to the project directory**:

   ```sh
   cd nodejs-template
   ```

3. **Install dependencies**:

   ```sh
   npm install
   ```

## Usage

- **Start the development server**:

  ```sh
  npm run dev
  ```

- **Run tests**:

  ```sh
  npm run test
  ```

- **Lint the code**:

  ```sh
  npm run lint
  ```

- **Format the code**:

  ```sh
  npm run format
  ```
