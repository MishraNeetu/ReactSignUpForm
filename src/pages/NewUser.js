import React, { Component } from "react";

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    // console.log(data.getAll());
    let obj = {
      Gender: data.get("gender"),
      Name: {
        title: data.get("title"),
        first: data.get("firstname"),
        last: data.get("lastname")
      },
      Email: data.get("email"),
      Username: data.get("username"),
      Password: data.get("password"),
      DOB: data.get("dob"),
      Phone: data.get("phone")
    };

    localStorage.setItem("data_new", JSON.stringify(obj));

    console.log(obj);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label">Gender:</label>
            <input
              type="checkbox"
              value="male"
              name="gender"
              placeholder="Enter the gender"
            />
            Male
            <input
              type="checkbox"
              value="female"
              name="gender"
              placeholder="Enter the gender"
            />
            Female
          </div>

          <div className="FormField">
            <label className="FormField__Label">Name:</label>
            <select className="FormField__Input" name="title">
              <option value="mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
            <input
              type="text"
              name="firstname"
              className="FormField__Input"
              placeholder="Enter first name"
            ></input>
            <input
              type="text"
              name="lastname"
              className="FormField__Input"
              placeholder="Enter last name"
            ></input>
          </div>

          <div className="formField">
            <label className="FormField__Label">Email:</label>
            <input
              className="FormField__Input"
              type="text"
              name="email"
              placeholder="Enter the email"
            ></input>
            <br />
            <br />
            <label className="FormField__Label">Username:</label>
            <input
              className="FormField__Input"
              type="text"
              name="username"
              placeholder="Enter the username"
            ></input>
            <br />
            <br />
            <label className="FormField__Label">Password:</label>
            <input
              className="FormField__Input"
              type="password"
              name="password"
              placeholder="Enter the password"
            ></input>
            <br />
            <br />
            <label className="FormField__Label">DOB:</label>
            <input
              className="FormField__Input"
              type="calender"
              name="dob"
              placeholder="Enter the dob"
            ></input>
            <br />
            <br />
            <label className="FormField__Label">Phone:</label>
            <input
              className="FormField__Input"
              type="number"
              name="phone"
              placeholder="Enter the phone number"
            ></input>
            {/* <br />
            <br /> */}
          </div>
          <button className="FormField__Button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewUser;
