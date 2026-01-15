// Date
let myDate = new Date();
// let myDate = new Date('2020-08-01');

console.log(myDate);

let hours = now.getHours();     // 시
let minutes = now.getMinutes(); // 분
let seconds = now.getSeconds(); // 초

console.log(`현재 시간은 ${hours}시 ${minutes}분 ${seconds}초야.`);

console.log('');
// 예제 
let today = new Date(2112, 7, 24);
let jaeSangStart = new Date(2109, 6, 1);

function workDayCalc(startDate) {
  let timeDiff = today.getTime() - startDate.getTime();
  let dayDiff = timeDiff / 1000 / 60 / 60 / 24; 

  console.log(`오늘은 입사한 지 ${dayDiff + 1}일째 되는 날 입니다.`);
}

workDayCalc(jaeSangStart);
