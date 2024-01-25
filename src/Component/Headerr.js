import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Headerr() {
  return (
    <div className="bg-success ">
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home" className='text-white'> <img src={require('../img/calculator-white.png')} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/Student_res"className='text-decoration-none px-3 my-2 text-white'>Student result</Link>
            <Link to="/todo"       className='text-decoration-none px-3 my-2 text-white'>Todo</Link>
            <Link to="/IncriDecri" className='text-decoration-none px-3 my-2 text-white'>IncriDecri</Link>
            <Link to="/Age"        className='text-decoration-none px-3 my-2 text-white'> Age </Link>
            <Link to="/Loan"       className='text-decoration-none px-3 my-2 text-white'>Loan </Link>
            <Link to="/TicToc"     className='text-decoration-none px-3 my-2 text-white'>Tic</Link>
            <Link to="/Calculator" className='text-decoration-none px-3 my-2 text-white'>Calc</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  );
}

export default Headerr;