import React, { Component } from 'react';
import './App.css';

import Header from "./Component/Header/Header"
import Dashboard from "./Component/Dashboard/Dashboard"
import Form from "./Component/Form/Form"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        <Form />
      </div>
    );
  }
}

export default App;
