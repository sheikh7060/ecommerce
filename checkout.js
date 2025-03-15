import { cart,saveToLocalStorage,removeItemfromCart } from "./cart.js";
import { products } from "./data/products.js";
import { currencyConverter } from "./uitility/utility.js";


let htmlforEachCart = '';

cart.forEach((cartItem)=>{
    const cartId = cartItem.itemId;
    const cartQuantity = cartItem.quantity;


    let matchingItem;

    products.forEach((productItem)=>{
        const productId = productItem.id;
        
        if(productId === cartId){
            matchingItem = productItem;
        }
    });


   htmlforEachCart +=   `

    <div class="cart-item-container js-cart-id-${matchingItem.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingItem.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingItem.name}
                </div>
                <div class="product-price">
                  $${currencyConverter(matchingItem.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartQuantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-button" data-product-id=${matchingItem.id}>
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    `       

    });


    document.querySelector('.js-grid').innerHTML = htmlforEachCart;



   function updateTheHTML(){
    document.querySelectorAll('.js-delete-button')
          .forEach((btn) =>{
            btn.addEventListener('click',()=>{
            const productIdwewanttodelete = btn.dataset.productId;
            removeItemfromCart(productIdwewanttodelete);  
            const ok = document.querySelector(`.js-cart-id-${productIdwewanttodelete}`);
            ok.remove();
            saveToLocalStorage();

            })

          })

   };

   updateTheHTML();


 



    
