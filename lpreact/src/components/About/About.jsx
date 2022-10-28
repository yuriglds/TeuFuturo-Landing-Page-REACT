
import React, { Component } from 'react';

class About extends Component {
    render() { 
        return (
<section id="about" className="margin-footer">
  <footer className="text-center text-lg-start bg-dark text-muted">
    <hr className="cor"/>
      <div className="container text-center text-md-start mt-5">
        <hr className="cor"/>
        <div className="row">
          <div className="col col-xl-3">
            <h6 className="text-uppercase fw-bold mb-4">Projeto #TeuFuturo</h6>
            <p>Um Projeto Landingpage patrocinado por #TeuFuturo e Razor</p>
          </div>
          <div className="col">
            <h6 className="text-uppercase fw-bold mb-4 ">Equipe</h6>
            <p>
              <a href="https://www.linkedin.com/in/yuriglds/" className="text-reset">Yuri</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/gabrielsimor/" className="text-reset">Gabriel</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/clarissa-hermany-schmidt-296583222/" className="text-reset">Clarissa</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/rodrigo-gon%C3%A7alves-mendes-251948249/" className="text-reset">Rodrigo</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/lucasmarquesduarte/" className="text-reset">Lucas</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/andrea-noer-js/" className="text-reset">Andrea</a>
            </p>
          </div>
          <div className="col">
            <h6 className="text-uppercase fw-bold mb-4">
              Links
            </h6>
            <p className="footer-hover">
              <a href="#produto" className="text-reset">Produto</a>
            </p>
            <p className="footer-hover">
              <a href="#specs" className="text-reset">Especificações</a>
            </p>
            <p className="footer-hover">
              <a href="#about" className="text-reset">Sobre</a>
            </p>
            <p className="footer-hover">
              <a className="text-reset" href="#contact">Contato</a>
            </p>
            <p className="footer-hover">
              <a className="text-reset" href="https://razor.com.br/produto/prodigy-xp-528g89/">Comprar</a>
            </p>
          </div>
          <div className="col">
            <h6 className="text-uppercase fw-bold mb-4">Razor</h6>
            <p>Rua Dr. Plínio Moura, 153C<br/>Vila Planaltina - 99062-340<br/>Passo Fundo/RS</p>
            <p><a href="https://workstation.razor.com.br/" className="text-reset">Razor</a></p>
          </div>
        </div>
      </div>
  <hr className="cor"/>
  <div className="text-center p-4">
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="">Squad 13 - Stranger Strings</a>
  </div>
</footer>
</section>
        );
    }
}
 
export default About;