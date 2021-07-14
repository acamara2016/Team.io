import React from 'react';
import styled from 'styled-components';
import {Accordion, Card, Badge, Modal, Button} from 'react-bootstrap';
const TicketWrapper = styled.div`

  background: transparent;
  padding: 10px;
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 5%;
    margin-right: ${props => (!!props.marginRight ? '1%' : '0')};
  }
`;
 
const Body = styled.p`
  width: 100%;
`;


const Ticket = ({ marginRight, onDragStart, ticket }) => (
  <TicketWrapper
    draggable
    onDragStart={e => onDragStart && onDragStart(e, ticket.id)}
    marginRight={marginRight}
  >
    <Body>
      <Accordion defaultActiveKey={ticket.id}>
        <Card style={{backgroundColor:'#fee082'}} bg='Primary'>
          <Accordion.Toggle as={Card.Header} eventKey="0">
          #{ticket.id} {ticket.title}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{ticket.body} 
              <br/>
              Created by <h2><Badge variant="primary">{ticket.User_idUser}</Badge></h2>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Body>
  </TicketWrapper>
);

export default Ticket;

