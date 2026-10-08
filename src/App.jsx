import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
function App() {

  return (
    <div>
      <BrowserRouter basename={import.meta.env.BASE_URL}>

<Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/header">Header</Nav.Link>
            <Nav.Link as={Link} to="/footer">Footer</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/header' element={<Header></Header>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>
      </Routes>
      {/* <Header></Header>
      <Content></Content>
      <Footer></Footer> */}
      </BrowserRouter>
    </div>
      
  )
}

export default App
