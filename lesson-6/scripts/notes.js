// What are Booleans?
    // Booleans are another type of value;
        // Two values: True and False

// What is the purpose of Boolean values?
    // a Boolean value represents whether something is True or False.

// We do NOT surround booleans with quotes; because it is not a string.
    // to check for a boolean value, we can use 'typeof'. Ex. console.log(typeof true); output: boolean



// Comparison Operators:

    //  > Greater Than
    //  < Less Than
    //  >= Greater Than or Equal to
    //  <= Less Than or Equal to
    //  === Equal to (== and ===; the double equal tries to convert both values to the same type. the triple equal will look strictly for the same two values). Important: the same rules apply for != and !==.
    //  !== Not Equal to

// If-Statements
    // lets us write multiple groups of code
    // and then decide which code to run


    // When re-assigning a variable, we have to switch from CONST to LET.

// Steps for Rock Paper Scissors * Algorithm
    // When we click a button:
        // 1. Computer randomly selects a move
        // 2. Compare the moves to get the result
        // 3. Display the result in a popup.

// ALWAYS CREATE AN ALGORITHM!!!!


// Math.random(); generates a random number betwen 0 and 1.


// SCOPE: helps us avoid naming conflicts; variables only exist INSIDE the curly brackets, so calling them outside of the brackets will result in an error.


//  Logical Operators
    // && AND OPERATOR; checks if two boolean values are true. console.log(true && true); // Output: true. If one of the boolean values is false, the result would be false.

    // || OR OPERATOR; checks if AT LEAST one side is true. console.log(true || false); // Output: true.

    // ! NOT OPERATOR; flips the current boolean value to true/false. console.log(!true); // Output: false.

// falsy values:
    // false
    // 0
    // '';
    // NaN
    // undefined
    // null

// * Any value that isn't one of these is a truthy value.

// Ternary Operator: true ? 'truthy' : 'falsy'; like an else-if statement. If the value is true, it will pick the first option. If false, it skips over and picks the second.

// Guard Operator: &&; similar to the AND operator.
    // Example: false && value2
    // its impossible for both sides to be truthy, so it stops early, or a 'short circuit evaluation'.
        // Example: false && console.log('hello'); // Output: doesn't run the code, because its a false value, so it guards or blocks the code on the right.

// Default Operator: ||; similar to OR operator.
    // true || value2
        // we already know the result, because the left side is 'truthy'.
        // this also stops early (short-circuits).