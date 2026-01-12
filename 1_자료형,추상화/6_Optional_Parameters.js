// 옵셔널 파라미터 (Optional Parameters)
function introduce(name,age, nationality = '한국 ') {
    console.log(`제 이름은 ${name}입니다`);
    console.log(`나이는 ${age}살 이고,`);
    console.log(`국적은 ${nationality}입니다.`);
}

introduce('코드맨', 5, '미국'); // 파라미터 전달
console.log('');
introduce('코드맨', 5); // 파라미터 생략


// 예시 문제

function orderSetMenu(sandwich, drink = '펩시 제로') {
  console.log(`주문하신 ${sandwich}, ${drink} 세트 메뉴 나왔습니다!`);
}
// 테스트 코드
orderSetMenu('햄버거');
orderSetMenu('상하이 치즈버거', '제로콜라');
orderSetMenu('치킨버거');
orderSetMenu('빅맥 버거', '닥터페퍼제로');
orderSetMenu('에그마요 샌드위치', '환타 파인');