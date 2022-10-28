import React, { Component } from 'react';

class Contato extends Component {
    render() { 
        return (
    <div className="row">
        <div className="col">
          <h1 className="featurette-heading fw-normal lh-1 upper title-hr" id="staticBackdropLabel">Contato</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form type="submit">
              <div className="mb-3">
                <label for="name" className="form-label" >Nome</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Ex: Fernando Posser"/>
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">E-Mail</label>
                <input type="email" className="form-control" id="email" placeholder="email@domain.com"/>
                <div id="emailHelp" className="form-text">Digite seu melhor e-mail!</div>
              </div>
              <div className="mb-3">
                <label for="phone" className="form-label">Telefone</label>
                <input type="tel" className="form-control" id="phone" placeholder="Ex: +55 (51) 9999-9999"/>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="Check"/>
                <label className="form-check-label" for="Check" >Aceito receber novidades por e-mail</label>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
      </div>
        );
    }
}
 
export default Contato;