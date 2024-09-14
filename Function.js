function divide(dividend, divisor) {
    try {
        // Check if the divisor is zero to prevent division by zero error
        if (divisor === 0) {
            throw new Error("Divisor cannot be zero.");
        }

        // Perform the division
        let result = dividend / divisor;
        console.log("Result: {result}");
    } catch (error) {
        // Catch any errors and print the error message
        console.error("Error: {error.message}");
    } finally {
        // Finally block will run regardless of whether an error occurred
        console.log("Operation done.");
    }
}

// Case 1: Pass (10, 0)
console.log("Case 1: (10, 0)");
divide(10, 0);

// Case 2: Pass (10, 2)
console.log("\nCase 2: (10, 2)");
divide(10, 2);
