let members = ['쿤갈레', 'Zerrard66', '우리생각해써',
    '흙토끼', 'End Miracle'];

console.log(members.length); // members의 길이, 안에 몇 개의 값이 있는지
console.log(members['length']);


// 예제
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

for (i = 0; i < celsiusTemps.length; i++) {
  let C = celsiusTemps[i];
  let F = ( C * 9 / 5 ) + 32;
  fahrenheitTemps.push(F); //  fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32;
}
console.log(fahrenheitTemps);