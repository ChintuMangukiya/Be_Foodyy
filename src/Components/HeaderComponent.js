import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Link } from "react-router-dom"; 
import COMPANY_LOGO from "../Constants/Logoes_Images/Company_logo";
import useOnlineStatus from "../utils/UseOnlineStatus";
import UserContext from "../utils/UserContext";
import Svg, { Path } from 'svgs';
import {  useSelector } from "react-redux";

const HeaderComponent = () =>{


    const online = useOnlineStatus();

    const [logbtn, setlogbtn] = useState("Login");

    // Subsribin the store by using Selector Hook...

    const cartItems = useSelector((store) => store.cart.items);



    return(
        
        <div className="header">
            
        <div className="Logo-Container"><Link to="/"><div className="logo"><img className="logoimg" src={ COMPANY_LOGO }/></div></Link>
                                         <h1 className="company-Name"><span className="be">Be</span><span className="Foodyy">Foodyy!!</span></h1>
                                         
                </div>
        <div className="Nav-Items">
            <ul className="list-Items">
                <li id="nvv">Online Status : {online ? "✅" : "❌"}</li>
                <li id="nvv"><Link to="http://localhost:1234/">Home</Link></li>
                <li id="nvv"><Link to="http://localhost:1234/cartcomponent">Cart-({cartItems.length} items)</Link></li> 
                <li id="nvv"><Link to="http://localhost:1234/about">About Us</Link></li>
                <li id="nvv"><Link to="http://localhost:1234/contact"  >Contact Us</Link></li>
                <li><button className="loginth" onClick={()=>{
                                                              if(logbtn==="Login"){setlogbtn("Chintu");}
                }}>{logbtn}</button>
                    </li>
            </ul>
        </div>
        </div>
    );
};

export default HeaderComponent;
