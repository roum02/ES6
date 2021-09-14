let str = "hello world ! ^^ ~~";
let matchstr = "hello";

// 시작과 끝이 일치하는 메소드인지
console.log(str.startsWith(matchstr));
console.log(str.endsWith(matchstr));

// includes 매칭되는 문자열이 있느냐?
console.log(str.includes("wor"));
