import password from "./password.gif"
import AccountPage from "./AccountPage";

import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Password Manager</h1>
            <img src={password} alt='password gif' />
        </header>
        <div><AccountPage /></div>
      </div>
  );
}

export default App;
