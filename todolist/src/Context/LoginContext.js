import { createContext, useEffect, useState } from "react";

const LoginContext = createContext();
export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState([]);
  const FetchUser = async () => {
    const response = await fetch(
      `https://63be913af5cfc0949b5ae393.mockapi.io/api/login`
    );
    const data = await response.json();
    // console.log(data);
    setLogin(data)
  };
  useEffect(() => {
    FetchUser();
  }, []);

  return <LoginContext.Provider>{children}</LoginContext.Provider>;
};
