import React, { Component } from 'react';
import '../../assets/Style.css';
import {ReactComponent as logoSVG} from '../../assets/img/prodigy-logo.svg';
class Specs extends Component {
    render() { 
        return (
            <div className="container text-center">
            <div className="row featurette text-center">
              <h1 className="featurette-heading fw-normal lh-1 upper spec">especificações</h1>
              <div className="col">
                <button className="list-itens">Processador</button>
                <button className="list-itens">Placa de Video</button>
                <button className="list-itens">SSD</button>
                <button className="list-itens">Memoria RAM</button>
              </div>
        </div>
        <div className="hide-div">
          <logoSVG/>
          <h1 className="parts-title">Intel® Core™ i5-12600KF</h1>
          <p className="lead">
            <ol className="lista fw-bold">
              <li>Threads: 16</li>
              <li>Nucleos: 10</li>
              <li>Frequencia: 3.7GHz - até 4.9GHz</li>
              <li>Cache: 20MB</li>
            </ol>
          </p>
        </div>
        <div className="hide-div">
           <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="#ffffff" className="bi bi-gpu-card" viewBox="0 0 16 16">
                  <path d="M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/>
                  <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5Zm5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"/>
                  <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1Zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z"/>
                </svg>
          <h1 className="parts-title mob-txt">Geforce™ RTX 3060</h1>
          <p className="lead">
            <ol className="lista fw-bold">
              <li>Nvidia® Geforce™ RTX 3060 12GB</li>
              <li>Cuda cores: 3584 cuda cores</li>
              <li>Tipo de memoria: GDDR6X</li>
              <li>Memoria: 4GB até 12GB</li>
            </ol>
          </p>
        </div>
        <div className="hide-div">
          <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="#ffffff" className="bi bi-device-hdd" viewBox="0 0 16 16">
            <path d="M12 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
            <path d="M12 7a4 4 0 0 1-3.937 4c-.537.813-1.02 1.515-1.181 1.677a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588A4 4 0 0 1 8 3a4 4 0 0 1 4 4Zm-1 0a3 3 0 1 0-3.891 2.865c.667-.44 1.396-.91 1.955-1.268.224-.144.483.115.34.34l-.62.96A3.001 3.001 0 0 0 11 7Z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4Z"/>
          </svg>
          <h1 className="parts-title">SSD M.2 PCIe X4 NVMe</h1>
          <p className="lead">
            <ol className="lista fw-bold">
              <li>Velocidade de leitura: Até 1700 MB/s</li>
              <li>Velocidade de gravação: Até 1100 MB/s</li>
              <li>Temperatura: -40 ° C a 85 ° C</li>
              <li>Dimensões: 80 x 22 x 2,3 mm</li>
            </ol>
          </p>
        </div>
        <div className="hide-div">
          <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="#ffffff" className="bi bi-memory" viewBox="0 0 16 16">
            <path d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4ZM2 10v2H1v-2h1Zm2 0v2H3v-2h1Zm2 0v2H5v-2h1Zm3 0v2H8v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Z"/>
          </svg>
          <h1 className="parts-title">DDR4 3200MHz 16GB</h1>
          <p className="lead">
            <ol className="lista fw-bold">
              <li>Dimensões: </li>
              <li>16GB DDR4 3200MHz NON-ECC (1x16GB)</li>
              <li>32GB DDR4 3200MHz NON-ECC (2x16GB)</li>
              <li>64GB DDR4 3200MHz NON-ECC (4x16GB)</li>
            </ol>
          </p>
        </div>
  
      </div>
  
        );
    }
}
 
export default Specs;