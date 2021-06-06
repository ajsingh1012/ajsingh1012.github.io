//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardGrid from './components/CardGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2" component="h2" gutterBottom>Welcome</Typography>
        <CardGrid />      
      </header>
      
    </div>
  );
}

export default App;
