import { height } from '@mui/system'
import { useState } from 'react'
import { useEffect } from 'react'
import './CartItems.css'

export const CartItems = ({cartArray,onIncrease,onDecrease})=>{
    
    // console.log(cartArray)
    return(
        
        <>
            <h1>Your Cart</h1>
        <div className='cart_container'>
            <div className='checkout_and_table'>
                <div className='table'>
                <div className="table_header"><span>Product</span><span>Price</span><span>Quantity</span><span>Total</span></div>
        
        {
            cartArray.map((item)=>(
                <div className="container" key={item.name}>
                    
                    <div className='item_container' >
                        <div >
                            <div className='image_div'>
                                <img src={item.image}/>
                            </div>
                        <div>
                        {item.name}
                        <div className='color_div'>
                         color : <div  style={{width : '15px',height:'15px',backgroundColor: item.color}}></div>
                         </div>
                        </div>
                        
                        </div>
                        <div>${item.cost}</div>
                        <div className='number_div'>
                            <p onClick={()=>{onDecrease(item)}} >-</p><p>{item.number}</p> <p onClick={()=>{onIncrease(item)}}>+</p>
                        </div>
                        <div>${item.total}</div>
                    </div>
                    
                </div>
                ))
    }
            </div>
            <div className='checkout_container'>
                <p className='checkout_container_header'>Order Summary</p>
                <div className='information'>
                    <div className='information_styling'><p>Subtotal</p><p>total</p></div>
                    <div className='information_styling'><p>Shipping</p><p>free</p></div>
                    <div className='information_styling for_total'><p>Total</p><p>total</p></div>
                </div>
                <button className='checkout_button'>Checkout</button>
            </div>
        </div>
    </div>
    </>)
}