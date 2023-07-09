const ProductData = [
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huaweis re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    },
    {
      id: 6,
      title: "MacBook Pro",
      description:
        "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: 1200,
      thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
    },
    {
      id: 7,
      title: "Samsung Galaxy Book",
      description:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: 1499,
      thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    },
    {
      id: 8,
      title: "Microsoft Surface Laptop 4",
      description:
        "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      price: 1499,
      thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    },
    {
      id: 9,
      title: "Infinix INBOOK",
      description:
        "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      price: 1099,
      thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    },
    {
      id: 10,
      title: "HP Pavilion 15-DK1056WM",
      description:
        "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      price: 1099,
      thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    },
    {
      id: 11,
      title: "perfume Oil",
      description:
        "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      price: 13,
      thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
    },
    {
      id: 12,
      title: "Brown Perfume",
      description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      price: 40,
      thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
    },
    {
      id: 13,
      title: "Fog Scent Xpressio Perfume",
      description:
        "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      price: 13,
      thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
    },
    {
      id: 14,
      title: "Non-Alcoholic Concentrated Perfume Oil",
      description:
        "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      price: 120,
      thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
    },
    {
      id: 15,
      title: "Eau De Perfume Spray",
      description:
        "Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
    },
    {
      id: 16,
      title: "Hyaluronic Acid Serum",
      description:
        "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      price: 19,
      thumbnail: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    },
    {
      id: 17,
      title: "Tree Oil 30ml",
      description:
        "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      price: 12,
      thumbnail: "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
    },
    {
      id: 18,
      title: "Oil Free Moisturizer 100ml",
      description:
        "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
      price: 40,
      thumbnail: "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
    },
    {
      id: 19,
      title: "Skin Beauty Serum.",
      description:
        "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      price: 46,
      thumbnail: "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
    },
    {
      id: 20,
      title: "Freckle Treatment Cream- 15gm",
      description:
        "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      price: 70,
      thumbnail: "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
    },
  ];
  
  //alert("This is a    login");
  function signIn() {
    localStorage.setItem("isLogin",false);
    window.location.href = "../HTML/signIn.html";
  }
  
  function productPage() {
    window.location.href = "../HTML/cart.html";
  }
  
  //localStorage.setItem("ProductData",ProductData);
  localStorage.setItem("ProductData", JSON.stringify(ProductData));
  const getdata = JSON.parse(localStorage.getItem("ProductData"));
  console.log(getdata);
  window.addEventListener("load", auth);
  window.addEventListener("load", getproductData);
  
  window.addEventListener("load", function () {
    const username = JSON.parse(localStorage.getItem("curr_user"));
    document.getElementById("userName").innerText = username.name;
    console.log(username.name);
    document.getElementById("cartCounter").innerText = username.cart.length;
  });
  
  function cartCounterDynamic(){
    const username = JSON.parse(localStorage.getItem("curr_user"));
    document.getElementById("cartCounter").innerText = username.cart.length;
  }
  
  
  
  function getproductData() {
    var productData = JSON.parse(localStorage.getItem("ProductData"));
    console.warn(productData);
  
    var element = productData.map((val) => {
    //   console.log(val);
      return `<div class="col-3 my-4 mx-5">
          <div id="cart-list ">
            <div class="card" style="width: 18rem;">
              <img src=${val.thumbnail} width="150px" height="120px" class="card-img-top" alt="image">
              <div class="card-body">
                <h5 class="card-title">${val.title}</h5>
                <h6 class="card-title">Price : $ ${val.price}</h6>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-success btn-sm px-4" onclick="ADD_CART('${val.id}')">Add to Cart</button>
  
                  <button class="btn btn-dark btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal${val.id}">View Description</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    });
  
    var modals = productData.map((val) => {
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
  
    document.getElementById("dataList").innerHTML = `${element.join('')}`;
    document.getElementById("modalsContainer").innerHTML = `${modals.join('')}`;
  }
  

//   function viewDescr(data){
//     console.log("descr",data)
//      onclick="viewDescr('${val.id}')
//   }
  
  function ADD_CART(data) {
    const add_cart = JSON.parse(localStorage.getItem("ProductData"));
    const cart = JSON.parse(localStorage.getItem("curr_user"));
    const usersDb = JSON.parse(localStorage.getItem("users"));
    const userIn_DB = usersDb.find((u)=>u.email===cart.email)
    console.warn(cart);
    console.warn(usersDb);
    console.warn(userIn_DB);
    console.log(cart.cart.includes(data));
    if(cart.cart.includes(data)){
      alert('Already added');
    }else{
    cart.cart.push(data);
    localStorage.setItem("curr_user", JSON.stringify(cart));
    cartCounterDynamic();
    alert('Added');
    console.warn(cart.cart.push({id:data}));
    }
    
  }

// function ADD_CART(data) {
//     const cart = JSON.parse(localStorage.getItem("curr_user"));
//     const usersDb = JSON.parse(localStorage.getItem("users"));
  
//     // Find the logged-in user in the usersDb
//     const userIndex = usersDb.findIndex((user) => user.email === cart.email);
  
//     if (userIndex !== -1) {
//       // Push the curr_user.cart into the logged-in user's cart
//       usersDb[userIndex].cart.push(...cart.cart);
  
//       // Save the updated usersDb back to local storage
//       localStorage.setItem("users", JSON.stringify(usersDb));
  
//       // Perform any additional operations or update UI as needed
//       cartCounterDynamic();
//       alert("Added to cart");
//     } else {
//       console.log("User not found in usersDb");
//     }
//   }
  
  
  function auth() {
    const auth = localStorage.getItem("isLogin");
    if (auth == true){
      window.location.href = "../HTML/dashboard.html";
    }
  }