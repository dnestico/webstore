const products = [
  {
    name: 'iPhone 11',
    price: 699.99,
    description: 'INFO: Dual-lens rear camera, Ultra Wide and Wide lenses, 6.1" liquid retina display, Stronger glass',
    img: 'img/iphone/iphone11.png'
  },{
    name: 'iPhone XR',
    price: 599.99,
    description: 'INFO: Face ID, 12-mp rear camera, A12 Bionic chip, IP67 water/dust resistance, Six colour options',
    img: 'img/iphone/iphonexr.png'
  },{
    name: 'iPhone X',
    price: 849.99,
    description: 'INFO: 5.8" OLED display, A11 Bionic chip, Face ID, No home buttom, Wireless charging, Glass body',
    img: 'img/iphone/iphonex.png'
  },{
    name: 'iPhone 8',
    price: 449.99,
    description: 'INFO: 4.7" LCD display, A11 Bionic chip, Louder speakers, Upgraded camera, Wireless charging',
    img: 'img/iphone/iphone8.png'
  },{
    name: 'iPhone 11 Pro',
    price: 999.99,
    description: 'INFO: Tripple-lens camera, Ultra wide-angle lens, Durable body, Matte finish, Haptic touch, A13 Chip',
    img: 'img/iphone/iphone11pro.png'
  },{
    name: 'iPhone 11 Pro Max',
    price: 1099,
    description: 'INFO: 6.5" Super Retina XDR display, True Tone display, A13 Bionic chip, Tripple Ultra wide/Telephoto lens',
    img: 'img/iphone/iphone11promax.png'
  },{
    name: 'iPhone XS',
    price: 1379,
    description: 'INFO: 5.8" OLED Display, True Tone display, 12MP wide-angle rear camera, A12 Bionix chip, IP68',
    img: 'img/iphone/iphonexs.png'
  },{
    name: 'iPhone XS Max',
    price: 1519,
    description: 'INFO: 6.5" display, Dual 12MP rear camera, Up to 512GB storage, Face ID, A12 Bionic chip, Portrait mode',
    img: 'img/iphone/iphonexsmax.png'
  },{
    name: 'iPad Air',
    price: 649.99,
    description: '128GB storage, WiFi + Cellular, 9.7" Retina display, A7 Bionic chip, 5MP camera, 720P video, 10 Hour battery',
    img: 'img/iphone/ipadair.png'
  },{
    name: 'iPad Pro',
    price: 799.99,
    description: '12.9" liquid retina display, 1TB Storage, Wifi + Cellular, A12X Bionic chip, 12MP camera, 4K video, Face ID',
    img: 'img/iphone/ipadpro.png'
  },{
    name: 'Samsung S10 Plus',
    price: 1459,
    description: '6.4" Display, 12GB Ram, 1TB Storage, 12MP-16MP rear tripple cameras, Exynos 9820 processer',
    img: 'img/samsung/samsungs10plus.png'
  },{
    name: 'Samsung S10',
    price: 1219,
    description: '6.1" Display, 12MP-16MP tripple cameras, 8GB Ram, 512GB Storage, 3400mAh Battery',
    img: 'img/samsung/samsungs10.png'
  },{
    name: 'Samsung S9',
    price: 859.99,
    description: '64GB Storage, 6GB Ram, 12MP camera, 5.8" display, 3000mAh battery',
    img: 'img/samsung/samsungs9.png'
  },{
    name: 'Samsung S9 Plus',
    price: 1219,
    description: '256GB storage, 6.2" Display, 12MP camera, S500mAh battery, 6GB Ram',
    img: 'img/samsung/samsungs9plus.png'
  },{
    name: 'Samsung S8',
    price: 719.99,
    description: '5.8" Display, 12MP camera, 64GB storage, 4GB Ram, 3000mAh battery',
    img: 'img/samsung/samsungs8.png'
  },{
    name: 'Samsung S8 Plus',
    price: 1115,
    description: '6.2" display, 12MP camera, 3500 mAh battery, 6GB Ram, 128GB storage',
    img: 'img/samsung/samsungs8plus.png'
  },{
    name: 'Samsung Note 10 ',
    price: 1259,
    description: '6.3" Display, 12MP-16MP tripple cameras, 8GB Ram, 3500 mAh battery',
    img: 'img/samsung/samsungnote10.png'
  },{
    name: 'Samsung Note 10 Plus',
    price: 1459,
    description: '6.8" Display, 12MP-16MP tripple cameras, 4300mAh battery, 12GB ram, 256GB storage',
    img: 'img/samsung/samsungnote10plus.png'
  },{
    name: 'Samsung Note 9',
    price: 999.99,
    description: '6.4" Display, 12MP camera, 8GB Ram, 512GB Storage, 4000mAh battery',
    img: 'img/samsung/samsungnote9.png'
  },{
    name: 'Samsung Note 8',
    price: 749.99,
    description: '6.3" Display, 6GB Ram, 64GB Storage, 6GB Ram, 3300 mAh battery, Dual 12MP cameras',
    img: 'img/samsung/samsungnote8.png'
  }
  
];



const getProductAsHtml = (prod) => {

  // Replace article with a complete product 
  return `
  <article class="product">
    <header class="image">
      <img src="${prod.img}" alt="Product Image">
    </header>
    <h3>${prod.name}</h3> <hr width="100%">
    <p class="info">A nice picture of the product.</p>
    <p class="description"> ${prod.description} </p>
   

    <form>
    <fieldset>
      <data value="${prod.price}">${prod.price}</data>
      <button class="cartbtn" type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
      <button class="favbtn" type="button"><span class="material-icons">favorite</span></button>
    </footer>
  </form> 
   

  </article>`;
}


const renderProducts = (arr) => {

  document.getElementById('products').innerHTML = arr.map(getProductAsHtml).join('');

}


renderProducts(products)












/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
// window.onclick = function(e) {
window.addEventListener('click', e => {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    myDropdown.classList.toggle('show')
  }
});

