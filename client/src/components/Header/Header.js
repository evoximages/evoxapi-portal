import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header fixed">
        <div className="header-wrapper flex align-center justify-between">
          <div className="evox-title-wrapper">
            <a href="/">
              <span className="evox-title">evox</span>
              <br />
              <span className="evox-title_subtitle small-caps">api</span>
            </a>
          </div>

          <nav className="header-nav">
            <ul className="header-nav-link-list flex justify-between small-caps">
              <li className="header-nav-link">
                <a href="./products">products</a>
              </li>
              <li className="header-nav-link">
                <a href="./pricing">pricing</a>
              </li>
              <li className="header-nav-link">
                <a href="./enterprise">enterprise</a>
              </li>
              <li className="header-nav-link">
                <a href="https://evoximages.gitbook.io/api">docs</a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li>
                <a href="./login">login</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
