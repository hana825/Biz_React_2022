# 다이어트 도와줘

- 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 하는데 도와주는 App
  \*MongoDB + Express + NodeJS + React 연동 프로젝트

## NodeJS backend Project 를 생성하기 위하여

- 프로젝트 생성 : express-21c node-310-Food
- 프로젝트 폴더에서 : npm install

## React Frontend Project 를 생성하기 위하여

- node-310-Food 폴더에서 React client 생성 create-react-app client
- client 폴더에서 터미널 열기
- yarn 실행하여 update
- yarn build 실행하여 build 생성하기
- node-310-Food/client/build 폴더 생성 확인

## nodeJS 에서 client 인식시키기

- nodejs-310-Food/app.js 파일 열기

* `app.use(express.static(path.join('./public')));` 부분 `app.use(express.static(path.join('./client/build')));` 으로 변경
* `app.use("/", indexRouter);` 부분 삭제 또는 주석처리
* nodejs-310-Food 폴더에서 서버 Start : nodemon 실행하기
* Web Browser 에서 localhost:3000 주소 입력하여 React 화면 출력 확인

## React 프로젝트 파일 이름 변경

- client/src 폴더에 App._ 파일들을 모두 ReactJS._ 로 변경

* ReactJS.js(App.js 였던) 파일 App 과 관련된 부분들 ReactJS 로 변경
* index.js 파일에 App 과 관련된 부분들 ReactJS 로 변경
* index.js 파일 `reportWebVitals();` 부분 주석
* public/index.html lang ko 로 변경

* /client 터미널에서 yarn build

## MongoDB 연동하기

- nodemon 멈추기

* `npm install -g nodemon` 으로 npm update 해주기 (멈췄을때 update 하라는 말이 나오면)
* mongoose dependency 설치 : npm install mongoose

* 날짜와 시간 도구 설치 : client/yarn add moment
* UUID Key 생성 도구 설치 : client/yarn add react-uuid
* 잘 설치 되었는지 package.json 확인
