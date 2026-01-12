// if문 
let temperature = 1;

if (temperature <= 0) {
    console.log('물이 업니다.')
} else {
    console.log('물이 얼지 않습니다.');
}

console.log('');

// 간단한 이용 예제
function checkHeight(height) {
	if(height >= 120) {
	  console.log('탑승이 가능합니다.');
	} else {
	  console.log('탑승이 불가능합니다.');
	}
}

checkHeight(120);
checkHeight(115);
checkHeight(130);

console.log('');

let temperature2 = 120;

if (temperature2 <= 0) {
    console.log('물이 업니다.')
} else if (temperature2 < 100) {
    console.log('물이 얼지도 끓지도 않습니다.');
} else if (temperature2 < 150) {
    console.log('물이 끓습니다')
} else {
    console.log('물이 모두 수증기가 되었습니다.');
}

console.log('');

// 예제 
// 나의 나이 및 성별
let myAge = 26;
let myGender = 'male';

// 호칭 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';


function whatShouldICallYou(yourAge, yourGender) {
  if (myAge === yourAge) {
    return callFriend;
  } else if (myAge > yourAge) {
    if (yourGender === 'male') {
      return callYoungerBrother;
    } else if (yourGender === 'female') {
      return callYoungerSister;
    }
  } else {
    if (yourGender === 'male') {
      return callOlderBrother;
    } else if (yourGender === 'female'){
      return callOlderSister;
    }
  }
}

let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);