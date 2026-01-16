// 배열 메소드
let members = ['쿤갈레', 'Zerrard66', '우리생각해써',
    '흙토끼', 'End Miracle'];

console.log(members);
delete members[4];
console.log(members);

// splice(startIndex, deleteCount,item)
members.splice(1, 1, 'NiceCode', 'HiCode'); // 삭제하고 싶은 인덱스 넣기
console.log(members);
unde