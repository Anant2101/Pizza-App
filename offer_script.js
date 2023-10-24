let offers =[
    {
        id: 0,
        name: 'Power Play Deal: 2 Presonal Pizzas Starting at Rs 299',
        description : 'Choose any 2 of ypur favourite personal pizza',
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/one-plus-one-personal.c3ade8c1d03061aed591bd7e82a00d74.1.jpg',
    },
    {
        id: 1,
        name : 'Match Time Combo starting at Rs.799 (Save Upto 39%)',
        description: '2 Med Pizza of Choice, 1 Classic Breadstix, 1 Creamy Breadstix,  2 Pepsi Pet Bottles',
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/hut-meal-for-4.bf74056c9c6352ebeb703dfdd998fbe5.1.jpg',
    },
    {
        id: 2,
        name : 'Super Value Deal : 2 Medium Pizzas starting at Rs 649',
        description: 'Choose any 2 of your favorite medium pizza',
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/one-plus-one.3bd9e1cd8f0d063f07ff0f57df49b96c.1.jpg',
    },
    {
        id: 3,
        name : 'Flavour Fun Box of 4',
        description: 'Get 4 assorted Flavor Fun Pizzas. Perfect pizza crust topped with exciting new sauces, cheesy dressing & your favorite toppings',
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/flavour-fun-box-of-4A.5c57e8dd9c148ef364faece20cc6746b.1.jpg',
    },
    {
        id: 4,
        name : '2 Personal San Francisco Style Pizzas (Farmer’s Pick & Veg Exotica) @ Rs. 299',
        description: 'Enjoy personal Farmer’s Pick & Veg Exotica pizzas with San Francisco style crust that’s light & crispy.',
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/one-plus-one-baby-corn.e5320968332bd7a300a5d01a3e54f425.1.jpg',
    },
    {
        id: 5,
        name : '1 Plus 1 San Francisco Style',
        description: 'Choose from 2 of your favorite personal pizza with new San Fransisco Crust',
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/1-plus-1-san-francisco-style.3d7c4e23cc5a55733a7b6b6bb3e233a4.1.jpg',
    },
    {
        id: 6,
        name : 'Hut Treat Box 4 San Francisco Style',
        description: '2 Med Pizza with new San Fransisco Crust, 1 Classic Breadstix, 1 Creamy Breadstix, 2 Pepsi Pet Bottles',
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/hut-treat-box-4-san-francisco-style.974927c3c1384fe85e1c7e2bbb3b5069.1.jpg',
    },
    {
        id: 7,
        name: 'Meal for 2 with Pizza & Classic Bread Stix',
        description: '2 Personal Pizza Upto Veg Signature, 1 Classic Bread Stix',
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/double-treat-box.f45de84ca09877604b2f73728c08a667.1.jpg',
    },
    {
        id: 8,
        name: 'Stuffed Crust - Meal for 2',
        description: 'Delicious Meal for 2 with great choice of pizzas and signature crusts with Pepsi',
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/stuffed-crust-meal-for-2.119c5fb5b50e330613e07267c0a721b3.1.jpg',
    },
    {
        id: 9,
        name: 'MY BOX PASTA starting @229',
        description: 'Meal for 1: 1 Pasta, 2 Pc Plain Garlic Bread & 1 Pepsi Pet Bottle',
        img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/my-box-pasta.e4b458a4e75c231f051cd0519c2a8dcc.1.jpg',
    },
]

function offerData(){
    let str ='';
    offers.forEach((items , index)=>{
        str += `
        <div class="col-sm-6 d-flex">
        <div
         class="card h-80 shadow-lg p-3 mb-5 bg-white rounded"
         style="width: 400px">
         <img class="card-img-top" src="${items.img}" alt="Card image" />
          <div class="card-body">
        <h4 class="card-title">${items.name}</h4>
        <p class="card-text">${items.description}</p>
        <a href="#" onclick="clickedCard(${items.id})" class="btn btn-dark">Customise your deal</a>
      </div>
    </div>
  </div>
  `;
    });
    document.getElementById('offers_data').innerHTML = str;
}
offerData();