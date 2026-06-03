import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log(" Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component did mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <UserClass name={"Danish (child 1)"} location={"Kulyani"} />
      </div>
    );
  }
}

export default About;