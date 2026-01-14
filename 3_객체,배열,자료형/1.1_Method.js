// 메소드
let greetings = {
    sayHello: function() {
        console.log('Hello!');
    },
    sayHi: function() {
        console.log('Hi!');
    },
    sayBye: function() {
        console.log('Bye!');
    }
};

greetings.sayHello();

/**
 
  let greetings = {
    sayHello: function(name) {
        console.log(`Hello ${name}!`);
    },  
    sayHi: function() {
        console.log('Hi!');
    },
    sayBye: function() {
        console.log('Bye!');
    }
};

greetings.sayHello{'code'};
 */

// 메소드 예제 (영어 단어 추가, 삭제, 단어와 뜻 불러오는 코드)
let myVoca = {
  addVoca: function (key, value) {
    myVoca[key] = value;
  },
  deleteVoca: function (key) {
    delete myVoca[key];
  },
  printVoca: function (key) {
    console.log(`"${key}"의 뜻은 "${myVoca[key]}"입니다.`);
  },
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');
