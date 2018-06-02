$(document).ready( function() {
    var trivia = {
        
        questions: [{ // 20 questions, remember 0-19 in questions array
            text: "Who shot Mr Burns?",
            answerOne: "Smithers",
            answerTwo: "Chief Wiggum",
            answerThree: "Maggie",
            answerFour: "Homer",
            solution: answerThree
        }, {
            text: "What beer do they drink in the Simpsons?",
            answerOne: "Duck",
            answerTwo: "Duff",
            answerThree: "Rush",
            answerFour: "Buzz",
            solution: answerTwo
        }, {
            text: "Who really founded Springfield?",
            answerOne: "Hans Sprungfeld",
            answerTwo: "Joe Duff",
            answerThree: "Jebediah Springfield",
            answerFour: "Ezekiel Springfield",
            solution: [answerOne, answerThree]
        }, {
            text: "How many eyes does blinky have?",
            answerOne: "Three",
            answerTwo: "Four",
            answerThree: "Two",
            answerFour: "Six",
            solution: answerOne
        }, {
            text: "What is the local radio in Springfield?",
            answerOne: "XRWN Radio",
            answerTwo: "YOTO Radio",
            answerThree: "BNKO Radio",
            answerFour: "KBBL Radio" // asnwer
        }, {
            text: "Whos the Springfield daredevil?",
            answerOne: "Lisa",
            answerTwo: "Willie",
            answerThree: "Homer",
            answerFour: "Bart" // answer
        }, {
            text: "What is the name of Homer's mother?",
            answerOne: "Mary Simpson",
            answerTwo: "Mona Simpson", // answer
            answerThree: "Jacqueline Bouvier",
            answerFour: "Patty Bouvier"
        }, {
            text: "What is the name of Bart's Dog?",
            answerOne: "Patty",
            answerTwo: "Lassie",
            answerThree: "Laddie", // answer
            answerFour: "Buddy"
        }, {
            text: "Who owned the Kwik-E Mart?",
            answerOne: "Apu",
            answerTwo: "Anu",
            answerThree: "Abu", // answer
            answerFour: "Ado"
        }, {
            text: "What is Princiapl Skinner's real name?",
            answerOne: "Seymour Skinner",
            answerTwo: "Walter Seymour Skinner",
            answerThree: "Waltor Seymour Skinner",
            answerFour: "Armin Tamzarian" // answer
        }, {
            text: "What is the name of Homer's Bowling team?",
            answerOne: "Rolling Fools",
            answerTwo: "Pin Pals", // answer
            answerThree: "Simpson Strikes",
            answerFour: "Pinsters"
        }, {
            text: "What are the names of Marge's sisters?",
            answerOne: "Maggie and Pattie",
            answerTwo: "Selma and Maggie",
            answerThree: "Mary and Selma",
            answerFour: "Selma and Pattie" // answer
        }, {
            text: "What is the name of Ned Flander's Store?",
            answerOne: "Flander's Landing",
            answerTwo: "The Leftorium", // answer
            answerThree: "The Bible Bunch",
            answerFour: "Library Losers"
        }, {
            text: "Which of the following is not one of Bart's catchphrases?",
            answerOne: "Eat my shorts!",
            answerTwo: "Don't have a cow, man!",
            answerThree: "Ha-ha!", // answer
            answerFour: "Ay, Caramba!"
        }, {
            text: "Which part of the opening credits changes?",
            answerOne: "Bart skateboarding",
            answerTwo: "Homer crashing",
            answerThree: "The family sitting", // answer
            answerFour: "Lisa playing clarinette"
        }, {
            text: "How old is bart?",
            answerOne: "Eleven",
            answerTwo: "Nine",
            answerThree: "Twelve",
            answerFour: "Ten" // answer
        }, {
            text: "What is Sideshow Bob's middle name?",
            answerOne: "Terwilliger",
            answerTwo: "Underdunk", // answer
            answerThree: "Robert",
            answerFour: "Junior"
        }, {
            text: "Where does Homer drink?",
            answerOne: "Moe's Tavern", // answer
            answerTwo: "Joe's Tavern",
            answerThree: "Brown Lantern",
            answerFour: "Whole Cavern"
        }, {
            text: "Who is the minister of Springfield?",
            answerOne: "Carlson",
            answerTwo: "Skinner",
            answerThree: "Lovejoy",
            answerFour: "Flanders"
        }, {
            text: "What is the name of Mr Burn's teddy bear?",
            answerOne: "Nono",
            answerTwo: "Bobo",
            answerThree: "Fobo",
            answerFour: "Nobo"
        }],
        // game should give you 20 seconds to answer each question, after 20 seconds or an answer click go to the next question.
        // if correct display a congratulations page, if wrong display wrong answer page which includes the correct answer
        // in the end display number of correct answers, and wrong answers, and a button to initiatePage()

        shuffleQuestion: function() {
            var i = 0;
            var j = 0;
            temp = null;

            for (i = trivia.questions.length - 1; i > 0; i -=1) {
                j = Math.floor(Math.random() * (i + 1));
                temp = trivia.questions[i];
                trivia.questions[i] = trivia.questions[j];
                trivia.questions[j] = temp;
            }
        },

        initiatePage: function() {
            trivia.shuffleQuestion();

            input = false;
            correct = 0;
            wrong = 0;

            var currentQuestion = trivia.questions[0];

            $("#question").text(currentQuestion.text);
            $("#answerOne").text(currentQuestion.answerOne);
            $("#answerTwo").text(currentQuestion.answerTwo);
            $("#answerThree").text(currentQuestion.answerThree);
            $("#answerFour").text(currentQuestion.answerFour);
        },

        userGuess: function() {
            $("#answer")
        }
    }

    trivia.initiatePage();
});