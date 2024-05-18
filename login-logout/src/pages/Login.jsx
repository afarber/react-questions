import { useContext, useState } from "react";
import MyContext from "../MyContext";

const Login = () => {
  const { setUser } = useContext(MyContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleLogin = () => {
    const userId = Math.random().toString(36).substring(7);
    setUser({
      firstName,
      lastName,
      userId,
      photoUrl: "",
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(ev) => setFirstName(ev.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(ev) => setLastName(ev.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
