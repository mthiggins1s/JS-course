// What is a variable?
    // a variable is like a container; we can save a value (number, string, etc.) and use it later.

// we can use a variable wherever we use a value.

// Syntax Rules for Variables

    // let; creates a new variable.
        // we can then give the variable a name. (excluding 'let' as a name. But, we can use let1 or let2, etc.) (We cannot start with a number. Finally, we cannot use special characters, except for $ and _.)

    // to save something in a variable, we just use the equal sign and then the value we want to save. Ex. let variable1 = 3.

    // Reassigning a value to a variable.
        // We don't use let again when assigning a variable. We would get an error.
        // Example: reassigning variable1 = 3 to = 5.
            // let variable1 = 5 ❌
            // variable1 = 5 ✔️

    // variable1 = variable1 + 1;
    // console.log(variable1); // Output: 6
    // This will add 1 to our variable1 = 5, and then reassign variable1 to equal 6.


// Naming conventions in JavaScript:

    // camelCase = cartQuantity
    // PascalCase = CartQuantity
    // kebab-case = cart-quantity (doesnt work in JavaScript; only in HTML, CSS, and file names).
    // snake_case = cart_quantity (not used in JavaScript).


// * 3 Ways to Create Variables

    // 1. use let
    // 2. use const; creates a variable just like let, except we CANNOT change it's value later.
        // we use const because it makes our code safer and easier to understand. When we use it, we know that the value will ALWAYS stay the same. With let, we can change the value whenever we want.

    // *** In best practice, use const by default, and use let when we need to change the variable.

    // we can also use 'typeof' with variables