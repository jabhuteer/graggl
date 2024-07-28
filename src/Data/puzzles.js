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
            "Id": "8",
            "Name": "Gamer",
            "Date": "7/06/2024",
            "Answer": "Vetrix",
            "Hints": [
                [
                    {
                        "User": "Witness",
                        "Text": "im literally italian"
                    },
                    {
                        "User": "Suspect",
                        "Text": "do you go mama mia super mario galaxy?"
                    },
                ],
                [
                    {
                        "User": "Witness",
                        "Text": "labbing fgs on the toilet is legit revolutionary"
                    },
                    {
                        "User": "Suspect",
                        "Text": "Toilet Umineko"
                    },
                    {
                        "User": "Witness",
                        "Text": "ive already read it.."
                    },
                    {
                        "User": "Suspect",
                        "Text": "But reading it in the toilets is a completely different experience"
                    },
                ],
                [
                    {
                        "User": "Witness",
                        "Text": "speaking of jrpgs y'all heard of Devil Survivor"
                    },
                    {
                        "User": "Suspect",
                        "Text": "persona 5 without the underage romance and confidants 😒"
                    },
                ],
            ]
        },
        {
            "Id": "9",
            "Name": "Youth",
            "Date": "7/07/2024",
            "Answer": "Panned",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "If you don't like skibidi toilet you're a landlord basically"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "I'm sorry for sending the daigo may among us plushy when you said you weren't feeling well that was kind of mean"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "Oomfies I accidentally had to skip school today because I drank too much for religious reasons last night who wants to play strive"
                    },
                ],
            ]
        },
        {
            "Id": "10",
            "Name": "Schemes",
            "Date": "7/08/2024",
            "Answer": "Canti",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "Gonna marry the neighborhood cougar and make her untimely death seem an accident"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "RISE MY CHILD##WHERES YOUR ANGER??"
                    },
                    {
                        "User": "Witness",
                        "Text": "I don’t like being angry"
                    },
                    {
                        "User": "Suspect",
                        "Text": "Me neither I feel bad"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "Sigma male is gender neutral"
                    },
                ],
            ]
        },
        {
            "Id": "11",
            "Name": "Unique",
            "Date": "7/09/2024",
            "Answer": "Canti",
            "Hints": [
                [
                    {
                        "User": "Witness",
                        "Text": "I've heard darius is the suka motion master :jamoe:"
                    },
                    {
                        "User": "Suspect",
                        "Text": "Im the choke master"
                    },
                ],
                [
                    {
                        "User": "Witness",
                        "Text": "im having a pizza##just cooked it"
                    },
                    {
                        "User": "Suspect",
                        "Text": "share?##👉👈"
                    },
                ],
                [
                    {
                        "User": "Witness",
                        "Text": "\"just making sure i dont fit in\" headass"
                    },
                    {
                        "User": "Suspect",
                        "Text": "I'm one in a krillion"
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
            "Id": "13",
            "Name": "Modern speech",
            "Date": "7/11/2024",
            "Answer": "Bared",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "it's awesome that there's two persona pics i can use to imply i'm about to say a slur"
                    },
                ],
                [
		            {
                        "User": "Witness",
                        "Text": "Like I don’t get how you’d want me to word this to be less problematic or conservative or whatever"
                    },
		            {
                        "User": "Suspect",
                        "Text": "you gotta word it progressive, my femcel gothmaxxing malewife would get perma blocked if she had esex with a cottagecore grungemode rando"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "Despite overwhelming evidence, many fans online argue that \"goku gets sweeped by luffy\" (twitter.com/ILoveNamiFeet/fdfh459bj2J)"
                    },
                ] 
            ]
        },
        {
            "Id": "14",
            "Name": "Fighting",
            "Date": "7/12/2024",
            "Answer": "Toto",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "I don't actually have good neutral so I just try to confuse everyone involved"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "yeah I'm GIFTED##Good at niche games##I##F##TADHD##E##Dumb"
                    },
                ],
                [
                    {
                        "User": "Witness",
                        "Text": "\"chaos so cheap\" my char does strike/throw and has no defense or mix or neutral"
                    },
                    {
                        "User": "Suspect",
                        "Text": "i've got the perpetual strive brainrot that makes me foam at the mouth when i hear chaos and this almost flew me into a rage at 5:42 in the morning"
                    },
                ],
            ]
        },
        {
            "Id": "15",
            "Name": "Interjection",
            "Date": "7/13/2024",
            "Answer": "Corvus",
            "Hints": [
                [
                    {
                        "User": "Witness",
                        "Text": "with juri i meaty with lights or medium punch because i can hitconfirm both"
                    },
                    {
                        "User": "Suspect",
                        "Text": "with juri u drool and slobber"
                    },
                ],
                [
		            {
                        "User": "Witness A",
                        "Text": "Yeah imma need a second opinion"
                    },
		            {
                        "User": "Suspect",
                        "Text": "im literally the second opinion"
                    },
		            {
                        "User": "Witness A",
                        "Text": "Third opinion then"
                    },
		            {
                        "User": "Suspect",
                        "Text": "mkay"
                    },
		            {
                        "User": "Witness B",
                        "Text": "You're so cringe"
                    },
		            {
                        "User": "Suspect",
                        "Text": "third opinion is here"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "theres much better ways to do it that would also make ur game healthier too"
                    },
                    {
                        "User": "Witness",
                        "Text": "Like?"
                    },
                    {
                        "User": "Suspect",
                        "Text": "\"like?\" mfers when they want to be annoying"
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
            "Name": "Smash Brothers",
            "Date": "7/22/2024",
            "Answer": "NTO",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "are you fuckers talking abt smash in my channel"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "I'm smashing my open mouth into a burger"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "ordered some burgers at a place i never tried and man they have some good ass smash burgers"
                    },
                ],
            ]
        },
        {
            "Id": "25",
            "Name": "Tweeter",
            "Date": "7/23/2024",
            "Answer": "Doot",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "twitter is playing their own ad videos before videos in the post i’m gonna kill elon musk"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "refreshed twitter and apparently we’re about to have desktop quantum computers?"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "i played a bit of skugs a while ago and i only realized then why there was so many weirdos complaining about its censorship on twitter"
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
            "Id": "27",
            "Name": "Tomato Lover",
            "Date": "7/25/2024",
            "Answer": "Toto",
            "Hints": [
                [
		            {
                        "User": "Suspect",
                        "Text": "did you guys know tomatoes are probably from peru"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "did i tell you i detonated a tomato slicer about a month ago"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "cover it up.....wis your favorih tomato sahs"
                    },
                ],
            ]
        },
        {
            "Id": "28",
            "Name": "Funny Green Plant",
            "Date": "7/26/2024",
            "Answer": "Rin",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "go smoker weed"
                    },
                ],
                [
		            {
                        "User": "Witness",
                        "Text": "I'd never source weed from whole Foods get real"
                    },
                    {
                        "User": "Suspect",
                        "Text": "id source weed from half foods personally"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "Yo I opened my microwave and there's a little bit of the plastic near the bottom of the door peeling off. If I eat these burritos and grow a third arm, call me Tripalm then im gonna go raid the capital to decriminalize weed and also have 3 arms while doing it"
                    },
                ],
            ]
        },
        {
            "Id": "29",
            "Name": "Tomato Hater",
            "Date": "7/27/2024",
            "Answer": "Cammy",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "tomato soup tastes bad"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "I don't like tomato the tomato but I do like tomato derivatives"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "I'll only eat tomatoes as like ketchup or a paste or a sauce or w/e"
                    },
                ],
            ]
        },
        {
            "Id": "30",
            "Name": "Hog Wild",
            "Date": "7/28/2024",
            "Answer": "Strata",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "its crazy to me that like if you let a cute lil pink pig go out into the wild out of a farm itll start growing hair and tusks"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "spelunkers probably watch that movie about james franco cutting his arm off and go man i wish"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "if cottagecore is where we got cottage cheese from the whole establishment needs to be burnt to the ground"
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
        {
            "Id": "31",
            "Name": "Woke",
            "Date": "7/29/2024",
            "Answer": "Liz",
            "Hints": [
                [
                    {
                        "User": "Witness",
                        "Text": "The event started at midnight my time"
                    },
                    {
                        "User": "Suspect",
                        "Text": "Ugh woke liberals and their timezones 🙄"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "Barbie is woke as fuck they even have women in the movie"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "Had to stop because a lifeguard told me it was \"not permitted\" and \"someone could get hurt\" fucking woke culture"
                    },
                ],
            ]
        },
        {
            "Id": "32",
            "Name": "Violence",
            "Date": "7/30/2024",
            "Answer": "Cammy",
            "Hints": [
                [
		            {
                        "User": "Suspect",
                        "Text": "remember, do not shoot the messenger stab them"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "we gotta try dosing bared on high amounts of psychadelics"
                    },
                ],
                [
                    {
                        "User": "Witness",
                        "Text": "What the fuck are we getting next Bill?"
                    },
                    {
                        "User": "Suspect",
                        "Text": "nothing, microsoft is just going to hire agents to stab you in the kidney"
                    },
                ],
            ]
        },
        {
            "Id": "33",
            "Name": "Fearless",
            "Date": "7/31/2024",
            "Answer": "Ren",
            "Hints": [
                [
                    {
                        "User": "Witness",
                        "Text": "chat if you could freeze time what would you do with it"
                    },
		            {
                        "User": "Suspect",
                        "Text": "TERRORISM 🗣️📢🔊"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "oh to be a unit commander of some kind##saying \"ITS A GOOD DAY TO DIE MEN\" has to feel so fucking good"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "smite is scary..."
                    },
                ],
            ]
        },
        {
            "Id": "34",
            "Name": "$$$",
            "Date": "8/01/2024",
            "Answer": "Jab",
            "Hints": [
                [
		            {
                        "User": "Suspect",
                        "Text": "🙄 okay mathcord riddle me this: how much paper do u stack"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "My new years resolution is to spend more money on gambling"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "Stop spending so much money on programmer socks"
                    },
                ],
            ]
        },
        {
            "Id": "35",
            "Name": "Never Have I Ever",
            "Date": "8/02/2024",
            "Answer": "Strata",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "nah I've never been bit by ticks or leeches"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "I've never had grits in my life"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "I've never in my years working retail ever had someone try to pay with a cheque"
                    },
                ],
            ]
        },
        {
            "Id": "36",
            "Name": "Peak",
            "Date": "8/03/2024",
            "Answer": "Maki",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "PEAK IS BACK ON THE MENU"
                    },
                ],
                [
		            {
                        "User": "Suspect",
                        "Text": "hop on oblivion game is so peak"
                    },
                ],
                [
                    {
                        "User": "Witness",
                        "Text": "isnt monster the show about the doctor"
                    },
                    {
                        "User": "Suspect",
                        "Text": "yes##so peak..."
                    },
                ],
            ]
        },
        {
            "Id": "37",
            "Name": "Cabypara",
            "Date": "8/04/2024",
            "Answer": "Twi",
            "Hints": [
                [
                    {
                        "User": "Suspect",
                        "Text": "you... don't like capybaras?"
                    },
                ],
                [
                    {
                        "User": "Witness",
                        "Text": "bro thinks he's a capybara just chillin with the enemy"
                    },
		            {
                        "User": "Suspect",
                        "Text": "oh so the brazilian guy is a capybara huh"
                    },
                ],
                [
                    {
                        "User": "Suspect",
                        "Text": "just teared up looking at a capybara idk why"
                    },
                ],
            ]
        },
    ]

export function getCurrentPuzzle() {
    const currentPuzzle = puzzles.find((puzzle) => {
        var puzzleDate = new Date(puzzle["Date"]);
        // disgusting fix. absolutely awful. works though, forces time to PST for daily reset
        // unfortunately Date() is 100% client-side so users can bruteforce the date by changing it on their PC anyway
        var today = new Date(new Date().toLocaleString("en-US", {
            timeZone: "America/Los_Angeles"
          }))
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
        var puzzleDate = new Date(puzzles[i].Date);
        var today = new Date(new Date().toLocaleString("en-US", {
            timeZone: "America/Los_Angeles"
          }))
        if(puzzles[i].Id === id && puzzleDate <= today){
            return puzzles[i];
        }
    }
    return getCurrentPuzzle();
}

export function getAllPastPuzzles() {
    const pastPuzzles = [];
    var today = new Date(new Date().toLocaleString("en-US", {
        timeZone: "America/Los_Angeles"
      }))
    today.setHours(0, 0, 0, 0);
    for(let i = 0; i < puzzles.length; i++){
        var puzzleDate = new Date(puzzles[i].Date);
        if(puzzleDate <= today){
            pastPuzzles.push(puzzles[i])
        }
    }
    return pastPuzzles.sort((a, b) => new Date(a.Date) - new Date(b.Date));
}  