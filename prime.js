function isPrime(n) {
    if (n <= 1) {
        return false;// prime numbers are not less or equal to one
    }
    if (n <= 3) {
        return true;//2 and 3 are prime numbers
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;//it checks if the given n is divisible by 2 or 3 without a remainder. If the remainder is 0 the number is not a prime number  
    }
    let i = 5;// this is because the earlier numbers have already been handled above
    while (i * i <= n) {
        if (n % i === 0 || num % (i + 2) === 0){//we check whether n is either divisible by i or by 1+2 {
            return false;
        }
        i += 6;//we add i by 6
    }
    return true;// If none of the conditions in the loop are met, we conclude that the number is prime 
}

function filterPrimes(arr) {
    return arr.filter(n => isPrime(n));
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,12,13,15,17,18,19,23,25];
console.log(filterPrimes(inputArray))//the function is called and output printed
