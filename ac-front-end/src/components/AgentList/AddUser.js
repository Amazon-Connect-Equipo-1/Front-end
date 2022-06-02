import React from "react";
import "../../styles/AgentList/AddUser.css";

const AddUser = () => {
  return (
    <div className="adu-main-container">
      <div className="adu-container">
        <p className="adu-title">Add User</p>
        <label className="adu-label">Name</label>
        <input className="adu-input" id="name" type="text" placeholder="Name" />
        <label className="adu-label">Email</label>
        <input
          className="adu-input"
          id="email"
          type="text"
          placeholder="Email"
        />
        <label className="adu-label">Password</label>
        <input
          className="adu-input"
          id="password"
          type="text"
          placeholder="Password"
        />
        <button className="adu-send-btn">Save</button>
      </div>
    </div>
  );
};

export default AddUser;
