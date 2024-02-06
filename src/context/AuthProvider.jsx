import React, { useMemo, useState } from "react";
import { authContext } from "./authContext";
import { logIn, logOut } from "../services";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: null,
    email: null,
  });
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogIn = (credentials) => {
    async function login(credentials) {
      try {
        const response = await logIn(credentials);
        if (response) {
          // console.log("token", response.token);
          // console.log("username", response.user.name);
          setToken(response.token);
          setUser(response.user);
          setIsLoggedIn(true);
        }
      } catch (error) {
        toast.error(
          "Не вдалось увійти в акаунт, перевірте чи коректний email та пароль"
        );
      }
    }
    login(credentials);
  };

  const onLogOut = () => {
    async function logout() {
      try {
        const responce = await logOut();
        if (responce) {
          console.log("responce: ", responce);

          setUser(null);
          setIsLoggedIn(false);
        }
      } catch (error) {
        toast.error("Не вдалось вийти із системи");
      }
    }
    logout();
  };

  const providerValue = useMemo(() => {
    return { user, isLoggedIn, onLogIn, onLogOut };
  }, [isLoggedIn, user]);

  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
