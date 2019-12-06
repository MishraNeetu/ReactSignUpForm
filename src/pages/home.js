import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import User from "./user";
import NewUser from "./NewUser";

const hide = {
  display: "none",
  visibility: "none"
};

// let userData = (data) => {
//     console.log(data);
// }

class Home extends Component {
  constructor() {
    super();
    // console.log(this.props.location.pathname);
    console.log("home");

    fetch("https://randomuser.me/api/0.8/?results=20")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        //create localstorage
        localStorage.setItem("data", JSON.stringify(data));
      });

    // this.state = {
    //   userlist: []
    // };
  }

  render() {
    // const item = JSON.parse(localStorage.getItem("data"));
    // console.log(item);
    // const temp = item.results.map(data => {
    //   console.log(data.user.dob);
    //   return <h1>{data.user.dob}</h1>;
    // });
    const homeTitle = "List Of Active User";
    return (
      <div className="Home">
        <NavLink
          to="/NewUser"
          //   activeClassName="FormTitle__Link--Active"
          //   className="FormTitle__Link"
        >
          <button>Add NewUser</button>
        </NavLink>
        <br />
        <h3>{homeTitle}</h3>
        <User />
      </div>
    );
  }
}
export default Home;
