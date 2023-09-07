import User from "./User";
import UserC from "./UserC";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent componentdidmount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h3>About us</h3>
        <h3>This is React Web series!</h3>
        <UserC />
      </div>
    );
  }
}

export default About;
