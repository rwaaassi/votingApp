import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

const VotingPage = () => {
  const { user, votes, vote } = useAuth();
  const navigate = useNavigate();

  const handleVote = (choice) => {
    vote(choice);
  };

  return (
    <div className="voting-page">
      <h2>Which of Sally Rooney's books do you think is the best?</h2>
      <main className="book-container">
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1571423190i/41057294.jpg"
            alt=""
          />
          <button onClick={() => handleVote("Book1")}>Vote</button>{" "}
          <span>Votes: {votes.Book1}</span>
        </div>
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638729263i/32187419.jpg"
            alt=""
          />
          <button onClick={() => handleVote("Book2")}>Vote</button>{" "}
          <span>Votes: {votes.Book2}</span>
        </div>
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672783505i/75555793.jpg"
            alt=""
          />
          <button onClick={() => handleVote("Book3")}>Vote</button>{" "}
          <span>Votes: {votes.Book3}</span>
        </div>
      </main>
      {user &&
        user.email === "admin@gmail.com" &&
        user.password === "admin123" && (
          <button onClick={() => navigate("/admin")}>Go to Admin Page</button>
        )}
      <LogoutButton />
    </div>
  );
};

export default VotingPage;
