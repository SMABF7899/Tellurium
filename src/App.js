import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Login to the Dashboard</code>
        </p>
        <form>
          <input className="App-input" type="text" placeholder="Username"/><br/>
          <input className="App-input" type="password" placeholder="Password"/><br/>
          <input className="App-input" type="checkbox" id="checkbox" name="vehicle1" value="Bike"/>
          <label htmlFor="checkbox"> Remember me</label><br/><br/>
          <input className="App-button" type="button" value="  Login  "/><br/><br/>
          <a
              className="App-link"
              href="http://smabf.ir"
              target="_blank"
              rel="noopener noreferrer"
          >
            Visit My Site
          </a>
        </form>
      </header>
    </div>
  );
}

export default App;
