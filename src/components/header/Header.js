import React from 'react';
import './header.css';

class Header extends React.Component {
  mostrarDiv = (id) => {
    // Ocultar todos los divs
    const divs = document.querySelectorAll('.container');
    divs.forEach(function(div) {
      div.style.display = 'none';
    });

    // Mostrar el div seleccionado
    document.getElementById(id).style.display = 'block';
  }

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
                <a className="nav-link all" href="#" onClick="">ALL</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divA')}>A</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divB')}>B</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divC')}>C</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divD')}>D</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divE')}>E</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divF')}>F</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divG')}>G</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divH')}>H</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divI')}>I</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divJ')}>J</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divK')}>K</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divL')}>L</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divM')}>M</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divN')}>N</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divO')}>O</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divP')}>P</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divQ')}>Q</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divR')}>R</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divS')}>S</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divT')}>T</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divU')}>U</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divV')}>V</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divW')}>W</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divX')}>X</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divY')}>Y</a>
                <a className="nav-link letters" href="#" onClick={() => this.mostrarDiv('divZ')}>Z</a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
