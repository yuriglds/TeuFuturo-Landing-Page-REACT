import React, { Component } from 'react';

class Gpu extends Component {
    render() { 
        return (
            <div class="container text-center">
          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h1 class="featurette-heading fw-normal lh-1 upper title-hr" data-aos="fade-right" data-aos-delay="200">RTX 3090</h1>
              <p class="lead">As placas de vídeo GeForce RTX™ Série 30 oferecem máximo desempenho para gamers e criadores. Elas contam com a tecnologia Ampere—a 2ª geração da arquitetura RTX da NVIDIA— com novos RT Cores, Tensor Cores e multiprocessadores de streaming para oferecer os gráficos com Ray Tracing mais realistas e recursos de AI de ponta.</p>
            </div>
            <div class="col-md-5 order-md-1" data-aos="fade-up"  data-aos-anchor-placement="top-center" data-aos-duration="1000">
              <img src="assets/img/gpu.png" alt="GPU" class="mob"/>
            </div>
          </div>
          </div>
        );
    }
}
 
export default Gpu;