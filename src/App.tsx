
import { useState } from "react";
import User from "./User";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, img: "https://i.pravatar.cc/150?img=12", name: "John Smith", age: 25, status: "Active" },
    { id: 2, img: "https://i.pravatar.cc/150?img=47", name: "Emma Wilson", age: 22, status: "Inactive" },
    { id: 3, img: "https://i.pravatar.cc/150?img=33", name: "Michael Brown", age: 30, status: "Active" },
    { id: 4, img: "https://i.pravatar.cc/150?img=44", name: "Sophia Davis", age: 27, status: "Active" },
    { id: 5, img: "https://i.pravatar.cc/150?img=13", name: "James Wilson", age: 35, status: "Inactive" }
  ]);

  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("Active");
  const [id, setId] = useState(null);

  function clear() {
    setImg("");
    setName("");
    setAge("");
    setStatus("Active");
    setId(null);
    setAdd(false);
    setEdit(false);
  }

  function addUser() {
    if (!img || !name || !age) return;

    setUsers([...users, {
      id: Date.now(),
      img: img,
      name: name,
      age: age,
      status: status
    }]);

    clear();
  }

  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  function editUser(user) {
    setId(user.id);
    setImg(user.img);
    setName(user.name);
    setAge(user.age);
    setStatus(user.status);
    setEdit(true);
  }

  function saveUser() {
    setUsers(users.map((user) =>
      user.id === id
        ? { ...user, img, name, age, status }
        : user
    ));

    clear();
  }

  return (
    <div className="container">

      <button onClick={() => setAdd(true)}>Add User</button>

  
      {add && (
        <div className="dialog">
          <div className="form">
            <h2>Add User</h2>

            <input placeholder="Image URL" value={img}
              onChange={(e) => setImg(e.target.value)} />

            <input placeholder="Name" value={name}
              onChange={(e) => setName(e.target.value)} />

            <input type="text " placeholder="Age" value={age}
              onChange={(e) => setAge(e.target.value)} />

            <select value={status}
              onChange={(e) => setStatus(e.target.value)}>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <button onClick={addUser}>Add</button>
            <button onClick={clear}>Cancel</button>
          </div>
        </div>
      )}


      {edit && (
        <div className="dialog">
          <div className="form">
            <h2>Edit User</h2>

            <input placeholder="Image URL" value={img}
              onChange={(e) => setImg(e.target.value)} />

            <input placeholder="Name" value={name}
              onChange={(e) => setName(e.target.value)} />

            <input type="text" placeholder="Age" value={age}
              onChange={(e) => setAge(e.target.value)} />

            <select value={status}
              onChange={(e) => setStatus(e.target.value)}>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <button onClick={saveUser}>Save</button>
            <button onClick={clear}>Cancel</button>
          </div>
        </div>
      )}

      <div className="users">
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
