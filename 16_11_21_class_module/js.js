// מודל הינו קטע קוד בהתאם לצורך מסויים והיתרונות שלו, ניתן להשתמש בו בכמה דפים שונים באוו מודל
// כל מה שצריך לשעות זה אקספוט אימפורט
//todo 1
// let a = 1,
//   b;
// b = a;
// a++;
// console.log(a, b);

//todo   ברגע שיוצרים משתנה זה נשמר בזיכרון, קודם כל זה הולך ישירות לסטאק. במקרה שהמשתנה הוא מסוג פרימיטיבי אז יוצר כתובת ובתוכו את ערך
//todo   ברגע שיוצרים משתנה אחר ללא ערך זה פותח לי כתובת ללא ערך.ברגע שאני אשווה את המשתנה עם ערך למשתנה הריק, המשתנה ערך שומר את ערך של המתשנה עם ערך בכתובת של הריק
//! --- refrence type
// במקרה של ריפרנס זה שומר רק את הכתובת לכן גם הוספה של משתנה ריק והשוואתו למשתנה עם אובייקט זה ישמור את הכתובות לכן ישמור את כל המשתנה
// let objA = { description: "salary 1", amount: 7000 },
//   objB;
// objB = objA;
// objA.amount++;
// console.log(objA);
// console.log(objB);
// objB.description = "salary 2";
// console.log(objA);
// console.log(objB);
// ----------------------------------------------------------------------------------------------------------------------------
// todo 2
//todo במקרה זה a=3, b=1
let a = 1,
  b;
b = a;
a += 2;
console.log(a, b);

// --- refrence type
// let objA = { description: "salary 3", amount: 7000 },
//   objB;
// objB = objA;
// objA.amount++;
// all object will be printed
// console.log(objA);
// all object will be printed
// console.log(objB);
// it will change to objB the salary value
// objB.description = "salary 2";
// print obj with salary2 and amount 7001
// console.log(objA);
// print objB with salary2 
// console.log(objB);

// מושר השכל במקרה של ריפרנס כל השינויים מתנהלים על כתובת אחת ביפ לכן השינויים יהיה דומים
// ------------------------------------------------------------------------------------------------------------------------------------
// let array1,array2 = [1,2,3,6];  
// array1 = array2;
// array1[0]=8;
// array2[1]=18;
// console.log(array1 == array2);
// console.log(array1,array2)



//!-----------------------------------------------------------------------------------------------------------------------------------
//todo-----------------------------------------------------------------------------------------------------------------------------------
//!-------------------------------------------------------------------------------------------------------------------------------------

// todo  class-1
class student {
  constructor(name, age, gender) {
    (this.name = name), (this.age = age), (this.gender = gender);
  }
  printStudentDetails() {
    console.log(this.name, this.age, this.gender);
    document.getElementById(
      "div"
    ).innerHTML += `<h1>name:${this.name}<br>age:${this.age}<br>gender:${this.gender}</h1>`;
  }

  isYoung() {
    //   console.log("1");
    if (this.age < 18) {
      console.log("he is a kid");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }
}

const st1 = new student("yacov", 28, "male");
const st2 = new student("maayan", 22, "female");
st1.printStudentDetails();
st2.printStudentDetails();

//!---------------------------------------------------------------------------------------------------
//todo class-2
const isY1 = new student("dani", 45, "male");
const isY2 = new student("caliber", 17, "male");

isY1.isYoung();
isY2.isYoung();
//!---------------------------------------------------------------------------------------------------------
// todo class-3
const students = [isY1, isY2];
students.forEach((stud) => {
  console.log(stud.name);
});
//!------------------------------------------------------------------------------------------------------------------------
