
const chalk = require('chalk');
//! ------------------------encoding 1-- 12-10-21-------------------

// const fs=require('fs');
// const txtFile='utf.txt'
// data=fs.writeFileSync(txtFile, 'nodeJS is great');
// if(data == undefined){
//   console.error(chalk.blue("undifind "));
// }
// readF=fs.readFileSync(txtFile)
// console.log(readF);
// // to have a string, have to write the encoding style that will give the nodeJs the abiliy to translate it to strings

// try {
//     readF=fs.readFileSync(txFile,'utf8')
//     console.log(readF);
// } catch (error) {
//     console.log("error");
// }

// ------------------------------2---------------------------------

// const fs=require('fs');
// const fileT='hebre.txt';
// fs.writeFileSync(fileT,'שלום עולם','utf8');
// data=fs.readFileSync(fileT)
// console.log(data);
// // to get a strin - add the utf8/encoding argument 
// data=fs.readFileSync(fileT,'utf8')
// console.log(data);



// --------------------------------------3------------------------------------

// const fs = require('fs');
// const hebrewFile = 'hebre.txt';
// fs.writeFile(hebrewFile, "please add to the hebrew file", (err) => {
//     if (err) throw err
// })
// fs.readFile(hebrewFile, 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// });



// ! exepton 
// ----------------------------------------1--------------------------------------

// if we use throw, what ever we send will be catched by the catch

// console.log(1)
// try {
//     console.log(2);
//     if(e)
//     {
//         throw "some error"
//     }
//     console.log(3);
// } catch (error) {
//     console.log(4);
// }
// console.log(5);



// ----------------------------------------------------2--------------------------

// let e=false;
// console.log(1);
// try {
//     console.log(2);
//     if(e){
//         throw "some error"
//     }
//     console.log(3);
// } catch (error) {
//     console.log(4);
// }
// finally{
//     console.log('clean up')
// }
// console.log(5);





// ----------------------------------------------------3-----------------------------------------------------------

// function divideArg1ByArg2(arg1,arg2){
//     console.log(arg1/arg2);
//     try {
//         if(arg2 === 0){
//             throw 'denominator is zero'
//         }

//     } catch (error) {
//         console.log(error);
//     }
// return arg1/arg2;
// }
// divideArg1ByArg2(4,0);


// !------------------------------------------------------------------------object_persistence-------------------------------------
// -------------------------------------------------------------------1---------------------------------------------------------------------

// const fs = require('fs');
// const bookFile = 'book.txt';
// const file = 'chapter one and two is the best version to creat an amzing life'
// const nameProcess = process.argv[2];
// const discProcess = process.argv[3];
// const pagesProcess = process.argv[4];

// const booksObj = [
//     { name: 'dani safaire', description: 'the wondeLand', pages: 500 },
//     { name: 'laru kamacasi', description: 'save your time', pages: 900 },
//     { name: 'don panju', description: 'be cool', pages: 200 }
// ]


// const commandLineObj = { neme: nameProcess, description: discProcess, pages: pagesProcess }
// booksObj.push(commandLineObj);
// console.log(booksObj);
// const booksObjJason = JSON.stringify(booksObj)

// function creatObj(name, disc, pages) {
//     fs.writeFileSync(bookFile, booksObjJason);
// }
// creatObj(nameProcess, discProcess, pagesProcess)



// ------------------------------------------------------------------------2(the same exericse with one)-----------------------------------------------------------------
// data=fs.readFileSync(bookFile,'utf8')
// dataObj=JSON.parse(data)

// let min=dataObj[0].pages
// for (let i = 1; i < dataObj.length; i++){
//       if(min > dataObj[i].pages){
//           min=dataObj[i].pages;
//       }
// }
// console.log(chalk.blue(min));

//!------------------------------------------! libraryfilesync--------------------------------------------------------------------
// // ----------------------------------------------------------1----------------------------------------------------------

const fs = require('fs');
const bookT = 'library.json';
const nameProg = process.argv[2];
const aoutoProg = process.argv[3];
const pageProg = process.argv[4];


let existObj = [
    { name: 'dani', author: 'jacksone', page: 400 },
    { name: 'ezra', author: 'nabop', page: 600 },
    { name: 'tari', author: 'loooo', page: 600 }
]


let newObj = { name: nameProg, author: aoutoProg, page: pageProg };

 
let check = existObj.find(element => element.name == newObj.name);
if (check == undefined) {
    existObj.push(newObj)}
console.log(existObj);




//!-------------------------------------------------------------2------------------------------------------------------------------























