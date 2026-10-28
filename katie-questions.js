// Edit the categories, clues, responses, values, and Daily Doubles here.
// Keep this file beside jeopardy.html so the game can be opened directly.
"use strict";

const TRIVIA_QUESTIONS = {
  "rounds": [
    {
      "name": "Jeopardy!",
      "categories": [
        {
          "name": "Neighborhood Knowledge",
          "clues": [
            {
              "clue": "Brooklyn’s major league baseball team moved to this city in 1958.",
              "answer": "What is Los Angeles?",
              "value": 100
            },
            {
              "clue": "This grocery store was founded in Rochester, New York, in 1916 by brothers John and Walter.",
              "answer": "What is Wegmans?",
              "value": 200
            },
            {
              "clue": "This elevated subway line is known for its sharp curve above Myrtle Avenue.",
              "answer": "What is The M?",
              "value": 300
            },
            {
              "clue": "This famous rapper grew up in the Marcy housing projects in Bed-Stuy.",
              "answer": "Who is Jay-Z?",
              "value": 400,
              "dailyDouble": true
            },
            {
              "clue": "Bushwick’s Maria Hernandez Park was originally known by this much simpler name before being renamed in 1989.",
              "answer": "What is Bushwick Park?",
              "value": 500
            }
          ]
        },
        {
          "name": "Baked Goods",
          "clues": [
            {
              "clue": "This Italian dessert is made with coffee-soaked ladyfingers and mascarpone cheese.",
              "answer": "What is Tiramisu?",
              "value": 100
            },
            {
              "clue": "This round Chinese pastry is traditionally eaten during the Mid-Autumn Festival.",
              "answer": "What is Mooncake?",
              "value": 200
            },
            {
              "clue": "This is the French name for the pastry dough used to make éclairs and cream puffs.",
              "answer": "What is Choux pastry?",
              "value": 300
            },
            {
              "clue": "This Japanese sweet bread gets its name from its melon-like appearance and features a crisp cookie-dough crust.",
              "answer": "What is Melonpan?",
              "value": 400
            },
            {
              "clue": "This Italian dessert, whose name means \"cooked cream,\" is typically set using gelatin.",
              "answer": "What is Panna cotta?",
              "value": 500
            }
          ]
        },
        {
          "name": "Tarheel Trivia",
          "clues": [
            {
              "clue": "This aquatic fixture, built in the neoclassical style, is located at the southern end of McCorkle Place.",
              "answer": "What is The Old Well?",
              "value": 100
            },
            {
              "clue": "According to legend, UNC’s founder, William Richardson Davie, chose this tree as the location for the soon-to-be campus.",
              "answer": "What is Davie Poplar?",
              "value": 200
            },
            {
              "clue": "Erected in 1793, this is the oldest building on UNC–Chapel Hill’s campus.",
              "answer": "What is Old East?",
              "value": 300
            },
            {
              "clue": "In the 2022 finals of the NCAA men’s basketball tournament, UNC unfortunately lost to this team.",
              "answer": "What is Kansas (Jayhawks)?",
              "value": 400
            },
            {
              "clue": "This man—the namesake of Carrboro—established Bull Durham Tobacco, served simultaneously as a trustee and donor for both UNC and Duke, was a major funding source for the 1911 Chinese revolution, and funded the construction of the Confederate statue Silent Sam.",
              "answer": "Who is Julien Shakespeare Carr?",
              "value": 500
            }
          ]
        },
        {
          "name": "Portmanteaus",
          "clues": [
            {
              "clue": "This is a vacation that you have at home.",
              "answer": "What is Staycation?",
              "value": 100
            },
            {
              "clue": "These pants look like denim but feel like leggings.",
              "answer": "What are Jeggings?",
              "value": 200
            },
            {
              "clue": "Someone who says “Cómo estás, amigo, how are you?” is speaking this.",
              "answer": "What is Spanglish?",
              "value": 300
            },
            {
              "clue": "This term describes software distributed for free but with paid features.",
              "answer": "What is Freemium?",
              "value": 400
            },
            {
              "clue": "This is a combined name for two prestigious British universities.",
              "answer": "What is Oxbridge?",
              "value": 500
            }
          ]
        },
        {
          "name": "Spooky Szn",
          "clues": [
            {
              "clue": "On Halloween night in 1517, this German theologian posted his 95 Theses.",
              "answer": "Who is Martin Luther?",
              "value": 100
            },
            {
              "clue": "This macabre poet is known for his poem “The Raven,” which repeats the word “nevermore.”",
              "answer": "Who is Edgar Allan Poe?",
              "value": 200
            },
            {
              "clue": "This is the name of the masked killer in the Halloween film franchise.",
              "answer": "Who is Michael Myers?",
              "value": 300
            },
            {
              "clue": "This is the name of the full moon occurring closest to the autumnal equinox.",
              "answer": "What is Harvest Moon?",
              "value": 400
            },
            {
              "clue": "This term describes an irrational fear of Halloween.",
              "answer": "What is Samhainophobia?",
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
          "name": "America's Dairyland",
          "clues": [
            {
              "clue": "This three-digit area code is most common in Madison, WI.",
              "answer": "What is 608?",
              "value": 200
            },
            {
              "clue": "This architect from Wisconsin designed many of the notable buildings in and around Madison.",
              "answer": "Who is Frank Lloyd Wright?",
              "value": 400
            },
            {
              "clue": "A Wisconsin-style old fashioned uses this liquor in place of whiskey.",
              "answer": "What is Brandy?",
              "value": 600
            },
            {
              "clue": "This famous musician once broke up a street fight on East Washington Avenue.",
              "answer": "Who is Elvis Presley?",
              "value": 800
            },
            {
              "clue": "This Danish pastry, popularized by bakers in Racine, is Wisconsin's official state pastry.",
              "answer": "What is Kringle?",
              "value": 1000
            }
          ]
        },
        {
          "name": "Civilization VI",
          "clues": [
            {
              "clue": "You played this leader in our first game of Civilization VI with Alex.",
              "answer": "Who is Trajan?",
              "value": 200
            },
            {
              "clue": "These are five types of victory achievable in Civilization VI.",
              "answer": "What are Science, culture, domination, religion, diplomacy?",
              "value": 400
            },
            {
              "clue": "This is Indonesia’s unique naval unit.",
              "answer": "What is Jong?",
              "value": 600,
              "dailyDouble": true
            },
            {
              "clue": "This Civilization VI leader comes first alphabetically.",
              "answer": "Who is Abraham Lincoln?",
              "value": 800
            },
            {
              "clue": "This leader can lead either England or France.",
              "answer": "Who is Eleanor of Aquitaine?",
              "value": 1000
            }
          ]
        },
        {
          "name": "Asian American Culture",
          "clues": [
            {
              "clue": "This professional basketball player for the New York Knicks took the world by storm in 2012 during “Linsanity.”",
              "answer": "Who is Jeremy Lin?",
              "value": 200
            },
            {
              "clue": "Born in San Francisco, this martial artist and film star helped popularize kung fu movies internationally, starring in Enter the Dragon.",
              "answer": "Who is Bruce Lee?",
              "value": 400
            },
            {
              "clue": "Often eaten during Lunar New Year, these filled Chinese dumplings are associated with wealth because their shape resembles ancient gold ingots.",
              "answer": "What is Jiaozi?",
              "value": 600
            },
            {
              "clue": "This Asian American actress starred in an absurd 2022 movie about the multiverse.",
              "answer": "Who is Michelle Yeoh?",
              "value": 800
            },
            {
              "clue": "In 1882, the United States passed this law to restrict immigration from China.",
              "answer": "What is The Chinese Exclusion Act?",
              "value": 1000
            }
          ]
        },
        {
          "name": "National Parks",
          "clues": [
            {
              "clue": "This national park offers coin-operated showers at a cost of 25¢ per 2 minutes.",
              "answer": "What is Badlands?",
              "value": 200
            },
            {
              "clue": "This national park served as the setting for the rock-climbing documentary “Free Solo.”",
              "answer": "What is Yosemite?",
              "value": 400
            },
            {
              "clue": "This national park lies just south of the town Twentynine Palms.",
              "answer": "What is Joshua Tree?",
              "value": 600
            },
            {
              "clue": "This is the only national park in Utah that we did not visit during the van trip.",
              "answer": "What is Capitol Reef?",
              "value": 800,
              "dailyDouble": true
            },
            {
              "clue": "This is the only national park located in the state that we slept in on the first night of the van trip.",
              "answer": "What is Mammoth Cave?",
              "value": 1000
            }
          ]
        },
        {
          "name": "Words in “Carmichael Hall”",
          "clues": [
            {
              "clue": "Heating sugar until it turns golden brown produces this sweet substance commonly used in candies and desserts.",
              "answer": "What is Caramel?",
              "value": 200
            },
            {
              "clue": "This adjective describes water that contains tiny clusters of surfactant molecules to remove oil and dirt.",
              "answer": "What is Micellar?",
              "value": 400
            },
            {
              "clue": "Transmitted to humans by infected mosquitoes, this disease is caused by Plasmodium parasites.",
              "answer": "What is Malaria?",
              "value": 600
            },
            {
              "clue": "During Christian Communion, wine is traditionally served in this ceremonial drinking vessel.",
              "answer": "What is Chalice?",
              "value": 800
            },
            {
              "clue": "In Greek mythology, this fire-breathing monster combined features of a lion, a goat, and a serpent.",
              "answer": "What is Chimera?",
              "value": 1000
            }
          ]
        }
      ]
    }
  ],
  "finalJeopardy": {
    "category": "Geography",
    "clue": "The world's third-largest island, it is divided among three countries, making it the only island in Asia shared by three sovereign nations.",
    "answer": "What is Borneo?"
  }
};
