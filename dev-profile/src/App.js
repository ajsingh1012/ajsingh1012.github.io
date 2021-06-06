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
        <Typography variant="p" component="p" gutterBottom>
          This is the official front cover portfolio for the GitHub repositories of Aneeljyot Alagh.
        </Typography>
        <CardGrid />
      </header>
    </div>
  );
}

export default App;
