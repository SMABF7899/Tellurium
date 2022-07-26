import logo from './logo.svg';
import './App.css';

function LoginPage() {
  return (
    <div className={"App"}>
      <header className={"App-header"}>
        <img src={logo} className={"App-logo"} alt={"logo"} />
        <form id={"login"}>
          <h1>Titanium</h1>
          <p>
            <code>Login to the Dashboard</code>
          </p>
          <div>
            <input className={"App-input"} type={"text"} placeholder={"Username"} pattern={"[A-Za-z0-9]*"}/>
            <p className={"alert"}>Must English letters and numbers allowed</p>
          </div>
          <div>
            <input className={"App-input"} type={"password"} placeholder={"Password"} pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$"}/>
            <p className={"alert"}>Must English letters and numbers and characters allowed</p>
          </div>
          <input className={"App-checkbox"} type="checkbox" id={"checkbox"}/>
          <label htmlFor={"checkbox"}> Remember me</label><br/>
          <button className={"App-button"} type={"submit"}>Login</button><br/><br/>
          <a
              className={"App-link"}
              href={"http://smabf.ir"}
              target={"_blank"}
              rel={"opener referrer"}
          >
            Visit My Site
          </a>
        </form>
      </header>
    </div>
  );
}

export default LoginPage;
