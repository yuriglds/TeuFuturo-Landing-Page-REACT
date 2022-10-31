import React, { Component } from 'react';
import '../../assets/Style.css';
import {ReactComponent as CpuSVG} from '../../assets/img/cpu.svg';
import {ReactComponent as GpuSVG} from '../../assets/img/gpu.svg';
import {ReactComponent as MemoriaSVG} from '../../assets/img/memoria.svg';
import {ReactComponent as HdSVG} from '../../assets/img/hd.svg';



class Specs extends Component {
    render() { 
        return (
        //     <div className="container text-center">
        //     <div className="row featurette text-center">
        //       <h1 className="featurette-heading fw-normal lh-1 upper spec">especificações</h1>
        //       <div className="col">
        //         <button className="list-itens">Processador</button>
        //         <button className="list-itens">Placa de Video</button>
        //         <button className="list-itens">SSD</button>
        //         <button className="list-itens">Memoria RAM</button>
        //       </div>
        // </div>
        <div className="container text-center">
          <h1 className="featurette-heading fw-normal lh-1 upper spec">especificações</h1>
          <div className="row featurette text-center">
        <div className="col-6">
          <CpuSVG/>
          <h1 className="parts-title">Intel® Core™ i5-12600KF</h1>
          <div className="lead">
            <ol className="lista fw-bold">
              <li>Threads: 16</li>
              <li>Nucleos: 10</li>
              <li>Frequencia: 3.7GHz - até 4.9GHz</li>
              <li>Cache: 20MB</li>
            </ol>
          </div>
        </div>
        <div className="col-6">
          <GpuSVG/>
          <h1 className="parts-title mob-txt">Geforce™ RTX 3060</h1>
          <div className="lead">
            <ol className="lista fw-bold">
              <li>Nvidia® Geforce™ RTX 3060 12GB</li>
              <li>Cuda cores: 3584 cuda cores</li>
              <li>Tipo de memoria: GDDR6X</li>
              <li>Memoria: 4GB até 12GB</li>
            </ol>
          </div>
        </div>
        <hr className="featurette-divider"></hr>
        <div className="col-6">
          <HdSVG/>
          <h1 className="parts-title">SSD M.2 PCIe X4 NVMe</h1>
          <div className="lead">
            <ol className="lista fw-bold">
              <li>Velocidade de leitura: Até 1700 MB/s</li>
              <li>Velocidade de gravação: Até 1100 MB/s</li>
              <li>Temperatura: -40 ° C a 85 ° C</li>
              <li>Dimensões: 80 x 22 x 2,3 mm</li>
            </ol>
          </div>
        </div>
        <div className="col-6">
         <MemoriaSVG/>
          <h1 className="parts-title">DDR4 3200MHz 16GB</h1>
          <div className="lead">
            <ol className="lista fw-bold">
              <li>Dimensões: </li>
              <li>16GB DDR4 3200MHz NON-ECC (1x16GB)</li>
              <li>32GB DDR4 3200MHz NON-ECC (2x16GB)</li>
              <li>64GB DDR4 3200MHz NON-ECC (4x16GB)</li>
            </ol>
          </div>
        </div>
        </div>
        <hr className="featurette-divider"></hr>
      </div>
      
  
        );
    }
}


export default Specs;