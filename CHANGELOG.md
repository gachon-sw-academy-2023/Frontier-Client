# Changelog

## [1.1.0](https://github.com/gacheon-sw-academy-2023/Frontier-Client/compare/v1.0.0...v1.1.0) (2023-02-22)


### 🔧 Miscellaneous Chores

* utils 라우팅, 유효성검사 분리 ([5e27d33](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/5e27d33cda07be0c9ee6221533276ae8136c6f5f))


### 👷 Continuous Integration

* release-please에 디자인 변경 사항 기록하도록 수정 ([e89890c](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/e89890c238dea85380d5c22e356049e9d8bba340))
* yarn 버전 통일 ([2eb5963](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/2eb59639ad1db7fbf143619c3b8d6c016b86a492))


### 🎨 Styles

* setting.json 삭제 ([12e1618](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/12e161847ef2e910a1288bcc119e0b16bbdf9826))
* 로그인 페이지 컴포넌트 size 수정 ([62df3e8](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/62df3e82c85e769762f7c5100b7a52d867cdba0e))


### ⚡ Performance Improvements

* 홈화면 workspace관련 mocking 개선 ([3511cd4](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/3511cd446c92982581c5f0a2aa768088667a3d6e))


### ➖ Reverts

* pr관련 되돌리기 ([e05fbce](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/e05fbcede79c1be9a5d34c4f4142ac41ceb88fed))


### 📦 Build System

* indexedDB wrapper 패키지 dexie 추가 ([75ddbbe](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/75ddbbe521369b6fac793742f79b67392babe78c))
* jest 추가 + example code ([ae362d3](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/ae362d3ff76e0763e0bbc0c0af8196ea5eb0afa9))
* mswjs/data 제거 ([a6f065f](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/a6f065fce59f324e2e2dac4e59ba6669b1347f64))
* mswjs/data 추가 ([c02cb90](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/c02cb90e75b460a26de98c7bec398f6aa2cdaf40))
* react query devtools 추가 ([eedabe2](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/eedabe2df37c3c8e428a2360b84218077fb538b8))
* react-query devtool 추가 ([90bbb9e](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/90bbb9e7063ac31918f68b196efc96c4eecb74cc))
* react-query 버전 변경 ([35e93a4](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/35e93a4d53384535d9c801180d7b1bc2a4ccbd2e))
* styled-popover-component 패키지 추가, eslint 설정 수정 ([11589fd](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/11589fd5dcf656cdf50130e6618b0ba61b460ba4))
* tailwindcss 제거 ([ac2604b](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/ac2604be8c7f65d7c69b16b1c1c6bfab526df575))
* uuid 생성 라이브러리 추가 ([79facef](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/79facefe7483153f654c72b359bf1ae781d5f65a))
* yarn 버전 변경으로 인한 yarn.lock 재생성 ([df9880c](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/df9880ca3884e79dd2dc3708401f40f82a1d260b))
* yarn 설정 변경 및 yarnrc 파일 자동생성 ([1b45d5b](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/1b45d5b04806c88930f2e4db6b3ac249821946b5))
* yarn.lock 삭제 ([8fbd9eb](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/8fbd9eba05868a224af640bb762ccfbfa95b5b18))


### ♻️ Code Refactoring

* msw 핸들러 경로 변경 ([f9b0337](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/f9b0337c7e297815135ce3ba9004c2326d7efa84))
* sleep 유틸함수 분리 ([88b2747](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/88b2747a49f817730e21cbd8fa79cebdfece7e8a))
* 랜딩 페이지 feature, header 수정 ([9590e73](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/9590e7377fb1d358a3529b36a0fa44d0f9a445d8))
* 로그인 페이지에 변경된 쿼리 적용 ([1138d2a](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/1138d2a9b7c75ab8d94c7ab57eddec3494ecb7b0))
* 로그인, 회원가입 핸들러 분리 ([a960af1](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/a960af18d3bc02e8901a392b2a1adc2b2c1582f2))
* 미사용 코드 삭제 ([a648d55](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/a648d5575e6d7f7ed029dffae353e4ee7ee67684))
* 불필요 폴더 및 기존 파일 삭제 ([0d80f5b](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/0d80f5b900d7bc4e4f3d0d9b071a3f32fe660bfd))
* 불필요 폴더 삭제 ([e3396c7](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/e3396c7386cca58c429e7c886c55b6055ac6d3df))
* 사용자 관련 atom 리팩토링 ([f277afb](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/f277afb48bead70ebb022120ac84fcc02d9c46b9))
* 인터셉터 분리 ([d517ece](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/d517ece0e0a20264392ac0369b5935b6d537f300))
* 카드 모달창 경로 변경 ([7d08b59](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/7d08b594bc2f9f443f3e7d7341fc3cbab1143386))
* 카드 모달창 사이드바 return문 추가 ([6836b48](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/6836b48fb14a22b1207f98e92342f4f64b2509f3))
* 회원가입 api 주소 변경 ([ac2b5ed](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/ac2b5ed5ee11f0da108fdb9b03d647ba7324226d))
* 회원가입 에러 메시지 추가 ([b46d8ff](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/b46d8ff569532479de40165c3e992d974c7bf0a9))
* 회원가입 인터페이스 분리 ([a17b394](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/a17b3946a7d5d8abbd47795e973f601f50dcb893))
* 회원가입 페이지에 변경된 쿼리 적용 ([d729603](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/d729603c520978dc83dab7accf5224866d37f5e0))


### 🐛 Bug Fixes

* api 요청 시 사용자 아이디 헤더에 추가 ([166f806](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/166f80606e49ff1f3f76d716b632390313692231))
* API 호출 환경변수 수정 ([cc828c5](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/cc828c566e2b4f2be9c1d66a12f3c0eed69b6c27))
* Card 샘플 데이터 수정 ([58589c4](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/58589c4ca1dcaeb095e42b1537dfa5778537bec8))
* component 참조 링크 수정 ([70252b4](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/70252b40803d7f78d99276d02f650358c770310e))
* customAxios 수정 ([7c7e18a](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/7c7e18a94d78f839f3069f8d108e529353515433))
* eslint build dependency 관련 에러 해제 ([f509992](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/f5099924a8f14187b3233865ff246172e5901c67))
* interface 수정, 보드페이지 props 재정의, 보드,워크스페이스 추가 기능 예외처리 ([5f5a68c](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/5f5a68c90cdbd222da84421682d9bcfd61452292))
* msw 인터페이스 수정 ([22f5934](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/22f5934f656ec5fe5a3066e2fe95f6afdca9b86e))
* signup 페이지 텍스트 배치 이상 버그 수정 ([c0b7f13](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/c0b7f13fe0c43c9801288bc0c7aca85e26ba6f6b))
* 랜딩 페이지 네비게이션 바 수정 ([1642b5d](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/1642b5d3d1b307edd5147ce68d5b534338a43473))
* 로그인 api 요청 주소 변경 ([61f5a62](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/61f5a629f2b9eb57a463968beb8092f93367d131))
* 로그인 api 요청 주소 수정 ([007b1a4](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/007b1a46a430c20e43e4da3af0d2044089a74c59))
* 로그인 모킹 인터페이스 수정 ([f949c38](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/f949c38d50e06716a7888a91d9df71c2908eb691))
* 로그인 모킹 인터페이스 추가 ([cd401f6](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/cd401f6eb519fbbe2d9ef13c135f10ce34862f53))
* 리스트 Drag and Drop 기능 버그 픽스 ([9a6c529](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/9a6c529a7e197831e9fd40d862812da8a381735f))
* 머지 충돌 해결 ([1855adc](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/1855adc290bbbef1db26e756a0251da742e2adb5))
* 머지 충돌 해결 ([836b937](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/836b9371cb078b3186fc02aae83d9240bc62adba))
* 미설치 dependency 처리 ([74b10ac](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/74b10ac53368d395acd3458742887b22d3d78fb5))
* 보드 데이터가 배열로 안들어 오는것 수정 ([1977f2a](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/1977f2aac0dfa263e83e0b2ed483f536076ba85d))
* 보드 핸들러 response 수정 ([a51610a](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/a51610a63ac9f0e36dbe82abb2b816ddb0ceace6))
* 사용자 정보 변경 핸들러 put-&gt;patch 변경 ([576aa00](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/576aa00c42407ca33bda60702c6d1dda946bc624))
* 사이드 바 UI 수정, 디렉토리 변경 후 import 경로 수정 ([b3a9830](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/b3a983043353aa4a1d51b63a7aa4c81e8cafd795))
* 사이드바 placeholder 오타 수정, 워크스페이스 페이지 UI 수정 ([b0ef058](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/b0ef058985511d40e1b20f968c94b08d4510ca98))
* 사이드바 workspace 버튼 삭제 ([b7ab73c](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/b7ab73ca64de9d02b0edc3544faad68580a6bac3))
* 샘플 데이터 일부 변경, 오류 수정 ([c2b8538](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/c2b8538d26294c7fcefa98cd9b6a81a4617e1388))
* 워크스페이스 페이지 styles.ts 분리, 패키지 선언 중 오류 해결 ([a101205](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/a10120581b4b387db6e22827bf0635db67039348))
* 워크스페이스 핸들러 response 수정 ([18b9a91](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/18b9a91969bf5b29d7e23a90570b5da2934b038e))
* 워크스페이스 핸들러 response 수정 ([ee56b51](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/ee56b519be2960d0ffc877363f0c94c1488312a3))
* 인증 페이지 로고 변경 ([30cb5d9](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/30cb5d96626f31d7af899e1d576d1dca294b0912))
* 카드 모달창 Description 섹션 lint ([169a9a3](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/169a9a36d323342ad547c4257a4ddac05cb58f86))
* 카드 모달창 마진 수정 ([8af6754](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/8af67540eee1cda7c9533b83b8b214b5187b0077))
* 홈페이지 네비게이션 바 로고 수정, 컨텐츠 재배치, ESLint 수정 이후 변경된 파일 적용 ([4804ba7](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/4804ba7aad378b870cce0f0e901a721c973364e5))
* 회원가입 모킹 API 수정 ([9bee2b7](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/9bee2b7b09e2af47fecdff23a856575e3b5f74cf))


### 🖍 Designs

* add list, add card 내부 버튼 디자인 수정, boardcard 공백 재 정렬 ([10104bd](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/10104bda73dffd282a35a7a541eb6913941c7e4a))
* card 내부 버튼 component UI 수정 ([dc07b54](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/dc07b549bf7f0b3f343e10d7f30f6a0ff61613b3))
* card 컴포넌트 UI수정, cardState object 형식 변경, global style - 모듈 추가 ([efcbb7c](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/efcbb7c48625eef5c885e8397b2a3c0681bda779)), closes [#37](https://github.com/gacheon-sw-academy-2023/Frontier-Client/issues/37)
* home css 변경 ([03bd5f5](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/03bd5f5e123b0d905394a753d430065c46ff0959))
* home-boardcard 추가 ([9651d88](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/9651d88de355dac317f059be0389113fa761c771))
* home화면 Content ui변경 ([cdf051c](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/cdf051c1fe7150cba66fcf286aad27997a1880df))
* navbar logo 추가 ([718c304](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/718c30489b67809af82bfcbf905851e949e56e6d))
* navbar ui개선, 버튼추가 ([00b3b89](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/00b3b89a86a60ba6c66d0e8f6245e185a1351a53))
* 랜딩 페이지 feature 섹션 추가 ([11cee88](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/11cee88d28ab3e18559970a2258aba3ba69c7461))
* 랜딩 페이지 Footer 섹션 추가 ([ace1120](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/ace11208c202fbb27036f2d2ceab7b0bfb89cf5a))
* 랜딩 페이지 Hero section ([d1885c0](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/d1885c0fb7f191734de9fb866ca63f2ff6bfc893))
* 랜딩 페이지 Hero Section 수정 ([c733f35](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/c733f35fc36b04e19b7bda2fbfed5de760485b68))
* 랜딩 페이지 Pricing 섹션 추가 ([846131b](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/846131b0d74ab4a5fe57ba7604f3bc577dd842c5))
* 랜딩페이지 logo 변경 ([285598b](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/285598be6bc3de45cffe76ab050efaa2d955b014))
* 로고 변경 ([3cb1b40](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/3cb1b409475579a4aeeec9ef0fed88591c7f51af))
* 로그인, 회원가입 폼UI 수정 ([1e246a3](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/1e246a3cf0ea6a2c6cbda392c06cc87de61e8e1e))
* 로그인/회원가입 인터페이스 수정 ([24c5b98](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/24c5b98262f0a7047028e68c7fac182a51362db0))
* 보드페이지 ui 수정 ([ef67eb8](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/ef67eb888f90b8d749fe3be4bc6e35129e99ed7a))
* 에러 페이지 생성 ([eb7dd4e](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/eb7dd4e0a7a304658801a062208cd183edc06def))
* 카드 모달창 Description 섹션 추가 ([0f3a3c9](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/0f3a3c903c5812b8262493a9d3ea3d6d100875ac))
* 카드 모달창 Label 섹션 추가 ([297a9cf](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/297a9cf8b0e30e6d515c4744681ea2f4368e990e))
* 카드 모달창 Log 섹션 추가 ([421fdb2](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/421fdb2f9926ac0848869843a834a38f741fd407))
* 카드 모달창 Members 섹션 사용자 추가 아이콘 추가 ([b9c73cf](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/b9c73cf2d200000ddc32f83017e9832fae8df52c))
* 카드 모달창 Members 섹션 추가 ([5bbabd9](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/5bbabd937e0e15fd8b6ebe5215b2ac081a94fb2f))
* 카드 모달창 전체적인 UI ([35727c3](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/35727c3e5e0773bde2b2d0c2f3ede15971255134))
* 카드 모달창 컨텐츠 부분에 대한 UI ([6928b5f](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/6928b5f564ef18b3d5650fabce6f4c41a181bf2d))
* 헤더 초안 작성 ([9a556aa](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/9a556aa570fa78284ab4f3206daa8cf81722f381))
* 헤더 햄버거 메뉴 삭제 ([9831f5d](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/9831f5dd488e52642c1c30f25abbc40f5650936f))
* 홈화면 구성 변경, Navbar ui 변경, Sidebar 컴포넌트화 ([0c49c8a](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/0c49c8a5a727c6d176d6f998ae00c154707cb107))


### 🚨 Tests

* jest config파일, test 코드 ([bb44b18](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/bb44b1800e7133a82863e63a409274f655d35452))
* register page storybook, 구조 변경 [#70](https://github.com/gacheon-sw-academy-2023/Frontier-Client/issues/70) ([e11b9a5](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/e11b9a5fa0df206c1d2ec58e43484ac1756c282f))
* storybook login page [#70](https://github.com/gacheon-sw-academy-2023/Frontier-Client/issues/70) ([fe252fb](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/fe252fba5b2b7efff49c620aeb46a916113fa5c5))
* testing example 작 ([9d61248](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/9d612488eaf0a4c9b682d840ab39ab249f75daea))
* 랜딩 페이지 스토리북 작성 ([6b590b0](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/6b590b082c88f974143a69881906fd5aba67ea30))
* 보드 페이지 스토리북 일부 작성 ([12b0937](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/12b093735f84f6656ae2e9ebc2cff6cc90d1b48a))
* 에러 페이지 스토리북 작성 ([c2b3e6f](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/c2b3e6f28d3986f956fc53643e7ffe0eb0feac2d))
* 카드 모달창 테스트용 임시 라우팅 ([7e99b88](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/7e99b8857fe15ee6a0e2fc6381ccf3dd859b2547))


### 📚 Documentation

* pr 템플릿 내용 수정 ([40d0a56](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/40d0a5641718ac56e6577602cb3eaa6230bfbd16))
* pr 템플릿 위치 이동 ([30f56bb](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/30f56bb41145683f6c8eee46dc0db1a1c14f9ce4))
* readme 업데이트 ([65ff41f](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/65ff41f5dd610c189239e2c0b741902672294dce))
* 기능 개발 이슈 템플릿 작성 ([c660a3c](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/c660a3c3c878f611bf7243e64c80f24b5a62ccf9))
* 버그 제보 이슈 템플릿 기본 라벨 변경 ([06ac456](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/06ac456d19d4d5cc97ed0df0809593939872dd53))
* 버그 제보 이슈 템플릿 추가 ([99af594](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/99af5943517e94cdf414b7a0bdc5f4907b7f94cb))


### ✨ Features

* 500번대 에러 페이지 구현 ([ebd7108](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/ebd7108aa7fdc34d23e4ea5fd1ba18df7173d3d0))
* add card 기능 추가 ([99d2cf9](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/99d2cf9a01f8c98efaea34aab6de5d89aaf311d6)), closes [#37](https://github.com/gacheon-sw-academy-2023/Frontier-Client/issues/37)
* add list 기능 추가 ([5b35825](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/5b358256971eab9b222cb649102fbdc93d426a1f))
* add list, add card 기능 onKeyDown 엔터 추가, atom default 수정 ([5b47c48](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/5b47c489bbec9224c4641c6c6c8f2a8c038098b8))
* Board 테이블 및 샘플 데이터 작성 ([2339978](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/233997805c380fc8656f57556f736a60128e2c0d))
* board 페이지 내부 add list 기능 UI 구현 ([03618e0](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/03618e094b1aa763126ca99410e8396695c6e194))
* board 페이지 드래그 앤 드랍 기능 ([68f6d25](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/68f6d25f9ba7798b7447e53ef001352e7031fbdd)), closes [#36](https://github.com/gacheon-sw-academy-2023/Frontier-Client/issues/36)
* Card 테이블 및 샘플 데이터 작성 ([66b85b9](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/66b85b96e85074791d71a6d0a42228115a4596d1))
* Card 테이블 정의 ([33812da](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/33812da59a3d6334d65dacd44594a7ec7efeae41))
* custom Axios 초안 작성 ([8372d9f](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/8372d9ff135334f0d5ae3aeb76e09f3e1b295239))
* dayjs 패키지 추가, 리스트, 카드 UI 수정, 카드 날짜 정보 추가, 카드삭제 기능 추가, 호버상태 아이콘 추가 ([e047ef5](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/e047ef505bf85844888844c579cd271b3900119f)), closes [#36](https://github.com/gacheon-sw-academy-2023/Frontier-Client/issues/36)
* List 테이블 및 샘플 데이터 작성 ([caaf13c](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/caaf13c8966bcae41a211579367c84bdfddc41a0))
* mock용 db 생성, User 테이블 정의 ([1552b0e](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/1552b0ef3a324205307bbd906edb170534734109))
* msw - 로그인 api 작성 및 적용 ([0fdf5e3](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/0fdf5e31e6c871af430960aaabdce65ceb9ec62b))
* user atom 추가 ([477d985](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/477d98585ef13b122f1bd7e5bda47266ee640cbb))
* User 샘플 데이터 작성 ([20c9f40](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/20c9f409e45e2a9b3874ce74a0adcc5d4bf9da32))
* User 테이블 작성 ([3b7ac17](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/3b7ac17611da97db1f3e583d56f1c522abc3f791))
* uuid 생성, 검증 함수 추가 ([e5ca35e](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/e5ca35ee66cff864466437741a39a8b1821b54f1))
* workspace 테이블 및 샘플 데이터 작성 ([75ad9c8](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/75ad9c8800397f69933a1c4f85a960f53b2924a3))
* workspace 페이지 제작, atom -&gt; atomFamily 변경 ([6b770e3](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/6b770e376b05def476bdad6c0f770e360ccb4a6b))
* 개발환경 변수 업로드 ([ba51fa8](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/ba51fa890541ae5a5d9fdf5d9b8e5ade90308ffd))
* 드래그 앤 드랍  구현 중 Strict mode 해제 ([6ba10e5](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/6ba10e55f29386dd966e989f5643f1f8cd70e4e6))
* 드래그 앤 드랍 기능 구현 중 react-beautiful-dnd 패키지 설치, tailwind 폰트 삭제 ([51819bd](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/51819bd21d2caec387fc8e3a82199cfb266d1f6f))
* 로그인 API 수정완료 ([a716426](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/a7164267c9ac858b676ff746836db7fd5faf9dc7))
* 로그인 시 로컬스토리지 저장 추가 ([6d0a033](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/6d0a033fc42dffb86ec5ed9ce5007da2c226dec4))
* 로그인 유효성 검사 버그 수정 ([b123379](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/b12337965064eba2a2b7e44dde11e16d472b50ce)), closes [#21](https://github.com/gacheon-sw-academy-2023/Frontier-Client/issues/21)
* 로그인 유효성 검사, 에러메세지 추가 정의 ([9e34240](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/9e342409ac51e78709008df6cac59d0848df4304))
* 로그인 쿼리 구현 ([443a172](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/443a1721c5f833c0a09a0e4d1d2b841b5d2bd583))
* 로그인 쿼리 작성 ([e365167](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/e365167ae9b403414ab0832a56c73e59c388196f))
* 리스트 editor 컴포넌트 분리 ([a07df19](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/a07df195ac1671e2c2ed754bc38971ffb55b0511)), closes [#37](https://github.com/gacheon-sw-academy-2023/Frontier-Client/issues/37)
* 리스트 관련 쿼리 작성 ([5fe3418](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/5fe3418fe7c52ca4f4ab0fe4862365e5b437cf22))
* 리스트 관련 핸들러 작성 ([674bcc9](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/674bcc9397692f96a7316743f893e0810fae3f4f))
* 리스트 내용 수정 기능 추가, 보드 드래그앤드랍 배경색상 수정 ([a90eaf7](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/a90eaf75e1b3c58c8281693fc4cf89e70cd55380)), closes [#37](https://github.com/gacheon-sw-academy-2023/Frontier-Client/issues/37)
* 리스트 드래그 앤 드랍 기능 추가 ([9566d99](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/9566d99098f65ed4ec3c1c110363c65530b5e8c9))
* 리스트 인터페이스 작성 ([9a29776](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/9a29776b5cd188bd47d30c8055481921dd7549a9))
* 보드 관련 쿼리 작성 ([0c1845c](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/0c1845cd8892d8d541a2d4636f53ffc493f92138))
* 보드 인터페이스 작성 ([5251978](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/52519785279a3114da77a07467a4a28831c40973))
* 보드 페이지 백그라운드 설정 수정, 파라미터 수정 후 기능 정상화 ([2e0e2d4](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/2e0e2d430a95ecf72f44b2ac182f6483489f9b61))
* 보드 핸들러 일부 작성 ([89de80d](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/89de80d8cb72731099c3f2b295602220a0423c1a))
* 보드 핸들러 작성 완료 ([a87601e](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/a87601e6e2016dad91b483bf5b03dc4b334681a4))
* 사용자 api 관련 인터페이스 추가 ([3bb4166](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/3bb4166d0bc2d420aaf50e85ece9de38f5b3c66d))
* 사용자 api 관련 쿼리 추가 ([c54f7fe](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/c54f7fe62c653788eac7badfed38c0f558451f0d))
* 사용자 조회 및 수정 핸들러 작성 완료 ([1752d1a](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/1752d1a87602a9883a9a9a7850cdb5462eca5790))
* 사용자 조회 핸들러 작성 ([3b041f5](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/3b041f5d1a723f10417462c24971591a63bedd35))
* 사이드바-워크스페이스 별 보드 출력, 워크스페이스 추가 기능 추가 ([c5a41c2](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/c5a41c2a6c582d9e165823d6030f44d3ac10cd73))
* 워크 스페이스 페이지, 보드 삭제 기능 추가 중, 컴포넌트 분리 예정 ([6a22836](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/6a228360e50f395271226df041124236f6e90a22))
* 워크스페이스 관련 인터페이스 작성 ([cc20452](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/cc204527a094a1f85ca0b5322921a7fab876be9b))
* 워크스페이스 관련 쿼리 작성 ([45a48be](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/45a48bea2e993d3828daf48a17759b1ff978abdc))
* 워크스페이스 관련 핸들러 작성 ([43d28d3](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/43d28d37fc02804dd5fa6756b29cae96ef1c73dc))
* 워크스페이스 라우팅 규칙 수정 ([5355fa9](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/5355fa917cdd9cdb3339d94ee8593cc2e1f8556c))
* 워크스페이스 페이지 보드 생성 기능추가, UI 작업 진행중 ([d8eb4f7](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/d8eb4f709717a739416b6170613c98b7294a57ab))
* 워크스페이스 페이지 보드 컴포넌트 분리, 삭제 기능 추가 ([015a106](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/015a1067d04989bdd02c354860a442be3d70cded))
* 워크스페이스 페이지 수정, 사이드바, 네비게이션바 추가, UI 수정 중 ([aad8f66](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/aad8f66fdee7e2dd0cc3e818d0d5f96548cd48a8))
* 인증 (로그인/로그아웃) 핸들러 작성 완료 ([77e03bb](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/77e03bbe9f9bbc165ac07a28fc9aab4bc704368d))
* 인증 api 관련 인터페이스 추가 ([626f5e2](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/626f5e2f43fefbe07c4d5166416987667614526a))
* 인증 api 관련 쿼리 추가 ([1b7d9b3](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/1b7d9b3b27f3837dfd6e0b722dcd3f25da1d1a86))
* 카드 hover 로직 수정, 카드 내용 수정기능 추가 ([aecc986](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/aecc98664822e8b37127c8cf792b70dad2fea05a))
* 카드 모달창 사이드바 작성 ([7c0f689](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/7c0f689ed09fee6c279ffa132c3fd1ca14819d8d))
* 카드 모달창 헤더 작성 ([d3ca3f6](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/d3ca3f6c094440e0e8ea190b639b6ca1121de0a4))
* 카드 삭제 기능 추가, board componenet, 로그인,회원가입 component 디렉토리 구조 변경, index.css 수정 ([69b36ce](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/69b36ce3577324e1d493b6b522ac6a8c7f19cd6b)), closes [#36](https://github.com/gacheon-sw-academy-2023/Frontier-Client/issues/36)
* 카드 수정 버튼 내용수정 ([287a7f1](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/287a7f1a0ce02b39fb4cccde83802c305dc6ab9d))
* 홈페이지 보드 박스 UI 수정, atom 분리 후 기능 정상화 ([09da7b1](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/09da7b138299e41dbfadc98081bbe9cb1ad2d8ad))
* 홈페이지 보드 삭제 기능 추가 ([bfa4833](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/bfa483328d4da7ee4829037359541a94fcf084ba))
* 홈페이지 워크스페이스 별 보드 출력, 워크스페이스 별 보드 추가 기능 추가 ([be3e404](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/be3e4043e35defc5a21815d083ac70a0751cc511))
* 회원가입 API 수정 ([cf753ec](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/cf753ecf3afc4a0f39a5ad64ecc92d5966bdbac3))
* 회원가입 api 실패 케이스 추가 및 uuid 적용 ([527edf1](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/527edf1461094e6c57d9fd1746c7a4c249497a41))
* 회원가입 API 작성, 유효성 검사 구현 ([369f1f6](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/369f1f6d3d7c14d5b587ef239c4267904decb0b4))
* 회원가입 페이지 react-query 추가 ([d66b5f8](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/d66b5f8c5e26e488ef002c27201667c6bc04c9dd))

## 1.0.0 (2023-01-16)


### 🐛 Bug Fixes

* eslint 규칙 추가 ([5232df3](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/5232df3cccc7c247cc3db0a7fd65c2e41405b0b3))
* lint-staged 쉘 스크립트 추가 ([d438a16](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/d438a168c8427c279ecd249ad6af256d53e16dfb))
* lint-staged 스크립트 수정 ([04ae631](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/04ae631c900c20bebb85f223dbbcf561d44bb3f8))
* lint-staged 스크립트 수정 ([e61203b](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/e61203b90cf721c79f9145b911a29729442915c7))


### 📚 Documentation

* pr 템플릿 추가 ([4c4627d](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/4c4627d685b86af07e0aa43a27233f9d42bf7c82))
* readme 초안 작성 ([b091d99](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/b091d992555b1f88a8a7963f62fa4e33985b668a))


### 👷 Continuous Integration

* changelog & release 작성 자동화 ([5c5e4e7](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/5c5e4e7f701e9d36bb21cc8bf3ce9c8f946b2f7a))


### 🔧 Miscellaneous Chores

* eslint no-console 부분 off로 변경 ([a57990f](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/a57990fa1eddff4ef438cdb8c1a5eaaf4762d5ab))
* react-icons 추가 ([4fd378a](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/4fd378a11966230e0d1f6df46b99352a86e17ca1))
* react-router-dom, styled-components 추가 ([fce4e2d](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/fce4e2d3970b0377caa39aa385ef2e943bc0f4ed))


### 📦 Build System

* cypress + jest 추가 ([6ac8d5e](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/6ac8d5e5499b067a56a6c1ae80e1a110489bf82f))
* eslint 추가 및 설정 ([28308c6](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/28308c61cbebcd64074b6ae2b27ee223132d2f66))
* husky / commitLint 추가 ([7f9a9b5](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/7f9a9b5a0f293fcfaae6bf040a185d82b9dfd22a))
* lint-staged 추가 ([f47bf64](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/f47bf64f12d2ecdde268845eb648115038d8ee8a))
* msw 추가 ([5232df3](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/5232df3cccc7c247cc3db0a7fd65c2e41405b0b3))
* nvmrc 작성 ([b091d99](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/b091d992555b1f88a8a7963f62fa4e33985b668a))
* prettier 설정 ([87fad50](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/87fad507b2e41369b7b3a031841ae5f1f019cf93))
* storybook 추가 ([a53776d](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/a53776d0511ac29fbc62d3d49962a88c81bc0b4e))
* styled-components 라이브러리 추가 ([fb068f7](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/fb068f7bf1da0437036ec7bbd542d52721c9af30))
* TailwindCSS ([528d984](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/528d9841e6fe2957db72d2c51140b6ec72bd7ef9))
* Vite + React + Typescript ([6d88ff2](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/6d88ff28678326ea780c6ca66d72576454714632))
* 상태관리 라이브러리 추가 ([c9ed2bd](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/c9ed2bd8b4107857f982a402887f50c8917b4dd1))


### ✨ Features

* component sidebar 추가 ([9bd6e11](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/9bd6e11493f3c9d11b12bf53eee04b8c808910fd))
* landing page cypress 테스트 ([4575c83](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/4575c83b6327de61fe6565b759a6bfb60aee0b7c))
* navigation 구현 ([fe69259](https://github.com/gacheon-sw-academy-2023/Frontier-Client/commit/fe6925947e9a84f21c94659aad4c8efa153e1e43))
