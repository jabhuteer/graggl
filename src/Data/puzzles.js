import React, { useState } from 'react';

export const puzzles =
    [
        {
            "Id": "1",
            "Name": "GRAGGL TEST",
            "Date": "6/24/2024",
            "Answer": "Sacha",
            "Hints": [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Happy birthday Liz. Here's your present :dirt:",
                "Oh it would be so funny to make a \"graggle\" where u have to guess which server member sent a series of messages"
            ]
        },
        {
            "Id": "357894",
            "Name": "GRAGG HARDER",
            "Date": "6/25/2024",
            "Answer": "Jab",
            "Hints": [
                "test",
                "small hint",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ]
        },
        {
            "Id": "2",
            "Name": "GRAGG HARDER",
            "Date": "6/29/2024",
            "Answer": "Jab",
            "Hints": [
                "i'm trying to be more misogynistic this year \u{1f60a}",
                "Happy birthday Liz. Here's your present :dirt:",
                "Oh it would be so funny to make a \"graggle\" where u have to guess which server member sent a series of messages"
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
        return puzzles[puzzles.length - 1];
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
    