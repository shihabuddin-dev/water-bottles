import React, { use, useState } from 'react';
import Bottle from './Bottle';

const Bottles = ({ bottlePromise }) => {
    const bottles = use(bottlePromise)

    const [cart, setCart]=useState([])
    const handleAddToCart=(bottle)=>{
        const newCart= [...cart, bottle]
        setCart(newCart)
       
    }
    return (
        <div>
           <h2 className='text-center pb-4 text-3xl'>Total Bottles: {bottles.length}</h2>
           <p className='text-center pb-4'>Added Cart Items: {cart.length}</p>
           <ol className='list-decimal p-6 border-2 grid gap-2 sm:grid-cols-2 md:grid-cols-3 my-2 border-gray-400 rounded-xl'>
            {
              cart.map(add=> <li className='mx-auto'>{add.name} <img className='w-12 rounded-md mx-auto' src={add.img}></img></li> )  
            }
           </ol>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {
            bottles.map(bottle=> <Bottle 
                key={bottle.id} 
                handleAddToCart={handleAddToCart}
                bottle={bottle}></Bottle>)
           }
          </div>
        </div>
    );
};

export default Bottles;





