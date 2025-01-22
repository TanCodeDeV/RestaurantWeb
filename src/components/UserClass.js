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
      <div className="user-contact border-2 border-pink-400 p-4 m-4">
        <h3>Count: {this.state.count}</h3>
        <button
          className="button px-4 py-1 m-4 bg-gray-100  border-2 border-gray-500 rounded-lg  hover:bg-pink-100 hover:border-black"
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
