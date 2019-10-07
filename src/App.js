import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import Introduce from './components/navPages/introduce/Introduce';
import Documents from './components/navPages/document/Document';
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
        <Aside />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/gioi-thieu" component={Introduce}></Route>
          <Route path="/thong-tin-thong-bao" component={News}></Route>
          <Route path="/tai-lieu" component={Documents}></Route>
          <Route path="/lien-he" component={Contacts}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
