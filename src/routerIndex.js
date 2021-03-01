import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routerComp/Home';
import About from './routerComp/About';
import Timer from './clockComp/Main';
import Nav from './routerComp/Nav';
import './routerComp/style.css'


function App(){
    return(
        <Router>
            <div>
                <Nav/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/timer" component={Timer}/>
                </Switch>
            </div>
        </Router>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));