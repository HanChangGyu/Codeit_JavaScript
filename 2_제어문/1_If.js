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
