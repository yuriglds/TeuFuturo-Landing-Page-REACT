import React, { Component } from 'react';

class Prodigy extends Component {
    render() { 
        return (
            <div className="container text-center">
          <div className="row featurette">
            <div className="col-md-7">
              <h1 className="featurette-heading fw-normal fw-bold lh-1 title" id="prodigy-title" data-aos="fade-right" data-aos-delay="200">Prodigy</h1>
              <h2 className="featurette-heading fw-normal fw-bold lh-1 sub-title" id="prodigy-subtitle" data-aos="fade-right" data-aos-delay="200">Dê o Melhor</h2>
              <p className="lead">Máquina para uso em computação gráfica, renderização profissional, simulações em realtime, análises complexas de dados e softwares de alta exigência.</p>
              <button type="button" className="btn btn-outline-primary align-middle"><a id="comprar" href="https://razor.com.br/produto/prodigy-xp-528g89/">Comprar</a></button>
            </div>
            <div className="col-md-5" data-aos="fade-up"  data-aos-anchor-placement="top-center" data-aos-duration="1000">
              <img src="assets/img/img4.png" alt="Processador" className="mob"/>
            </div>
          </div>
          </div>
        );
    }
}
 
export default Prodigy;