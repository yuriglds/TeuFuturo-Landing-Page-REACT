import React, { Component } from 'react';

class Cpu extends Component {
    render() { 
        return (
            <div className="container text-center">
            <div className="row featurette">
              <div className="col-md-7">
                <h1 className="featurette-heading fw-normal lh-1 upper title-hr" data-aos="fade-right" data-aos-delay="200">Processador</h1>
                <p className="lead">Conquiste mais desempenho em seus projetos com um processador Intel® Core™ i5 de 12ª geração. São 10 Núcleos e 16 Threads, 3.7GHz - turbo até 4.9GHz - e cache de 20MB, ideal para quem busca mais performance no dia-a-dia.</p>
              </div>
              <div className="col-md-5" data-aos="fade-up"  data-aos-anchor-placement="top-center" data-aos-duration="1000">
                <img src="assets/img/cpu.png" alt="Processador" className="mob animated"/>
              </div>
            </div>
            </div>
        );
    }
}
 
export default Cpu;