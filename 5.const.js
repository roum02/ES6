function home() {
  const list = ["apple", "orange", "watermelon"];
  list.push("banana");
  console.log(list);
}

home();

// const를 사용하더라도 배열과 오브젝트의 값을
// 변경하는 것은 가능하다. 불변을 의미하지X
// 단지 값을 재할당하는 코드만 불가능

// immutable array: 수정이 불가한 배열
const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");
console.log(list === list2);
