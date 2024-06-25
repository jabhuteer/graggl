import React, { useEffect, useState } from 'react';
import './ScoreModal.css'; // You can create a separate CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const ScoreModal = ({ show, onClose, hasWon, guesses, answer, children }) => {
    const winMessage = "You won, cool"
    const lossMessage = "lmfao"
    
    const [endMessage, setEndMessage] = useState("");

    useEffect(() => {
        if (guesses.length === 0)
            return ;

        var tempMessage = "";

        guesses.forEach(guess => {
            tempMessage += (guess === answer ? "🟩" : "🟥")
        });

        setEndMessage(tempMessage)
    }, [guesses])

    if (!show) {
        return null;
    }

    return (
        <div className="score-modal-overlay">
            <div className="score-modal-content">
                <button className="score-modal-close" onClick={onClose}>X</button>

                <a className="score-modal-copy" onClick={() => {navigator.clipboard.writeText(children + "\n" + endMessage)}} >
                    <FontAwesomeIcon icon={faCopy} size="3x"/>
                </a>

                {hasWon ? winMessage : lossMessage}
                <br />
                {children}
                <br />
                {endMessage}
            </div>
        </div>
    );
};

export default ScoreModal;