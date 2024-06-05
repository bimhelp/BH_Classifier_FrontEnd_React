import React, { useState, useEffect } from "react";
// import { CustomLoader } from "./Loader.styled";
import ContentLoader from "react-content-loader";

const Loader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Під час відключення компонента, видаляємо обробник події
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Пустий масив означає, що ефект виконується лише після монтування компонента

  // Функція для визначення, яка розмітка відображається залежно від ширини екрану
  const getLayout = () => {
    if (windowWidth < 600) {
      return (
        <>
          {/* Розмітка для малих екранів */}
          <ContentLoader
            speed={2}
            width={550}
            height={32}
            viewBox="0 0 550 32"
            backgroundColor="#e3e3e3"
            foregroundColor="#c7c7c7"
            style={{ width: "100%" }}
          >
            <rect x="10" y="0" rx="5" ry="5" width="550" height="32" />
          </ContentLoader>
        </>
      );
    } else {
      return (
        <>
          {/* Розмітка для великих екранів */}
          <ContentLoader
            speed={2}
            width={1415}
            height={32}
            viewBox="0 0 1415 32"
            backgroundColor="#e3e3e3"
            foregroundColor="#c7c7c7"
            style={{ width: "100%" }}
          >
            <rect x="15" y="0" rx="5" ry="5" width="110" height="32" />
            <rect x="130" y="0" rx="5" ry="5" width="1285" height="32" />
          </ContentLoader>
        </>
      );
    }
  };

  return <>{getLayout()}</>;
};

export default Loader;
