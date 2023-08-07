import React from 'react';
import style from "./Login.module.css";

function Login() {
  return (
    <div className={style.wrapper}>
      <div className={style.login__content}>
      <h1>Login</h1>
      <div className={style.login__box}>
        {/* <div className={style.logo}> */} <img src="img/logo.jpg" alt="logo" />{/* </div> */}
        <input className={style.input} type="text" placeholder='Логин'/>
        <input className={style.input} type="password" placeholder='Пароль'/>
        <button type="submit">Войти</button>
        <button type="submit">Зарегистрироваться</button>
      </div>

      </div>
    </div>
  )
}

export default Login
