import React, { createContext, useState, useEffect, useContext } from "react";

import * as auth from "../services/auth";

interface User {
  id: number;
  login: string;
  password: string;
  nome: string;
  email: string;
  telefone: string;
  escola: number;
  tipodeutilizador: number;
}

interface AuthContextData {
  logged: boolean;
  loading: boolean;
  user: User | null;
  AuthLogin: (data: object) => object;
  AuthRegister: (data: object) => object;
  AuthLogout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      Promise.resolve()
        .then(function () {
          return localStorage.getItem("@APP:user");
        })
        .then(async (stg) => {
          if (stg) {
            const response = await auth.SignIn({
              login: JSON.parse(stg).login,
              password: JSON.parse(stg).password,
            });
            if (response.user) {
              console.log('O utilizador', response.user.nome, 'iniciou a sessao.')
              await localStorage.setItem(
                "@APP:user",
                JSON.stringify(response.user)
              );
              setUser(response.user);
              setLoading(false);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setLoading(false);
    loadStorage();
  }, []);

  async function AuthLogin(data: object) {
    const response = await auth.SignIn(data);

    console.log("AuthMethod:", response);

    await localStorage.setItem("@APP:user", JSON.stringify(response.user));
    setUser(response.user);
    return response.user;
  }

  async function AuthRegister(data: object) {
    const response = await auth.SignUp(data);

    console.log("AuthMethod:", response);

    return response.user;
  }

  async function AuthLogout() {
    await localStorage.removeItem("@APP:user");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ logged: !!user, loading, user, AuthLogin, AuthRegister, AuthLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth() {
  return useContext(AuthContext);
}
