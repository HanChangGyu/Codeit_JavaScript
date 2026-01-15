// 배열 
let courseRanking = [
    '자바스크립트',
    'git 버전관리',
    '컴퓨터 비전',
    '파이썬'
];

// index == PropertyName

// 변수 3개를 따로 만드는 대신...
let fruit1 = "사과";
let fruit2 = "바나나";
let fruit3 = "포도";

// 배열 하나에 다 때려 넣기!
let fruits = ["사과", "바나나", "포도"];

fruits[0] = "망고";
console.log(fruits[0]);

// 배열 추가
// 맨 뒤에 '수박' 추가
fruits.push("수박"); 
// 결과: ["사과", "망고", "포도", "수박"]

// 맨 앞에 '딸기' 추가
fruits.unshift("딸기"); 
// 결과: ["딸기", "사과", "망고", "포도", "수박"]