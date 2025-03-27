const getCartFromLocalStorage=()=>{
    const storedCartString= localStorage.getItem('cart')
    if(storedCartString){
        const storedCart= JSON.parse(storedCartString)
        return storedCart
    }
    return [];
}

const saveToLocalStorage=cart =>{
    const cartStringified= JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}
const addItemToLocalStorage= id=>{
    const cart = getCartFromLocalStorage()
    const newCart= [...cart, id]
    saveToLocalStorage(newCart)
}

export { 
    getCartFromLocalStorage as getSoreCart, 
    addItemToLocalStorage as addStoreCart
}