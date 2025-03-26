// A function that must be called with input, that does the calculations.
function calculateStartingDistance(userInput) {
    let initialSwimDistance = (Number(userInput[0]));
    let initialBikeDistance = (Number(userInput[1]));
    let initialRunDistance = (Number(userInput[2]));
    
    console.log(initialSwimDistance, initialBikeDistance, initialRunDistance);
    
    let startingPointSwim = initialSwimDistance * 1.10;
    if (startingPointSwim <= 0) {
        startingPointSwim = (initialSwimDistance + 25) * 4;
        }
    console.log(`Your starting distance for Swim is: ${startingPointSwim} yards`);
    
    
    let startingPointBike = initialBikeDistance * 1.10;
    if (startingPointBike <= 0) {
        startingPointBike = (initialBikeDistance + 1) * 1.10;
        }
    console.log(`Your starting distance for Bike is: ${startingPointBike} miles`);
    
    let startingPointRun = initialRunDistance * 1.10;
    if (startingPointRun <= 0) {
        startingPointRun = (initialRunDistance + 1) * 1.10;
        }
    console.log(`Your starting distance for Run is: ${startingPointRun} miles`);
    
    let userStartingPoint = [startingPointSwim, startingPointBike, startingPointRun];
    return userStartingPoint;
}







/*let workoutType = "Run";  
let distance = 7;       
let duration = 45;       
let completed = true;     

console.log(`Workout: ${workoutType}, Distance: ${distance} miles, Duration: ${duration}
     min`);

let userName = "Naomi";
let workout = "Bike";
let miles = 20;

console.log(`${userName}, you have a ${miles}-mile ${workout} today!`);

let skippedWorkout = true; 
if (skippedWorkout) {
    console.log("Workout skipped. Adjusting training plan...");
} else {
    console.log("Great job! Workout completed.");
}


let weeklyWorkouts = [
    ["Swim", " 1 mile", " 40 minutes"],
    ["Bike", " 20 miles", " 60 minutes"],
    ["Run", " 10 miles", " 50 minutes"]
]; 

for (let i = 0; i < weeklyWorkouts.length; i++) {
    console.log(`Workout ${i + 1}: ${weeklyWorkouts[i]}`); // Loop through and display each workout

}

let completedWorkouts = weeklyWorkouts.filter(workout => workout.distance > 5);

console.log("Workouts over 5 miles:", completedWorkouts); // Display workouts over 5 miles
*/
