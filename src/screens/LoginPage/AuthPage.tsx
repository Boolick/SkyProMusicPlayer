import { useState } from "react";
import { Navigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";

import {
  useSignupMutation,
  useTokenMutation,
} from "../../Store/Reducers/apiSlice"; // Импорт мутации useSignupMutation из файла apiSlice.ts
import styles from "./SignupPage.module.css";
import { setCredentials, setToken } from "../../Store/Reducers/AuthSlice";

export const SignupPage: React.FC = (): JSX.Element => {
  const [signup, { isLoading }] = useSignupMutation();
  const [token, { isSuccess }] = useTokenMutation();
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await signup({ username, surname, email, password, repeatPassword });
    dispatch(setCredentials({ username, email, password }));
    handleToken();
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

  if (isLoading) {
    return <Skeleton />;
  }
  if (isSuccess) {
    console.log(isSuccess);
    return <Navigate to={"/"} />;
  }

  return (
    <div className={styles.container_signup}>
      <div className={styles.modal__block}>
        <form className={styles.modal__form_login} onSubmit={handleSignup}>
          <img src="img/logo.jpg" alt="logo" />

          <input
            className={styles.modal__input}
            type="text"
            placeholder="Имя"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={styles.modal__input}
            type="text"
            placeholder="Фамилия"
            name="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            className={styles.modal__input}
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.modal__input}
            type="password"
            placeholder="Пароль"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={styles.modal__input}
            type="password"
            placeholder="Пароль"
            name="password"
            value={password}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />

          <div className={styles.buttons}>
            <button className={styles.modal__btn_signup_ent} type="submit">
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
