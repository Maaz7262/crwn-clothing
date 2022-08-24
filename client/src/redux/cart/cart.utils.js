export const addItemToCart = (cartItems, itemToAdd)=>{
    const ifExists = cartItems.find( item =>
        item.id === itemToAdd.id
    )

    if (ifExists){
        return cartItems.map(item => 
            item.id === itemToAdd.id ? {...item, quantity: item.quantity + 1} : item
        )
    }
    return [...cartItems, {...itemToAdd, quantity: 1}]
}

export const removeItem = (cartItems, itemToRemove) =>{
    const ifExists = cartItems.find(
        cartitem => cartitem.id === itemToRemove.id
    )

    if (ifExists) {
        return  cartItems.filter( item => item.id !== itemToRemove.id)
    }
    else
        return cartItems;
} 


export const decreaseItem = (cartItems, itemToDec) =>{

    const ifExists = cartItems.find(item => item.id===itemToDec.id)
    if (ifExists.quantity === 1){
        
        
        return cartItems.filter(item => item.id !== itemToDec.id)
                 
    }
        
    return cartItems.map( item => (
        item.id === itemToDec.id ? {...item, quantity: item.quantity-1} : item
     ))
    
}