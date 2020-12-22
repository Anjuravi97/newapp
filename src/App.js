import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Career from './components/pages/Career';

function App() {
    return ( <
        >
        <
        Router >
        <
        Navbar / >
        <
        Switch >
        <
        Route path = '/'
        exact component = { Home }
        /> <
        Route path = '/services'
        component = { Services }
        /> <
        Route path = '/About'
        component = { About }
        /> <
        Route path = '/career'
        component = { Career }
        />  <
        Route path = '/contact'
        component = { Contact }
        /> < /
        Switch > <
        /Router> < / >
    );
}

export default App;