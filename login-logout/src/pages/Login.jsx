import { useState } from "react";
import PropTypes from "prop-types";

const Login = ({ setUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName.length > 1 && lastName.length > 1;

  const handleLogin = (ev) => {
    ev.preventDefault();

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
          onChange={(ev) => setFirstName(ev.target.value.trim())}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(ev) => setLastName(ev.target.value.trim())}
        />
      </div>
      <div>
        <button disabled={!canLogin} onClick={handleLogin}>
          Login
        </button>
        {!canLogin && (
          <span>
            👆 <i>Fill in the both fields.</i>
          </span>
        )}
      </div>
    </div>
  );
};

export default Login;

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};
