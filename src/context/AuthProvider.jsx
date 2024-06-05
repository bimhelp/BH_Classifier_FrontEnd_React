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
  const [userId, setUserId] = useState(null);

  const [role, setRole] = useLocalStorage("role", "");
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();
  function storeUserId() {
    if (token) {
      // Парсимо токен для отримання його вмісту (зазвичай це JSON об'єкт)
      const tokenPayload = JSON.parse(atob(token.split(".")[1]));
      console.log("tokenPayload: ", tokenPayload);

      // Отримуємо ідентифікатор користувача з токена
      console.log("tokenPayload.userId: ", tokenPayload.userId);
      setUserId(tokenPayload.userId);
    }
  }
  useEffect(() => {
    function storeUserId() {
      if (token) {
        // Парсимо токен для отримання його вмісту (зазвичай це JSON об'єкт)
        const tokenPayload = JSON.parse(atob(token.split(".")[1]));
        console.log("tokenPayload: ", tokenPayload);

        // Отримуємо ідентифікатор користувача з токена
        console.log("tokenPayload.userId: ", tokenPayload.userId);
        setUserId(tokenPayload.id);
      }
    }

    if (!mounted) {
      // Код, який потрібно виконати тільки при першому монтуванні
      async function getCurrent(token) {
        // console.log("token: ", token);

        try {
          const response = await currentUser(token);
          // console.log("response: ", response);

          setUser(response.user);
          storeUserId();
          setRole(response.user.role);
          setIsLoggedIn(true);
        } catch (error) {
          // toast.error(`Не вдалось автоматично зайти в систему`);
          setRole("");
        }
      }
      // console.log("useEffect виконується тільки раз при першому монтуванні");
      if (token === "") {
        // console.log("no token");
        setRole("");
        return;
      }
      getCurrent(token);
      setMounted(true);
    }
  }, [mounted, setRole, setUser, token]);

  const onRegister = (credentials) => {
    // console.log("register", credentials);

    async function register(credentials) {
      try {
        const response = await registerUser(credentials);
        // console.log("response: ", response);

        setUser(response);

        // записуємо токен в lacalstorage
        setToken(response.token);
        storeUserId();
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
          setRole(response.user.role);
          setUser(response.user);
          storeUserId();
          setIsLoggedIn(true);
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

  // const providerValue = useMemo(() => {
  //   return { user, isLoggedIn, onRegister, onLogIn, onLogOut };
  // }, [isLoggedIn, onLogIn, onLogOut, onRegister, user]);

  const providerValue = {
    user,
    isLoggedIn,
    onRegister,
    onLogIn,
    onLogOut,
    role,
    userId,
  };
  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
