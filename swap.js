function swapCase(inputString) {// the function is defined to take an input string and return a new string with the case swapped
    let swappedString = "";// the swapped string is initialized as an empty string
    for (let i = 0; i < inputString.length; i++) {// the string is traversed character by character
        let char = inputString[i];// the current character is stored in a variable
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();// toLowerCase is used to convert uppercase to lowercase
        } else if (char === char.toLowerCase()) {// toUpperCase is used to convert lowercase to uppercase
            swappedString += char.toUpperCase();//toUpperCase is used to convert lowercase to uppercase
        } else {
            swappedString += char;// if the character is neither uppercase nor lowercase, it remains unchanged
            //if the character is not a letter, it remains unchanged
        }
    }
    return swappedString;// the swapped string is returned
}
let inputString = "The Quick Brown Fox";// the input string is assigned with this value to test the function
console.log(swapCase(inputString));// the function is called and the output is printed