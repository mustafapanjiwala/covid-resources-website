import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resources from './Components/Recources/Resources';
import Navbar from './Components/CustomNavbar/CustomNavbar';


function App() {

  return (
    <HashRouter>

      <Navbar></Navbar>

      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/res" component={Resources}></Route>
        <Route exact path="/res/:id" component={Resources}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
