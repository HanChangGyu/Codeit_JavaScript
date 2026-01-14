// 객체 (Object)
let code = {
    name: '규',
    bornYear: '2000',
    'is VeryNice' : true,
    worstCourse: null,
    bestCourse: {
        title: '자바스크립트 공부',
        language: 'JavaScript'
    }
};

// 점 표기법 (objectName.propertyName)
console.log(code.name);

// 대괄호 표기법(objectName['propertyName])
console.log(code['is VeryNice']); // 프로퍼티 네임을 좀 더 유연하게 구성 가능

// 객체 안의 객체 (objectNamep.propertyName.propertyName)
console.log(code.bestCourse.language); // 대괄호 사용 가능

// 존재하지 않는 프로퍼티에 접근하려면 undefind

console.log('---------------');
// 영어 연습장 예제

let myVoca = {
  function: '함수',
	variable: '변수',
	constant: '상수',
	local: '지역의',
	global: '전반적인',

};

console.log(myVoca);
console.log(myVoca.local);
console.log(myVoca.constant);
console.log(myVoca.function);

// 수정할 때
myVoca.local = '지역구';
// 새로운 정보를 추가 
myVoca.name = '말해보카';
// 삭제할 때
delete myVoca.global;

// 예제 2
let myHero = {
  name: "피카츄전기",
  level: 1,
  hp: 100,
  weapon: "멀티미터",
  isWorking: false,
};

// 1. 필요 없는 정보 2개를 삭제
// (이제 싸움보다는 기술에 집중하기 위해 hp와 weapon을 버림)
delete myHero.hp;
delete myHero.weapon;

console.log("--- 삭제 후 캐릭터 ---");
console.log(myHero);
console.log(myHero.hp); // 삭제되었으므로 undefined가 나와요


// 2. 새로운 능력치 4개를 추가
myHero.rank = "초급 기술자";
myHero.tool = "인두기";
myHero.battery = "95%";
myHero['special move'] = "백만볼트"; // 띄어쓰기가 있는 이름 추가!


console.log("--- 업데이트 후 캐릭터 ---");
console.log(myHero);
console.log(myHero.rank);


// 3. 필살기(special move)의 내용을 출력
console.log("--- 필살기 확인 ---");
console.log(myHero['special move']);