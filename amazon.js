import {cart, addProductToCart, saveToLocalStorage} from './cart.js';
import { products } from './data/products.js';
import { currencyConverter } from './uitility/utility.js';

let htmlforEachItem = '';
products.forEach((productItem)=>{

     htmlforEachItem += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${productItem.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${productItem.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${productItem.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${productItem.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${currencyConverter(productItem.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-cart" data-product-id="${productItem.id}">
            Add to Cart
          </button>
        </div>`;
   
});
// show the product web Page using dom
document.querySelector('.js-item-grid').innerHTML = htmlforEachItem;


document.querySelectorAll('.js-cart')
    .forEach((cartItem)=>{
        cartItem.addEventListener('click',()=>{
            let itemId = cartItem.dataset.productId;
            addProductToCart(itemId);
            calculteTotalItem();

          


           
        
        })
    });

function calculteTotalItem(){
  let totalItemOrder = 0;  

    cart.forEach((item) =>{
        totalItemOrder = totalItemOrder + item.quantity;
      
      })
      document.querySelector('.cart-done').innerHTML = totalItemOrder;

}

calculteTotalItem();


