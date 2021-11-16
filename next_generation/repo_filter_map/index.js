//!1
// ללמוד מה ההבדל בין value type ל reference type ואיך stack \  heap מתקשר לזה.
// evry vaarieble that we create on JS saved on the stack memory, if the variable is refernce-on the stuck it will save the refernce(adress) and on the heap all the data on the same adress
// so waht we see here is if ar1 and ar will be on the same adress, when we do the hasama
// with array
const ar=[1,2,3,4];
const ar1=ar;
ar1[0]=33;
console.log(ar);
console.log(ar1);
// with object 
const p1={name:"avi", age:22};
let p2=p1;
 p2.name="dani";
console.log(p2);
console.log(p1);






//!2
//!צור מערך מ1 עד 1000 בקפיצות 1 וחשב בעזרת map את השורש הריבועי  (בחזקת חצי) של המערך והדפס אותו.

const arr = [];
for (let i = 0; i < 1000; i++) {
  arr.push(i++);
}
const squarRootOfArr = arr.map(Math.sqrt);
// console.log(arr);
// console.log(squarRootOfArr);

//! כתוב פונקציה arrow function אשר מקבל מערך של מספרים ומחזירה בעזרת filter מערך של המספרים הזוגיים.

const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getEven = arrNum=>{
  return arrNum.filter(item=>item%2==0);
}
// console.log(getEven(arrNum));

// the same qustion, d/f solution 


//!3

const arrAbc=[3,6,8,0];

let result1=(r) => {
  return r.filter(multipleByFive)
};

function multipleByFive(arg){
  return arg>5;
}
console.log(result1(arrAbc));

