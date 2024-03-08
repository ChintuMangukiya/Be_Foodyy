import React, { useEffect, useState } from "react";
import USER_API from "../Constants/APIs/User_API";
import USER_AVATAR from "../Constants/Logoes_Images/User_Avatar";
import S_USER_AVATAR from "../Constants/Logoes_Images/Shimmer_User_Avatar";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name : "Ch",
                location : "Earth",
                avatar_url : { S_USER_AVATAR },
            }
        }
    }
 
    async componentDidMount(){
        const daa = await fetch( USER_API );
        const jsons = await daa.json();
        this.setState({
            userInfo:jsons,
        });
    }
    render(){
        if(this.avatar_url === S_USER_AVATAR)
        {
            return(
                <div>Loading.....</div>
            )
        }
        else{
        const {name, location} = this?.state?.userInfo;
        return(
            <div className="useclaa">
                <h1>About Us</h1>
                <img className="fop" src={USER_AVATAR} height="200px" alt="hi ia"/>
                <h1>Name : {name}</h1>
                <h2>Address : {location}</h2>
                <h3>Contact : 9512913795</h3>
                <h4>Email : mangukiyachintan2022@gmail.com</h4>
            </div>
        )
        }
    }
} 

export default UserClass;