# next v13으로 블로그 만들기

@ 목적

1. next v13 배우기
2. type script 배우기
3. 서버 컴포넌트 or 클라이언트 컴포넌트 경험해보기

※ tip

- 기존 /pages 경로 삭제하지 않으면 /pages 기준으로 실행

& 프로세스

1. app 디렉토리 방식으로 세팅

프로젝트

1. fullpage 구현하기 (라이브러리 사용 x)

이슈)

1. 해당 세션으로 이동

- a 태그로 focus() 함수 사용해서 하려했으나 작동안됨
  => {
  1 : 해당 세션에 ref만들어서 클릭시 scrollIntoView() 사용해 클릭한 타켓 세션으로 이동가능
  2 : a태그 말구 button 태그로 scrollIntoView() 사용 가능 했음.
  }

- 스크롤 이슈
  => {
  1 : 휠 이벤트 리스너 달아서 위로 올렸는지 아래로 내렸는지 확인 가능
  2 : 하지만 scrollIntoView()이 작동이 안됨
  3 : client 스크롤 값을 감지해서 위아래 체크 진행
  4 : 너무 복잡하게 하는것 같아서 새로우 방법 찾아봄
  }

- IntersectionObserver 사용
  => {
  1. : root 위치와 감지 범위를 설정하고
  2. : 감지하고싶은 element를 등록해놓으면
  3. : 스크롤하면 해당 감지 범위에 걸려 callback 함수 실행
  4. : isTab 값 변경하고 useEffect 에 isTab 감지 추적해서
     }
