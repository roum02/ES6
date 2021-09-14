var name = "glabal var";

// 스코프 체인: es6전 까지는 펑션 단위의 스코프만 존재했기 때문에
// 펑션 안의 지역 변수 값을 먼저 찾고, 그게 없다면 전역변수로
// 스코프 체인을 달아서 올라감.

function home() {
  var homevar = "homevar";
  for (var i = 0; i < 100; i++) {}
  // console.log(i);

  // if (true) {
  //   let myif = "myif";
  // }
  // console.log(myif);
}

home();

// let이 오류 나는 이유: i는 블록 스코프, for문 안에서만 유효한 값.
// 그 안에서 결과를 출력하면 값이 나오지만 밖에서 접근하면 오류가 뜬다.
