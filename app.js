console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for(let i = 0; i <= count; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    let oldEnough ='Congrats ${userName}! you can drive!';
    let tooYoung = "Sorry ${userName}, but you need to wait until you're 16."

    if (age >= 16){
        console.log(oldEnough);
    }
    else {
        console.log(tooYoung);
    }
}

function quadrant(x, y){
    if (x > 0 && y > 0){
        return"Is in Quadrant 1.";
    }
    else if (x < 0 && y > 0){
        return "Is in Quadrant 2.";
    }
    else if (x < 0 && y < 0){
        return "Is in Quadrant 3.";
    }
    else if (x > 0 && y < 0) {
        return "Is in Quadrant 4.";
    }
    else if (x == 0 && y != 0) {
        return "Is on the X axis.";
    }
    else if (x != 0 && y == 0) {
        return "Is on the Y axis.";
    }
    else if (x = 0 && y == 0){
        return "Origin.";
    }
}
console.log(quadrant(0,2));
console.log(quadrant(1,2));
console.log(quadrant(-6,18));

function isATriangle(x, y, z){
    if (x + y <= z){
        return "invalid triangle.";
    }
    else if (x == y == z){
        return "Equilateral triangle";
    }
    else if (x == y != z || x != y == z || x == z != y){
        return "Isosceles triangle";
    }
    else if(x != y != z){
        return "Scalene triangle.";
    }
}
console.log(isATriangle(1,2,2));
console.log(isATriangle(1,1,2));

