import React, { useState } from 'react';

export const puzzles =
    [
        {
            "Id": "0",
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
        },
        {
            "Id": "1",
            "Name": "Upper echelon",
            "Date": "6/29/2024",
            "Answer": "Andy",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "If you ain't paying artists with exposure how are you ever gonna make it big in this world?##That's money you could be using starting a business"
                    },
                ],
                [
                    {
                        "User": "Witness",
                        "Text": "no but i was (hard working character, working class, doesnt even have the funds to buy proper shoes)"
                    },
                    {
                        "User": "Suspect",
                        "Text": "I think Ram is more upper class going through a naturalist phase##\"I gotta be one with nature\""
                    },
                ],
                [
                    {
                        "User": "Witness",
                        "Text": "i said it was undemocratic but we dont listen to poor ol sacha now do we..."
                    },
                    {
                        "User": "Suspect",
                        "Text": "Poor????? GET HIM"
                    },
                ],
            ]
        },
        {
            "Id": "2",
            "Name": "Negativity",
            "Date": "6/30/2024",
            "Answer": "Doot",
            "Hints": [
                [
                    {
                        "User": "Witness",
                        "Text": "Who's hype for the new season of nagatoro :3"
                    },
                    {
                        "User": "Suspect",
                        "Text": "gotta be the dudes who stack no paper and get no bitches collective"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "you’re literally playing sfv that’s an issue in itself"
                    },
                    {
                        "User": "Witness",
                        "Text": "it's a good game tho"
                    },
                    {
                        "User": "Suspect",
                        "Text": "yeah to people who play bad games"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "i only call games bad when it has shield and moondrive"
                    },
                ],
            ]
        },
        {
            "Id": "3",
            "Name": "Jackass",
            "Date": "7/01/2024",
            "Answer": "Toto",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "the value of a bowl is the empty space within##think on that"
                    },
                    {
                        "User": "Witness",
                        "Text": "The value of a bowl is being able to contain stuff within it"
                    },
                    {
                        "User": "Suspect",
                        "Text": "yes because it's empty you fucking jackass"
                    },
                ],
                [
                    {
                        "User": "Witness",
                        "Text": "look i dont make the rules"
                    },
                    {
                        "User": "Suspect",
                        "Text": "you make the opinion though jackass"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "Sorry for calling you a jackass##I did mean it though"
                    },
                ],
            ]
        },
        {
            "Id": "4",
            "Name": "Authority",
            "Date": "7/02/2024",
            "Answer": "Kelli",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "Thank you for following that rule, death threats are fine though yeah"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "People hate Strive cause it kinda blows waiting for 20 seconds for a blockstring to end"
                    },
                    {
                        "User": "Witness",
                        "Text": "what if i told you you can press a button by like the third move"
                    },
                    {
                        "User": "Suspect",
                        "Text": "What if I paid Abdur 1000 dollars to execute you on the side of the road"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "Next french fuck gets shot"
                    },
                    {
                        "User": "Witness",
                        "Text": "???"
                    },
                    {
                        "User": "Suspect",
                        "Text": "I am making this an anti-free speech zone. No speaking french"
                    },
                ],
            ]
        },
        {
            "Id": "5",
            "Name": "Success",
            "Date": "7/03/2024",
            "Answer": "Twi",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "fuck street fighter 6 fight in the streets to get a JOB THAT PAYS 6 FIGURES"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "to be fair decadent French nobility knew how to party and build big rooms to party in##hon hon hon i do not care about le poor! put three more painstakingly painted greek mythic scenes on le ceiling!"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "I HAVE THE PLAGUE I CANT GO TO WORK TILL LIKE NEXT WEEK"
                    },
                ],
            ]
        },
        {
            "Id": "6",
            "Name": "Yearning",
            "Date": "7/04/2024",
            "Answer": "Abdur",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "Watching over my little cousins##This kid asks \"why don't you have a wife\"😭😭😭"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "Got spam called and I ended the call with \"ok love you bye\"##It's over for me"
                    },
                ],
                [
                    {
                        "User": "Witness",
                        "Text": "ugh I'm overthinking this stupid text to send to my boss"
                    },
                    {
                        "User": "Suspect",
                        "Text": "Start it with, \" I love you\" then do whatever you want after##Y'all ever say \"love you\" to delivery people?"
                    },
                ],
            ]
        },
        {
            "Id": "12",
            "Name": "PG13",
            "Date": "7/10/2024",
            "Answer": "Sacha",
            "Hints": [
		        [
		            {
                        "User": "Witness",
                        "Text": "i dont actually"
                    },
                    {
                        "User": "Suspect",
                        "Text": "You just said you did you absolute incompetent buffoon piece of shit motherfucker"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "yeah im a wolf actually these birds keep being noisy and shit im not like that. i'm a follower. i go where people are screaming"
                    },
                    {
                        "User": "Witness",
                        "Text": "And your an alpha male"
                    },
		            {
                        "User": "Suspect",
                        "Text": "i'm a fucking sigma. dont disrespect me like that"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "Battler is a loser. I'm a winner."
                    },
                ] 
            ]
        },
        {
            "Id": "16",
            "Name": "Ryu",
            "Date": "7/14/2024",
            "Answer": "Cheez",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "Perhaps pain…comes from within :jamoe:"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "This is the second time ive been put on hall of fame next to “breastmilk mac and cheese”"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "Daddy in dungeon\nDelicious in daddy\nDungeons and delicious\nPokemon mystery daddy"
                    },
                ] 
            ]
        },
        {
            "Id": "17",
            "Name": "Market Forces",
            "Date": "7/15/2024",
            "Answer": "Kelli",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "I should buy thousands of GameStop stocks"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "it's incredible to me that Elon seems like, extremely unhappy yet he's like one of the ten richest ppl alive"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "I remember my macroeconomics textbook in Uni said that Ebeneezer Scrooge was a good guy at the start of a Christmas Story, and that he shouldn't have given his money away because interest exists"
                    },
                ],
            ]
        },
        {
            "Id": "18",
            "Name": "Foodie",
            "Date": "7/16/2024",
            "Answer": "Strata",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "what are you even using cottage cheese for\nif you say cottage cheese and strawberries im killing you"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "i have nothing against seaweed i just need structural integrity"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "I gotta make my own gluten free fried chicken but it's hard to find the will power :PepegaCry:"
                    },
                ],
            ]
        },
        {
            "Id": "19",
            "Name": "Identity",
            "Date": "7/17/2024",
            "Answer": "Cammy",
            "Hints": [
                [
                    {
                        "User": "Witness",
                        "Text": "Why does everyone treat me like I’m straight"
                    },
                    {
                        "User": "Suspect",
                        "Text": "you act straight##(derogatory)"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "if you can't see yourself as a cute bunny girl you are just fundamentally broken as a person i think'"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "quintuple my dysphoria and give it to joe biden"
                    },
                ],
            ]
        },
        {
            "Id": "20",
            "Name": "Scammer",
            "Date": "7/18/2024",
            "Answer": "Strata",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "silksong nft announcement 😋"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "i was playing back when you could just bitcoin farm for insane passive income##ty crypto luigi"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "im going to steal sachas talent with the space jam ball"
                    },
                ],
            ]
        },
        {
            "Id": "21",
            "Name": "Literally Me",
            "Date": "7/19/2024",
            "Answer": "Nancy",
            "Hints": [
                [
		            {
                        "User": "Suspect",
                        "Text": "i need to get some new literally me characters"
                    },
                ],
                [
                    {
                        "User": "Witness",
                        "Text": "girlfailure"
                    },
                    {
                        "User": "Suspect",
                        "Text": "ah literally me"
                    },
                ],[
                    {
                        "User": "Suspect",
                        "Text": "don is literally me too tbh"
                    },
                ],
            ]
        },
        {
            "Id": "22",
            "Name": "Easy Puzzle",
            "Date": "7/20/2024",
            "Answer": "Abdur",
            "Hints": [
                [
		            {
                        "User": "Suspect",
                        "Text": "Dude you gotta learn golf"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "you gotta"
                    },
                ],[
                    {
                        "User": "Suspect",
                        "Text": "You gotta meet him"
                    },
                ],
            ]
        },
        {
            "Id": "23",
            "Name": "Elden Ring Opinions",
            "Date": "7/21/2024",
            "Answer": "Axa",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "i like xc3 but anyone who genuinely thinks it shoulda beat elden ring is out of their fucking gourd"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "elden ring is literally just dark souls 2 with the budget"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "i got SO much shit for saying elden ring gave me ds2 vibes lmaooo"
                    },
                ],
            ]
        },
        {
            "Id": "24",
            "Name": "Elden Ring Opinions",
            "Date": "7/21/2024",
            "Answer": "NTO",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "i like xc3 but anyone who genuinely thinks it shoulda beat elden ring is out of their fucking gourd"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "elden ring is literally just dark souls 2 with the budget"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "i got SO much shit for saying elden ring gave me ds2 vibes lmaooo"
                    },
                ],
            ]
        },
        {
            "Id": "26",
            "Name": "Fight",
            "Date": "7/24/2024",
            "Answer": "QRQL",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "you asked me for games##i asked you to witness"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "a dog and a cat are different types of animals. being kicked is when someone or something is struck forcefully with a leg or foot, while being wet means you are covered in a liquid##i hope this helps"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "this started bc someone said melty blood has no shotos"
                    },
                ],
            ]
        },
        {
            "Id": "7",
            "Name": "First 3 Messages",
            "Date": "7/5/2024",
            "Answer": "NTO",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "fuck"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "i did get hacked wtf i have a porn role"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "ooooh i get it"
                    },
                ],
            ]
        },
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
    return pastPuzzles.sort((a, b) => new Date(a.Date) - new Date(b.Date));
}  