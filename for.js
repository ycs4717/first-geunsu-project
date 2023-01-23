let output = ''

for (let i = 0; i<9; i++) {
  for(let j=0; j<(2*i+1); j++){
    output +='*'
  }
  output +='\n'
}
console.log(output)
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***************
// *****************


for (let i = 0; i < 9; i++) {
  for (let k = 0; k <8-i; k++) {
    output +=' ';
  }
  for (let j = 0; j < (2*i+1); j++) {
    output +='*';
  }
  output +='\n'
}
console.log(output)
//         *
//        ***
//       *****
//      *******
//     *********
//    ***********
//   *************
//  ***************
// *****************

  for(let i=2; i<10; i++){
    console.log(i+'단')
    for(let j=1; j<10; j++){
      console.log(i+'*'+j+'='+(i*j));
    }
  }
  
//------------------------------------

const arry =[]
for (let i =0;  i < 3; i++) {
  arry.push((i+1)*3)
}
console.log(arry)

//------------------------------------

let output = 0
for (let i = 1; i < 101; i++) {
  output +=i
}
console.log(`1~100까지 숫자를 모두 더하면 ${output}입니다.`)