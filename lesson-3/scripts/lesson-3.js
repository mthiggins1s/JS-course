// Notes for Strings ('strings');

    // strings = text.

// 'hello' <- this is a string, and it represents hello.

// Syntax Rules for Strings

    // to create a string, you just write some text surrounded by single quotes.
        // 'hello'.
    // you can also add strings together.
        // 'some' + 'text'; Output: 'sometext'.

    // Concatenation -> is when we add strings together.

    // we are able to check what type of value something is with 'typeof'.
        // Example: typeof 2; // Output: 'number'
        // Example: typeof 'hello'; // Output: 'string'.
    
    // What if we add a string and a number together.
        // Example: 'hello' + 3; // Output: hello3.
    // When we add a string and number together, JS will auto-convert the number into a string, and then combines them together. This is called 'type coercion' or (automatic type conversion).

// What if we wanted to add a dollar sign to numbers?

    // Example: '$28.94'; ❌
    // Example: '$' + 20.95 + 7.99; // Output: '$20.957.99' ❌
    // Example: '$' + (20.95 + 7.99); // Output: $28.939999 ✔️
        // '$' + (2095 + 799) / 100; // Output: '$28.94' ✔️

    // Strings follow the same order of operations as numbers, brackets are ALWAYS calculated firsts, multi/divide next, and add/subt last.

// Finally, what if we wanted to write out and calculate: 'Items(2):  $28.94'?
    // 'Items ('+ (1 + 1) + '): $' + (2095 + 799) / 100; // Output: 'Items(2): $28.94'.

// What if we want to display this in a popup?
    // alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100); // Output: Items (2): $28.94 being displayed in a popup.


// There are three ways to create strings.

// 1. '...' // Output: 'hello' // Recommended

// 2. "..." // Output: "hello" // Recommended IF theres a single quote within the string.
    // Example: "I'm learning JavaScript" // Output: I'm learning JavaScript.
    // 'I\'m learning JavaScipt' // Output: "I'm learning JavaScript" the backslash is recognized as empty text.

// 3. \n (new line character)
    // alert('some\ntext'); // Output: in a popup, it is displayed as 'some' it puts text on a new line.
                                                                //    'text'

// 4. `...` (backticks) // Recommended
    // `hello`; Output: 'hello'; strings created with backticks are called 'template strings'

// Features with template strings(` `)
    // Interpolation: lets us insert a value directly into a string.
        // Example: `Items (${1 + 1}): $${(2095 + 799) / 100}` // Output: 'Items (2): $28.94'

// So what should we use to create a string?
    // use '...' by default
    // use `...` if we need interpolation or multi-line strings.