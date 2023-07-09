function dashboard(){
   window.location.href="../HTML/dashboard.html";
}
function logout(){
   window.location.href="../HTML/signIN.html";
}

window.addEventListener('load',function(){
     
   const username= JSON.parse(localStorage.getItem('curr_user'));
   document.getElementById('userName').innerText =  username.name;
   const cartData = JSON.parse(localStorage.getItem('curr_user'));
   //console.log("USER-CART",cartData.cart);
   const AllProducts = JSON.parse(localStorage.getItem('ProductData'));
   //console.log("ALL-PROD",AllProducts)
   const userCartData=  cartData.cart.map((item)=>{
    
      return AllProducts.find(function(elem){return item == elem.id})
   })
   console.log(userCartData);
   console.log(userCartData.length);
   if (userCartData.length==0){
      const cartList = document.getElementById("cart-list");
      cartList.innerHTML =   `<h1 class="text-center py-5">No Data Found in the Cart</h1>`;
   }

   else{
   var element = userCartData.map((val) => {
  
     return `<div class="col-2 my-4 mx-5">
          <div id="cart-list ">
            <div class="card" style="width: 18rem;">
              <img src=${val.thumbnail} width="150px" height="120px" class="card-img-top" alt="image">
              <div class="card-body">
                <h5 class="card-title">${val.title}</h5>
                <h6 class="card-title">Price : $ ${val.price}</h6>
                <div class="quantity">
                <div class="counter">
                <span class="quan">Quantity :</span>
                <span class="down" onClick='decreaseCount(event, this)'>-</span>
                <input type="text" value="1">
                <span class="up" onClick='increaseCount(event, this)'>+</span>
                </div>
                </div>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-danger btn-sm px-4" onclick="Delete_CART('${val.id}')">Delete</button>
                  <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">View Description</button>
                </div>
              </div>
            </div>
          </div>
          </div>`;
    });

    var modals = userCartData.map((val) => {
      return `<div class="modal fade" id="exampleModal${val.id}" tabindex="-1" aria-labelledby="exampleModalLabel${val.id}" aria-hidden="true">
          <div class="modal-dialog">
           <div class="modal-content">
             <div class="modal-header">
               <h1 class="modal-title fs-5" id="exampleModalLabel${val.id}">${val.title}</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
     
             <div class="modal-body text-center"">
             <img src="${val.thumbnail}"  width="150px" height="120px"/>
             <p>${val.description}</p>
         </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
             </div>
           </div>
         </div>
       </div>`;
    });


    document.getElementById("cart-list").innerHTML = `${element.join('')}`;
    document.getElementById("cart-modal-display").innerHTML = `${modals.join('')}`;
}
})


function Delete_CART(id) {
  const UserCart = JSON.parse(localStorage.getItem("curr_user"));
  console.log(UserCart.cart, id);
  const isFind = UserCart.cart.findIndex(function (c) {
    return c == id;
  });

  if (isFind !== -1) {
    UserCart.cart.splice(isFind, 1); // Remove the item from the array
  }

  console.log(UserCart.cart);
  localStorage.setItem('curr_user', JSON.stringify(UserCart));
  location.reload();
}



function increaseCount(a, b) {
   var input = b.previousElementSibling;
   var value = parseInt(input.value, 10);
   value = isNaN(value) ? 0 : value;
   value++;
   input.value = value;

 }
 
 function decreaseCount(a, b) {
   var input = b.nextElementSibling;
   var value = parseInt(input.value, 10);
   if (value > 1) {
     value = isNaN(value) ? 0 : value;
     value--;
     input.value = value;
   }
 }


