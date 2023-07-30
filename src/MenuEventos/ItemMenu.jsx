import { Button, Card } from "react-bootstrap";
import React from "react";
import imagen from '../Imagenes/evento.jpg';
import { useNavigate } from "react-router-dom";

export function ItemMenu({titulo, descripcion}) {
  const navigate = useNavigate();
  const handleDetalles = () => {
    navigate('/detalles')
  }

  return (
    <div className="item-Menu">
      <Card style={{background: "#1B1D20", color:"#fff"}}>
        <Card.Body>
          <Card.Img variant="top" src={imagen} />
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
          <Button onClick={handleDetalles} variant="primary">Ver detalles</Button>
        </Card.Body>
      </Card>
    </div> 
  ); 
} 
