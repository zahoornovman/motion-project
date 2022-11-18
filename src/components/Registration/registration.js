import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  console.log(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await dispatch(newUser({email}));
    navigate("/profile");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <button type="submit"> Register </button>
      </form>
    </div>
  );
};

export default Registration;
