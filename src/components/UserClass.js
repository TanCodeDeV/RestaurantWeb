import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor called");

    this.state = {
      count: 0,
      userInfo: {
        login: "DummmyNmae",
        id: 12,
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/TanCodeDeV");
    const jsonData = await data.json();
    // console.log(jsonData);
    this.setState({
      userInfo: jsonData,
    });
    console.log("Component did mount called");
  }

  componentDidUpdate() {
    console.log("Component did update called");
  }

  componentWillUnmount() {
    console.log("Component will unamount called");
  }

  render() {
    console.log("Render called");
    const { login, id } = this.state.userInfo;
    return (
      <div className="user-contact">
        <h3>Count: {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h4>User From ClassBased Component</h4>
        <h5>Name:{login} </h5>
        <h5>Address: {id}</h5>
        <h5>Email: {this.props.email}</h5>
      </div>
    );
  }
}

export default UserClass;
