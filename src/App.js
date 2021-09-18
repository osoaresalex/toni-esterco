import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>Teste de versionamento</code> isto funciona?.
        </p>
        <a
          className="App-link"
          href="https://www.objective.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Objective TESTE FRONT-END.
        </a>
      </header>
    </div>
  );
}

export default App;
