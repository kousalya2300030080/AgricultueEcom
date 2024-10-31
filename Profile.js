// src/components/Profile.js
 
import './Profile.css';

import React, { useState } from 'react';

function Profile() {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    dob: '',
    gender: '',
    address: ''
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = () => {
    // Logic to save edited data or allow editing
    alert('Profile updated!');
  };

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          value={userData.age}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={userData.dob}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="gender">Gender:</label>
        <select
          name="gender"
          value={userData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <label htmlFor="address">Address:</label>
        <textarea
          name="address"
          value={userData.address}
          onChange={handleChange}
          required
        />
        <br />
        <button type="button" onClick={handleEdit}>Edit Profile</button>
      </form>
    </div>
  );
}

export default Profile;
