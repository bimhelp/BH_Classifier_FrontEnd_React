import React, { useMemo, useState } from "react";
import { authContext } from "./authContext";
import { logIn, logOut, registerUser } from "../services";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: null,
    email: null,
  });

  const onRegister = (credentials) => {
    // console.log("register", credentials);

    async function register(credentials) {
      try {
        const response = await registerUser(credentials);
        // console.log("response: ", response);
        setUser(response);
        setIsLoggedIn(true);
      } catch (error) {
        // console.log("error: ", error.response);

        if (error.response.status === 409) {
          toast.error(`Email ${credentials.email} вже зареєстровано в системі`);
        } else
          toast.error(
            "Не вдалось зареєструвати користувача, перевірте чи коректно заповнена форма реєстрації"
          );
      }
    }

    register(credentials);
  };

  const onLogIn = (credentials) => {
    async function login(credentials) {
      try {
        const response = await logIn(credentials);
        if (response) {
          // console.log("token", response.token);
          // console.log("username", response.user.name);
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
          // console.log("responce: ", responce);

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
    return { user, isLoggedIn, onRegister, onLogIn, onLogOut };
  }, [isLoggedIn, user]);

  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
