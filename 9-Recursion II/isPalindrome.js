// Write a recursive function to check if given string is a palindrome or not
function isPalindrome(string) {
    if (string.length === 0 || string.length === 1) return true

    if (string[0] !== string[string.length - 1]) return false
    return isPalindrome(string.slice(1,-1))
}



// Test
console.log("This input should return 'false", isPalindrome('awesome'))
console.log("This input should return 'false", isPalindrome('foobar'))
console.log("This input should return 'true", isPalindrome('tacocat'))