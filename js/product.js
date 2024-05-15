
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Trouser',
        image: 'card2.png',
        price: 120
    },
    {
        id: 2,
        name: 'Black Shirt',
        image: 'card5.png',
        price: 150
    },
    {
        id: 3,
        name: 'Black Collar Shirt',
        image: 'card6.png',
        price: 220
    },
    {
        id: 4,
        name: 'Stand collar Shirt',
        image: 'card7.png',
        price: 100
    },
    {
        id: 5,
        name: 'White Pant',
        image: 'card8.png',
        price: 320
    },
    {
        id: 6,
        name: 'Collar T-shirt',
        image: 'tshirt9.jpg',
        price: 300
    },
    {
        id: 7,
        name: 'Collar T-shirt',
        image: 'tshirt10.jpg',
        price: 350
    },
    {
        id: 8,
        name: 'Collar T-shirt',
        image: 'tshirt11.jpg',
        price: 550
    },
    {
        id: 9,
        name: 'Collar T-shirt',
        image: 'product_13.png',
        price: 600
    },
    {
        id: 10,
        name: 'Collar T-shirt',
        image: 'product_14.png',
        price: 200
    },
    {
        
            id: 11,
            name: 'Collar T-shirt',
            image: 'product_15.png',
            price: 300
    
    },
    {
        id: 12,
        name: 'Collar T-shirt',
        image: 'product_16.png',
        price: 400
    },
    {
        id: 13,
        name: 'Collar T-shirt',
        image: 'product_17.png',
        price: 500
    },
    {
        id: 14,
        name: 'Collar T-shirt',
        image: 'product_18.png',
        price: 600
    },
    {
        id: 15,
        name: 'Collar T-shirt',
        image: 'product_19.png',
        price: 550
    },
    {
        id: 16,
        name: 'Collar T-shirt',
        image: 'product_20.png',
        price: 700
    },
    {
        id: 17,
        name: 'Collar T-shirt',
        image: 'product_21.png',
        price: 300
    },
    {
        id: 18,
        name: 'Collar T-shirt',
        image: 'product_22.png',
        price: 500
    },
    {
        id: 19,
        name: 'Collar T-shirt',
        image: 'product_23.png',
        price: 600
    },
    {
        id: 20,
        name: 'Collar T-shirt',
        image: 'product_24.png',
        price: 800
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">RS ${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>Rs ${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
