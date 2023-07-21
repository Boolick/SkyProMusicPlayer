import { useDispatch, useSelector } from "react-redux";

import styles from "./Login.module.css";

export const LoginPage = ({ type }: { type: "login" | " registration" }) => {
  const currentAuthTitle = type === "login" ? "Войти" : "Зарегистрироваться";

  return (
    <div className={styles.login__content}>
      <form className={styles.login__box}>
        <img src="img/logo.jpg" alt="logo" />

        <input className={styles.input} type="text" placeholder="Логин" />
        <input className={styles.input} type="password" placeholder="Пароль" />

        <div className={styles.buttons}>
          <button className={styles.in_button} type="submit">
            {currentAuthTitle}
          </button>
          <button className={styles.reg_button} type="submit">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
