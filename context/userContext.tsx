"use client"

import React from "react";
import { useRouter } from "next/navigation";

import { USER_GET, TOKEN_POST, TOKEN_VALIDATE_POST } from "@/api";

type ContextTypes = {
  userLogout: () => void
  userLogin: (username: string, password: string) => void
  data: any 
  error: any 
  loading: any 
  login: any
}

export const UserContext = React.createContext({} as ContextTypes);

export const UserStorage = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = React.useState<any>(null);
  const [login, setLogin] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean | null>(null);
  const [error, setError] = React.useState<boolean | null>(null);
  const navigate = useRouter();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate.push("/sign-in");
    },
    [navigate]
  );

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username: string, password: string) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: Usuário ou senha inválido.`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate.push("/");
    } catch (err: any) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");

      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido.");
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }

    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
