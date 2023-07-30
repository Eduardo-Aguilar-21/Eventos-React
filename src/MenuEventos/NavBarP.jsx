import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NavBarP() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-container">
        <Container>
          <Navbar.Brand className="logo">
            {/* <img src={logo} alt="Logo Inicio" className="imgl" /> */}
            <Link to="/" className="linkes">
              <span>Inicio</span>
            </Link>
          </Navbar.Brand>
          <Link to='/detalles' className="linkes">
            <span>Eventos destacados</span>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto barra">
              <Link to='/categorias' className="linkes">Ver categorias</Link>

              <Link to="/login" className="linkes">
                Iniciar Sesion
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
