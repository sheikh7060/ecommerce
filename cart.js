export let cart = JSON.parse(localStorage.getItem('Cart'));

if(!cart){

  cart =  [{
        itemId:'3ebe75dc-64d2-4137-8860-1f5a963e534b',
        quantity:2
    },
    
    {
        itemId:"77919bbe-0e56-475b-adde-4f24dfed3a04",
        quantity:5,
    
    },
    
    {
        itemId:"3ebe75dc-64d2-4137-8860-1f5a963e534b",
        quantity:1
    }
    
    ];


}



export function addProductToCart(itemId){
    let matchingItem;
                    cart.forEach((item)=>{
                        if(itemId === item.itemId){
                            matchingItem = item;
                        }

                    })

                    if(matchingItem){
                        matchingItem.quantity +=1;
                    }else{
                        cart.push({
                            itemId,
                            quantity:1
                        })

                    }

                    saveToLocalStorage();



                    
                
};


export function saveToLocalStorage(){
    localStorage.setItem('Cart',JSON.stringify(cart));
}


export function removeItemfromCart(productIdwewanttodelete){

    let newCart = [];
    cart.forEach((cartItem) =>{
        if(cartItem.itemId !== productIdwewanttodelete){
            newCart.push(cartItem);
        }
        
    })

    cart = newCart;

}