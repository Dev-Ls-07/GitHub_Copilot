/**
 * Validates a credit card number using the Luhn algorithm.
 * @param {string} cardNumber - The credit card number as a string.
 * @returns {boolean} - Returns true if the card number is valid, otherwise false.
 */
function validateCreditCard(cardNumber) {
    // Remove all non-digit characters
    const sanitized = cardNumber.replace(/\D/g, '');
    
    let sum = 0;
    let shouldDouble = false;

    // Loop through the digits from right to left
    for (let i = sanitized.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitized[i], 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    // Valid if the sum is a multiple of 10
    return sum % 10 === 0;
}

// Example usage
console.log(validateCreditCard("4532015112830366")); // true
console.log(validateCreditCard("1234567812345670")); // false