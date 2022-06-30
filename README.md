# JavaScript Full Stack Project
* http://nodejs.org 접속하여 nodejs 설치

## Nodejs 보조 도구들 설치
* 윈도우 cmd를 관리자 권한으로 실행

### nodemon : 소스코드 변경시 자동 재실행 도구
* 표준(Vanilla JS)를 테스트하기 위한 도구
* npm install -g nodemon

### npm : nodejs project manager, dependency 설정
* npm install -g npm@8.13.1

## react 프로젝트 보조 도구들 설치

### create-react-app : react 프로젝트 초기 작성 template
* npm install -g create-react-app

### yarn : npm과 같은 일을 하는 프로젝트 관리자
* react 프로젝트에서는 npm 보다 yarn 을 더 많이 사용한다. 의존성 관리가 더 잘된다.
* npm install -g yarn

## React project 만들기
* vsCode 터미널을 open하여 명령으로 실행하기
* /workspace/React_2022/```create-react-app 프로젝트명```
* ```create-react-app hello```
* react project 이름은 영문소문자, 숫자, 마이너스(-) 문자를 조합하여 작성한다.

## 프로젝트 폴더에서 터미널 열기 실행하여 작업 준비
* dependency를 한 번 더 새롭게 업데이트 하기
* ```yarn``` 또는 ```npm install```

## vsCode에서 터미널 열기
* 메뉴에서 터미널/새 터미널 열기를 선택하면 project root(workspace)에서 터미널 열기 : 새로운 프로젝트를 생성하기 위한 터미널 열기
* 프로젝트 생성 후 프로젝트 폴더에서 마우스 우클릭하여 통합터미널 열기 : 프로젝트를 시작하거나 dependency를 설치하기 위한 터미널 열기