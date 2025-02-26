// Notes for JS Math

// 2 + 2; Output: 4
// 10 - 3; Ouput: 7
// 2 + 2 + 2; Output: 6

// 10 * 3; Output: 30
// 10 / 2; Output: 5
// 2.2 + 2.2; Output: 4.4

// Syntax for Numbers and Math
    // Write it out like normal math.


// Order of Operations
    // the characters are the 'operators'. PEMDAS is followed in JavaScript.
        // 2 + 2
        // 2 - 2
        // 10 * 3
        // 10 / 2

// We can also use brackets to control what gets calculated first.
    // Example: (1 + 1) * 3; Output: 6


// In programming:
    // 2, 3, 4 = integers
    // 2.2, 2.5 = floating point numbers (floats)
    // Important: Computers have a problem working with floats.

// Computers can only store 0s and 1s.
// Humans can count from 0, 1, 2,... 9.
    // For decimals and/or floats, the computer cannot store it properly.
// An example of this would be if we calculate 0.1 + 0.2, the computer would read that as: 0.3000000004.

// How do we round a number in JavaScript?
    // use Math.round();
        // Math.round(2.2); // Output: 2
        // Math.round(2.8); // Output: 3




// Examples:

// Socks cost 10.90 and we have 2 pairs. We also have 1 Basketball, which costs 20.95. Finally, we have 4.99 shipping with the basketball, and FREE shipping with the socks. What is the total price?

    // 10.90 * 2 + 20.95; Output: 42.75 + shipping fee (4.99) =  Output: 47.74


// We have 1 basketball, which costs 20.95 and 2 t-shirts, which is 7.99 times 2.
    // Output: 20.95 + 7.99 * 2 = 36.93
// What if we wanted to calculate the cost of a 10% tax?
    // (20.95 + 7.99 * 2) * 0.10; Output: 3.693


// Examples: 

    // 20.95 + 7.99; // Output: 28.93999999999998
        // How do we avoid this problem?
            // Best practice when calculating money is to calculate in cents instead of dollars.
    // 2095 + 799; // Output: 2894.
        // To convert back to dollars:
            // (2095 + 799) / 100 // Output: 28.94


// Example with Math.round() (converted into cents)

    // ((2095 + 799) * 0.10) / 100 and then divide by 100 to convert to dollars.
    // Output: 289.40003 / 100
    // Output: 2.894

// With Math.round(); 
    // Math.round((2095 + 799) * 0.10); Output: 289
    // Math.round((2095 + 799) * 0.10) / 100; Output: 2.89

// let number = 4.4;
// let roundedNumber = Math.round(number);
// console.log(roundedNumber); Output: 4