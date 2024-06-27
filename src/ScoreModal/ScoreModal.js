import React, { useEffect, useState } from 'react';
import './ScoreModal.css'; // You can create a separate CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const ScoreModal = ({ show, onClose, hasWon, guesses, answer, children, copyText }) => {
    const winMessage = "You won, cool"
    const lossMessage = "lmfao"
    
    const [endMessage, setEndMessage] = useState("");

    useEffect(() => {
        if (guesses.length === 0)
            return ;

        var tempMessage = "";

        guesses.forEach(guess => {
            tempMessage += (guess === answer ? String.fromCodePoint("0x1F7E9") : String.fromCodePoint("0x1F7E5"))
        });

        setEndMessage(tempMessage)
    }, [guesses])

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!show) {
        return null;
    }

    return (
        <div className="score-modal-overlay" onClick={handleOutsideClick}>
            <div className="score-modal-content">
                <button className="score-modal-close" onClick={onClose}>X</button>

                <a className="score-modal-copy" onClick={() => {navigator.clipboard.writeText(copyText + "\n" + endMessage)}} >
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