import EmptyCartPic from '../images/—Pngtree—empty shopping cart icon_4436013.png'
import './EmptyCart.css'
 export const EmptyCart = ()=>{
        return(
            <div className='empty_cart_div'>
            <img src={EmptyCartPic} />
            <p className='empty_cart_p'>Your Cart is empty</p>
            <button className='empty_cart_button'>continue shopping</button>
            </div>
        )
    
}