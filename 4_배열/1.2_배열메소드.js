// 배열 메소드
let members = ['쿤갈레', 'Zerrard66', '우리생각해써',
    '흙토끼', 'End Miracle'];

console.log(members);
delete members[4];
console.log(members);

// splice(startIndex, deleteCount,item)
members.splice(1, 1, 'NiceCode', 'HiCode'); // 삭제하고 싶은 인덱스 넣기
console.log(members);


// splice 예제
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가
fruits.splice(1, 1, '사과', '청포도');


// fruits 배열의 첫 번째 요소를 삭제
fruits.splice(0,1);


// ages 배열에 마지막 요소를 삭제
ages.splice(5);


// ages 배열의 2번, 3번 인덱스를 26, 28로 변경
ages.splice(2,2, 26, 28);


// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가
numbers = [1, 2, 3, 5, 8, 9];


// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제
for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] % 2 !== 0) { // 홀수라면
    numbers.splice(i, 1);    // 해당 인덱스 요소 삭제
  }
}

console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);