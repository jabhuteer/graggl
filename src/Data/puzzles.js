import React, { useState } from 'react';

export const puzzles =
    [
        {
            "Id": "1",
            "Name": "GRAGGL TEST",
            "Date": "6/24/2024",
            "Hints": [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Blazblue isn't even real it can't hurt you",
                "I liverd bitch"
            ]
        },
        {
            "Id": "357894",
            "Name": "GRAGG HARDER",
            "Date": "6/25/2024",
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
            "Hints": [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "small hint",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ]
        }
    ]

export function getCurrentPuzzle() {
    const currentPuzzle = puzzles.find((puzzle) => {
        var puzzleDate = new Date(puzzle["Date"])
        var today = new Date();
        // Otherwise, precise time won't match and it won't find a match
        today.setHours(0, 0, 0, 0);

        return (puzzleDate.getTime() === today.getTime())
    })

    if (currentPuzzle)
        return currentPuzzle
    else
        return puzzles[puzzles.length - 1]
}
    