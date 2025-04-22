import React from "react";
import { UserList } from "./UserList";
import { AddUserForm } from "./AddUserForm";

function App() {
  return (
    <div className="App">
      <h2>User Menagment App</h2>
      <AddUserForm />
      <UserList />
    </div>
  );
}
export default App;
