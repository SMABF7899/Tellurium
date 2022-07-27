import logo from "../logo.svg";

function Login() {
    let username = "";
    let password = "";
    let validUser = "smabanifatemi9978";
    let validPass = "MacbookProM10@";

    console.log("validUser : " + validUser);
    console.log("validPass : " + validPass);

    function checkValidation() {
        if (username === validUser && password === validPass) {
            console.log("Login Successful. Welcome to Titanium")
            console.log("Username : " + username);
            console.log("Password : " + password);
        } else {
            console.log("Login Failed. Try again !")
        }
    }

    return (
        <div className={"App"}>
            <header className={"App-header"}>
                <img src={logo} className={"App-logo"} alt={"logo"}/>
                <form id={"login"}>
                    <h1>Tellurium</h1>
                    <p>
                        <code>Login to the Dashboard</code>
                    </p>
                    <div>
                        <input className={"App-input"} type={"text"} placeholder={"Username"} id={"username"}
                               pattern={"[A-Za-z0-9]*"} onInput={event => username = event.target.value}/>
                        <p className={"alert"}>Must English letters and numbers allowed</p>
                    </div>
                    <div>
                        <input className={"App-input"} type={"password"} placeholder={"Password"} id={"password"}
                               pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$"}
                               onInput={event => password = event.target.value}/>
                        <p className={"alert"}>Must English letters and numbers and characters allowed</p>
                    </div>
                    <div>
                        <input className={"App-checkbox"} type="checkbox" id={"checkbox"}/>
                        <label htmlFor={"checkbox"}> Remember me</label><br/><br/>
                    </div>
                    <div>
                        <button className={"App-button"} type={"button"} onClick={checkValidation}>Login</button>
                        <br/>
                    </div>
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

export default Login;