import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Utils/cartSlice";
import ItemList from "./ItemList";


const Cart = ()=>{

    const cartItems = useSelector ((store) => store.cart.items)
    // console.log(cartItems.length);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }


    return(
        <div className="text-center m-5 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
         <div className="w-6/12 m-auto">
            
            <button
             className="p-2 m-3 bg-black rounded-2xl text-white"
            onClick={handleClearCart}
            >Clear Cart
            </button>
            {cartItems.length === 0 && (
                <h1> cart is empty. Add Items to the cart</h1>
                )}

            <ItemList items={cartItems}/>
         </div>
        </div>
    );

}

export default Cart;