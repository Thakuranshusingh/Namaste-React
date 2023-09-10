import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "USER",
});

export default UserContext;
