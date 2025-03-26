// A function that must be called with input, that does the calculations.
export function calculateStartingDistance(userInput) {
    if(userInput === undefined || userInput === null) {
        console.error('userInput has to be provided!');
    }
    
    let initialSwimDistance = (Number(userInput[0]));
    let initialBikeDistance = (Number(userInput[1]));
    let initialRunDistance = (Number(userInput[2]));
    
    console.log(initialSwimDistance, initialBikeDistance, initialRunDistance);
    
    let startingPointSwim = initialSwimDistance * 1.10;
    if (startingPointSwim <= 0) {
        startingPointSwim = (initialSwimDistance + 25) * 4;
        }
    
    let startingPointBike = initialBikeDistance * 1.10;
    if (startingPointBike <= 0) {
        startingPointBike = (initialBikeDistance + 1) * 1.10;
        }
    
    let startingPointRun = initialRunDistance * 1.10;
    if (startingPointRun <= 0) {
        startingPointRun = (initialRunDistance + 1) * 1.10;
        }
    //added .toFixed to take the calculation and truncate to one decimal place
    //used separate console.log because swim is in yards, bike and run are in miles
    let userStartingPoint = [startingPointSwim.toFixed(1), startingPointBike.toFixed(1), startingPointRun.toFixed(1)];
    console.log(`Your week 1 starting Swim distance is: ${userStartingPoint[0]} yards`);
    console.log(`Your week 1 starting distance is: ${userStartingPoint[1]} miles in Bike, and ${userStartingPoint[1]} miles in Run`);

    return userStartingPoint;

}

