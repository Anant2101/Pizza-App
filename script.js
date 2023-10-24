let pizza = [
  {
    id: 0,
    name: "Tandoori Paneer",
    variant: '',
    price: 399,
    description:
      "Spiced paneeer, Onion,Green Capsicum & Red Paprika in Tandoori Sauce",
    quantity: 1,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.4ef45717e972cf45b43c010e3cde5a22.1.jpg?width=550",
    regular:"135",
    medium :"245",
    large : "325",
    add_ons :'',
    total: '' ,
  },
  {
    id: 1,
    name: "Veggie Supreme",
    variant: '',
    price: 499,
    description:
      "Black Olives,Green Capsicum, Mushroom, Onion,Red Paprika, Sweet Corn",
    quantity: 1,
    regular:"185",
    medium :"235",
    large : "385",
    add_ons :'',
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=550",
    total: '' ,
  },
  {
    id: 2,
    name: "Double Paneer Supreme",
    variant: '',
    price: 350,
    description: "Spiced Paneer, Herbed Onion&Green Capsicum, Red Paprika",
    quantity: 1,
    regular:"199",
    medium :"299",
    large : "399",
    add_ons :'',
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-paneer-supreme.3cb382529b41d14d4a041b5cc5e64341.1.jpg?width=550",
    total: '' ,
  },
  {
    id: 3,
    name: "Margherita",
    variant: '',
    price: 600,
    description: "Cheese",
    quantity: 1,
    regular:"199",
    medium :"249",
    large : "399",
    add_ons :'',
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550",
    total: '' ,
  },
  {
    id: 4,
    name: "Veggie Kebab Surprise",
    variant: '',
    price: 450,
    description:
      "Veg Kebab,Onion,Green Capsicum,Tomato & Sweet Corn in Tandoori Sauce",
    quantity: 1,
    regular:"125",
    medium :"265",
    large : "399",
    add_ons :'',
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veg-kebab-surprise.abab1dff179ab8cf95a59f30d6352297.1.jpg?width=550",
    total: '' ,
  },
  {
    id: 5,
    name: "Chicken Supreme",
    variant: '',
    price: 530,
    description: "Herbed Chicken,Schezwan Chicken Meatball,Chicken Tikka",
    quantity: 1,
    regular:"175",
    medium :"215",
    large : "395",
    add_ons :'',
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-supreme.6d53f104f071d304a47440f2fffa7378.1.jpg?width=550",
    total: '' ,
  },
  {
    id: 6,
    name: "Chicken Tikka Supreme",
    variant: '',
    price: 650,
    description: "Chicken Tikka,Chicken Malai Tikka,Onion,Red Paprika",
    quantity: 1,
    regular:"172",
    medium :"242",
    large : "389",
    add_ons :'',
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka-supreme.830de5a911ca95a30e4ca98e529f1b3a.1.jpg?width=550",
    total: '' ,
  },
  {
    id: 7,
    name: "Triple Chicken Feast",
    variant: '',
    price: 430,
    description:
      "Schezwan Chicken Meatball Herbed Chicken,Chicken Sausage,Geen Capsicum, Onion,Red Paprika",
    quantity: 1,
    regular:"135",
    medium :"245",
    large : "325",
    add_ons :'',
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/triple-chicken-feast.e4a546e7a8581a60952b99e3fe22987e.1.jpg?width=550",
    total: '' ,
  },
  {
    id: 8,
    name: "Chicken Tikka",
    variant: '',
    price: 250,
    description: "Chicken Tikka, Onion, Tomato",
    quantity: 1,
    regular:"172",
    medium :"242",
    large : "389",
    add_ons :'',
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka.6d441a65371e941db36c2754586119a8.1.jpg?width=550",
    total: '' ,
  },
  {
    id: 9,
    name: "Double Chicken Sausage",
    variant: '',
    price: 270,
    description: "Chicken Sausage",
    quantity: 1,
    regular:"199",
    medium :"299",
    large : "399",
    add_ons :'',
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-chicken-sausage.f172dd6a365e90e655258b17555e74ad.1.jpg?width=550",
    total: '' ,
  },
  {
    id: 10,
    name: "Spiced Chicken Meatballs",
    variant: '',
    price: 630,
    description: "Schezwan Chicken Meatball Onion",
    quantity: 1,
    regular:"175",
    medium :"215",
    large : "395",
    add_ons :'',
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/spiced-chicken-meatballs.abd238e81080106d181567a9b52844ae.1.jpg?width=550",
    total: '' ,
  },
];

top_final = 0;
let totalPizza_Price= 0;

//get data from local storage
function getDataFromLocalStorage(){
  let data = localStorage.getItem("pizza_data");
  if (data != null) {
    product_data = JSON.parse(data);
  } else {
    product_data = "";
  }
  return product_data;
}

//display data in the main page
function printData() {
  let str = "";
  pizza.forEach((items, index) => {
    str += `
         <div class="col-sm-4 d-flex">
        <div
         class="card h-80 shadow-lg p-3 mb-5 bg-white rounded"
         style="width: 400px">
         <img class="card-img-top" src="${items.img}" alt="Card image" />
          <div class="card-body">
        <h4 class="card-title">${items.name}</h4>
        <p class="card-text">${items.description}</p>
        <a href="#" onclick="clickedCard(${items.id})" class="btn btn-dark">Click for Details</a>
      </div>
    </div>
  </div>
  `;
  });
  document.getElementById("pizza_details").innerHTML = str;
}
printData();


//after selecting pizza this will display in 2 page

function customizeData() {
  let product_data = getDataFromLocalStorage();
 
  document.getElementById('product_image').innerHTML = `<img src=${product_data.img} class='img-fluid' width='100%' height="500" />`
  document.getElementById('product_name').innerHTML = product_data.name;
  document.getElementById('product_description').innerHTML = product_data.description;
  //document.getElementById('product_price').innerHTML = '₹ '+product_data.price;
}


function clickedCard(data) {
    let c = pizza[data];
    localStorage.setItem("pizza_data", JSON.stringify(c));
    window.location = "customize.html";
}


function updatePrice(variant){

    let vat = document.getElementById(variant).value; 
    let product_data = getDataFromLocalStorage();
   
    if (variant === 'Regular') {
        product_data.price = product_data.regular;
    } else if (variant === 'Medium') {
        product_data.price = product_data.medium; // Change to the desired price for Medium
    } else if (variant === 'Large') {
        product_data.price = product_data.large; // Change to the desired price for Large
    }
    
    product_data.variant = vat;
    //document.getElementById('product_price').innerHTML = product_data.price; 
   
    localStorage.setItem("pizza_data", JSON.stringify(product_data));
    customizeData() 
}

// This will display data for Toppins 
function selectedPizza(){

  document.addEventListener("DOMContentLoaded", function () {
    const toppingsList = document.getElementById("toppings-list");
    const cartList = document.getElementById("cart-list");
    const totalPrice = document.getElementById("total-price");

    //document.getElementById("product_price").innerHTML = "";
    let cart = [];
    const maxToppings = 5;

    toppingsList.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        const topping = event.target.dataset.topping;
        const price = parseFloat(event.target.dataset.price);

        const existingTopping = cart.find(
          (item) => item.topping === topping
        );

        if (existingTopping) {
          if (existingTopping.quantity < maxToppings) {
            existingTopping.quantity += 1;
            existingTopping.totalPrice += price;
          }
        } else if (cart.length < maxToppings) {
          cart.push({
            topping,
            quantity: 1,
            totalPrice: price,
          });
        }
        display(price);
      }
    });

    function display(price) {
      cartList.innerHTML = "";
      let total = 0;

      cart.forEach((item) => {
        const listitem = document.createElement("li");

        listitem.innerHTML = `
        ${item.quantity}x ${item.topping} - ${item.totalPrice.toFixed(2)}
        <button class="remove-button btn custom-btn1 btn-light mb-2" data-topping= "${
          item.topping
        }">Remove<button>
        `;

        const removeBtn = listitem.querySelector(".remove-button");

        removeBtn.addEventListener("click", function (event) {
          const toppingToBeRemoved = event.target.dataset.topping;
          const existingTopping = cart.find(
            (item) => item.topping === toppingToBeRemoved
          );

          if (existingTopping) {
            if (existingTopping.quantity > 1) {
              existingTopping.quantity -= 1;
              existingTopping.totalPrice -= (price);
            } else {
              const index = cart.indexOf(existingTopping);
              cart.splice(index, 1);
            }
          }
          display();
        });

        cartList.appendChild(listitem);

        total += item.totalPrice;
      });
     // totalPrice.textContent = `Total: ${total.toFixed(2)}`;
    
      // this will add toppings in localstorage
      localStorage.setItem('topping', JSON.stringify(cart))
    }
  });

  //this will add toppings varians and price in localstorage

  let product_data = getDataFromLocalStorage();
  console.log("sds")
  console.log(product_data)

}

function cartDetails(){

  let cartData = JSON.parse(localStorage.getItem("cart_data")) || [];
  let cartItemsHTML= '';
  console.log(cartData)
  if(cartData.length == 0){
    cartItemsHTML = "<p>Your Cart is Empty</p>";
    document.getElementById('CheckoutButton').style.display = 'none';
  }else{
    document.getElementById('CheckoutButton').style.display = 'block';

    cartData.forEach((items , index)=>{
      cartItemsHTML +=`<div class="card mb-3 shadow-sm p-3 mb-5 bg-white rounded" style="width: 60rem;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${items.img}" class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">${items.name}</h2>            
            <p class="card-text">${items.description}</p>
            <h5 class="card-text"> Variant is ${items.variant} ₹${items.price}</h5>
            <div class="form-group">
            <lable for="quantity">Quantity:</lable>
            <input type="number" class="form-control" id="quantity-${items.id}" value="${items.quantity}" min="1">
            </div>
            <button class="btn btn-light" onclick="updateQuantiy(${items.id})">Edit</button>
            <p class="card-text">Quantity: ${items.quantity}</p>
            <h3 class="card-text"></h4>
            ${getTopping()}
            <p class="card-text">Topping total ${top_final}</p>
            <p class="card-text" id="Cart-Price"> Total Pizza Price: ₹ ${(items.price * items.quantity) + top_final }</p>
            <p class="card-text" id="edit-Pizza" onclick="clickedCard(${items.id})"><u>Want to edit this Pizza ?</u></p>
            <button class="btn btn-dark" onclick="deleteCartItem(${items.id})">Remove Pizza </button>
          </div>
        </div>
      </div>
    </div>`
    totalPizza_Price += ((items.price * items.quantity) + top_final);
    cartData[index].total = (items.price * items.quantity) + top_final;
    })
  }
  
  document.getElementById('cart-items').innerHTML = cartItemsHTML;  
  document.getElementById('CheckoutButton').innerHTML =`Proceed to checkout ` + totalPizza_Price
  localStorage.setItem('cart_data', JSON.stringify(cartData));

}

function getTopping(){
  let toppin_data =JSON.parse(localStorage.getItem("topping")) || [];
  if(toppin_data.length == 0){
    return '<p>No topping Selected</p>'
  }else{
    let toppingHTML = `<h5>Selected Toppings:</h5></ul>`
    toppin_data.forEach(items=>{
      toppingHTML += `<li>${items.quantity}x ${items.topping}  </li>`
      top_final += items.totalPrice;
    });
    toppingHTML+= "</ul>"
    return toppingHTML;
  }
}

function deleteCartItem(id){
  let cartData = JSON.parse(localStorage.getItem("cart_data")) || [];
  newArr = cartData.filter((items)=>{
    return id !== items.id
  })
  cartData.quantity = 0;
  cartData = newArr;
  localStorage.setItem('cart_data', JSON.stringify(cartData));
  cartDetails();
}

function updateQuantiy(id){
  const quantityInput = document.getElementById(`quantity-${id}`);
  const newQuantity = parseInt(quantityInput.value);

  if(newQuantity > 0){
    let cartData = JSON.parse(localStorage.getItem("cart_data")) || [];
    const itemIndex = cartData.findIndex((item)=> item.id === id) 

    if(itemIndex !== -1){
      cartData[itemIndex].quantity = newQuantity;
      localStorage.setItem('cart_data', JSON.stringify(cartData));
      cartDetails();
    }
  }
}


function updateCartPage(){
  let product_data = getDataFromLocalStorage();
  let cartData =JSON.parse(localStorage.getItem("cart_data")) || [];
  console.log(cartData)

  const existingPizza = cartData.find(item => item.id === product_data.id)

  if(existingPizza){
    existingPizza.quantity += 1;
  }else{
    cartData.push({...product_data, quantity : 1});
  }
  console.log(cartData)
  localStorage.setItem('cart_data', JSON.stringify(cartData));
  window.location = 'cart.html'
}

 function done(){
  //alert('Your order has been placed you can check in order Detais');
  window.location = "checkout.html";
 }

 function orderConfirmed(){
   let random = Math.floor(Math.random()*900000) + 10000;
   document.getElementById('random-id').innerHTML =`#`+random;
   var todayDate = new Date().toISOString().slice(0, 10);
  document.getElementById('date').innerHTML  = todayDate;

}