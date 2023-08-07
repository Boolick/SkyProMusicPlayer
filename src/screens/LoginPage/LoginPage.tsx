import { NavLink, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";

import {
  useLoginMutation,
  useTokenMutation,
} from "../../Store/Reducers/apiSlice";
import styles from "./Login.module.css";
import { setCredentials, setToken } from "../../Store/Reducers/AuthSlice";

export const LoginPage: React.FC = (): JSX.Element => {
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();
  const [token, { status }] = useTokenMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [access, setAccess] = useState("");
  const [refresh, setRefresh] = useState("");
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <Skeleton
        data-testid="skeleton"
        className={styles.login__content}
        baseColor="var(--color-img)"
        highlightColor="var(--color-background)"
      />
    );
  }
  if (isError) {
    return <Navigate to="/auth-page" />;
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, password });
    dispatch(setCredentials({ email, password }));
  };

  const handleToken = async () => {
    const response = await token({ email, password });
    console.log(response);
    if ("data" in response) {
      const token = response.data.access;
      //const refresh = response.data.refresh;
      dispatch(setToken(token));
      //dispatch(setToken(refresh));
    }
  };

  if (isSuccess) {
    console.log(isSuccess);
    return <Navigate to={"/"} />;
  }

  return (
    <div data-testid="LoginPage" className={styles.login__content}>
      <form
        data-testid="login-form"
        className={styles.login__box}
        onSubmit={handleLogin}
      >
        <img data-testid="logo-img" src="img/logo.jpg" alt="logo" />

        <input
          data-testid="login-input"
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
          <button
            onClick={handleToken}
            className={styles.in_button}
            type="submit"
          >
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
