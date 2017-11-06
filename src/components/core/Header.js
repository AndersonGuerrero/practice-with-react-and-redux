// dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// assets
import './css/Header.css';
import logo from './img/logo.svg';

class Header extends Component {
  static proptypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }

  render() {
    const {title, items} = this.props
    return (
      <div className="Header">
        <img src={logo} alt="logo" className="Header-logo"/>
        <h2>{title}</h2>
        <ul className="Menu">
          {
            items && items.map(
              (item, key)=><li key={key}><Link to={item.url}>{item.title}</Link></li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Header;
