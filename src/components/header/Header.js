import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="container-fluid bg-dark text-light py-3">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Vocabulary</h1>
          </div>
          <div className="col-md-6">
            <nav className="navbar navbar-expand-md navbar-dark justify-content-end nav">
              <div className="navbar-nav">
                <a className="nav-link all" href="#" onClick={() => this.props.onFilterChange('ALL')}>ALL</a>
                {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
                  <a key={letter} className="nav-link letters" href="#" onClick={() => this.props.onFilterChange(letter)}>{letter}</a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
