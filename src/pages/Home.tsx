// src/pages/Home.tsx
import { useEffect } from "react";
import { useGlobalContext } from "../context/context";

const Home = () => {
  const { theme } = useGlobalContext();
  useEffect(() => {
    console.log(theme, "HOME COMP");
  }, [theme]);
  return (
    <div
      className={`relative ${theme === "light" ? "bg-white" : "bg-black"}`}

    ></div>
  );
};

export default Home;
