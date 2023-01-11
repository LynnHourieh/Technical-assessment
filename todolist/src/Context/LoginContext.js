import { createContext, useEffect, useState } from "react";

const LoginContext = createContext();
export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState([]);
  const[isLoading,setisLoading]=useState(true)
  //FetchUser is a function that fetches the data from th MOCK API 
  const FetchUser = async () => {
    const response = await fetch(
      `https://63be913af5cfc0949b5ae393.mockapi.io/api/login`
    );
    const data = await response.json();
    setisLoading(false)
    // console.log(data);
    setLogin(data)
  };
  //as we refresh the page, the data should fe fetched again
  useEffect(() => {
    FetchUser();
  }, []);
if (isLoading) return "loading.."
  return <LoginContext.Provider value={{login}}>{children}</LoginContext.Provider>;
};
export default LoginContext