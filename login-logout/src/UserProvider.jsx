import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] =
    useState(/*{
    firstName: "",
    lastName: "",
    userId: "",
    photoUrl: "",
  }*/);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const childrenPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]).isRequired;

UserProvider.propTypes = {
  children: childrenPropType,
};
