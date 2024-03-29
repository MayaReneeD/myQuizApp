const myQuestions = [{
  'question': 'WHAT IS THE OFFICE AWARDS NIGHT CALLED?',
  'answers': ["DORKIES", "DUNDIES", "DWEEBIES", "DINGLES"],
  'correct': 1
},
{
  'question': 'WHAT IS THE GIANT POT THAT KEVIN DROPS ALL OVER THE OFFICE FLOOR?',
  'answers': ["GRAVY", "SOUP", "MAC & CHEESE", "CHILI"],
  'correct': 3
},
{
  'question': "HOW LONG HAD JIM AND PAM BEEN DATING BEFORE HE BOUGHT HER ENGAGEMENT RING",
  'answers': ["ONE WEEK", "ONE MONTH", "ONE YEAR", "TWO YEARS"],
  'correct': 0
},
{
  'question': "WHAT DOES MICHAEL CHOOSE AS HIS USERNAME WHEN HE SIGNS UP FOR AN ONLINE DATING SITE?",
  'answers': ["LITTLEKIDLOVER", "IAMTHEBOSS", "DUNDERMIFF", "READYFORMARRIAGE"],
  'correct': 0
},
{
  'question': "WHAT IS ERIN'S REAL FIRST NAME?",
  'answers': ["BRITTANY", "CHRISTINE", "BECCA", "KELLY"],
  'correct': 3
},
{
  'question': "WHICH COUNTRY DOES TOBY MOVE TO WHEN HE LEAVES HIS JOB AT DUNDER MIFLIN ONLY TO RETURN LATER?",
  'answers': ["JAMAICA", "COSTA RICA", "ITALY", "CUBA"],
  'correct': 1
},
{
  'question': "DWIGHT AND ANDY HAVE A DUEL OVER WHICH WOMAN IN THE OFFICE?",
  'answers': ["ANGELA", "ERIN", "KELLY", "MEREDITH"],
  'correct': 0
},
{
  'question': "WHAT IS THE NAME OF THE CAT THAT ANGELA THROWS AT OSCAR DURING THE FIRE DRILL?",
  'answers': ["SPRINKLES", "CUPCAKE", "BANDIT", "TINKERBELL"],
  'correct': 2
},
{
  'question': "WHAT DOES JAN NAME THE BABY SHE HAS VIA SPERM DONOR?",
  'answers': ["AXON", "ALLY", "APPLE", "ASTRID"],
  'correct': 3
},
{
  'question': "HOW MANY KIDS DO PAM AND JIM HAVE?",
  'answers': ["3", "2", "1", "0"],
  'correct': 1
}];

let score = 0;
let current = 0;
$(document).ready(function() {
// start button event listener
$(".start-button").click(function() {
  $('.start-page').hide();
  $('.next').hide();
  $('.questions').show();
  displayQuestion();
  $('.score').text('Current Score: ' + score);
  console.log("Start Quiz button clicked");
});
// next button event listener
$(".next-button").click(function(event) {
  console.log("Next button clicked");
  displayQuestion();
  $('.next').hide();
  $('.submit').show();
});
$(".submit-button").click(function(event) {
  event.preventDefault();
  var selected = $('input.selected');
  //console.log(event);
  if (selected.length) {
    let answer = $('input.selected').attr('id');
    console.log("answer: " + answer);
    checkAnswer(answer);
    $('.next').show();
    $('.submit').hide();
  } else {
    alert('Please select an answer');
  }
});
// retry button click listener
$(".retry-button").click(function() {
  location.reload();
  console.log("Retake button clicked");
});
//click listener to make questions change color on hover
$('div.questions-selector').on('click', 'input', function(event) {
  $('.selected').removeClass();
  $(this).addClass('selected');
  $(this).parent().addClass('selected');
});
});

//FUNCTIONS
function displayQuestion() {
$('.question-number').text('Question Number: ' + (current + 1) + "/10");

if (current < myQuestions.length) {
  let listQuestion = myQuestions[current];
  $('h2').text(listQuestion.question);
  $('div.questions-selector').html('');
  for (let i = 0; i < listQuestion.answers.length; i++) {
    $('div.questions-selector').append(`<div><label 
     for"input${i}">${listQuestion.answers[i]}</label>
      <input type="radio" name="choice" value="0" id = "input${i}"></input></div>`)
  }
} else {
  // show summary that says how many you got correct
  displayScore();
}
}

// function stub to check answer
function checkAnswer(answer) {
let listQuestion = myQuestions[current];

const inputString = "input";
const correctId = inputString.concat(listQuestion.correct);
console.log("correctId: " + correctId);
if (correctId == answer) {
  score++;
} else {
  $('#'+answer).parent().addClass('incorrect');
}
$('#'+correctId).parent().addClass('correct');
$('.score').text('Current Score: ' + score);
current++;
}

//function to display score
function displayScore() {
$('.questions').hide();
$('.end-quiz').show();
$('.end-score').text("Your score: " + score + '/10');
if (score >= 7) {
  $('.comment').text('Nice job, Superfan!');
} else {
  $('.comment').text('Get to binge watching and try again!')
}
};