import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";
import { completeRegistration } from "../../api/auth"; // Ваш API запит для завершення реєстрації

const GoogleAuthHandler = () => {
  const navigate = useNavigate();
  const { setUser, setToken, setIsLoggedIn, storeUserId } = useAuth();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(
          "https://classifier-backend.fly.dev/api/v1/auth/google/callback",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (data.message === "User already exists") {
            setUser(data.user);
            setToken(data.user.token);
            setIsLoggedIn(true);
            storeUserId(data.user.token);
            navigate("/classifier", { replace: true });
          } else {
            // Обробка іншої відповіді
          }
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Не вдалося увійти через Google.");
      }
    }

    fetchUserData();
  }, [navigate, setUser, setToken, setIsLoggedIn, storeUserId]);

  return <div>Loading...</div>;
};

export default GoogleAuthHandler;
