import React from "react";
import "./App.css";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import Video from "./components/Video/Video"
import Specs from "./components/Specs/Specs"
import Produto from "./components/Produto/Produto";
import Prodigy from "./components/Prodigy";
import Cpu from "./components/Cpu";
import Gpu from "./components/Gpu";
import Contato from "./components/Contato/Contato";
import "./assets/Style.css";
import "./assets/background.css";
import "./assets/form.css";

import Preload from "./components/Preload";
import Back from "./components/Back";

import './assets/js/hide-div.js';



function App() {

  return (
    <div className="App">
     
      <Preload/>

      <div id="topo" className=""></div>

      <section id="nav">
      <Nav/>
      </section>


      <section id="video">
      <Video/>
      </section>

          <div className="container container-main justify-content-center">
      <link
        href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <link
        src="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <link
        href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css"
        integrity="sha384-X8QTME3FCg1DLb58++lPvsjbQoCT9bp3MsUU3grbIny/3ZwUJkRNO8NPW6zqzuW9"
        crossOrigin="anonymous"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
       <script src="assets/js/jquery-3.6.1.min.js"></script>
      <section id="prodigy" className="margin-inicio" data-aos="fade-down">
      <Prodigy/>
      </section>
      <hr className="featurette-divider"></hr>
      <section id="cpu" data-aos="fade-down">
      <Cpu/>
      </section>
      <hr className="featurette-divider"></hr>
      <section id="gpu" data-aos="fade-down">
      <Gpu/>
      </section>
      <hr className="featurette-divider"></hr>
      <section id="specs" data-aos="zoom-in"  data-aos-anchor-placement="top-center" data-aos-duration="1000">
      <Specs/>
      </section>
      {/* <hr className="featurette-divider"></hr> */}
      <section id="produto">
      <Produto/>
      </section>
      <hr className="featurette-divider"></hr>
      <section id="contact">
      <Contato/>
      </section>

      </div>

     <Back/>

      <section id="about">
        <About />
      </section>
      <script type="text/javascript" src="./assets/js/hide-div.js"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

    </div>
  );
} 

export default App;
