import React from "react";

class UserC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default location",
        avatar_url: "Dummy",
      },
    };
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child componentdidmount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("component did update is called");
  }

  render() {
    //console.log(this.props.name + "Child render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h3>Name: {name}</h3>
        <h3>location: {location}</h3>
        <img src={avatar_url}></img>
      </div>
    );
  }
}

export default UserC;
