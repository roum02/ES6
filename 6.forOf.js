var data = [1, 2, undefined, NaN, null, ""];

data.forEach(function (value) {
  // console.log(value);
});

// for in 은 원래 오브젝트를 순회하는 것임
// (그런데 배열도 오브젝트라서 동작이 됨)
// for in을 썼을 때, 상위 값도 포함해서 순회함.

Array.prototype.getIndex = function () {};

for (let idx in data) {
  console.log(data[idx]);
}

// 자기 자신이 가진 객체 이외에 상위 추가된 객체도 나타냄
// 그래서 for in을 배열에서 쓰면 안되는 것

// 그래서 for of라는 것이 새로 나왔다.
for (let value of data) {
  console.log(value);
}

//그런데 for of는 배열만은 위한 것은 아니다.
// 문자열을 캐릭터 단위로 돌면서 순회
var str = "hello world!";
for (let value of str) {
  console.log(value);
}
