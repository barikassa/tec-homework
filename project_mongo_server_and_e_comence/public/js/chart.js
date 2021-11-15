// let divcart = document.getElementById("cartTable");


// let btn = document.getElementById("btn");
// let table = document.getElementById("table");
// let divTotal = document.getElementById("divcart");
// var sum = 0;

// for (let i = 0; i < cartProducts.length; i++) {
//   sum += cartProducts[i].price;
//   table.innerHTML += `<tr id="${cartProducts[i].id}">
//     <td>${cartProducts[i].discription}</td>
//     <td>${cartProducts[i].name}</td>
//     <td>${cartProducts[i].price}$</td>
//     <td><img src="${cartProducts[i].img[0]}"></td>
//     <td><button onclick="removeFromCart(${cartProducts[i].id})" )">remove </button></td>
//   </tr>
//     </table>
//   `

// }
// divTotal.innerHTML = `<p id="sum">TOTAL = ${sum}$</p>`
// console.log(sum);
// let itemsSum = document.getElementById("sum");

// function removeFromCart(id) {
//   for (let i = 0; i < cartProducts.length; i++) {
//     if (cartProducts[i].id == id) {
//       cartProducts.splice(i, 1);
//       document.getElementById(id).innerHTML = "";
//       let allSum = sum1();
//       itemsSum.innerText = `${allSum}$`
//       console.log(cartProducts);
//     }
//   }
// }

// function sum1() {
//   let allSum = 0;
//   for (let i = 0; i < cartProducts.length; i++) {
//     allSum += cartProducts[i].price;
//   }
//   return allSum;
// };
// console.log(sum1());
// ---------------------------------------------------------------------------------------------------------------------------

axios
  .get("/cart")
  .then((response) => {
    const cartProducts = response.data;

    let divcart = document.getElementById("cartTable");

    let btn = document.getElementById("btn");
    let table = document.getElementById("table");
    let divTotal = document.getElementById("divcart");
    var sum = 0;

    for (let i = 0; i < cartProducts.length; i++) {
      sum += cartProducts[i].price;
      table.innerHTML += `<tr id="${cartProducts[i].id}">
    <td>${cartProducts[i].discription}</td>
    <td>${cartProducts[i].name}</td>
    <td>${cartProducts[i].price}$</td>
    <td><img src="${cartProducts[i].img[0]}"></td>
    <td><button onclick="sendCartObj(${cartProducts[i].id})" )">remove </button></td>
  </tr>
    </table>
  `}

  divTotal.innerHTML = `<p id="sum">TOTAL = ${sum}$</p>`
console.log(sum);
let itemsSum = document.getElementById("sum");

function removeFromCart(id) {
  for (let i = 0; i < cartProducts.length; i++) {
    if (cartProducts[i].id == id) {
      cartProducts.splice(i, 1);
      document.getElementById(id).innerHTML = "";
      let allSum = sum1();
      itemsSum.innerText = `${allSum}$`
      console.log(cartProducts);
    }
  }
}

function sum1() {
  let allSum = 0;
  for (let i = 0; i < cartProducts.length; i++) {
    allSum += cartProducts[i].price;
  }
  return allSum;
};
console.log(sum1());
  })
  .catch(function (error) {
    console.log(error);
  });

// -------------------------------------------------------------------------------------------------------------



function sendCartObj(){
axios.post('/cart', {
          id:"id",
          name:"name",
          price:"price",
          discription:"discription",
          img:"img"
        })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

      function deleteProduct() {
        const inputMongoId = document.getElementById("input").value;


        axios
          .delete(`cart/${inputMongoId}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }


