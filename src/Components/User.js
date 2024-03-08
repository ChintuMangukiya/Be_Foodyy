import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count2 : 100,
        };
        console.log(this.props.name + "constructor");
    }
    componentDidMount(){
        console.log(this.props.name + "component did mount");
    }
    render(){
        console.log(this.props.name + "render");
        return(
            <div>
                <h1>up : {this.state.count}</h1>
                <button onClickCapture={()=>{
                    this.setState({
                        count: this.state.count + 1,
                        count2 : this.state.count2 -1,
                    });
                }}>updown</button>
                <h1 >down : {this.state.count2}</h1>
                <h1>Name : {this.props.name}</h1>
                <h2>Address : 123, Bajarang Nager Soc., Punagam, Surat</h2>
                <h3>Contact : 9512913795</h3>
                <h4>Email : mangukiyachc &nbsp intan2022@gmail.com</h4>
            </div>
        )
    }
}



export default User;