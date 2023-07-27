import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSignupMutation } from "../../Store/Reducers/apiSlice"; // Импорт мутации useSignupMutation из файла api.ts
import styles from "./SignupPage.module.css";

export const SignupPage = () => {
  const [signup, { isLoading }] = useSignupMutation();
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    signup({ username, surname, email, password })
      .unwrap()
      .then(() => setIsRegistered(true));
  };

  if (isRegistered) {
    return <Navigate to="/" />;
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
