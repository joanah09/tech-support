import data from '../../../data';
import NavbarLinks from './navbarLinks';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    const navbar = data.navbar.map(item => {
        return (
            <NavbarLinks key={item.title} {...item} />
        )
    })
  return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top position-relative" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#" className="">
            <img className="logo" src="../../assets/images/logo.jpg" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            {navbar}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;