import { useState } from "react";

export const UserForm = ({ onUserAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onUserAdd({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="userName"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="userEmail">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="userEmail"
          type="email"
        />
      </div>
      <button type="submit">add user</button>
    </form>
  );
};
