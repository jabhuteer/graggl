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
// constants
const wrong = "#ff0000";
const right = "#00ff00";
const empty = "000000";

function App() {

  // state values
  const [currentPuzzle, setCurrentPuzzle] = useState(getCurrentPuzzle());
  const [hintText, setHintText] = useState(currentPuzzle.Hints[0]);
  const [hintIndex, setHintIndex] = useState(0);
  const [highestHint, setHighestHint] = useState(0);
  const [guesses, setGuesses] = useState(3);
  const [guess1Value, setGuess1Value] = useState(empty);
  const [guess2Value, setGuess2Value] = useState(empty);
  const [guess3Value, setGuess3Value] = useState(empty);
  const [selected, setSelected] = useState("default");

  // functions
  const hintLeft = () => {
    if(hintIndex > 0){
      setHintText(currentPuzzle.Hints[hintIndex - 1]);
      setHintIndex(hintIndex - 1);
    }
  }
  const hintRight = () => {
    if(hintIndex < currentPuzzle.Hints.length - 1){
      setHintText(currentPuzzle.Hints[hintIndex + 1]);
      setHintIndex(hintIndex + 1);
    }
  }
  const guess = () => {
    let guessResult = wrong;
    if(selected == currentPuzzle.Answer)
    {
      guessResult = right;
    }
    switch (guesses) {
      case 3:
        setGuess1Value(guessResult);
        break;
      case 2:
        setGuess2Value(guessResult);
        break;
      case 1:
        setGuess3Value(guessResult);
        break;
    }

    // setting state is asynchronus, need to do this hacky trash
    let currentGuess = guesses
    setGuesses(guesses - 1);
    if(currentGuess - 1 != 0){
      let currentHighHint = highestHint + 1;
      setHighestHint(currentHighHint);
      setHintText(currentPuzzle.Hints[currentHighHint]);
      setHintIndex(currentHighHint);
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
              <Button variant="secondary" onClick={hintLeft} disabled={hintIndex == 0}>&lt;</Button>{' '}
            </Col>
            <Col sm={8} className='text-center'>
              <h2 id='activeHint'>{hintText}</h2>
            </Col>
            <Col sm={2} className='text-end'>
              <Button variant="secondary" onClick={hintRight} disabled={hintIndex == 2 || highestHint < hintIndex + 1}>&gt;</Button>{' '}
            </Col>
          </Row>
          <Row className='text-center mb-2'>
            <Col sm={3}>
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon icon={faCircle} id='guess1' style={{color: guess1Value}}/>
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon icon={faCircle} id='guess2' style={{color: guess2Value}}/>
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon icon={faCircle} id='guess3' style={{color: guess3Value}}/>
            </Col>
          </Row>
          <Row className='mb-2'>
            <Col sm={2}>
            </Col>
            <Col sm={4}>
              <Form.Select value={selected} onChange={e => setSelected(e.target.value)}>
                <option value="default">Select a Graggler</option>
                {
                  users.map((user, index) => {
                    return (
                      <option value={user.name}>{user.name}</option>
                    );
                  })
                }
              </Form.Select>
            </Col>
            <Col sm={4}>
              <Button variant="primary" onClick={guess} disabled={guesses == 0 || selected == "default"}>Guess</Button>{' '}
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
