import React from "react";
class UserClass extends React.Component{
  constructor(props){
    super(props)
    // console.log(this.props.name+"Child Constructor")
    this.state={
      userInfo:{
        name:"Dummy",
        location:"default",
        avatar_url:"https://dummy"
      }
    }
  }

  async componentDidMount(){
    // console.log(this.props.name + "Child Component did mount");
    //api call
    const data = await fetch("https://api.github.com/users/princerawat02");
    const json=await data.json()

    this.setState({
      userInfo:json
    })

    console.log(json)
  }

  componentDidUpdate(){
    console.log("Component updated")
  }

  componentWillUnmount(){
    console.log("Component unmounted")
  }

  render(){ 
    const {name,location,avatar_url}=this.state.userInfo
    // console.log(this.props.name + "Child Render called");
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name of user : {name}</h2>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClass

/**
 * -- Mounting Lifecycle --
 * Constructor is called
 * Render (dummy)
 *   Html loaded with dummy data
 * componentDidMount is called
 *    <Api call is made>
 *    this.setState -> state variable is updated
 * 
 * -- Update Lifecycle --
 *  render ( api data )
 *  html loaded with new API data
 *  componentDidUpdate is called
 *  
 * 
 */