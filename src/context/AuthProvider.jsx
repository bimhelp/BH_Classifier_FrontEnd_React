import React, { useState, useEffect } from "react";
import { authContext } from "./authContext";

import {
  logIn,
  logOut,
  registerUser,
  completeRegistration,
  googleAuthenticate,
  currentUser,
} from "../services";
import { toast } from "react-toastify";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", "");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [role, setRole] = useLocalStorage("role", "");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: null,
    email: null,
  });
  useEffect(() => {
    // console.log(token);
    async function onRefresh(token) {
      try {
        const response = await currentUser(token);
        if (response) {
          // console.log("response: ", response);
          setRole(response.user.role);
          setUser(response.user);
          setIsLoggedIn(true);
          setUserId(response.user.userId);
          // при успішному логіні видалить всі тости
          toast.dismiss();
        } else {
        }
      } catch (error) {
        toast.error(
          "Не вдалось увійти в акаунт, перевірте чи коректний email та пароль",
          { autoClose: false }
        );
      }
    }
    if (token) {
      onRefresh(token);
    }
  }, [setRole, setToken, token]);

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
        // storeUserId(response.token);
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

  const onCompleteRegistration = (credentials) => {
    async function complete(credentials) {
      // console.log("credentials: ", credentials);
      try {
        const response = await completeRegistration(credentials);
        // console.log("complete registration response: ", response);
        setUser(response);
        // записуємо токен в lacalstorage
        setToken(response.token);
        setIsLoggedIn(true);
        // storeUserId(response.token);
        // Перенаправляємо на головну сторінку
        navigate("/", { replace: true });
      } catch (error) {
        toast.error(
          "Не вдалось зареєструвати користувача, перевірте чи коректно заповнена форма реєстрації"
        );
      }
    }
    complete(credentials);
  };

  const onGoogleAuthenticate = () => {
    async function authenticate() {
      try {
        const response = await googleAuthenticate();
        console.log("google login: response: ", response);
      } catch (error) {
        toast.error("Не вдалось увійти в акаунт google", { autoClose: false });
      }
    }
    authenticate();
  };

  const onGoogleLogin = (token) => {
    async function login(token) {
      try {
        const response = await currentUser(token);
        console.log("google login response: ", response);

        // setToken(response.token);
        setRole(response.user.role);
        setUser(response.user);
        setIsLoggedIn(true);
        setUserId(response.user.userId);
        // при успішному логіні видалить всі тости
        toast.dismiss();
        // Перенаправляємо на головну сторінку
        navigate("/", { replace: true });
      } catch (error) {
        console.log("error: ", error);
        toast.error("Не вдалось виконати вхід в акаунт", { autoClose: false });
      }
    }
    login(token);
  };

  const onLogIn = (credentials) => {
    async function login(credentials) {
      try {
        const response = await logIn(credentials);
        if (response) {
          // console.log("token", response.token);
          // console.log("username", response.user.name);
          // console.log("userId", response.user.userId);
          setToken(response.token);
          setRole(response.user.role);
          setUser(response.user);
          setIsLoggedIn(true);
          setUserId(response.user.userId);
          // при успішному логіні видалить всі тости
          toast.dismiss();
          // Перенаправляємо на головну сторінку
          navigate("/", { replace: true });
        }
      } catch (error) {
        toast.error(
          "Не вдалось увійти в акаунт, перевірте чи коректний email та пароль",
          { autoClose: false }
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
          setUser({
            name: null,
            email: null,
          });
          setRole("");
          setUserId(null);
          setIsLoggedIn(false);
          // Перенаправляємо на головну сторінку
          navigate("/", { replace: true });
        }
      } catch (error) {
        toast.error("Не вдалось вийти із системи");
      }
    }
    logout();
  };

  const providerValue = {
    token,
    user,
    isLoggedIn,
    onRegister,
    onLogIn,
    onLogOut,
    role,
    userId,
    setToken,
    onGoogleAuthenticate,
    onCompleteRegistration,
    onGoogleLogin,
  };
  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
