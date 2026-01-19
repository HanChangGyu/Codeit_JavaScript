// 다차원 배열 (multidimensional array)

let twoDinmensionsal = [[1, 2], [3, 4]];

console.log(twoDinmensionsal[0][1]);

// 예제 (팀 나누기)
let groups = [
  ['영준', '캡틴'], 
  ['태순', '우재'],
  ['재훈', '지웅'],
  ['윤형', '동욱'],
  ['규식', '소원'],
];

let teams = [
  [],
  [],
];

// 큰 바구니(그룹 아파트)를 0층부터 끝층까지 한 층씩 올라가며 확인
for(let i = 0; i < groups.length; i++) {

  // 그 층에 들어와서, 방(0번 방, 1번 방)을 하나씩 확인
  for(let j = 0; j < groups[i].length; j++) {
    
    // 이 부분이 마법이야! 위치를 바꿔서 넣어주는 핵심 로직
    // groups[i][j] : i층의 j번 방 사람을 꺼내서
    // teams[j][i] : teams 아파트의 j층 i번 방에 넣으라는 뜻
    teams[j][i] = groups[i][j];
  }
}

console.log(teams[0]);
console.log(teams[1]);
