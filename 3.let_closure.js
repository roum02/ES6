// 클로저: 어떤 함수에서 선언한 변수를 참조하는
// 내부함수에서만 발생하는 현상
// == 외부 함수의 lexicalEnvironment가 가비지 수집x현상

// 클로저 상황에서의 let

var list = document.querySelectorAll("li");
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    console.log(i + "번째 리스트 입니다.");
  });
}

// var 인 경우 i가 4로 출력됨. 모두 쉐어해서
// let을 쓰면 해결됨
