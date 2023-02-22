![Frontier-Logo2](https://user-images.githubusercontent.com/59822853/220689811-3908b95d-22d3-46f1-be6c-129a85192d35.png)


가천 소프트웨어 아카데미 Frontier 팀 "프로젝트 관리 서비스"

![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Tech Stacks
- [Vite](https://vitejs.dev/)
    - Absolute Imports
    - [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) - Vite plugin to transform SVGs into React components
    - [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) - Vite plugin to compress HTML
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [React-Query](https://react-query-v3.tanstack.com/) - Powerful asynchronous state management for TS/JS, React
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- [Recoil](https://recoiljs.org/) - A state management library for React
- [ESLint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Prettier](https://prettier.io) - An opinionated code formatter
- [Husky](https://github.com/typicode/husky) - Modern native Git hooks
- [Commitlint](https://commitlint.js.org/) - Lint commit messages
    - [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) - A specification for adding human and machine readable meaning to commit messages
- [lint-staged](https://github.com/okonet/lint-staged) - Run linters against staged git files
- [MSW](https://mswjs.io/) - API mocking of the next generation
- [Dexie](https://dexie.org/) - A Minimalistic Wrapper for IndexedDB
- [Jest](https://jestjs.io/) - Delightful JavaScript Testing Framework
- [Storybook](https://storybook.js.org/) - Frontend workshop for building UI components and pages in isolation
- [Cypress](https://www.cypress.io/) - Javascript End to End testing framework

## Version
```bash
node v18.12.0
yarn 3.3.1

"@tanstack/react-query": "^4.24.6",
"axios": "^1.2.2",
"react": "^18.2.0",
"react-router-dom": "^6.6.2",
"recoil": "^0.7.6",
"styled-components": "^5.3.6",
```

## Usage

```bash
# Clone the repo and move to project root
git clone https://github.com/gacheon-sw-academy-2023/Frontier-Client.git
cd frontier-client

# Use required node version
nvm install
nvm use

# Install dependencies
yarn install

# Setup husky
yarn prepare
```

## Available commands


| Script               | Description               |
|----------------------|---------------------------|
| yarn prepare         | Husky 설치 및 설정             |
| yarn dev             | 개발 환경으로 App 실행            |
| yarn build           | `dist` 폴더에 앱 빌드           |
| yarn preview         | `dist` 폴더에 앱 빌드 후 로컬에서 실행 |
| yarn lint            | ESlint 실행                 |
| yarn lint:fix        | ESlint 실행 및 코드 수정         |
| yarn storybook       | Storybook 실행              |
| yarn build-storybook | Storybook 빌드              |
| yarn cypress-test    | Cypress 테스트                 |
| yarn jest-test       | Jest 테스트                 |
| yarn jest-test --coverage       | Jest 테스트 with coverage                |

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Documentation
프로젝트 산출물이 정리된 노션 페이지

[Notion](https://delicious-accordion-1f1.notion.site/Frontier-Engineering-64a64153cade42c8b390ea5577f25a26)
