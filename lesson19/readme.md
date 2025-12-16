project/
│ playwright.config.ts
| global.d.ts
│ tsconfig.json
│ package.json
│ eslint.config.mjs
│
├── fixtures
│     └── custom-fixtures.ts
│
├── src
│     ├── components
│     ├── pages
│     └── utils
│
└── tests
      ├── smoke
      ├── regression
      └── webdriver.spec.ts


npm test && npm run allure:generate && npm run allure:open

npx allure generate allure-results --single-file

npm run reports:all