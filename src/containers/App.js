import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Board from './Board';
import Tickets from './Tickets';
import './App.css';
import Header from '../components/Header/Header';
import {Nav, Col} from 'react-bootstrap';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    const lanes = [
      { id: 1, title: 'To Do' },
      { id: 2, title: 'In Progress' },
      { id: 3, title: 'Review' },
      { id: 4, title: 'Done' },
    ];

    return (
      <>
      <div className="app">
        <GlobalStyle />
        <AppWrapper>
          {/* <Header /> */}
          <Board
            lanes={lanes}
            dataSource={'../../assets/data.json'}
          />
        </AppWrapper>
        </div>
      </>
    );
  }
}

export default App;
