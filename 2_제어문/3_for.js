// for문 (반복문)
// 너 최고야 x 10
for (let i =1; i <=10; i++) {
    console.log('너 최고야!');
}

// 빡 예제
function printTriangle(height) {
  // 1. 바깥쪽 루프: 줄을 결정합니다.
  for (let i = 1; i <= height; i++) {
    let stars = ''; // 각 줄을 시작할 때 빈 바구니를 준비

    // 2. 안쪽 루프: 해당 줄에 별을 몇 개 넣을지 결정합니다.
    // 현재 층수(i)만큼 별을 더해줍니다.
    for (let j = 0; j < i; j++) {
      stars = stars + '*';
    }
    console.log(stars);
  }
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);


/** 출력 결과
 
 * 높이: 1
 *
 높이: 3
 *
 **
 ***
 높이: 5
 *
 **
 ***
 ****
 *****

 */

