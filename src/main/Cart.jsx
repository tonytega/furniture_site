import {CartItems} from './cart/CartItems'
import {EmptyCart} from './cart/EmptyCart'

export const Cart = ({cartArray,onIncrease,onDecrease})=>(
    <>
    { cartArray.length === 0 ? <EmptyCart/>:<CartItems cartArray={cartArray} onIncrease={onIncrease} onDecrease={onDecrease}/>}
    </>
    )