let i = 1;
let j = 1;

for (let i = 1; i <= 9; i++) { // 이중 반복문이라 안에 또 for문을 작성해서 1 * 1~9까지 돌리고 2단으로 넘어가야함
  for(let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log(`${i}단`)
}


// 파보나치 수열 (어려움)
/**
 * let previous = 0; // 1. [왼쪽 주머니]에 0번 카드를 넣고 시작해요.
let current = 1;  // 2. [오른쪽 주머니]에 1번 카드를 넣고 시작해요.

for (let i = 1; i <= 50; i++) { // 3. "자, 이제부터 이 놀이를 50번 반복할 거야!"
  console.log(current);         // 4. 지금 내 [오른쪽 주머니]에 있는 숫자를 크게 외쳐요!

  let temp = previous;          // 5. 잠깐! [왼쪽 주머니] 카드를 잃어버리지 않게 '바구니(temp)'에 담아둬요.
  previous = current;           // 6. [오른쪽 주머니]에 있던 카드를 꺼내서 [왼쪽 주머니]로 옮겨요.
  current = current + temp;     // 7. 아까 바구니에 둔 카드랑 지금 카드를 더해서 [오른쪽 주머니]에 넣어요.
}
 */

