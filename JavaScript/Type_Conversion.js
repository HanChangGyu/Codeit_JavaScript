// 형 변환
// 산술 연산

console.log(4 + '3'); // 43 문자열 계산, 문자열이 더 강해서 한쪽에 문자열이 있으면 문자열로 계산
console.log(4 + 3); // 7
console.log(5 - true); // 4 true 1로 자동으로 형 변환
console.log(5 * false); // 0 false 0으로 자동 형 변환
console.log(6/ '2'); // 2 나누기 연산이기에 자동으로 숫자 2로 변환
console.log('6' ** true); // 6 양쪽이 숫자가 아님에도 ** 연산이라 자동 숫자 변환
console.log(6 % 'two'); // NaN 'two'라는 값은 NaN이기에 어떤 값과 계산해도 NaN

console.log('');

// 관계 비교 연산
console.log(2 < '4');
console.log(2> false);
console.log('2' <= true);
console.log('one' >= 1);


console.log('');
// 같음 비교 
console.log(1 === '1'); // 일치, 형변환X
console.log(0 === false);
console.log(2 == '2'); // 동등, 형변환 
console.log(0 == false);