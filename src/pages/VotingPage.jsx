import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import LogoutButton from "../components/LogoutButton";



const VotingPage = () => {
  const { user, logout } = useAuth();
  const [voteCounts, setVoteCounts] = useState({
    Cats: 0,
    Dogs: 0,
    Cows: 0,
    Lions: 0,
  });

  const handleVote = (choice) => {
    setVoteCounts((prev) => ({ ...prev, [choice]: prev[choice] + 1 }));
  };


  return (
    <div className="voting-page">
      <h2>Vote for your favorite!</h2>
      <div>
        <button onClick={() => handleVote("Cats")}>Vote for Cats</button>{" "}
        <span>Votes: {voteCounts.Cats}</span>
      </div>
      <div>
        <button onClick={() => handleVote("Dogs")}>Vote for Dogs</button>{" "}
        <span>Votes: {voteCounts.Dogs}</span>
      </div>
      <div>
        <button onClick={() => handleVote("Cows")}>Vote for Cows</button>{" "}
        <span>Votes: {voteCounts.Cows}</span>
      </div>
      <div>
        <button onClick={() => handleVote("Lions")}>Vote for Lions</button>{" "}
        <span>Votes: {voteCounts.Lions}</span>
      </div>
      <LogoutButton/>
    </div>
  );
};

export default VotingPage;
