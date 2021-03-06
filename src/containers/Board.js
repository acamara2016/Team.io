import React from 'react';
import styled from 'styled-components';
import withDataFetching from '../withDataFetching';
import Lane from '../components/Lane/Lane';
import axios from 'axios';
import {Link} from 'react-dom'
import {Container, Row, Col} from 'react-bootstrap/';
import Add from '../components/Interface/Add';
import team from '../team.svg'
import Team from '../components/Button/Team';

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      tickets: [],
    };
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ tickets: this.props.data });
    }
  }
  onDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  };
  onDragOver = e => {
    e.preventDefault();
  };
  onDrop = (e, laneId) => {
    const id = e.dataTransfer.getData('id');
    axios.get(`http://localhost:8000/tickets/update/${id}/${laneId}`)
    .catch(err=> {console.error(err)})
    const tickets = this.state.tickets.filter(ticket => {
      if (ticket.id === parseInt(id)) {
        ticket.lane = laneId;
      }
      return ticket;
    });    

    this.setState({
      ...this.state,
      tickets,
    });
  };
  render() {
    const { lanes, loading, error } = this.props;

    return (

      <Container>
        <br/>
        <Row md={4}>
        {lanes.map(lane => (
          <Col key={lane.id}>
            <Lane
              key={lane.id}
              laneId={lane.id}
              title={lane.title}
              loading={loading}
              error={error}
              onDragStart={this.onDragStart}
              onDragOver={this.onDragOver}
              onDrop={this.onDrop}
              tickets={this.state.tickets.filter(
                ticket => ticket.lane === lane.id,
              )}
            />          
          </Col>

        ))}
        <Add/>
        <Team/>
        </Row>
      </Container>
    );
  }
}

export default withDataFetching(Board);
