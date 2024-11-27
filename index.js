// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    const hqLocation = 42;
    return Math.max(street - hqLocation, hqLocation - street);
    // or this works //return Math.abs(street - hqLocation);
}
console.log(distanceFromHqInBlocks(50)); 
console.log(distanceFromHqInBlocks(34)); 

function distanceFromHqInFeet(street) {
    const blocks = distanceFromHqInBlocks(street);
    return blocks * 264;
}
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34)); 

function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
}
console.log(distanceTravelledInFeet(34, 38)); 
console.log(distanceTravelledInFeet(50, 42)); 

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

if (distance <= 400) {
    return 0; 
} else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; 
} else if (distance > 2000 && distance <= 2500) {
    return 25; 
} else {
    return "cannot travel that far"; 
}
}

console.log(calculatesFarePrice(34, 32)); 
console.log(calculatesFarePrice(50, 58)); 
console.log(calculatesFarePrice(34, 24)); 
console.log(calculatesFarePrice(34, 10));


