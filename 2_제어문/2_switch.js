// switch문 

// 기본 구조
/* switch (비교할_값) {
    case 조건값_1:
        동작부분;
        break;
    case 조건값_2:
        동작부분;
        break;
    default:
        동작부분;
} */

// 각 등급 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

function checkPrice(grade) {
	switch (grade) {
	  case 'VIP':
	    console.log('VIP석은 15만 원입니다.'); // console.log(`${grade}석은 ${VIPPrice}만 원입니다.)
	    break;
	   case 'R':
	     console.log('R석은 13만 원입니다.'); // 템플릿 리터럴 사용하면 덜 귀찮고 보기 편함
	     break;
	   case 'S':
	     console.log('S석은 10만 원입니다.');
	    break;
	   case 'A':
	     console.log('A석은 8만 원입니다.');
	     break;
	   default:
	   console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.');
	}
}

checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');