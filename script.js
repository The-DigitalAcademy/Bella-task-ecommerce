// PRODUCTS VARIABLE
var productsState = [
  {
    id: 1,
    name: 'Canon XA 55 UHD',
    price: 52799,
    rates: 5,
    image:
      'https://cameralandsandton.co.za/wp-content/uploads/2021/03/Canon-XA55-Professional-UHD-4K-Camcorder-Cameraland-Sandton-8.jpg',
  },
  {
    id: 2,
    name: 'P300 Led Spotlight',
    price: 36649,
    rates: 3,
    image:
      'https://www.tradeinn.com/f/13832/138329132_5/aputure-nova-p300c-led-spotlight.jpg',
  },
  {
    id: 3,
    name: 'SliderPlus V5Long',
    price: 10995,
    rates: 2,
    image:
      'https://www.provideocoalition.com/wp-content/uploads/edelkronssliderplus5_001-9275403.jpg',
  },
  {
    id: 4,
    name: 'DJI AIR 2S DRONE',
    price: 16446,
    rates: 1,
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTRS2T-IEepseoo6Lo8v2-VK7HF3sufXqBowjUBjZ1qspyz4mwdNsu8LVtMnLMaro9EExNb9UMA4Kygjgpu2GjsKvM3yzDHG7TzpeFq1UsZ7XopGxfPNjma&usqp=CAE'

  },
  {

    id: 5,
    name: 'Sided Green Screen Banner Wall',
    price: 11999,
    rates: 1,
    image:
      'https://www.iconsshop.co.za/wp-content/uploads/2022/07/products-SLWB-768x768.jpg',
  },
  {
    id: 6,
    name: 'Mac Pro',
    price: 78999,
    rates: 5,
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTypVlEWVoPNDWrZ910-sQRnNwX9Q1J0cz6SkYTlZTxkDojg6-w5pFDI3YV_qG4sHey7BY-nSFU3meDX4DYELitquS7UrdfO2At4HsBqOuPLXfCyGZ90ihZRFg&usqp=CAE',
  },
  {
    id: 7,
    name: 'SJcam 4000 AIR',
    price: 1599,
    rates: 4,
    image:
      'https://media.takealot.com/covers_images/c194c574b3484b9eaf1076c649dcdefa/s-zoom.file',
  },
  {
    id: 8,
    name: 'Canon EOS 5D Mak DSLR',
    price: 57695,
    rates: 3,
    image:
      'https://i0.wp.com/www.fotodiscountworld.co.za/wp-content/uploads/2017/07/CANON-EOS-5D-Mark-IV-DSLR-Camera-EF-24-105mm-f4-L-IS-USM-II-Lens-1.jpg?w=700&ssl=1',
  },
]

var shopping = []

// LINK JS TO HTML ELEMENT
const products = document.getElementById("products")

// DISPLAY PRODUCTS IN HOME PAGE
function homeDisplayProducts() {
  products.innerHTML = ""

  // loop into productsState and display
  for (let i = 0; i < productsState.length; i++) {

    products.innerHTML += `
      
      <div class="product">
          <div class="product__img">
              <img
                src=${productsState[i].image}
                alt=""
              />
          </div>
              <div class="product__name">${productsState[i].name}</div>
                <div class="product__rate">
                  ${'<span>*</span>'.repeat(productsState[i].rates)}
                </div>
                <div class="product__price">R <span>${productsState[i].price}</span></div> 
                  <button onclick="addCart(${i})">+ ADD TO CART</button> 
            </div>
      
      `

  }
}

function addCart(i) {

  shopping.push(productsState[i])
  showCart()
  addToLocalStorage()

}

function showCart() {

 
  let count = document.getElementById('additemid');
  let cart_prod = document.getElementById('cart_prod');
  cart_prod.innerHTML = "";

 for (let i = 1; i < shopping.length; i++) {

  count.innerHTML = i;

   
    cart_prod.innerHTML += `

    <div class="product" id="cart_prod">
    <div class="product__img2">
      <img
        src="${shopping[i].image}"
        alt=""
      />
    </div>

    <div class="product__name2">${shopping[i].name}</div>
    <div class="product__rate2">
      

    </div>
    <div class="product__price2">R <span>${shopping[i].price}</span></div>
    <button onclick="adddata()">- REMOVE</button>
  </div>

</div>
  
    `

   }

}

// Add values from array into local Storage
function addToLocalStorage() {

  let data = JSON.stringify(shopping)
  localStorage.setItem('cart',data)
  
}

// get value from local storage

function getFromLocalStorage() {

  data = JSON.parse(localStorage.getItem('cart'));
  shopping = data;
  
}
// CALL THE DISPLAY FUNCTION
getFromLocalStorage()
showCart()
homeDisplayProducts()