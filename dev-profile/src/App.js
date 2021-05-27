import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

function App() {
  $.ajax({
    url: "https://api.github.com/users/blackmiaool/repos",
    jsonp: true,
    method: "GET",
    dataType: "json",
    success: function(res) {
      console.log(res)
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
