import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  useLoginMutation,
  useTokenMutation,
} from "../../Store/Reducers/apiSlice";
import styles from "./Login.module.css";
import {
  setCredentials,
  setAccess,
  setRefresh,
} from "../../Store/Reducers/AuthSlice";

export const LoginPage: React.FC = (): JSX.Element => {
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();
  const [token] = useTokenMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginPlaceholder, setLoginPlaceholder] = useState("Логин");
  const [passPlaceholder, setPassPlaceholder] = useState("Пароль");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validateEmail = (email: string) => emailRegex.test(email);
    if (!validateEmail(e.target.value)) {
      setEmailError("Некорректное имя");
    } else {
      setEmailError("");
    }
  };
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const validatePassword = (password: string) => passwordRegex.test(password);
    if (!validatePassword(e.target.value)) {
      setPasswordError("Неверный пароль");
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        setLoginPlaceholder("Это поле не может быть пустым");
        break;
      case "password":
        setPasswordDirty(true);
        setPassPlaceholder("Это поле не может быть пустым");
        break;
    }
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!emailError && !passwordError) {
      login({ email, password });
      dispatch(setCredentials({ email, password }));
      handleToken(email, password);
    }
  };

  const handleToken = async (email: string, password: string) => {
    const response = await token({ email, password });
    console.log(response);
    if ("data" in response) {
      const access = response.data.access;
      const refresh = response.data.refresh;
      dispatch(setAccess(access));
      dispatch(setRefresh(refresh));
    }
  };

  if (isError) {
    setTimeout(() => {
      setEmailError("Неверный пароль или логин");
      navigate("/auth-page");
    }, 4000);
  }

  if (isSuccess) {
    console.log(isSuccess);
    navigate("/");
  }

  return (
    <div data-testid="LoginPage" className={styles.login__content}>
      <form
        data-testid="login-form"
        className={styles.login__box}
        onSubmit={handleLogin}
      >
        <label>
          <img data-testid="logo-img" src="/img/logo.jpg" alt="logo" />
          {isError && (
            <p style={{ color: "red" }}>
              Пользователя не существует <br /> пройдите регистрацию
            </p>
          )}
        </label>
        <label>
          <input
            data-testid="login-input"
            className={styles.input}
            type="email"
            placeholder={loginPlaceholder}
            name="email"
            value={email}
            onBlur={blurHandler}
            onChange={(e) => {
              setEmail(e.target.value);
              emailHandler(e);
            }}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </label>
        <label>
          <input
            data-testid="password-input"
            className={styles.input}
            type="password"
            placeholder={passPlaceholder}
            name="password"
            value={password}
            onBlur={blurHandler}
            onChange={(e) => {
              setPassword(e.target.value);
              passwordHandler(e);
            }}
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        </label>
        <div className={styles.buttons}>
          <button
            data-testid="submit-button"
            className={styles.in_button}
            type="submit"
          >
            Войти
          </button>
          <button
            onClick={() => navigate("/auth-page")}
            className={styles.reg_button}
            type="button"
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
