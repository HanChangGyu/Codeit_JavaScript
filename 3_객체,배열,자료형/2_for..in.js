// for in
for (변수 in 객체) {
    동작부분
}

let code = {
    name: '코드',
    bornYear: 2000,
    isVeryNice: true,

}

let myObject = {
  '2': '알고리즘의 정석',
  '3': '컴퓨터 개론',
  '1': '자바스크립트 프로그래밍 기초',
};

for (let key in myObject) {
  console.log(myObject[key]);
}

// 자바스크립트 프로그래밍 기초
//알고리즘의 정석
// 컴퓨터 개론


// 이용 예제 2
let hyesoonScore = {
	'데이터 모델링의 이해': 10,
	'데이터 모델과 성능': 8,
	'SQL 기본': 22,
	'SQL 활용': 18,
	'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
	'데이터 모델링의 이해': 14,
	'데이터 모델과 성능': 8,
	'SQL 기본': 12,
	'SQL 활용': 4,
	'SQL 최적화 기본 원리': 16,
};

function passChecker(scoreObject) {
  let totalScore = 0; // 1. 점수를 합칠 '바구니'를 먼저 만들기

  // 2. 객체 안의 정보를 하나씩 꺼내오는 반복문 (for...in)
  for (let subject in scoreObject) {
    // scoreObject[subject]를 하면 각 과목의 점수(Value)를 가져올 수 있죠?
    totalScore = totalScore + scoreObject[subject]; 
  } 

  // 3. 모든 점수를 다 더한 후에 합격인지 물어봐요.
  if (totalScore >= 60) {
    console.log('축하합니다! 합격입니다!');
  } else {
    console.log('아쉽지만 불합격입니다..');
  }
}

passChecker(hyesoonScore);
passChecker(minsoonScore);

// 대괄호를 사용한건 그 값 안에 진짜 값을 열어서 가져오라는 말