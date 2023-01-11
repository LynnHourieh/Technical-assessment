import { createContext, useEffect, useState } from "react";

const LoginContext = createContext();
export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState([]);
  const[isLoading,setisLoading]=useState(true)
  const FetchUser = async () => {
    const response = await fetch(
      `https://63be913af5cfc0949b5ae393.mockapi.io/api/login`
    );
    const data = await response.json();
    setisLoading(false)
    // console.log(data);
    setLogin(data)
  };
  useEffect(() => {
    FetchUser();
  }, []);
if (isLoading) return "loading.."
  return <LoginContext.Provider value={{login}}>{children}</LoginContext.Provider>;
};
export default LoginContext