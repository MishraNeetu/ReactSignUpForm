import React, { Component } from "react";
// import { directive } from '@babel/types';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: JSON.parse(localStorage.getItem("data")) // User
    };
  }
  render() {
    console.log(this.state.item);
    return (
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Dob</th>
                <th>Location</th>
                <th>Email</th>
                <th>Phone No</th>
              </tr>
            </thead>

            {this.state.item.results.map((userlist, index) => {
              return (
                <tr>
                  <td>
                    <img src={userlist.user.picture.medium} />
                  </td>
                  <td>
                    {userlist.user.name.title} {userlist.user.name.first}{" "}
                    {userlist.user.name.last}
                  </td>
                  <td>{userlist.user.gender}</td>
                  <td> {userlist.user.dob}</td>
                  <td>
                    {userlist.user.location.street}{" "}
                    {userlist.user.location.city} {userlist.user.location.state}{" "}
                    {userlist.user.location.zip}
                  </td>
                  <td>{userlist.user.email}</td>
                  <td>{userlist.user.phone}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default User;
