// 펼침연산자

let pre = ["apple", "orange", 100];
let newData = [...pre];
console.log(pre, newData);

// 두 개는 다른 데이터임.
// 새로운 배열로 복사를 뜬 것. concat과 같음
console.log(pre === newData);
