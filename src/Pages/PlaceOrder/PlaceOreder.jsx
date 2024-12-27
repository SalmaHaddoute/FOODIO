import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOreder = () => {
    const {getTotalCartAmount}=useContext(StoreContext)
    return (
        <form className='place-order'>
            <div className="place-order-left">
            <p className='title'>Delevery Information</p>
            <div className="multi-fields">
                <input type="text" placeholder='First name' />
                <input type="text" placeholder='Last name' />
            </div>
            <input type="text"  placeholder='Email address' />
            <input type="text" placeholder='Street' />
            <div className="multi-fields">
                <input type="text" placeholder='City' />
                <input type="text" placeholder='State' />
            </div>
            <div className="multi-fields">
                <input type="text" placeholder='Zip code' />
                <input type="text" placeholder='Contry' />
            </div>
            <input type="text" placeholder='Phone ' />
            </div>
            <div className="place-order-right">
            <div className="cart-total">
            <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-detail">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-detail">
                            <p>Delivery fee</p>
                            <p>{getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-detail">
                            <p>Total</p>
                            <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
                        </div>
                        <hr />
                    </div>
                    <button >PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOreder
