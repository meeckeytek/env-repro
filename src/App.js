import logo from './logo.svg';
import './App.css';

const env_var = process.env.REACT_APP_DONE;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Congratulations! <br/><br/> It worked...
        </p>
        <p>Hello meeckey, {env_var}</p>
      </header>
    </div>
  );
}

export default App;
