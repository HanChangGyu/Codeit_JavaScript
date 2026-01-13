let i = 1;
let j = 1;

for (let i = 1; i <= 9; i++) { // 이중 반복문이라 안에 또 for문을 작성해서 1 * 1~9까지 돌리고 2단으로 넘어가야함
  for(let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log(`${i}단`)
}
