import React from "react";

class UserClass extends React.Component{
    constructor (props){
        super(props);
         
    this.state={}        
    //  console.log(this.props.name + "Child Constructor");
}
componentDidMount(){
    // console.log(this.props.name +"Child Mount");
}
    render (){
        const { name , location } = this.props;
        // console.log(this.props.name + "child reneder");
        return(
            <div className="user-card">
                <h2>name:{name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact:am.th</h3>
            </div>
        )
    }
}
export default UserClass;