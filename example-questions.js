// Edit the categories, clues, responses, values, and Daily Doubles here.
// Keep this file beside jeopardy.html so the game can be opened directly.
"use strict";

const TRIVIA_QUESTIONS = {
  "rounds": [
    {
      "name": "Jeopardy!",
      "categories": [
        {
          "name": "Space Exploration",
          "clues": [
            {
              "clue": "This planet is nicknamed the Red Planet.",
              "answer": "What is Mars?",
              "value": 100
            },
            {
              "clue": "This natural satellite orbits Earth.",
              "answer": "What is the Moon?",
              "value": 200
            },
            {
              "clue": "In 1969, this astronaut became the first person to walk on the Moon.",
              "answer": "Who is Neil Armstrong?",
              "value": 300
            },
            {
              "clue": "This spacecraft carried the first human, Yuri Gagarin, into space.",
              "answer": "What is Vostok 1?",
              "value": 400,
              "dailyDouble": true
            },
            {
              "clue": "This boundary around a black hole marks the point beyond which light cannot escape.",
              "answer": "What is the event horizon?",
              "value": 500
            }
          ]
        },
        {
          "name": "Animal Adaptations",
          "clues": [
            {
              "clue": "These birds use flippers to swim and cannot fly, despite having wings.",
              "answer": "What are penguins?",
              "value": 100
            },
            {
              "clue": "This largest living land animal uses its trunk to grasp food and draw up water.",
              "answer": "What is the African elephant?",
              "value": 200
            },
            {
              "clue": "These mammals navigate and hunt using echoes of their own high-frequency calls.",
              "answer": "What are bats?",
              "value": 300
            },
            {
              "clue": "This egg-laying Australian mammal has a ducklike bill and webbed feet.",
              "answer": "What is the platypus?",
              "value": 400
            },
            {
              "clue": "This Arctic whale has a long spiral tusk that is actually an elongated tooth.",
              "answer": "What is the narwhal?",
              "value": 500
            }
          ]
        },
        {
          "name": "Name That Classic",
          "clues": [
            {
              "audio": "assets/classical-beethoven-symphony-5.mp3",
              "answer": "What is Beethoven's Symphony No. 5?",
              "value": 100
            },
            {
              "audio": "assets/classical-mozart-eine-kleine-nachtmusik.mp3",
              "answer": "What is Eine kleine Nachtmusik?",
              "value": 200
            },
            {
              "audio": "assets/classical-grieg-mountain-king.mp3",
              "answer": "What is In the Hall of the Mountain King?",
              "value": 300
            },
            {
              "audio": "assets/classical-strauss-blue-danube.mp3",
              "answer": "What is The Blue Danube?",
              "value": 400
            },
            {
              "audio": "assets/classical-rossini-william-tell.mp3",
              "answer": "What is the William Tell Overture?",
              "value": 500
            }
          ]
        },
        {
          "name": "Everyday Chemistry",
          "clues": [
            {
              "clue": "The formula H2O represents this familiar liquid.",
              "answer": "What is water?",
              "value": 100
            },
            {
              "clue": "This gas makes up about 78 percent of Earth's atmosphere.",
              "answer": "What is nitrogen?",
              "value": 200
            },
            {
              "clue": "A solution with a pH below 7 is described by this adjective.",
              "answer": "What is acidic?",
              "value": 300
            },
            {
              "clue": "The chemical symbol Fe stands for this metal.",
              "answer": "What is iron?",
              "value": 400
            },
            {
              "clue": "This process coats iron or steel with zinc to help prevent rust.",
              "answer": "What is galvanization?",
              "value": 500
            }
          ]
        },
        {
          "name": "On the Bookshelf",
          "clues": [
            {
              "clue": "This young wizard attends Hogwarts and has a lightning-shaped scar.",
              "answer": "Who is Harry Potter?",
              "value": 100
            },
            {
              "clue": "This author wrote Charlie and the Chocolate Factory.",
              "answer": "Who is Roald Dahl?",
              "value": 200
            },
            {
              "clue": "In The Hobbit, this title character leaves the Shire with a company of dwarves.",
              "answer": "Who is Bilbo Baggins?",
              "value": 300
            },
            {
              "clue": "This Jane Austen novel follows Elizabeth Bennet and Mr. Darcy.",
              "answer": "What is Pride and Prejudice?",
              "value": 400
            },
            {
              "clue": "This Nigerian author wrote Things Fall Apart.",
              "answer": "Who is Chinua Achebe?",
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
          "name": "Ancient Civilizations",
          "clues": [
            {
              "clue": "The pyramids at Giza were built by this ancient civilization.",
              "answer": "What is ancient Egypt?",
              "value": 200
            },
            {
              "clue": "This city was buried by the eruption of Mount Vesuvius in 79 CE.",
              "answer": "What is Pompeii?",
              "value": 400
            },
            {
              "clue": "This writing system used wedge-shaped marks pressed into clay tablets in Mesopotamia.",
              "answer": "What is cuneiform?",
              "value": 600
            },
            {
              "clue": "This Babylonian king is associated with a famous collection of laws carved on a stone stele.",
              "answer": "Who is Hammurabi?",
              "value": 800
            },
            {
              "clue": "This Bronze Age civilization built the palace complex at Knossos on Crete.",
              "answer": "What is the Minoan civilization?",
              "value": 1000
            }
          ]
        },
        {
          "name": "Mathematical Ideas",
          "clues": [
            {
              "clue": "This is the sum of the interior angles of a triangle in Euclidean geometry.",
              "answer": "What is 180 degrees?",
              "value": 200
            },
            {
              "clue": "This is the smallest prime number.",
              "answer": "What is 2?",
              "value": 400
            },
            {
              "clue": "This theorem states that a squared plus b squared equals c squared for a right triangle.",
              "answer": "What is the Pythagorean theorem?",
              "value": 600,
              "dailyDouble": true
            },
            {
              "clue": "This sequence begins 0, 1, 1, 2, 3, 5, with each later term the sum of the previous two.",
              "answer": "What is the Fibonacci sequence?",
              "value": 800
            },
            {
              "clue": "This mathematician gives her name to the theorem connecting continuous symmetries with conservation laws.",
              "answer": "Who is Emmy Noether?",
              "value": 1000
            }
          ]
        },
        {
          "name": "Art Through the Ages",
          "clues": [
            {
              "clue": "This artist painted the Mona Lisa.",
              "answer": "Who is Leonardo da Vinci?",
              "value": 200
            },
            {
              "clue": "The Starry Night was painted by this Dutch artist in 1889.",
              "answer": "Who is Vincent van Gogh?",
              "value": 400
            },
            {
              "clue": "This Spanish artist painted the antiwar work Guernica.",
              "answer": "Who is Pablo Picasso?",
              "value": 600
            },
            {
              "clue": "This Japanese artist created the woodblock print The Great Wave off Kanagawa.",
              "answer": "Who is Katsushika Hokusai?",
              "value": 800
            },
            {
              "clue": "This French artist painted A Sunday on La Grande Jatte using tiny dots of color.",
              "answer": "Who is Georges Seurat?",
              "value": 1000
            }
          ]
        },
        {
          "name": "Under the Sea",
          "clues": [
            {
              "clue": "This is the largest ocean on Earth.",
              "answer": "What is the Pacific Ocean?",
              "value": 200
            },
            {
              "clue": "These reef-building animals live in colonies and secrete calcium carbonate skeletons.",
              "answer": "What are corals?",
              "value": 400
            },
            {
              "clue": "This deep ocean trench contains Challenger Deep.",
              "answer": "What is the Mariana Trench?",
              "value": 600
            },
            {
              "clue": "This term describes light produced by a chemical reaction within a living organism.",
              "answer": "What is bioluminescence?",
              "value": 800,
              "dailyDouble": true
            },
            {
              "clue": "At hydrothermal vents, some microbes use this process to make organic matter using energy from chemical reactions.",
              "answer": "What is chemosynthesis?",
              "value": 1000
            }
          ]
        },
        {
          "name": "Ingenious Inventions",
          "clues": [
            {
              "clue": "Alexander Graham Bell received a famous 1876 patent for this voice-transmitting device.",
              "answer": "What is the telephone?",
              "value": 200
            },
            {
              "clue": "Johannes Gutenberg is associated with introducing this movable-type printing machine in Europe.",
              "answer": "What is the printing press?",
              "value": 400
            },
            {
              "clue": "This inventor demonstrated a practical safety elevator brake in the 1850s.",
              "answer": "Who is Elisha Otis?",
              "value": 600
            },
            {
              "clue": "This physicist invented the World Wide Web while working at CERN.",
              "answer": "Who is Tim Berners-Lee?",
              "value": 800
            },
            {
              "clue": "This inventor created the first commercially successful dishwasher and patented her design in 1886.",
              "answer": "Who is Josephine Cochrane?",
              "value": 1000
            }
          ]
        }
      ]
    }
  ],
  "finalJeopardy": {
    "category": "Scientific Discoveries",
    "clue": "In 1928, Alexander Fleming noticed that this mold-produced antibiotic inhibited bacteria growing on a laboratory plate.",
    "answer": "What is penicillin?"
  }
};
