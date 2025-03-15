export const cart = [];

export function addProductToCart(itemName){
    let matchingItem;
                    cart.forEach((item)=>{
                        if(itemName === item.itemName){
                            matchingItem = item;
                        }

                    })

                    if(matchingItem){
                        matchingItem.quantity +=1;
                    }else{
                        cart.push({
                            itemName,
                            quantity:1
                        })

                    }

                    console.log(cart);

                    
                
};
