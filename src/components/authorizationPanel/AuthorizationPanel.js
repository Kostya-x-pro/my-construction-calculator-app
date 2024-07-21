import "./authorizationPanel.scss";

const AuthorizationPanel = () => {
  return (
    <div className="authorization__wrapper">
      <div className="authorization__title">Авторизация администратора</div>
      <form className="authorization__panel">
        <label htmlFor="login">Логин</label>
        <input id="login" name="login" type="text" />
        {/* <div className="authorization__panel-error">Неверный логин или пароль</div> */}
        <label htmlFor="password">Пароль</label>
        <input id="password" name="password" type="password" />
        {/* <div className="authorization__panel-error">Неверный логин или пароль</div> */}
        <button className="entru__btn entru__btn-white">Войти</button>
      </form>
    </div>
  );
};

export default AuthorizationPanel;
