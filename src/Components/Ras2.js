import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const RastaurantCard2 = (prop) =>{

    const {
    cloudinaryImageId,
    avgRating,
    cuisines,
    sla,
    id,
    aggregatedDiscountInfoV3
    } = prop?.info?.info;


    const [name, setname] = useState(prop?.info?.info?.name);
    if(name.length > 27)
    {
        setname(name.substring(0, 24)+"...");
    }



    const [header, setHeader] = useState(prop?.info?.info?.aggregatedDiscountInfoV3?.header);
    const [subHeader, setSubHeader] = useState(prop?.info?.info?.aggregatedDiscountInfoV3?.subHeader);

    if(header === undefined)
    {
        setHeader(" ");
    }
    if(subHeader  === undefined)
    {
        setSubHeader(" ");
    }
    return(
       
        <div className="res-card">
        <Link to={"/rastaurants/"+ id }>
        <div className="rastaurantcard">
            <div className="foodcenter"><div className="food" style={{
                backgroundImage : `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId})`,
                }}><div className="offers">{header +" "+ subHeader}</div></div></div>
            <p className="res">{name}</p>
            <p className="starRating">{avgRating} ★</p>
            <p className="cccc">{cuisines.join(", ")}</p>
            <p className="slaString"><span className="uperle">•</span>{sla.slaString}</p>
        </div>
        </Link>
        </div>
    );

}

export default RastaurantCard2;