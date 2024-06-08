import { useAuth } from "../contexts/AuthContext";

const AdminPage = () => {
  const { votes, logout } = useAuth();

  const totalVotes = Object.values(votes).reduce(
    (sum, count) => sum + count,
    0
  );

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <h3>Total Votes: {totalVotes}</h3>
      <h3>Votes Breakdown</h3>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(votes).map(([choice, count]) => (
            <tr key={choice}>
              <td>{choice}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
