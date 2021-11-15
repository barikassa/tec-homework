

 let product = document.getElementsByClassName("row")[0];
//  for (let i = 0; i < arrayProducts.length; i++) {
//     if (arrayProducts[i].discription ==  "PATEK PHILLIP") {
//       product.innerHTML += `  <div class="col-md-3">
//           <div class="product-top">
//           <img src="${arrayProducts[i].img[0]}" alt="">


        
//               <div class="overlay">
//                   <button class="btn btn-secondary" title="quick shop" type="button"><i class="fa fa-eye"></i></button>
//                   <button class="btn btn-secondary" title="add i wish list" type="button"><i
//                           class="fa fa-heart-o"></i></button>
//                   <button class="btn btn-secondary" title="add to cart" type="button" onclick = "addToCart(${arrayProducts[i].id})"><i
//                           class="fa fa-shopping-cart"></i></button>
//               </div>
//           </div>
//           <div class="product-bottom text-center">
//               <i class="fa fa-star"></i>
//              <i class="fa fa-star"></i>
//              <i class="fa fa-star"></i>
//              <i class="fa fa-star-half-o"></i>
//              <i class="fa fa-star-o"></i> 
//              <h3>${arrayProducts[i].name}</h3>
//              <h5 class="h5">${arrayProducts[i].price}$</h5>
//             </div>  
//       </div>`
//     }
//   };



//   let heart=document.getElementsByClassName("fa fa-heart-o");
//   let eye=document.getElementsByClassName("fa fa-eye");
  
//   for(let i=0;i<eye.length;i++){
//     eye[i].onclick=function(){
//       console.log(arrayProducts[i+20]);
//       if(arrayProducts[i+20].discription == "PATEK PHILLIP"){
//         eye[i].innerHTML += `$<img src="${arrayProducts[i+20].img[0]}" style="width:400px;height:400px;position: absolute;z-index:1">`
//       }
      
//     }
  
//   }
  
//   let arr = [];
// var newOrder = {};
//   for(let i=0;i<heart.length;i++){
//     heart[i].onclick=function(){
//       if(arrayProducts[i+20].discription == "PATEK PHILLIP"){
//         heart[i].style.color="red";
//         newOrder = {
//           id: 21,
//           name: arrayProducts[i].name,
//           price: arrayProducts[i].price,
//           discription: arrayProducts[i].discription,
//           img: arrayProducts[i].img,
//         }
//         // sumlove += heart[i];
//         arr.push(newOrder);
//         console.log(arr);
        
//       }
      
//     }
  
//   }


// function addToCart(id) {
//   for(let i=0;i<arrayProducts.length;i++){
//     if(arrayProducts[i].id == id){
//       cartProducts.push(arrayProducts[i]);
//       console.log(cartProducts);
//     }
//   }
// }


axios.get("/products")
.then((response)=>{
  const arrayProducts = response.data;
  console.log(arrayProducts);
  for (let i = 0; i < arrayProducts.length; i++) {
  if (arrayProducts[i].discription == "PATEK PHILLIP") {
    product.innerHTML += ` <div class="col-md-3">
        <div class="product-top">
        <img src="${arrayProducts[i].img[0]}" alt="">
      
            <div class="overlay">
                <button class="btn btn-secondary" title="quick shop" type="button"><i class="fa fa-eye"></i></button>
                <button class="btn btn-secondary" title="add i wish list" type="button"><i
                        class="fa fa-heart-o"></i></button>
                <button class="btn btn-secondary" title="add to cart" type="button" onclick = "addToCart(${arrayProducts[i].id})"><i
                        class="fa fa-shopping-cart" ></i></button>
            </div>
        </div>
        <div class="product-bottom text-center">
            <i class="fa fa-star"></i>
           <i class="fa fa-star"></i>
           <i class="fa fa-star"></i>
           <i class="fa fa-star-half-o"></i>
           <i class="fa fa-star-o"></i> 
           <h3>${arrayProducts[i].name}</h3>
           <h5 class="h5">${arrayProducts[i].price}$</h5>
          </div>  
    </div>`
  }
}


  let heart=document.getElementsByClassName("fa fa-heart-o");
  let eye=document.getElementsByClassName("fa fa-eye");
  
  for(let i=0;i<eye.length;i++){
    eye[i].onclick=function(){
      console.log(arrayProducts[i+20]);
      if(arrayProducts[i+20].discription == "PATEK PHILLIP"){
        eye[i].innerHTML += `$<img src="${arrayProducts[i+20].img[0]}" style="width:400px;height:400px;position: absolute;z-index:1">`
      }
      
    }
  
  }
  
  let arr = [];
var newOrder = {};
  for(let i=0;i<heart.length;i++){
    heart[i].onclick=function(){
      if(arrayProducts[i+20].discription == "PATEK PHILLIP"){
        heart[i].style.color="red";
        newOrder = {
          id: 21,
          name: arrayProducts[i].name,
          price: arrayProducts[i].price,
          discription: arrayProducts[i].discription,
          img: arrayProducts[i].img,
        }
        // sumlove += heart[i];
        arr.push(newOrder);
        console.log(arr);
        
      }
      
    }
  
  }


function addToCart(id) {
  for(let i=0;i<arrayProducts.length;i++){
    if(arrayProducts[i].id == id){
      cartProducts.push(arrayProducts[i]);
      console.log(cartProducts);
    }
  }
}

})
  