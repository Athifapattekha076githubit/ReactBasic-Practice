// import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import userContext from "../Utils/userContext";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parents Constructor");
        this.state = {
            userInfo:{
                name:"Dummy",
                location:"bengaluru",
                avatar_url:"https://dummy-photo",
            },}  
        
    }
    async componentDidMount(){
        // console.log("parents COmponent")
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
         
            this.setState({
                userInfo:json,
            })
            console.log(json);

    }
    componentDidUpdate(){
        console.log("Component did update");
    }
    componentWillUnmount(){
        console.log("Component will unmount");
    }

     render(){
        // console.log("parent Render");
       
        const {name , location, avatar_url} = this.state.userInfo;
        return(
            <div>
                <h1>About Class Component...</h1>
                 <div>
                   loggedIn user : 
                   <userContext.Consumer>
                    {({loggedInUser}) => <h1 className=" text-xl font-bold">{loggedInUser}</h1>}
                   </userContext.Consumer>
                </div>
                <div>
                <img src={avatar_url} />
                <h1>Name:{name}</h1>
                <h2>Location:{location}</h2>
                </div>
                    </div>
        )
    }

}
export default About;