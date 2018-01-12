import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { manage: '' };
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();

    this.setState({ manager })
  }

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This Contract is managed by {this.state.manager} </p>
      </div>
    );
  }
}

export default App;
