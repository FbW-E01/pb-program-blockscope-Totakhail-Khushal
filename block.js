// # On the block

// #### 1. Updater
//     * Depending on the value of a variable(determiner), assign a value to`x`. 
//     - If determiner is less than 0, `x`'s value should be "Less than 0"
//     - If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".

const determiner = 5;
if (determiner < 0) {
    let x = "less then 0"
    console.log(x);
}
else if (determiner >= 0) {
    let x = "greater or equal to 0 "
    console.log(x);
}


// #### 2. New Variables
//     * Depending on the value of the determiner, assign a value to another variable(`updater`) and create another variable.
//     - If determiner is greater of equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message. 
//     - If determiner is less than 0, `updater`'s value should be "Less than 0".

if (determiner >= 0) {
    let update = "greater or equal to 0"
    console.log(update);

    let message = "Positive integer"
    console.log(message);
}


if (determiner < 0) {
    let update = "less then 0"
    console.log(update);
}




//         * ** Question **: What would happen if we tried to print "message" outside of the if statement ? Comment your answer in the js file.


//  if we print message outside it will not show because the brackets are blocking the statment.


// #### 3. Ternary v.s.If statement
//     * When do you use a ternary v.s.an if statement ? Give an example.