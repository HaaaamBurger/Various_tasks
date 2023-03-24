//----------------------------------------------------------------------------------------------------------------------
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
//----------------------------------------------------------------------------------------------------------------------
// function findOutlier(integers){
//     let even = [], odd = [];
//     integers.forEach(item => item % 2 === 0 ? even.push(item) : odd.push(item));
//     return even.length < odd.length ? even[0] : odd[0];
// }
//
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
//----------------------------------------------------------------------------------------------------------------------
// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
//----------------------------------------------------------------------------------------------------------------------
// function uniqueInOrder(iterable) {
//     let newArr = [];
// for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i + 1]) newArr.push(iterable[i]);
// }
// return newArr;
// }
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//----------------------------------------------------------------------------------------------------------------------
// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
//----------------------------------------------------------------------------------------------------------------------
// function narcissistic(value) {
//     let newStr = value.toString().split('').map(item => Number(item));
//     let result = newStr.reduce((acc,item) => acc += item ** newStr.length,0);
//     return newStr.length === 1 ? true : result === +newStr.join('') ? true : false;
// }
//
//     console.log(narcissistic(54748));
//----------------------------------------------------------------------------------------------------------------------
// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
//----------------------------------------------------------------------------------------------------------------------
// function digPow(n, p){
//     let upper = p;
//     let res = n.toString().split('').reduce((acc,item) => acc += Number(item) ** upper++ ,0);
//     let k = res / n;
//     return (k > 0 && Number.isInteger(k)) ? k : -1;
// }
//
// console.log(digPow(695, 2));

//----------------------------------------------------------------------------------------------------------------------
