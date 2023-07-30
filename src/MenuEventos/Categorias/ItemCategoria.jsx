import React from 'react'
import { Button, Card } from 'react-bootstrap';
import imagen  from '../../Imagenes/evento.jpg';

export function ItemCategoria({titulo, descripcion}){
    return(
        <div className="item-Menu">
        <Card style={{background: "#1B1D20", color:"#fff"}}>
          <Card.Body>
            <Card.Img variant="top" src={imagen} />
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>
              {descripcion}
            </Card.Text>
            <Button  variant="primary">Ver eventos</Button>
          </Card.Body>
        </Card>
      </div> 
    );
}