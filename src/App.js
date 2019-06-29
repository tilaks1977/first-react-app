import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Preloader from './component/preloader';
import Header from './component/header';
import About from './component/about';
import Services from './component/services';
import Cta from './component/cta';
import Work from './component/work';
import Contact from './component/contact';
import Footer from './component/footer';

class App extends Component {
  render() {
    return (
      <div>
          <Preloader></Preloader>
          <Header></Header>
          <About></About>
          <Services></Services>
          <Cta></Cta>
          <Work></Work>
          <Contact></Contact>
          <Footer></Footer>
      </div>
    )
  }
}

export default App;
