import React, { useState, Fragment } from "react";
import AddUserForm from "./forms/AddUserForm";
import UserTable from "./tables/UserTable";
import Student from "./tables/Student";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  // Data
  const usersData: any = [];

  const initialFormState = { id: null, name: "", username: "" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [selectedUser, setSelectedUser] = useState();

  // CRUD operations
  const addUser = (user: any) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id: any) => {
    setUsers(users.filter((user: any) => user.id !== id));
  };
  const selectUser = (User: any) => {
    setSelectedUser(User);
  };

  const updateUser = (id: any, updatedUser: any) => {
    setUsers(users.map((user: any) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>Students Information</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Add Student</Link>
          </li>
          <li>
            <Link to="/table">Student Table</Link>
          </li>
        </ul>
      </nav>
      <div className="flex-row">
        <Switch>
          <Route path="/table">
            <UserTable
              users={users}
              selectUser={selectUser}
              deleteUser={deleteUser}
            />
          </Route>
          <Route exact path="/">
            <AddUserForm addUser={addUser} />
          </Route>
          <Route exact path="/student">
            <Student student={selectedUser} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
