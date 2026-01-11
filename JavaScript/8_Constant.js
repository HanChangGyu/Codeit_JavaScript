// 상수 (constant)
const PI = 3.14 // 원주율
let radius = 0; // 반지름

// 원 넓이 공식
function calculateArea() {
    return PI * radius * radius;
}

// 다른 반지름의 경우
function printArea() {
    return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`;
}

radius = 5;
console.log(printArea());

radius = 11;
console.log(printArea());

radius = 15;
console.log(printArea());

console.log('');
// 함수와 변수 이용
const adultTag = '삑!';
const teenagerTag = '삑삑!';
const transferTag = '환승입니다!';
const errorTag = '삑삑삑!';

function tagNotification(tagCase) {
  console.log(tagCase);
}

tagNotification(adultTag);
tagNotification(teenagerTag);
tagNotification(transferTag);
tagNotification(errorTag);
tagNotification(adultTag);