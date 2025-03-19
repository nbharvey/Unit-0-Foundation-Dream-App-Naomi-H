//Dream App I am trying to build with skills from Foundation's Unit 0
//Triathlon Workout Tracker

//Values, Data Types, and Operations
//Psuedocode: Store details about a workout such as the type(text) distance(number) duration(number) and completion status(boolean).
// Storing workout data using different types is from the module values, data types, and operations.
let workoutType = "Run";  // String
let distance = 7;       // Number (miles)
let duration = 45;        // Number (minutes)
let completed = true;     // Boolean

console.log(`Workout: ${workoutType}, Distance: ${distance} miles, Duration: ${duration}
     min`);

//Stringing Characters Together:
//Psuedocode: Store the user's name and a workout plan. Then create a message that combines both.
//String manipulations makes data user friendly by turning variables into readable messages for athletes. This was learned in the stringing characters toether module.
let userName = "Naomi";
let workout = "Bike";
let miles = 20;

console.log(`${userName}, you have a ${miles}-mile ${workout} today!`);// Display a customized message

//Control Structures and Logic:
//Psuedocode: I want to see if a workout was skipped so that the athlete can readjust their weekly schedule easily. First, check if workout was skipped. If skipped adjust the plan, if completed tell the athlete.
//Control structures like this will allow my app to make the decisions. This was practiced in the control structures and logic modules.
let skippedWorkout = true; // Check if a workout was skipped

if (skippedWorkout) {
    console.log("Workout skipped. Adjusting training plan...");
} else {
    console.log("Great job! Workout completed.");
}

//Working with loops and building arrays:
//Psuedocode: Create a list of workouts for the week and loop through each workout to display it.
//Loops help automate reptitive tasks like displaying all of the wokrouts in a week. I learned this in the working with loops module.
//Arrays help organize multiple workouts efficiently and I learned this during the building arrays module.
let weeklyWorkouts = [
    ["Swim", " 1 mile", " 40 minutes"],
    ["Bike", " 20 miles", " 60 minutes"],
    ["Run", " 10 miles", " 50 minutes"]
]; // List of workouts

for (let i = 0; i < weeklyWorkouts.length; i++) {
    console.log(`Workout ${i + 1}: ${weeklyWorkouts[i]}`); // Loop through and display each workout

}

//Using Arrays:
//Psuedocode: Filter teh list of workouts to show only those longer than 5 miles and display the filtered workouts.
//Using arrays means I can manipulate and filter the data to disaply longer mileage days for the athlete. I learned how to use .filiter() in the using arrays module.
let completedWorkouts = weeklyWorkouts.filter(workout => workout.distance > 5);

console.log("Workouts over 5 miles:", completedWorkouts); // Display workouts over 5 miles
