import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resources from './Components/Recources/Resources';
import Navbar from './Components/CustomNavbar/CustomNavbar';
import { useState } from 'react';


function App() {
  // fetch("data.json", {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   }
  // }).then((res) => {
  //   return (res.json());
  // }).then((data) => {
  //   console.log(data);
  // })

  let [lan, setLan] = useState('en');

  return (
    <HashRouter>

      <Navbar lan={lan} setLan={setLan} ></Navbar>

      <Switch>
        {/* <Route exact path="/" component={Landing}></Route>
        <Route exact path="/res" component={Resources}></Route>
        <Route exact path="/res/:id" component={Resources}></Route> */}


        <Route exact path="/" >
          <Landing lan={lan}></Landing>
        </Route>
        <Route exact path="/res" >
          <Resources lan={lan}></Resources>
        </Route>
        <Route exact path="/res/:id">
          <Resources lan={lan}></Resources>
        </Route>

      </Switch>
    </HashRouter>
  );
}

export default App;
