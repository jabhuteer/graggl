import React, { useEffect, useState } from 'react';
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

import ScoreModal from './ScoreModal/ScoreModal';

// constants
const wrong = "#ff0000";
const right = "#00ff00";
const empty = "000000";

function App() {

  // state values
  const [currentPuzzle, setCurrentPuzzle] = useState(getCurrentPuzzle());

  const [hints, setHints] = useState([])
  const [hintIndex, setHintIndex] = useState(0);

  const [guesses, setGuesses] = useState([])

  const [selected, setSelected] = useState("default");
  const [showScore, setShowScore] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  const hintLeft = () => {
    if(hintIndex > 0){
      setHintIndex(hintIndex - 1);
    }
  }
  const hintRight = () => {
    if(hintIndex < currentPuzzle.Hints.length - 1){
      setHintIndex(hintIndex + 1);
    }
  }

  // Initializes the hints after currentPuzzle has finished loading
  useEffect(() => {
    setHints(currentPuzzle["Hints"]);
    setHintIndex(0)
  }, [currentPuzzle])

  // Will run after updating guesses
  useEffect(() => {
    if (!hints.length)
      return

    if (guesses.length >= hints.length)
      setShowScore(true);
    else
      setHintIndex(guesses.length);
  }, [guesses])

  const guess = () => {
    setGuesses([... guesses, selected])

    if (selected === currentPuzzle["Answer"]) {
      setHasWon(true);
      setShowScore(true);
      return ;
    }
  }

  return (
    <Container className='App mt-4'>
      <ScoreModal
        show={showScore}
        hasWon={hasWon}
        guesses={guesses}
        answer={currentPuzzle["Answer"]}
        onClose={() => setShowScore(false)}>
          {"GRAGGL #" + currentPuzzle["Id"] + " - " + (hasWon ? guesses.length : "X") + "/" + hints.length}
      </ScoreModal>
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
          <Row className='hints-body py-5'>
            <Col xs={1}>
              <Button variant="secondary" className='prev-button' onClick={hintLeft} disabled={hintIndex == 0}>&lt;</Button>{' '}
              <Button variant="secondary" className='next-button' onClick={hintRight} disabled={hintIndex == 2 || guesses.length < hintIndex + 1}>&gt;</Button>{' '}
            </Col>
            <Col xs={10} className='text-center'>
              <h2 id='activeHint'>{hints[hintIndex]}</h2>
            </Col>
          </Row>
          <Row className='text-center mb-2'>
            <Col sm={3}>
            </Col>
            
            {hints.map((hint, i) => {
              var color = empty;

              if (i < guesses.length)
                color = (guesses[i] === currentPuzzle["Answer"] ? right : wrong)

              return (
                <Col sm={2}>
                  <FontAwesomeIcon icon={faCircle} style={{color: color}}/>
                </Col>
              )
            })}

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
              <Button variant="primary" onClick={guess} disabled={guesses.length == hints.length || selected == "default" || hasWon}>Guess</Button>{' '}
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
