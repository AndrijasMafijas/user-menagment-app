import React, { useState } from "react";
import axios from "axios";
import { User } from "./types";

export const AddUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:3000/users",
      { name, email }
    );
    setName("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add User</h2>
        <input
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
