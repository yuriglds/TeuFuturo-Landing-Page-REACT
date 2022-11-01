import React, { Component } from 'react';

class Contato extends Component {
    render() { 
        return (
          <div className="container text-center">
          <div className="row featurette">
            <div className="col-md-7">
              <h1 className="featurette-heading fw-normal lh-1 upper title-hr" data-aos="fade-right" data-aos-delay="200">Mais Informações: </h1>
              <p className="lead">Leia o QR Code Para ter Mais Informações sobre os Produtos RAZOR ou clique <a href='https://workstation.razor.com.br/'>AQUI</a></p>
            </div>
            <div className="col-md-5" data-aos="fade-up"  data-aos-anchor-placement="top-center" data-aos-duration="1000">
              <img src={require("../../assets/img/qr-razor.png")} alt="Qr-code" className="mob qr animated"/>
            </div>
          </div>
          </div>
        );
    }
}
 
export default Contato;