// typeof 연산자
typeof 값 // typeof 뒤에 나오는 형태
console.log(typeof 101);
console.log(typeof 1.0);
console.log(typeof 'spring');

console.log(typeof 'Hello' + 'Codeit'); // stringCodeit
// 사칙 연산보다 우선 순위라 typeof Hello가 우선 출력
console.log(typeof 8 - 3); // NaN
// 이도 같이 사칙 연산보다 우선 순위라 typeof number 와 3을 보아서

// 해결법 괄호사용
console.log(typeof('Hello' + 'Codeit'));
