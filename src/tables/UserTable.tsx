import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const UserTable = (props: any) => (
  <table>
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Street Number/Name</th>
        <th>City</th>
        <th>Phonenumber</th>
        <th>GPA</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user: any) => (
          <tr key={user.id}>
            <td onClick={() => props.selectUser(user)}>
              {" "}
              <Link to="/student">{user.firstname}</Link>
            </td>
            <td>{user.lastname}</td>
            <td>{user.street}</td>
            <td>{user.city}</td>
            <td>{user.phonenumber}</td>
            <td>{user.gpa}</td>
            <td>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={0}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
