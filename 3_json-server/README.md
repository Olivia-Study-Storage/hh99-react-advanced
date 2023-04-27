# :microscope: json-server
## json-server란?
* 간단한 DB와 API 서버를 생성해주는 `Mock API Server`

* BE에서 실제 DB와 API Server가 구축될 때까지 FE 개발에 임시적으로 사용할 mock data를 생성하기 위함

<br/>

> :question: mock API server는 데이터 통신 학습을 위한 것인지 아니면 실제 서비스에서 사용되기도 하는지? <br/>
> * 주로 데이터 통신 학습을 위해 사용되지만, 개발 초기 단계에서 `테스트` 및 `프로토타입`을 만들 때도 사용한다.

<br/>

## json-server 설치 및 사용하기
1. json-server 설치하기

    ```bash
    yarn add json-server
    ```

<br/>
 
 2. local 서버와 겹치지 않게 하기 위해 서버를 실행하며 특정 port를 지정

    ```bash
    yarn json-server --watch db.json --port 4000
    ```