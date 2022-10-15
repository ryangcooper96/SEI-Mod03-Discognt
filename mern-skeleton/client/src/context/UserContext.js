import React from "react";
import userService from "../utils/userService"
const initialState = {
  user: {},
};

export const UserContext = React.createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, setState] = React.useState(initialState);
  React.useEffect(() => {
    async function getAndSetUser() {
      const user = await userService.getUser()
      setState({ ...state, user })
    }
    getAndSetUser()
  }, [])
  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};
