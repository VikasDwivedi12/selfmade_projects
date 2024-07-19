const questions = [
    "What is the capital of France?",
    "Who wrote the play “Romeo and Juliet”?",
    "Which planet is known as the 'Red Planet'?",
    "What is the chemical symbol for water?",
    "Who painted the famous artwork 'Mona Lisa'?",
    "Which country is known as the 'Land of the Rising Sun'?",
    "What is the largest mammal on Earth?",
    "Which gas do plants absorb during photosynthesis?",
    "Who was the first woman to fly solo across the Atlantic Ocean?",
    "Which famous scientist developed the theory of relativity?"
];

const options = [
    ["Rome", "Paris", "Madrid", "Berlin"],
    ["William Shakespeare", "Oscar Wilde", "Jane Austen", "Charles Dickens"],
    ["Jupiter", "Venus", "Mars", "Saturn"],
    ["CH4", "CO2", "O2", "H20"],
    ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
    ["China", "Japan", "South Korea", "Thailand"],
    ["Girraffe", "African elephant", "Blue whale", "Polar bear"],
    ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    ["Amelia Earhart", "Bassie Coleman", "Harriet Quimby", "Valentina Tereshkova"],
    ["Albert Einstien", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"]
];

const correctOptionsIndex = [1, 0, 2, 3, 0, 1, 2, 1, 0, 0];

const questionSpace = document.getElementById("question");
const option1Space = document.getElementById("option1Val");
const option2Space = document.getElementById("option2Val");
const option3Space = document.getElementById("option3Val");
const option4Space = document.getElementById("option4Val");
const nextButton = document.getElementById('nextBtn');

let score = 0;

function generateQuestion(number){
    //Function to generate questions on the screen.
    questionSpace.textContent = questions[number];
    option1Space.textContent = options[number][0];
    option2Space.textContent = options[number][1];
    option3Space.textContent = options[number][2];
    option4Space.textContent = options[number][3];
}

function insertCurrentValues(index){
    //Function to insert values in the input tag.
    option1Space.setAttribute('value', `${options[index][0]}`);
    option2Space.setAttribute('value', `${options[index][1]}`);
    option3Space.setAttribute('value', `${options[index][2]}`);
    option4Space.setAttribute('value', `${options[index][3]}`);
}

function checkSelectedOption(){
    //Function to check if the user selected an option of not.
    const radios = document.querySelectorAll('input[name="game-options"]');

    for(const radio of radios){
        if(radio.checked){
            return true;
        }
    }
    return false;
}

function verifySelectedOption(number){
    //Function to check if the user selected correct option.
    const radios = document.querySelectorAll('input[name="game-options"]');
    let selectedValue = null;

    for(const radio of radios){
        if(radio.checked){
            selectedValue = radio.value;
        }
    }

    const correctOption = options[number][correctOptionsIndex[number]];
    if(correctOption === selectedValue){
        score++;
    }
}

let startingIndex = 0;

nextButton.addEventListener('click', function(){
    if(startingIndex < 10){
        generateQuestion(startingIndex);
        insertCurrentValues(startingIndex);
        if(checkSelectedOption()){
            verifySelectedOption(startingIndex);
            startingIndex++;
        }
        else{
            alert("You have to select an option.");
        }
    }
})

//Below codes are for initial executions.
generateQuestion(0);
insertCurrentValues(0);
if(checkSelectedOption()){
    verifySelectedOption(0);
    startingIndex = 1;
}
else{
    alert("You have to select an option.");
}