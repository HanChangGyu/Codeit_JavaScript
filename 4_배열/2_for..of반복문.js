// for .. of

/** 이런식으로 for문을 사용해도 가능하지만 
 * for of 를 사용하면 더 간결
 let influencer = ['suwonlog', 'small.tiger',
'Minam.ludens', 'cu_convenience24']

for (let i = 0; i < influencer.length; i++) {
    console.log(influencer[i]);
} 
 */

for (변수 of 배열) {
    동작부분;
}

for (let element of influencer) {
    console.log(element);
}

// 예제 (집계)
// 투표함
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];

// 표를 확인할 칠판
let voteCounter = {}; // 투표함에서 꺼낸 이름을 적을 빈칠판

for (let name of votes) { // 투표함의 name을 하나씩 꺼낼거다
  if (name in voteCounter) { // 칠판안에 name이 있는가? 확인
    voteCounter[name]+= 1; // 존재한다면 +1
  } else { 
    voteCounter[name] = 1; // 그렇지않다면 1
  }
}
// 결론은 else문이 실행되면서 1이 작성되고 그 이후부터 +1로 투표 집계

// 후보별 득표수 출력
console.log(voteCounter);