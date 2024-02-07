import React, { useState, useEffect } from "react";
import { authContext } from "./authContext";
import { logIn, logOut, registerUser, currentUser } from "../services";
import { toast } from "react-toastify";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", "");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: null,
    email: null,
  });
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!mounted) {
      // Код, який потрібно виконати тільки при першому монтуванні
      async function getCurrent(token) {
        try {
          const response = await currentUser(token);
          console.log("response: ", response);
          setUser(response.user);

          setIsLoggedIn(true);
        } catch (error) {
          // console.log("error: ", error.response);

          toast.error(`Не вдалось автоматично зайти в систему`);
        }
      }
      console.log("useEffect виконується тільки раз при першому монтуванні");
      if (token === "") {
        // console.log("no token");
        return;
      }
      getCurrent(token);
      setMounted(true);
    }
  }, [mounted, token]);

  const onRegister = (credentials) => {
    // console.log("register", credentials);

    async function register(credentials) {
      try {
        const response = await registerUser(credentials);
        // console.log("response: ", response);

        setUser(response);
        // записуємо токен в lacalstorage
        setToken(response.token);
        setIsLoggedIn(true);
        // Перенаправляємо на головну сторінку
        navigate("/", { replace: true });
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
          // console.log(response.token);
          setToken(response.token);
          setUser(response.user);
          setIsLoggedIn(true);
          // Перенаправляємо на головну сторінку
          navigate("/", { replace: true });
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
          setToken("");
          setUser(null);
          setIsLoggedIn(false);
        }
      } catch (error) {
        toast.error("Не вдалось вийти із системи");
      }
    }
    logout();
  };

  // const providerValue = useMemo(() => {
  //   return { user, isLoggedIn, onRegister, onLogIn, onLogOut };
  // }, [isLoggedIn, onLogIn, onLogOut, onRegister, user]);

  const providerValue = { user, isLoggedIn, onRegister, onLogIn, onLogOut };
  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
