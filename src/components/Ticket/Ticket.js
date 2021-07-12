import React from 'react';
import styled from 'styled-components';
import {Accordion, Card} from 'react-bootstrap';
const TicketWrapper = styled.div`

  background: darkGray;
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
        <Card bg='Primary'>
          <Accordion.Toggle as={Card.Header} eventKey="0">
          {ticket.title}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{ticket.body}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Body>
  </TicketWrapper>
);

export default Ticket;

