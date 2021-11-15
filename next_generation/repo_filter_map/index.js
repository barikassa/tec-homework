//!1
// ללמוד מה ההבדל בין value type ל reference type ואיך stack \  heap מתקשר לזה.





//!2
//!צור מערך מ1 עד 1000 בקפיצות 1 וחשב בעזרת map את השורש הריבועי  (בחזקת חצי) של המערך והדפס אותו.

const arr = [];
console.log(arr);
let counter = 0;
for (let i = 0; i < 1000; i++) {
  let arrI = counter++;
  arr.push(arrI);
}
const squarRootOfArr = arr.map(Math.sqrt);
console.log(arr);
console.log(squarRootOfArr);

//! כתוב פונקציה arrow function אשר מקבל מערך של מספרים ומחזירה בעזרת filter מערך של המספרים הזוגיים.

const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arrNum.filter(returnEvenNum);

function returnEvenNum(arg) {

  if (arg%2 == 0) {
    console.log(arg);
  }   
}
returnEvenNum(arrNum);












