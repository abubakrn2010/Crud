
import { useState } from "react";
import User from "./User";
import "./App.css";

function App() {
  const [users, setUsers] = useState([{
    id: 1,
    img: "https://i.pravatar.cc/150?img=12",
    name: "John Smith",
    age: 25,
    status: "Active"
  },
  {
    id: 2,
    img: "https://i.pravatar.cc/150?img=47",
    name: "Emma Wilson",
    age: 22,
    status: "Inactive"
  },
  {
    id: 3,
    img: "https://i.pravatar.cc/150?img=33",
    name: "Michael Brown",
    age: 30,
    status: "Active"
  },
  {
    id: 4,
    img: "https://i.pravatar.cc/150?img=44",
    name: "Sophia Davis",
    age: 27,
    status: "Active"
  },
  {
    id: 5,
    img: "https://i.pravatar.cc/150?img=13",
    name: "James Wilson",
    age: 35,
    status: "Inactive"
  }]);
  const [open, setOpen] = useState(false);

  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("Active");

  const [editId, setEditId] = useState(null);

  function addUser() {
    if (!name || !age || !img) return;

    setUsers((prev) => [
      ...prev,
      {
        id: Date.now(),
        img,
        name,
        age,
        status
      }
    ]);

    clearForm();
  }

  function deleteUser(id) {
    setUsers((prev) => prev.filter((el) => el.id !== id));
  }

  function editUser(el) {
    setImg(el.img);
    setName(el.name);
    setAge(el.age);
    setStatus(el.status);
    setEditId(el.id);
    setOpen(true);
  }

  function saveUser() {
    setUsers((prev) =>
      prev.map((el) =>
        el.id === editId
          ? { ...el, img, name, age, status }
          : el
      )
    );

    clearForm();
  }

  function clearForm() {
    setImg("");
    setName("");
    setAge("");
    setStatus("Active");
    setEditId(null);
    setOpen(false);
  }

  return (
    <div className="container">
      <h1>User CRUD</h1>

      <button className="add" onClick={() => setOpen(true)}>
        Add User
      </button>

      {open && (
        <div className="dialog">
          <div className="form">
            <h2>{editId === null ? "Add User" : "Edit User"}</h2>

            <input
              placeholder="Image URL"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />

            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <button onClick={editId === null ? addUser : saveUser}>
              {editId === null ? "Add" : "Save"}
            </button>

            <button onClick={clearForm}>Cancel</button>
          </div>
        </div>
      )}

      <div className="users">
        {users.map((el) => (
          <User
            key={el.id}
            user={el}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
