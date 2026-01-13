// while문
/**
 * while (조건부분) {
 *  동작부분
 * }
 */

// let i = 1;

while (i <= 10) {
    console.log(`${i}너 최고야!`);
    i++ // if 문과 다르게 추가 조건 부분 등이 없음
}

// 예제 1
let i = 1;

while (i <= 100) {
  console.log(i);
  i += 2;
}

// 예제 2
/**
 * const N = 180;
let i = 1;
let count= 0;

while (i <=  N) {
  if (N % i === 0) {
    console.log(i);
    count++
  }
  i++
}
console.log(`${N}의 약수는 총 ${count}개입니다.`)
 */