// What is an Object?
    // an object groups multiple values together.
    // also lets us USE multiple values together.

// Example
    // const product = { // this is an object.
   // name: 'socks',
   // price: 1090,
// };
// console.log(product); // Output: {name: 'socks', price: 1090}

    // Syntax for Objects
        // the name and price are the 'property'.
        // the value associated with the property is a 'property-value' pair.
    // to create an object, we start with a open curley bracket and close with a closing curly bracket.

// an Object is just another type of value, we can save an object inside a variable and we can also console.log an object.


// Algorithm for Rock Paper Scissors

    // When we click a button:
        // Computer randomly selects a move
        // Compare the moves to get the result
            // Update the score // newly added step
        // Display the result in a popup


// Bracket Notation []
    // lets us use properties that dont' work with dot notation
        // console.log(product2['name]);

// What should you use? Dot or Bracket Notation?

    // use Dot Notation, but for properties that don't work, use bracket notation.



// Nested Object
    // an object within an object.


// Method; function inside object.

    // const product2 = {
    //     name: 'shirt',
    //     'delivery-time': '1 day',
    //     rating: { // nested object; object within an object.
    //       stars: 4.5,
    //       count: 87
    //     },
    //     fun: function function1() { // created a function within the object.
    //       console.log('function inside object');
    //     }
    //   };

// Math.round is another example of a method; because MATH is seen in JS as an OBJECT and RANDOM is seen as a    FUNCTION.

// More built-in objects:
    // JSON 
    // localStorage()


// JSON; built-in object --------------- (also do NOT support functions and double quotes)
    // JSON (JavaScript Object Notation)
    // syntax, thats similar to a JS object with LESS features


// JavaScript Object:

    //    {
    //     name: 'shirt',
    //     'delivery-time': '1 day',
    //     rating: { // nested object; object within an object.
    //       stars: 4.5,
    //       count: 87
    //     },
    //     fun: function function1() {
    //       console.log('function inside object');
    //     }
    //   }


// JSON:

//      {
    //     name: 'shirt',
    //     'delivery-time': '1 day',
    //     rating: { 
    //       stars: 4.5,
    //       count: 87
    //     },
    // }

// So why use JSON syntax instead of JavaScript object syntax?
    // JSON syntax can be understood by almost all programming languages, so its more univeral
    // we use JSON when we send data between computers
    // use JSON when we store data (localStorage()).


// Built-in JSON Object

    // Convert a JavaScript Object into JSON (Example on Line 48)

// JSON.parse()
    // Converts a JSON object back into a JavaScript Object

// IMPORTANT: we use JSON.stringify() and JSON.parse() to convert JS objects to JSON and then back into JS objects.


// localStorage()
    // used to save values more permanently
    // variables are temporary, if we refresh the page or close it, al variables are deleted.
    // LOCALSTORAGE ONLY SUPPORTS STRINGS!!!!


// null vs undefined
    // null = intentionally want something to be empty


// auto-boxing (starts like 55)
    // JS automatically wraps the string in a special obejct with the methods of .length and .toUpperCase.

// Examples of what works with AUTO-BOXING

    // 3.0.toString() ✅
    // true.toString() ✅

    // null.property ❌
    // undefined.method() ❌


// Objects are REFERENCES