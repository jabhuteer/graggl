import React, { useState } from 'react';

export const puzzles =
    [
        {
            "Id": "1",
            "Name": "PROOF OF CONCEPT",
            "Date": "6/24/2024",
            "Answer": "Jab",
            "Hints": [
                [
                    {
                        "User": "Witness",
                        "Text": "next time vetrix i'll need to call you by your full name + your credit card detail"
                    },
                    {
                        "User": "Suspect",
                        "Text": "Remember when you doxxed me in ggst cord"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "Happy birthday Liz. Here's your present :dirt:"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "Oh it would be so funny to make a \"graggle\" where u have to guess which server member sent a series of messages"
                    },
                ] 
                
            ]
        }
    ]

export function getCurrentPuzzle() {
    const currentPuzzle = puzzles.find((puzzle) => {
        var puzzleDate = new Date(puzzle["Date"]);
        var today = new Date();
        today.setHours(0, 0, 0, 0);

        return (puzzleDate.getTime() === today.getTime())
    })

    if (currentPuzzle)
        return currentPuzzle;
    else
        return getLatestPuzzle();
}

export function getLatestPuzzle() {
    const pastPuzzles = getAllPastPuzzles();

    const latestPuzzle = pastPuzzles.reduce((a, b) => {
        return new Date(a["Date"]) > new Date(b["Date"]) ? a : b
    })

    return latestPuzzle
}

export function getPuzzleById(id) {
    for(let i = 0; i < puzzles.length; i++){
        if(puzzles[i].Id === id){
            return puzzles[i];
        }
    }
    return getCurrentPuzzle();
}

export function getAllPastPuzzles() {
    const pastPuzzles = [];
    var today = new Date()
    today.setHours(0, 0, 0, 0);
    for(let i = 0; i < puzzles.length; i++){
        var puzzleDate = new Date(puzzles[i].Date);
        if(puzzleDate <= today){
            pastPuzzles.push(puzzles[i])
        }
    }
    return pastPuzzles;
}  