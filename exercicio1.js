function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  const divisors = Array.from({ length: Math.floor(Math.sqrt(number)) - 1 }, (_, index) => index + 2);

  return divisors.every(divisor => number % divisor !== 0);
}

console.log(isPrime(2));   
console.log(isPrime(3));   
console.log(isPrime(4));   
console.log(isPrime(13));  
