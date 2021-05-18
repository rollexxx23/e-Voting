import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css' ;
import FirstPage from "./Login/FirstPage"
import Login from "./Login/Login"
import EnterOTP from "./Login/EnterOTP"
import MainScreen from "./Screens/MainScreen"
import VotingScreen from "./Screens/VotingScreen"
import './App.css';
import { Switch,Route } from "react-router-dom";
import Error from "./Error";
import ThankYou from "./Screens/ThankYou"

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const ethereum = window.ethereum;
    const enabledWeb3 = await ethereum.enable();
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] }) ;
    console.log(this.state.account) ;
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  

  render() {
    return (
      <div className="App">
      <Switch>
      <Route path='/' exact component={FirstPage} />
      <Route path='/login' exact component={Login} />
      <Route path='/otp' exact component={EnterOTP} />
      <Route path='/main' exact component={MainScreen} />
      <Route path='/vote' exact component={VotingScreen} />
      <Route path='/thank' exact component={ThankYou} />
      <Route component={Error} />
      </Switch>

      <p>Your account: {this.state.account}</p>
    </div>
    );
  }
}

export default App;
