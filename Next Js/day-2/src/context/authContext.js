"use client";
import { api } from "@/lib/api";
import { createContext, useContext, useEffect, useState } from "react";

let Auth = createContext();

export let AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  let hydrateUser = async () => {
    try {
      let res = await api.get("/api/auth/me");

      console.log(res);
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
      console.log("Error in Hydration : ", err);
    }
  };

  useEffect(() => {
    hydrateUser();
  }, []);

  return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>;
};

export let useAuth = () => useContext(Auth);
