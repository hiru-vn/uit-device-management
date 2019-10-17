import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';

import Function from './components/navPages/introduce/Function';
import Mission from './components/navPages/introduce/Mission';
import Personnel from './components/navPages/introduce/Personnel';

import Forms from './components/navPages/document/Forms';
import Regulations from './components/navPages/document/Regulations';
import Procedure from './components/navPages/document/Procedure';

import Contacts from './components/navPages/contact/Contact';
import Home from './components/navPages/home/Home';
import News from './components/navPages/news/News';
import NotFound from './components/navPages/NotFound'
import Aside from './components/aside/Aside';
import './css/custom-lib.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <NavBar />
        <div className="body">
          <Aside className="aside"/>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/chuc-nang" component={Function}></Route>
            <Route path="/nhiem-vu" component={Mission}></Route>
            <Route path="/nhan-su" component={Personnel}></Route>
            <Route path="/thong-tin-thong-bao" component={News}></Route>
            <Route path="/quy-trinh" component={Procedure}></Route>
            <Route path="/quy-che-quy-dinh" component={Regulations}></Route>
            <Route path="/bieu-mau" component={Forms}></Route>
            <Route path="/lien-he" component={Contacts}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
