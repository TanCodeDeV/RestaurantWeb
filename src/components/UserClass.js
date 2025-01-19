import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
    };
  }

  render() {
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
        <h5>Name:{this.props.name} </h5>
        <h5>Address: {this.props.add}</h5>
        <h5>Email: {this.props.email}</h5>
      </div>
    );
  }
}

export default UserClass;
