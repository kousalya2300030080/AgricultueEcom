import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar'; // Import the NavBar component
import './NextPage.css'; // Import the CSS file

function NextPage() {
  const navigate = useNavigate();

  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleLogout = () => {
    navigate('/');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.trim()) {
      setReviews([...reviews, review]);
      setReview(''); // Clear the input field after submission
    }
  };

  return (
    <div className="next-page">
      {/* Top bar */}
      <div className="top-bar">
        AGRICULTURE BASED E-COMMERCE WEBSITE
      </div>

      <NavBar /> {/* Include the navigation bar at the top */}

      <h1>Customer Reviews</h1>

      {/* Customer Review Form */}
      <div className="review-section">
        <form onSubmit={handleReviewSubmit} className="review-form">
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here..."
            rows="4"
            className="review-textarea"
          />
          <button type="submit" className="submit-review-button">Submit Review</button>
        </form>

        {/* Displaying Submitted Reviews */}
        {reviews.length > 0 && (
          <div className="reviews-list">
            <h2>Reviews from Customers:</h2>
            <ul>
              {reviews.map((rev, index) => (
                <li key={index} className="customer-review">{rev}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="button-container">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
        <button className="profile-button" onClick={handleProfile}>Profile</button>
      </div>
    </div>
  );
}

export default NextPage;
