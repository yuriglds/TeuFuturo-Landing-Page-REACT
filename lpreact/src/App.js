import React, { Component } from "react";
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

function App() {
  return (
    <div className="App">
      <div id="topo" class=""></div>

      <section id="nav">
      <Nav/>
      </section>


      <section id="video">
      <Video/>
      </section>

          <div class="container container-main justify-content-center">
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
        crossorigin="anonymous"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      
      <section id="prodigy">
      <Prodigy/>
      </section>

      <section id="cpu">
      <Cpu/>
      </section>

      <section id="gpu">
      <Gpu/>
      </section>

      <section id="specs">
      <Specs/>
      </section>

      <section id="produto">
      <Produto/>
      </section>

      <section id="contato">
      <Contato/>
      </section>

      </div>
      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default App;
