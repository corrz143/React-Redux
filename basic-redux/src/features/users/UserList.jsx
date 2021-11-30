import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userAdded } from "./usersSlice";
import { userUpdated } from "./usersSlice";

export function UserList() {
  const users = useSelector((state) => state.users);

  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD User app</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <Link to="/">
            <button className="button-primary">Load users</button>
          </Link>
        </div>
        <div className="two columns">
          <Link to="/add-user">
            <button className="button-primary" onClick={userAdded}>
              Add user
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <table className="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, email }, i) => (
              <tr key={i}>
                {console.log(users)}
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <button>Delete</button>
                  <Link to={`/edit-user/${id}`}>
                    {/* <Link to="/edit-user"> */}
                    <button onClick={userUpdated}>Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
