// 템플릿 문자열
// template

let year = 2000;
let month = 12;
let day = 31;


console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);


let myNumber = 7;

function getTwice(x) {
    return x * 3
}

console.log(`${myNumber}의 세 배는 ${getTwice(myNumber)}입니다 !`);


function calcWage(name, time, wage) {
  let total = time * wage;

  console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`);
}


calcWage('조유식', 202, 21340);
calcWage('정원규', 157, 12980);
calcWage('성백현', 189, 13770);
calcWage('이재형', 222, 15780);