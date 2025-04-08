import React, { useState } from 'react';
import '../styles/Home.css';
import ProfilePhoto from '../assets/Amar_photo.jpg'; // Ensure this is at the top

const Home = () => {
  const [showForm, setShowForm] = useState(false); // State to toggle popup visibility
  const [showAlert, setShowAlert] = useState(false); // State to toggle custom alert

  const handleConnectClick = () => {
    setShowForm(true); // Show the form popup
  };

  const handleClosePopup = () => {
    setShowForm(false); // Hide the form popup
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent form refresh
    setShowForm(false); // Close the form popup
    setShowAlert(true); // Show the custom alert box
  };

  const handleCloseAlert = () => {
    setShowAlert(false); // Hide the custom alert
  };

  return (
    <div className="home-container">
      <div className="intro">
        <div>
          <h1>Welcome to My MERN Stack Portfolio</h1>
          <p className="lead-text">
            Hi, I'm Amar Mapare, a dedicated and enthusiastic full-stack developer with a passion for creating dynamic and interactive web applications using the MERN stack.
          </p>
          <button className="learn-more-btn" onClick={handleConnectClick}>
            Connect with me
          </button>
        </div>

        <div className="profile-photo">
          <img src={ProfilePhoto} alt="Amar Mapare" />
        </div>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-form">
            <button className="close-btn" onClick={handleClosePopup}>
              &times;
            </button>
            <h2>Connect with Me</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="reason">Reason to Connect:</label>
                <textarea id="reason" name="reason" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Custom Alert */}
      {showAlert && (
        <div className="custom-alert-overlay">
          <div className="custom-alert-box">
            <h2>Success!</h2>
            <p>You have been successfully connected with me!!!</p>
            <button className="close-alert-btn" onClick={handleCloseAlert}>
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
