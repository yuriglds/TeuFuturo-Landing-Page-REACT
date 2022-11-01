import React, { Component } from 'react';
import '../../assets/Style.css';

class Nav extends Component {
    render() { 
        return (
            <nav className="navbar navbar-dark bg-dark fixed-top" id="menu">
            <div className="container-fluid">
              <a className="navbar-brand" href="index.html">
                <img src={require('../../assets/img/razor_logo.png')} alt="logotipo" className="d-inline-block align-text-top logo"/>
              </a>
              <ul>
                <li>
                  <a className="fw-bold nav-btn" href="#produto">Produto</a>
                </li>
                <li>
                  <a className="fw-bold nav-btn" href="#specs">Especs</a>
                </li>
                <li>
                  <a className="fw-bold nav-btn" href="#about">Sobre</a>
                </li>
                <li>
                  <a className="fw-bold nav-btn" href="#contato">Contato</a> 
                </li>
              </ul>
            </div>
        </nav>
        );
    }
}
 
export default Nav;