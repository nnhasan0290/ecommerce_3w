import { createContext, useContext, useReducer } from "react";

const initialState = {
  isAuthenticated: false,
  user: null,
  role: null,
};

const reducer = (state, action) => {};

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const AuthReceiver = () => useContext(AuthContext);
