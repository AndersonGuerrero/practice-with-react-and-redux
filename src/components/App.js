// dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './core/css/App.css';

// // components
import Header from './core/Header';
import Content from './core/Content';
import Footer from './core/Footer';

// Data
import menuItems from '../data/menu';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  render() {
    const { children } = this.props
    return (
      <div className="App">
        <Header title="Hello world" items={menuItems} />
        <Content body={children}/>
        <Footer copyright="&copy; Venezuela 2017"/>
      </div>
    );
  }
}

export default App;
