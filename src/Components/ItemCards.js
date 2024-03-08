import React, { useState } from "react";
import { addItem } from "../utils/cartSlices.js";
import { useDispatch } from "react-redux";
import UserContext from "../utils/UserContext.js";
import { useContext } from "react";

const Itemcards = (prop) =>{

    const [clicked, setclicked] = useState(false);

    const { itemCards, title } = prop?.data?.card?.card;

    const dispatch = useDispatch();

    const { setCartPrice, totalAmount  } = useContext(UserContext);

    const handleadditem = (itemdata) =>{
        dispatch(addItem(itemdata));
    };



    if(prop?.data?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    {

        return(

        <div className="distinct">
        <div className="type"  onClick={()=>{
                
                if(clicked === false)
                {
                    setclicked(true);
                }
                else
                {
                    setclicked(false);
                }
        }}><span>{title+" "}({itemCards.length})</span> <span className="drop">{clicked ? <img src="https://raw.githubusercontent.com/ChintuMangukiya/Story2/main/upaero-removebg-preview.png" class="dropdownbtn" /> : <img src="https://static.thenounproject.com/png/551749-200.png" class="dropdownbtn" />}</span>
        </div>
        
        <ul className="aaj" id="aaj">
        {
             itemCards?.map((inf,index) => (
                clicked &&
                <div key={inf?.card?.info?.id} className="items" price = {inf?.card?.info?.price/100 || inf?.card?.info?.defaultPrice/100}>
                 <li>
                     {inf?.card?.info?.name + "  "+ " - " +"  " + " ₹"}
                     {inf?.card?.info?.price/100 || inf?.card?.info?.defaultPrice/100}<br />
                     <span className="menu-description">{inf?.card?.info?.description}</span>
                 </li>
                  <button className="btt" onClick={() => {
                    handleadditem(inf);
                    setCartPrice(totalAmount + (inf?.card?.info?.price/100 || inf?.card?.info?.defaultPrice/100));
                }}>Add+</button>
                  <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + inf?.card?.info?.imageId} alt={inf?.card?.info?.name}/>
                  </div>
               )
              )
        }
         </ul>

       </div>
    )
}
}

export default Itemcards;