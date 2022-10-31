import React, { Component } from 'react';
import '../../assets/Style.css';
class Produto extends Component {
    render() { 
        return (
            <div className="container text-center">
      <div className="row featurette">
        <div className="col">
          <img src={require("../../assets/img/home-gabinete-img-removebg-preview.png")} alt="Prodigy" className="gabinete1 mob"  data-aos="fade-up"  data-aos-anchor-placement="top-center" data-aos-duration="1000"/>
        </div>
      </div>
      <div className="row featurette">
        <hr className="featurette-divider"/>
          <div className="col-md-7 order-md-2">
            <h1 className="featurette-heading fw-normal lh-1 upper title-hr" data-aos="fade-right" data-aos-delay="200">o melhor</h1>
            <p className="lead" data-aos="fade-up">
            <strong>Menos RGB, mais performance.</strong>
            <br/>As nossas máquinas não lembram um pisca-pisca de Natal ou raladores de cozinha.
            <br/>Workstation Pro é lindo como todo computador tem que ser, discreto, com um design industrial e preparado para trabalhar.
            </p>
          </div>
        <div className="col-md-5 order-md-2">
          <img src={require("../../assets/img/pc-yuri.png")} alt="Prodigy" className="gabinete mob" data-aos="fade-up"  data-aos-anchor-placement="top-center" data-aos-duration="1000"/>
        </div>
      </div>
      <div className="row featurette">
        <hr className="featurette-divider"/>
          <div className="col-md-7 order-md-2">
            <h1 className="featurette-heading fw-normal lh-1 upper title-hr" data-aos="fade-right" data-aos-delay="200">um pouco mais</h1>
            <p className="lead" data-aos="fade-up">Preparado para o futuro! Desenvolvido especialmente para quem busca alta performance para o trabalho, o Workstation Razor Prodigy é robusto, seguro e expansível. Uma Workstation potente para aumentar a sua produtividade e o seu desempenho no dia a dia.</p>
          </div>
        <div className="col-md-5 order-md-1">
          <img src={require("../../assets/img/img2.png")} alt="Prodigy" className="gabinete mob" data-aos="fade-up"  data-aos-anchor-placement="top-center" data-aos-duration="1000"/>
        </div>
      </div>
    </div>
        );
    }
}
 
export default Produto;