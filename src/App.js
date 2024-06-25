import React, { useState } from 'react';
import ReactDOM from 'react-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import './App.css'
import users from './Data/users';
import {getCurrentPuzzle} from './Data/puzzles';

let currentPuzzle = getCurrentPuzzle();
let hintIndex = 0;

function App() {
  const [hintText, setHintText] = useState(currentPuzzle.Hints[0]);
  const hintLeft = () => {
    if(hintIndex > 0){
      setHintText(currentPuzzle.Hints[hintIndex - 1]);
      hintIndex -= 1;
    }
  }
  const hintRight = () => {
    if(hintIndex < currentPuzzle.Hints.length - 1){
      setHintText(currentPuzzle.Hints[hintIndex + 1]);
      hintIndex += 1;
    }
  }
  return (
    <Container className='App mt-4'>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10} className='border border-dark text-center'>
          <Row className='border-bottom border-dark bg-light'>
            <Col className='text-start'>
              <h3>GRAGGL</h3>
            </Col>
            <Col className='text-center'>
              <h3>{currentPuzzle.Name}</h3>
            </Col>
            <Col className='text-end'>
              <h3>#{currentPuzzle.Id} - {currentPuzzle.Date}</h3>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col sm={2} className='text-start'>
              <Button variant="secondary" onClick={hintLeft}>&lt;</Button>{' '}
            </Col>
            <Col sm={8} className='text-center'>
              <h2 id='activeHint'>{hintText}</h2>
            </Col>
            <Col sm={2} className='text-end'>
              <Button variant="secondary" onClick={hintRight}>&gt;</Button>{' '}
            </Col>
          </Row>
          <Row className='text-center mb-2'>
            <Col sm={3}>
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon icon={faCircle} id='guess1'/>
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon icon={faCircle} id='guess2'/>
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon icon={faCircle} id='guess3'/>
            </Col>
          </Row>
          <Row className='mb-2'>
            <Col sm={2}>
            </Col>
            <Col sm={4}>
              <Form.Select>
                <option>Select a Graggler</option>
                {
                  users.map((user, index) => {
                    return (
                      <option>{user.name}</option>
                    );
                  })
                }
              </Form.Select>
            </Col>
            <Col sm={4}>
              <Button variant="primary">Guess</Button>{' '}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col sm={1}>
        </Col>
        <Col sm={10}>
          Archive Placeholder
        </Col>
      </Row>
    </Container>
      
  );
}

export default App;
