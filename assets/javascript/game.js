$(document).ready( function() {
    var trivia = {
        
        questions: [{ // 20 questions, remember 0-19 in questions array
            text: "Who shot Mr Burns?",
            answerOne: "Smithers",
            answerTwo: "Chief Wiggum",
            answerThree: "Maggie", // answer
            answerFour: "Homer"
        }, {
            text: "What beer do they drink in the Simpsons?",
            answerOne: "Duck",
            answerTwo: "Duff", // answer
            answerThree: "Rush",
            answerFour: "Buzz"
        }, {
            text: "Who really founded Springfield?",
            answerOne: "Hans Sprungfeld", // answer
            answerTwo: "Joe Duff",
            answerThree: "Jebediah Springfield", // answer
            answerFour: "Ezekiel Springfield"
        }, {
            text: "How many eyes does blinky have?",
            answerOne: "Three", // answer
            answerTwo: "Four",
            answerThree: "Two",
            answerFour: "Six"
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
            text: "?",
            answerOne: "",
            answerTwo: "",
            answerThree: "",
            answerFour: ""
        }, {
            text: "?",
            answerOne: "",
            answerTwo: "",
            answerThree: "",
            answerFour: ""
        }, {
            text: "?",
            answerOne: "",
            answerTwo: "",
            answerThree: "",
            answerFour: ""
        }, {
            text: "?",
            answerOne: "",
            answerTwo: "",
            answerThree: "",
            answerFour: ""
        }, {
            text: "?",
            answerOne: "",
            answerTwo: "",
            answerThree: "",
            answerFour: ""
        }, {
            text: "?",
            answerOne: "",
            answerTwo: "",
            answerThree: "",
            answerFour: ""
        }, {
            text: "?",
            answerOne: "",
            answerTwo: "",
            answerThree: "",
            answerFour: ""
        }, {
            text: "?",
            answerOne: "",
            answerTwo: "",
            answerThree: "",
            answerFour: ""
        }, {
            text: "?",
            answerOne: "",
            answerTwo: "",
            answerThree: "",
            answerFour: ""
        }, {
            text: "?",
            answerOne: "",
            answerTwo: "",
            answerThree: "",
            answerFour: ""
        }, {
            text: "?",
            answerOne: "",
            answerTwo: "",
            answerThree: "",
            answerFour: ""
        }],

        variable: 0,
        initiatePage: function() {
            var currentQuestion = Math.floor(Math.random() * trivia.questions.length);

            $("#question").text(trivia.questions[currentQuestion].text);
            for (var i = 0; i < trivia.questions.length; i++) {
                console.log();
            }
        }
    }

    trivia.initiatePage();
});