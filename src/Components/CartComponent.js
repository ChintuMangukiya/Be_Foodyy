import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlices";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const CartComponent = () =>{

    const cartitems = useSelector((store)=>store.cart.items);

    const dispatch1 = useDispatch();

    const { totalAmount, setCartPrice } = useContext(UserContext);

    const handleclearcart = (cartitems) => {
        dispatch1(clearCart(cartitems));
        setCartPrice(0);
    }

    const dispatch = useDispatch();

    const handleeremoveitem = (index) => {
        dispatch(removeItem(index));
    }


    if(cartitems.length === 0)
    { 
        return(
            <div className="emptyCart">
            <img src="https://raw.githubusercontent.com/ChintuMangukiya/Story2/main/foos.png" />
            <h4>Your Cart Is Empty Right Now... Please Add Items to the Cart.</h4>
            <h5>Click <a href="http://localhost:1234">here</a> to add items.</h5>
            </div>
             )
    }

    else 
    {
    return(
        <div className="distinct distinct1">
            <div className="clearout"><button className="clearCart" onClick={()=>{
                $(".clearCart").slideUp();
                handleclearcart(cartitems);
                
            }}>Clear Cart</button>
            <h4 className="totalAmount">total amount : {totalAmount}</h4>
            </div>
             

           <ul className="aaj aaj1" id="aaj">
            {
                
               cartitems?.map((inf,index) => (
                
                    inf?.card?.info?.name === "undefined" ?  <h1>none</h1> : 
                <div key={index} className="items" price={inf?.card?.info?.price/100 || inf?.card?.info?.defaultPrice/100}>
                 <li>
                     {inf?.card?.info?.name + "  "+ " - " +"  " + " ₹"}
                     {inf?.card?.info?.price/100 || inf?.card?.info?.defaultPrice/100}<br />
                     <span className="menu-description">{inf?.card?.info?.description}</span>
                 </li>
                  <button className="btt btt1" onClick={() => {
                    setCartPrice(totalAmount - (inf?.card?.info?.price/100 || inf?.card?.info?.defaultPrice/100));
                    handleeremoveitem(index);
                    
                }}>remove-</button>
                  <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + inf?.card?.info?.imageId} alt={inf?.card?.info?.name}/>
                  </div>
            
               )

              )
            }
         </ul>
        </div>
        
    )
        }
};

export default CartComponent;