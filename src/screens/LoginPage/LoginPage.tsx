import { NavLink, Navigate } from "react-router-dom";
import { useState } from "react";

import { useLoginMutation } from "../../Store/Reducers/apiSlice"; // Импорт мутации useLoginMutation из файла api.ts
import styles from "./Login.module.css";

export const LoginPage = ({ type }: { type: "login" | " registration" }) => {
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, password });
  };

  if (isError) {
    prompt("Пользователь с таким email или паролем не найден");
    return <Navigate to="/auth-page" />;
  }
  if (isSuccess) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.login__content}>
      <form className={styles.login__box} onSubmit={handleLogin}>
        <img src="img/logo.jpg" alt="logo" />

        <input
          className={styles.input}
          type="email"
          placeholder="Логин"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Пароль"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className={styles.buttons}>
          <button className={styles.in_button} type="submit">
            Войти
          </button>
          <button className={styles.reg_button}>
            Зарегистрироваться
            <NavLink to="/auth-page" />
          </button>
        </div>
      </form>
    </div>
  );
};
