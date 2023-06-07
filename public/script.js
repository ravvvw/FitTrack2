

//my java script serves to add functionality to the different elements of my code 
//the const qualifiers below grab both the workout form and exercise log elements using DOM selection 
const workoutForm = document.getElementById('workoutForm');
const exerciseLog = document.getElementById('exerciseLog');

//using the JSON parse i parse the items from local storage and store the entries with a regular array
//the JSON parse and stringify method was inspired by this youtube video (https://www.youtube.com/watch?v=HY6nPFsADDo)
let workoutData = JSON.parse(localStorage.getItem('workoutData')) || [];

//using this function i can save the users exercises to storage, I added the workout data array and converted to a JSON string using strigify to save the items
function saveExerciseData() {
  localStorage.setItem('workoutData', JSON.stringify (workoutData));
}
//here i show the exercises on the screen and set the exersise inner html to an empty string
    function displayExerciseLog() {
    exerciseLog.innerHTML = '';

//here i loop through the added exercise and add a new list item with the createElement. Setting the text content i show the inputted exersise, and append the added items to the list using appendChild
    for (const exercise of workoutData) {
        const listItem = document.createElement('li');
            listItem.textContent = `Exercise: ${exercise.name} --> Sets: ${exercise.sets} X  Reps: ${exercise.reps}`;


        exerciseLog.appendChild(listItem);
    }
    }

//added event listener to the form and added prevent the submit 
workoutForm.addEventListener('submit', function(event) {
  event.preventDefault();

  //grab the exercise details from the form
    const exerciseName = document.getElementById('exerciseName').value;
    const sets = parseInt(document.getElementById('sets').value);
    const reps = parseInt(document.getElementById('reps').value);


//added this if statement code so the user connot scroll to negative numbers for the sets and reps

  if (sets <= 0 || reps <= 0) {
    return;

  }
// establish a new exercise object 
  const exercise=
   {
    name: exerciseName,
    sets: sets,
    reps: reps,

  };
//push the exercise to the array
  workoutData.push(exercise);
// here i save and show the logged exercises and clear the form 
  saveExerciseData();
  displayExerciseLog();
  exerciseForm.reset();
});

//show the saved exercise section when the user first loads the page
displayExerciseLog();