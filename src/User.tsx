
import "./User.css";

function User(props) {
  return (
    <div className="card">
      <img src={props.user.img} alt="" />

      <h3>{props.user.name}</h3>
      <p>Age: {props.user.age}</p>
      <p>Status: {props.user.status}</p>

      <button onClick={() => props.editUser(props.user)}>
        Edit
      </button>

      <button onClick={() => props.deleteUser(props.user.id)}>
        Delete
      </button>
    </div>
  );
}

export default User;
