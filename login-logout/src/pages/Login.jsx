import { useContext, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import UserContext from "../contexts/UserContext";

const Login = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setUser } = useContext(UserContext);

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
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
    </div>
  );
};

export default Login;
