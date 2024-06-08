import React from "react";
import { useAuth } from "../contexts/AuthContext";

const AdminPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="admin-page">
      {user && user.role === "admin" ? (
        <>
          <h2>Admin Dashboard</h2>
          <button onClick={logout}>Logout</button>
          <table>
            <thead>
              <tr>
                <th>User Email</th>
                <th>Votes</th>
              </tr>
            </thead>
            <tbody>
              {/* Example data */}
              <tr>
                <td>user@example.com</td>
                <td>5</td>
              </tr>
              {/* Add actual user data mapping here */}
            </tbody>
          </table>
        </>
      ) : (
        <p>Access Denied</p>
      )}
    </div>
  );
};

export default AdminPage;
