📌 Playwright API Testing
This repository contains simple, direct API tests built with Playwright and @playwright/test. It’s ideal for quick validation of REST endpoints without extra layers or utilities.

🚀 Features
✅ Direct API calls using Playwright’s built-in request fixture
✅ Supports GET, POST, PUT, PATCH, DELETE
✅ Minimal setup, no helper files
✅ Works locally or in CI/CD

📂 Project Structure
.
├── tests/                  # API test files
├── playwright.config.ts    # Playwright configuration
├── .env.example            # Example environment variables
├── package.json
└── README.md

🛠 Prerequisites
Node.js v16+

npm or yarn

API endpoint and authentication token (if required)

⚙️ Installation
# 1. Clone the repository
git clone [https://github.com/M-Arshad96/your-repo.git](https://github.com/your-username/your-repo.git)
cd your-repo

# 2. Install dependencies
npm install

🔑 Environment Setup
Copy .env.example to a new file named .env.

Add your API details to the .env file:

BASE_URL=[https://api.example.com](https://api.example.com)
API_TOKEN=your_api_token_here

Note: The playwright.config.ts should be configured to read these variables.

🧪 Running Tests
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/api/sample.spec.js

📝 Example Test
This example shows a simple GET request. Note that baseURL is automatically prepended from the playwright.config.ts file.

const { test, expect } = require('@playwright/test');

test('TC Get List of objects', async ({ request }) => {
  // The base URL is prepended automatically from your playwright.config.js
  const response = await request.get('objects');

  // Log details
  console.log(await response.json());
  console.log(response.status());
  console.log(response.statusText());

  // validation
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});

📦 CI/CD Integration
Here is an example step for a GitHub Actions workflow:

- name: Install dependencies
  run: npm ci

- name: Run Playwright API tests
  run: npx playwright test
