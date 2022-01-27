import React, { useState, useEffect } from "react";
import Loading from "../../Shared/Loading";

const MakeAdmin = () => {
  const [allUser, setAllUser] = useState([]);
  const [adminUserLoading, setAdminUserLoading] = useState(true);
  const [isNeededUpdate, setIsNeededUpdate] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      setAdminUserLoading(true);
      const user = await fetch(
        "https://gentle-retreat-89471.herokuapp.com/api/v1/all-users"
      ).then((res) => res.json());
      setAllUser(user.users);
      setAdminUserLoading(false);
    };
    fetchUser();
  }, [isNeededUpdate]);

  const handleMakeAdmin = (id) => {
    const url = `https://gentle-retreat-89471.herokuapp.com/api/v1/admin/${id}`;
    setAdminUserLoading(true);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setIsNeededUpdate(isNeededUpdate + 1);
        }
      });
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Make a admin</h1>
      {adminUserLoading ? (
        <Loading />
      ) : (
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
                <td>
                  {user.role === "user" && (
                    <button onClick={() => handleMakeAdmin(user.uid)}>
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MakeAdmin;
