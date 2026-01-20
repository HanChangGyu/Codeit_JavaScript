// 기본형
// Number, String, Object 등을 이야기


// 참조형 복사하기

// 참조형은 값이 할당되는 것이 아니라 주소가 저장

let numbers1 = [1, 2, 3];
let numbers2 = numbers1;

numbers2.push(4);

console.log(numbers1);
console.log(numbers2);

// 참조형 예제

let espresso = ['espresso'];

let americano = [...espresso]; // espresso.slice() 를 사용해도 똑같은 기능!
americano.push('water');

let caffeLatte = [...espresso]; // slice() - 빈 값은 저장되어 있는 값을 다 리턴
caffeLatte.push('milk');

let caffeMocha = [...espresso];
caffeMocha.push('milk', 'chocolateSyrup');

let vanillaLatte = [...espresso];
vanillaLatte.push('milk', 'vanillaSyrup');

console.log(espresso);
console.log(americano);
console.log(caffeLatte);
console.log(caffeMocha);
console.log(vanillaLatte); 
// 레시피가 중복되고 변함이 없기 때문에 slice나 ... 을 사용한 것
// 애초에 중간에 바뀌는 값이 있으면 다른 메소드 사용
// 그저 복사만 하는거라 필터가 되는 메소드를 사용해야함