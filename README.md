# react_querystring_filter🙂

테스트 기반 querystring을 이용한 필터 예제



## 프로젝트 소개🌝

SelectBox나 Input등을 이용한 점차적으로 데이터를 세부적으로 표현할 수 있는 여러 depth를 가진 filter를 구현합니다.

Jira에 사용되는 필터와 비슷한 형식으로 진행 할 계획입니다.

하나의 filter를 사용할 때마다 querystring으로 표현하여, URL을 복사하여 새로운 창에 입력했을 때, 해당 필터로 모두 변환되어야 합니다. 

세부적인 기획은 각 레포 프로젝트 내에 이슈로 기재될 계획입니다.

## 프로젝트 기술 스택👩🏻‍🔧

#### TEST

E2E와 TDD BDD 중 하나의 테스트 기법을 사용해 개발을 합니다.

E2E는 Puppeteer를 사용합니다.



#### React

Typescript와 React라이브러리를 사용하며, 상태관리는 React내에서 사용합니다.



#### API

api는 mock데이터로 작동하며, MSW를 사용합니다.





## 목표✅

목표는 해당 기능을 테스트와 함께 진행하여 완성하는게 목표입니다.

