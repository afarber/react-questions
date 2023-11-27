import React from "react";
import AuthContext from "./AuthContext";
import MyComponent from "./MyComponent";

function App() {
  // User is authenticated and we get the username
  const userName = "Alex";

  return (
    <AuthContext.Provider value={userName}>
      <MyComponent />
    </AuthContext.Provider>
  );
}

export default App;
