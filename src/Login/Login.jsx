import React, { useState } from "react";
import "./Login.css";
import { FaUserCircle } from "react-icons/fa";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Iniciar sesión</h1>
        <h1>
          <FaUserCircle />
        </h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" placeholder="Ingresa el usuario" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa la contraseña" />
          </Form.Group>

          <Button variant="primary" type="submit" className="login-button">
            Iniciar sesión
          </Button>
          <Link className='linkes'>No tienes cuenta? Registrate ahora</Link>
        </Form>
      </div>
    </div>
  );
}
