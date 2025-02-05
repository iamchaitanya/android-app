let num1, num2, startTime, correctAnswer;

// function to generate new numbers and display problem
function generateProblem() {
  num1 = Math.floor(Math.random() * 90) + 10; // generate random double-digit number
  num2 = Math.floor(Math.random() * 90) + 10; // generate random double-digit number
  correctAnswer = num1 + num2;
  document.getElementById("display").innerHTML = `What is ${num1} + ${num2}?`;
  startTime = new Date().getTime(); // record start time
}

// function to check answer and display result
function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer-input").value);
  const endTime = new Date().getTime(); // record end time
  const timeTaken = (endTime - startTime) / 1000; // calculate time taken in seconds
  if (userAnswer === correctAnswer) {
    document.getElementById("result-display").innerHTML = `Correct! Time taken: ${timeTaken} seconds`;
  } else {
    document.getElementById("result-display").innerHTML = `Incorrect. Correct answer was ${correctAnswer}. Time taken: ${timeTaken} seconds`;
  }
  document.getElementById("answer-input").value = ""; // clear input field
  setTimeout(generateProblem, 2000); // generate new problem after 2 seconds
}

// event listener for submit button
document.getElementById("submit-btn").addEventListener("click", checkAnswer);

// generate first problem
generateProblem();
