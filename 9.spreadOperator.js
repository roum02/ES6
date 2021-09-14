let pre = [100, 200, "hello", null];
// 전개 연산자를 이용하여 배열을 삽입할 수 있다.
let newData = [0, 1, 2, 3, ...pre, 4];

console.log(newData);

function sum(a, b, c) {
  return a + b + c;
}

let pre2 = [100, 200, 300];

// 전개 연산자 이전의 방법
// 배열 그대로를 전달해주고 싶을 때 apply사용
// 두 번째 값을 배열로 받음.
console.log(sum.apply(null, pre2));

// 전개연산자 방법
// 배열을 바꾸지 않고 복사할 수 있음
// 배열을 합치거나 함수의 파라미터로 전달할 수 있음
console.log(sum(...pre2));
