import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Projetos from './components/pages/Projetos';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';
import Projeto from './components/pages/Projeto';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass = "min_height">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/projetos" element = {<Projetos/>}/>
          <Route path = "/empresa" element = {<Empresa/>}/>
          <Route path = "/contato" element = {<Contato/>}/>
          <Route path = "/novoprojeto" element = {<NovoProjeto/>}/>
          <Route path = "/projeto/:id" element = {<Projeto/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
