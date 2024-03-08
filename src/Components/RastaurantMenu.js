import React, { useEffect, useState } from "react"; 
import Ras_Shimmer from "./RasShimmer";
import { useParams } from "react-router-dom";
import Menu_Shimmer from "./MenuShimmer";
import useResMenu from "../utils/useResMenu";
import Itemcards from "./ItemCards";

const RastaurantMenu = () => {

    const {resId} = useParams();

    const resMenu = useResMenu(resId);

    if(resMenu ===  null) return <Menu_Shimmer></Menu_Shimmer>;


    else{

        const { name, cuisines, costForTwoMessage} = resMenu?.cards[0]?.card?.card?.info;
        const  temCards  = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    if(name.length > 20){
        var nameshort = name.substring(0, 20)+"...";
    }
    else{
         var nameshort = name;
    }


    
    return(
        
        <div className="menubody" >
        <div className="mainmenu">
            <title>{name}</title>
            <div className="menu">
            <div className="menuResName"><h1>
                {nameshort}
            </h1>
            </div>
            <div className="menuCuisines"><p>{cuisines.join(", ")} - {costForTwoMessage}</p></div>
            <div className="menus">
                <div className="me"><h3 className="mein">Menu</h3></div>
                {
                    temCards.map((dat, index)=>
                        <Itemcards key={index} id={index} data={dat}></Itemcards>
                    )
                }
            </div>
            </div>
        </div>
        </div>
    )
                }
}

export default RastaurantMenu;