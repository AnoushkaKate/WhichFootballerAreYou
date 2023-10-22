var players = ["Sam Kerr", "Alex Morgan", "Lucy Bronze","Wendie Renard"] //variable that stores players in an array

        var quizQuestions = [ //variable that stores the questions of the quiz in an array
            {
                question: "What is your favourite colour?", //stores the question
                choices: ["Blue", "Pink", "Yellow", "Red"], //stores the answer choices for the question
            },
            {
                question: "Which country can you see yourself living in?",
                choices: ["Australia", "America", "England", "France"],
            },
            {
                question: "Which city would you want to holiday in?",
                choices: ["London", "San Diego", "Barcelona", "Carribean (Martinique)"],
            },
            {
                question: "How would you describe yourself?",
                choices: [ "An Ambitious Trailblazer", "A Confident Leader", "A Creative Visionary", "A Resilient Team-player"],
            },
            {
                question: "Which food would you like to eat right now?",
                choices: [ "Sushi", "Burrito Bowl", "Peri-Peri Chicken", "Spätzle (German Pasta)"],
            },
            
        ]

        var samKerrScore = 0; //variable that initialises the score for each player by setting the score to 0
        var alexMorganScore = 0; // these variables are used to keep track of the player for each score
        var lucyBronzeScore = 0;
        var wendieRenardScore= 0;

        var currentQuestionCount = 0; //variable that keeps track of each question by counting it
    

        var userInput = document.getElementById("userInput"); //Gets userInput from the HTML using it's ID and stores it in the userInput variable 
        var submitButton = document.getElementById("submitButton");  //Gets submitButton from the HTML using it's ID and stores it in the submitButton variable 
        var questionElement = document.getElementById("questionElement"); //Gets questionElement from the HTML using it's ID and stores it in the questionElement variable
        var choiceElement = document.getElementById("choiceElement"); //Gets choiceElement from the HTML using it's ID and stores it in the choiceElement variable 
        var result = document.getElementById("result"); //Gets result from the HTML using it's ID and stores it in the result variable
        var choiceContainer = document.getElementById ("choiceContainer"); //Gets result from the HTML using it's ID and stores it in the result variable
        var image = document.createElement ("img"); //creates an image element in the js

        const label1 = document.getElementById("label1"); //Gets label elements from their ID
        const label2 = document.getElementById("label2");
        const label3 = document.getElementById("label3");
        const label4 = document.getElementById("label4");

        submitButton.addEventListener('click', submitAnswer) //An event listener that listens for the 'click' of the submit button and then runs the submitAnswer function

        questionElement.innerHTML = quizQuestions[currentQuestionCount]['question'] //displays the question in the innerHTML of the question element by referring to whichever number the question count is up to

        label1.innerHTML = quizQuestions[currentQuestionCount]['choices'][0] //sets the label to the choice from the correlating question by referring to the current question count
        label2.innerHTML = quizQuestions[currentQuestionCount]['choices'][1] 
        label3.innerHTML = quizQuestions[currentQuestionCount]['choices'][2]
        label4.innerHTML = quizQuestions[currentQuestionCount]['choices'][3]

        function countQuestion() {
            const radioButtons = document.querySelectorAll('.radioOption'); //selects all elements from the HTML doc with the class 'radioOption'
        radioButtons.forEach((radioButton) => { //iterates through all the radio buttons
        radioButton.checked = false; // sets the 'checked' property of the radio button to 'false' 
        }); //this bit of code unchecks any selected radio buttons to make sure the users selects a new answer for the next question
            if(currentQuestionCount == (quizQuestions.length - 1)) { // checks if the current questions count is equal to the number of the last question in the array (the total no. of questions minus one, since arrays start with 0)
                calculateResult() //if it is the last question in the quizQuestions array, then run the calculateResult function
            } else { // otherwise, if it's not the last question of the quiz
                currentQuestionCount++ //then add one to the currentQuestionCount to move to the next question
                questionElement.innerHTML = quizQuestions[currentQuestionCount]['question'] //updates the question displayed based on the new currentQuestionCount just incremented
                label1.innerHTML = quizQuestions[currentQuestionCount]['choices'][0] //changes the choice displayed based on the new currentQuestionCount just incremented
                label2.innerHTML = quizQuestions[currentQuestionCount]['choices'][1]
                label3.innerHTML = quizQuestions[currentQuestionCount]['choices'][2]
                label4.innerHTML = quizQuestions[currentQuestionCount]['choices'][3]
            }
        }

        function submitAnswer () { //defines the submitAnswer function
            const selectedAnswer = document.querySelector('input[name="options"]:checked'); //selects the input from the radio button from the document and stores it in the variable 'selected Answer'
            
            if (!selectedAnswer) { //checks if an answer is selected by checking if it's null using the !
                alert("Please select an option before pressing the submit button."); //if no answer is selected then shows alert message
                return; // Exit the function, preventing further execution
            }

            if(`${selectedAnswer.value}` == "Option1") { //checks if the user has selected option1 by matching it to the value of the input in the selectedAnswer variable
                samKerrScore++ // if the above condition is true, then add one to samKerr score 
             countQuestion() //then run the countQuestion function
            } else if(`${selectedAnswer.value}` == "Option2") { //checks if the user has selected option2 by matching it to the value of the input in the selectedAnswer variable
                alexMorganScore++  // if the above condition is true, then add one to alexMorganScore variable
             countQuestion() 
            } else if(`${selectedAnswer.value}` == "Option3") { //checks if the user has selected option3 by matching it to the value of the input in the selectedAnswer variable
                lucyBronzeScore++ // if the above condition is true, then add one to lucyBronzeScore variable
             countQuestion() 
            } else if(`${selectedAnswer.value}` == "Option4") { //checks if the user has selected option4 by matching it to the value of the input in the selectedAnswer variable
                wendieRenardScore++ // if the above condition is true, then add one to wendieRenardScore variable
             countQuestion() 
            }

           
         }

        function calculateResult () { // creates function to calculate the result
            var scores = [samKerrScore, alexMorganScore, lucyBronzeScore, wendieRenardScore] //creates a variable that stores the scores of each player
            var maxScore = Math.max(...scores); //finds the highest score from the above array and stores it in the maxScore variable
            var highestScore = null; // initialises the 'highestScore' variable as null

            for (var i = 0; i < players.length; i++) { //initiates a loop, sets the variable 'i' to 0, and the loop will continue as long as i is less than the length of the 'players' array. It adds one to the 'i' by 1 in ech iteration 
                if (scores[i] === maxScore) { //checks the current count of the 'i' variable in the 'scores' array is equal to the 'maxScore'. Compares the score of the current player in the loop to the highest score found so far. 
                    highestScore = players[i]; //if the current player's score is the highest so far, it stores the name of that player in the 'highestScore' variable.
                    break; //used to exit the loop immediately, as there's no need to keep checking the rest of players scores
                }
            }
            submitButton.setAttribute("disabled", true); // disables the submit button after the user has completed the quiz

            result.innerHTML = "You are " + highestScore + "!"; //sets the innerHTML with 'You are' and the name of the player withthe highest score

            if (highestScore === "Sam Kerr") { //If the player with the highest score is Sam Kerr, then:
                blurb.innerHTML = "Sam Kerr, the captain of the Matildas (Australia's women's national team) since 2019, is widely recognized as one of the all-time best forwards.  She also plays for Chelsea in the FA Women's Super League. As of 2022, Kerr holds records as Australia's top international scorer and the all-time leading scorer in the National Women's Soccer League (NWSL) in the U.S. Beyond personal accolades, she's a trailblazer for female athletes across continents. With Indian heritage, Kerr is eager to connect with her roots and inspire young Indian girls. Her journey reflects the immigrant experience, profoundly influencing her perspective on acceptance and diversity. As she excels on the pitch, she aims to be a beacon of hope for unconventional dreams. The question remains: Are you up to the challenge, can you be the Ambitious Trailblazer that Sam Kerr is?"
                //Fill the blurb element from the HTML with the text about Sam Kerr
                image.src = "SamKerr.png"; //the source of the image
       
                image.alt = "Samantha Kerr"; //the alt text of the image if it doesn't show up 
       
                image.width = 400; // set's the image size
       
                var imageContainer = document.getElementById("playerImg"); //gets the 'playerImg' element form the HTM and stores it in the 'imageContainer' variable
                   imageContainer.appendChild(image); //places the image inside the 'playerImg' element
            } else if (highestScore === "Alex Morgan") {
                blurb.innerHTML = "Alex Morgan is a prominent American professional soccer player currently serving as the captain of the San Diego Wave FC in the National Women's Soccer League (NWSL). Born on July 2, 1989, in San Dimas, California, Morgan has risen to become a committed member of the United States women's national soccer team. She has been co-captaining the national team alongside Carli Lloyd and Megan Rapinoe since 2018, showcasing her leadership skills on and off the pitch, as a confident leader. As a key member of the U.S. Women's National Team, she won two FIFA World Cup championships in 2015 and 2019. Notably, she earned the nickname 'Baby Horse' due to her incredible speed and agility on the soccer pitch. The question remains: Are you up to the challenge, can you be the Confident Leader that Alex Morgan is?"

                image.src = "AlexMorgan.png";
       
                image.alt = "Alex Morgan";
       
                image.width = 200;
       
                var imageContainer = document.getElementById("playerImg"); 
                imageContainer.appendChild(image);
            } else if (highestScore === "Lucy Bronze") {
                blurb.innerHTML = "Lucy Bronze, born on October 28, 1991, is a prominent English footballer celebrated for her remarkable career. Known for her versatility, she excels as a right-back for Barcelona and the England women's national team. Her journey has taken her through renowned clubs, including Lyon, Manchester City, and Liverpool, with impressive victories in UEFA Women's Champions League and FA Women's Super League. Lucy Bronze is an inspiring figure for young women, often sharing her journey and encouraging them to chase their dreams. Beyond her football career, she's a dedicated philanthropist, supporting underprivileged sports organizations by providing equipment. Her impact goes beyond the field, making her a true role model. The question remains: Are you up to the challenge, can you be the Creative Visionary that Lucy Bronze is?"
              image.src = "LucyBronze.png";
       
                image.alt = "Lucy Bronze";
       
                image.width = 400;
       
                var imageContainer = document.getElementById("playerImg"); 
                imageContainer.appendChild(image);
            } else if (highestScore === "Wendie Renard") {
                blurb.innerHTML = "Wendie Renard, a formidable defender in women's soccer and the captain of the France National team, defied convention to rise to the top. Standing at 6-foot-2, she utilizes her height both defensively and offensively. Renard's journey from Martinique to the French National Team was unconventional but driven by an unrelenting pursuit of success. Discrimination and challenges, including her origin and height, didn't deter her. She faced racial biases for being from Martinique, her accent and her height. Mental toughness propelled Renard to her role as France's captain and leadership at a highly successful European club. Her determination remains unshakable.  The question remains: Are you up to the challenge, can you be the Resilient Team Player that Wendie Renard is?"
             image.src = "WendieRenard.png";
       
                image.alt = "Wendie Renard";
       
                image.width = 400;
       
                var imageContainer = document.getElementById("playerImg"); 
                imageContainer.appendChild(image);
            }

            
        }

