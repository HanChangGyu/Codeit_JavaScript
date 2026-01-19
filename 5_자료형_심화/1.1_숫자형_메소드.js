// Date 객체처럼 연산을 유용하게 사용하기 위해 Math 라는 객체 존재

// 절댓값 (Absolute Value)
console.log(Math.abs(-100));
console.log(Math.abs(100));

// 결과 같음

// 최댓값 (Maximum)
console.log(Math.max(2, -3, 5, 7, 0));
// 7 파라미터로 여로 수를 넘겨주면 가장 큰 값이 리턴


// 최솟값 (Minimum)
console.log(Math.min(2, -3, 5, 7, 0))
// -3 가장 작은 값이 리턴


// 거듭제곱 (Exponentiation)
console.log(Math.pow(2, 3))
console.log(Math.pow(5, 2))
// 8, 25 ( 2의 3승, 5의 2승 x의 y승 결괏값)


// 제곱근 (Square Root)
console.log(Math.sqrt(25));
console.log(Math.sqrt(49));
// 5, 7 (제곱의 반대 x의 제ㅔ곱근이 리턴)


// 반올림 (Round)
console.log(Math.round(2.4));
console.log(Math.round(2.5));
console.log(Math.round(2.1));
// 2, 3, 2 반올림


// 난수 (Random)
console.log(Math.random());
console.log(Math.random());
// 0 이상 1 미만의 값이 랜덤으로 리턴