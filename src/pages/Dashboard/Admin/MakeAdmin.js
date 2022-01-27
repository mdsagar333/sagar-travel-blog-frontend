import React, { useState, useEffect } from "react";

const MakeAdmin = () => {
  const [allUser, setAllUser] = useState([]);
  const [adminUserLoading, setAdminUserLoading] = useState(true);
  const [isNeededUpdate, setIsNeededUpdate] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetch(
        "https://gentle-retreat-89471.herokuapp.com/api/v1/all-users"
      ).then((res) => res.json());
      setAllUser(user.users);
    };
    fetchUser();
  }, [isNeededUpdate]);

  console.log(allUser);
  return (
    <div className="container">
      <h1 className="text-center my-4">Make a admin</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">User Email</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((user, index) => (
            <tr key={user._id}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role === "user" ? "User" : "Admin"}</td>
              <td>{user.role === "user" && <button>Make Admin</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
