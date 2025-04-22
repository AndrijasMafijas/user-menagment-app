import { useEffect, useState } from "react";
import { User } from "./types";
import axios from "axios";

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const fetchUsers = async () => {
    const response = await axios.get(
      "http://localhost:3000/users"
    );

    const filteredUsers = response.data.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));

    setUsers(filteredUsers);
  };

  const deleteUser = async (id: number) => {
    await axios.delete(
      `http://localhost:3000/users/${id}`
    );
    fetchUsers();
  };

  const modifyUser = async (id: number) => {
    await axios.put(
      `http://localhost:3000/users/${id}`,
      { name, email }
    );
    setEmail("");
    setName("");
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
            <button onClick={() => deleteUser(u.id)}>Delete</button>
            <button onClick={() => modifyUser(u.id)}>Modify</button>
          </li>
        ))}
      </ul>
      <form>
        <h2>Modify user</h2>
        <input
          value={name}
          placeholder="Modify name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          value={email}
          placeholder="Modify email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </form>
    </div>
  );
};
