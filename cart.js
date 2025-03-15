export const cart = [];

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

                    console.log(cart);

                    
                
};
