# Frontier

가천 소프트웨어 아카데미 Frontier 팀 "프로젝트 관리 서비스"

![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Icon]아이콘 추가 예정

![Screenshot]스크린샷 추가예정

## Tech Stacks
이모지, 설명 변경 예정
- ⚡️ [Vite](https://vitejs.dev/)
    - ⚡️ Absolute Imports
    - ⚡️ [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) - Vite plugin to transform SVGs into React components
    - ⚡️ [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) - Vite plugin to compress HTML
- ⚡️ [React](https://reactjs.org/)
- ⚡️ [TypeScript](https://www.typescriptlang.org/)
- ⚡️ [TailwindCSS](https://www.typescriptlang.org/)
    - ⚡️ [tailwindcss-vite-plugin](https://github.com/await-ovo/tailwindcss-webpack-plugin/tree/main/packages/vite-plugin) - "Design in DevTools" for Tailwind CSS
- ⚡️ [React-Query](https://react-query-v3.tanstack.com/) - Powerful asynchronous state management for TS/JS, React
- ⚡️ [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- ⚡️ [Recoil](https://recoiljs.org/) - A state management library for React
- ⚡️ [ESLint](https://eslint.org/) - Find and fix problems in your JavaScript code
- ⚡️ [Prettier](https://prettier.io) - An opinionated code formatter
- ⚡️ [Husky](https://github.com/typicode/husky) - Modern native Git hooks
- ⚡️ [Commitlint](https://commitlint.js.org/) - Lint commit messages
    - ⚡️ [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) - A specification for adding human and machine readable meaning to commit messages
- ⚡️ [lint-staged](https://github.com/okonet/lint-staged) - Run linters against staged git files
- ⚡️ [MSW](https://mswjs.io/) - API mocking of the next generation
- ⚡️ [Jest](https://jestjs.io/) - Delightful JavaScript Testing Framework
- ⚡️ [Storybook](https://storybook.js.org/) - Frontend workshop for building UI components and pages in isolation
- ⚡️ [Cypress](https://www.cypress.io/) - Javascript End to End testing framework


## Project Structure
```bash
├─project root
│  ├─.husky # husky 설정 폴더
│  │  ├─commit-msg # commitlint 실행
│  │  ├─pre-commit # lint-staged 실행
│  ├─.storybook # storybook 설정 폴더
│  ├─docs # PR 템플릿, 문서 폴더
│  ├─environment # 환경변수 폴더
│  │  ├─.env.development # 개발환경
│  │  ├─.env.production # 배포환경
│  ├─public
│  │  ├─mockServiceWorker.js # MSW 서비스워커
│  ├─src
│  │  ├─apis
│  │  ├─assets
│  │  │  ├─fonts
│  │  │  ├─icons
│  │  │  ├─images
│  │  ├─components # 공용 컴포넌트 폴더
│  │  ├─interfaces # 타입스크립트 인터페이스 폴더
│  │  ├─pages # 각 페이지별 컴포넌트
│  │  ├─recoil # recoil atoms, selectors
│  │  ├─tests 
│  │  │  ├─cypress # e2e test 파일
│  │  │  ├─jest # unit test 파일
│  │  │  ├─mocks # msw 관련 파일
│  │  │  │  ├─datasources # 데이터 폴더
│  │  │  │  ├─handlers # 핸들러 폴더
│  │  │  │  ├─browser.ts # 브라우저 환경 워커
│  │  │  │  ├─handlers.ts # 전체 핸들러 export
│  │  │  ├─stories # stories 파일 폴더
│  │  ├─utils # 유틸리티 함수
│  ├─.commitlintrc.json # commitlint 설정
│  ├─.eslintrc.json # eslint 설정
│  ├─.gitignore # gitignore 설정
│  ├─.nvmrc.json # node 버전 설정
│  ├─tsconfig.json # 타입스크립트 설정
│  ├─vite.config.ts # vite 설정
```
## Usage

```bash
cd frontier-client

# Add environment variables
mkdir environment
touch .env.development
touch .env.production

# Use required node version
nvm install
nvm use

# Install dependencies
yarn install

# Setup husky
yarn prepare
```

## Available commands

<p>사용 가능 스크립트(추가예정)</p>

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

## TODO

- [x] Jest
- [x] Cypress
- [ ] Docs
- [ ] Recoil devtools
- [ ] Git CI
- [ ] Test Coverage

## License

[MIT](https://choosealicense.com/licenses/mit/)