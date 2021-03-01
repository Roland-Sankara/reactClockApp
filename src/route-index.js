import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';

import './components/route.css';

function App(){
    return(
        <Router>
            <div>
                <Nav/>
                <Switch>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/" component={Home} />
                </Switch>
                {/* <Footer/> */}
            </div>
        </Router>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));
ReactDOM.render(<Footer/>,document.getElementById('footer'));