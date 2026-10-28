// Vatican Jeopardy Night questions, adapted from export_vatican_questions.txt.
// Keep this file beside jeopardy.html so the game can be opened directly.
"use strict";

const TRIVIA_QUESTIONS = {
  "rounds": [
    {
      "name": "Jeopardy!",
      "categories": [
        {
          "name": "Spooky Szn",
          "clues": [
            {
              "clue": "This macabre poet is known for his poem “The Raven,” which repeats the word “nevermore.”",
              "answer": "Who is Edgar Allan Poe?",
              "value": 100
            },
            {
              "clue": "According to tradition, on Halloween night in 1517, this German theologian posted his 95 Theses.",
              "answer": "Who is Martin Luther?",
              "value": 200
            },
            {
              "clue": "This is the name of the masked killer in the Halloween film franchise.",
              "answer": "Who is Michael Myers?",
              "value": 300
            },
            {
              "clue": "This is the name of the full moon occurring closest to the autumnal equinox.",
              "answer": "What is the Harvest Moon?",
              "value": 400
            },
            {
              "clue": "This term describes an irrational fear of Halloween.",
              "answer": "What is samhainophobia?",
              "value": 500
            }
          ]
        },
        {
          "name": "Flags",
          "clues": [
            {
              "image": "assets/flags/brazil.svg.webp",
              "imageAlt": "The national flag of Brazil",
              "answer": "What is Brazil?",
              "value": 100
            },
            {
              "image": "assets/flags/sweden.svg.webp",
              "imageAlt": "The national flag of Sweden",
              "answer": "What is Sweden?",
              "value": 200
            },
            {
              "image": "assets/flags/colombia.svg.webp",
              "imageAlt": "The national flag of Colombia",
              "answer": "What is Colombia?",
              "value": 300
            },
            {
              "image": "assets/flags/srilanka.svg.webp",
              "imageAlt": "The national flag of Sri Lanka",
              "answer": "What is Sri Lanka?",
              "value": 400
            },
            {
              "image": "assets/flags/seychelles.svg.webp",
              "imageAlt": "The national flag of Seychelles",
              "answer": "What is Seychelles?",
              "value": 500
            }
          ]
        },
        {
          "name": "Civilization VI",
          "clues": [
            {
              "clue": "A standard game of Civilization VI starts with these two units.",
              "answer": "What are a Settler and a Warrior?",
              "value": 100
            },
            {
              "clue": "These are the five main types of victory achievable in Civilization VI.",
              "answer": "What are science, culture, domination, religion, and diplomacy?",
              "value": 200
            },
            {
              "clue": "This Civilization VI leader, including DLC, comes first alphabetically.",
              "answer": "Who is Abraham Lincoln?",
              "value": 300
            },
            {
              "clue": "This leader can lead either England or France.",
              "answer": "Who is Eleanor of Aquitaine?",
              "value": 400
            },
            {
              "clue": "This wonder awards two randomly chosen free civics and provides one Great Work of Writing slot and one Great Work of Music slot.",
              "answer": "What is the Bolshoi Theatre?",
              "value": 500
            }
          ]
        },
        {
          "name": "Vatican Trivia",
          "clues": [
            {
              "clue": "This Renaissance artist painted the ceiling of the Sistine Chapel.",
              "answer": "Who is Michelangelo?",
              "value": 100
            },
            {
              "clue": "This term describes the secretive gathering of cardinals to elect a new pope.",
              "answer": "What is a conclave?",
              "value": 200
            },
            {
              "clue": "In 2013, this pope became the first to resign the papacy in nearly 600 years.",
              "answer": "Who is Benedict XVI?",
              "value": 300
            },
            {
              "clue": "Before Vatican City’s independence, popes ruled a collection of territories known by this name.",
              "answer": "What are the Papal States?",
              "value": 400,
              "dailyDouble": true
            },
            {
              "clue": "A priest and Vatican official, Gabriele Amorth, performed tens of thousands of these rituals during his career.",
              "answer": "What are exorcisms?",
              "value": 500
            }
          ]
        },
        {
          "name": "Portmanteaus",
          "clues": [
            {
              "clue": "A vacation that you have at home.",
              "answer": "What is a staycation?",
              "value": 100
            },
            {
              "clue": "A pair of pants that looks like denim but feels like leggings.",
              "answer": "What are jeggings?",
              "value": 200
            },
            {
              "clue": "Someone who says “Cómo estás, amigo, how are you?” is speaking this.",
              "answer": "What is Spanglish?",
              "value": 300
            },
            {
              "clue": "This term describes software distributed for free but with paid features.",
              "answer": "What is freemium?",
              "value": 400
            },
            {
              "clue": "A combined name for two prestigious British universities.",
              "answer": "What is Oxbridge?",
              "value": 500
            }
          ]
        },
        {
          "name": "Cinemology",
          "clues": [
            {
              "clue": "This actor played Captain Jack Sparrow.",
              "answer": "Who is Johnny Depp?",
              "value": 100
            },
            {
              "clue": "This 2014 science-fiction film features a journey through a wormhole near Saturn in search of a new home for humanity.",
              "answer": "What is Interstellar?",
              "value": 200
            },
            {
              "clue": "This director made Mulholland Drive, Blue Velvet, and the television series Twin Peaks.",
              "answer": "Who is David Lynch?",
              "value": 300
            },
            {
              "clue": "This acclaimed director of The Godfather also directed the 1979 Vietnam War epic Apocalypse Now.",
              "answer": "Who is Francis Ford Coppola?",
              "value": 400
            },
            {
              "clue": "Before becoming a successful filmmaker, this director of a famous fantasy trilogy made the low-budget zombie comedy Braindead, also called Dead Alive.",
              "answer": "Who is Peter Jackson?",
              "value": 500
            }
          ]
        }
      ]
    },
    {
      "name": "Double Jeopardy!",
      "categories": [
        {
          "name": "Math Words",
          "clues": [
            {
              "clue": "The longest side of a right triangle.",
              "answer": "What is the hypotenuse?",
              "value": 200
            },
            {
              "clue": "The number that multiplies a variable, such as the 3 in 3x.",
              "answer": "What is a coefficient?",
              "value": 400
            },
            {
              "clue": "Two geometric figures are called this if they have the same shape and size.",
              "answer": "What is congruent?",
              "value": 600,
              "dailyDouble": true
            },
            {
              "clue": "A line that intersects a circle at exactly two distinct points.",
              "answer": "What is a secant line?",
              "value": 800
            },
            {
              "clue": "This standardized score indicates how many standard deviations a value lies above or below the mean.",
              "answer": "What is a z-score?",
              "value": 1000
            }
          ]
        },
        {
          "name": "Video Games",
          "clues": [
            {
              "clue": "This cartoony-looking battle royale video game was released in 2017.",
              "answer": "What is Fortnite?",
              "value": 200
            },
            {
              "clue": "This video game, originally invented in Moscow in 1984, is the best-selling video game franchise of all time.",
              "answer": "What is Tetris?",
              "value": 400
            },
            {
              "clue": "This highly successful fantasy RPG, released in 2011, has a protagonist with magical vocal powers.",
              "answer": "What is The Elder Scrolls V: Skyrim?",
              "value": 600
            },
            {
              "clue": "The original World of Warcraft came out in this year.",
              "answer": "What is 2004?",
              "value": 800
            },
            {
              "clue": "This 2025 puzzle game takes place in a mysterious mansion whose rooms change each day, with the ultimate objective of finding Room 46.",
              "answer": "What is Blue Prince?",
              "value": 1000
            }
          ]
        },
        {
          "name": "Name That Politician",
          "clues": [
            {
              "audio": "assets/politician-clips/trump.mp3",
              "answer": "Who is Donald Trump?",
              "value": 200
            },
            {
              "audio": "assets/politician-clips/bush.mp3",
              "answer": "Who is George W. Bush?",
              "value": 400
            },
            {
              "audio": "assets/politician-clips/boris.mp3",
              "answer": "Who is Boris Johnson?",
              "value": 600
            },
            {
              "audio": "assets/politician-clips/jeb.mp3",
              "answer": "Who is Jeb Bush?",
              "value": 800
            },
            {
              "audio": "assets/politician-clips/dean.mp3",
              "answer": "Who is Howard Dean?",
              "value": 1000
            }
          ]
        },
        {
          "name": "Ancient History",
          "clues": [
            {
              "clue": "This Chinese military leader is traditionally credited with writing The Art of War.",
              "answer": "Who is Sun Tzu?",
              "value": 200
            },
            {
              "clue": "This volcano erupted in 79 CE, burying the Roman city of Pompeii.",
              "answer": "What is Mount Vesuvius?",
              "value": 400
            },
            {
              "clue": "This city was the capital of the Inca Empire before the Spanish conquest.",
              "answer": "What is Cusco?",
              "value": 600
            },
            {
              "clue": "This ancient Mesopotamian king and conqueror is primarily known for issuing his law code, one of the oldest legal texts ever discovered.",
              "answer": "Who is Hammurabi?",
              "value": 800
            },
            {
              "clue": "This ancient Chinese philosopher is considered the foundational figure of Daoism.",
              "answer": "Who is Laozi?",
              "value": 1000,
              "dailyDouble": true
            }
          ]
        },
        {
          "name": "Words in “The Vatican”",
          "clues": [
            {
              "clue": "Not filled, not occupied, or available to be used.",
              "answer": "What is vacant?",
              "value": 200
            },
            {
              "clue": "An anatomical area between the genitals and the anus.",
              "answer": "What is the taint?",
              "value": 400
            },
            {
              "clue": "Relating to large groups of people who share a particular identity according to common ancestry, culture, nationality, language, and/or religion.",
              "answer": "What is ethnic?",
              "value": 600
            },
            {
              "clue": "A warning, caution, or limitation that qualifies a statement, agreement, or plan.",
              "answer": "What is a caveat?",
              "value": 800
            },
            {
              "clue": "Understood, implied, or communicated without being directly stated or spoken aloud.",
              "answer": "What is tacit?",
              "value": 1000
            }
          ]
        },
        {
          "name": "Classic Cartoons",
          "clues": [
            {
              "clue": "The Krusty Krab is located in this fictional town.",
              "answer": "What is Bikini Bottom?",
              "value": 200
            },
            {
              "clue": "They are Timmy’s fairy godparents, who help him solve everyday problems in The Fairly OddParents.",
              "answer": "Who are Cosmo and Wanda?",
              "value": 400
            },
            {
              "clue": "The Grim Reaper goes on grim adventures with these two children in a surreal cartoon that ran from 2003 to 2007.",
              "answer": "Who are Billy and Mandy?",
              "value": 600
            },
            {
              "clue": "In ATLA, Toph Beifong creates this technique.",
              "answer": "What is metalbending?",
              "value": 800
            },
            {
              "clue": "Also an enthusiastic boy genius with access to an advanced laboratory, he is Dexter’s rival.",
              "answer": "Who is Mandark?",
              "value": 1000
            }
          ]
        }
      ]
    }
  ],
  "finalJeopardy": {
    "category": "Geography (misspellings will be accepted)",
    "clue": "This country is the only doubly landlocked country in Europe—it is completely surrounded by other landlocked countries.",
    "answer": "What is Liechtenstein?"
  }
};
