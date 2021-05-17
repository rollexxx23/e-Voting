import FirstPage from "./Login/FirstPage"
import Login from "./Login/Login"
import EnterOTP from "./Login/EnterOTP"
import MainScreen from "./Screens/MainScreen"
import VotingScreen from "./Screens/VotingScreen"
import './App.css';
import { Switch,Route } from "react-router-dom";
import Error from "./Error";
import ThankYou from "./Screens/ThankYou"


function App() {
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
    </div>
  );
}

export default App;
