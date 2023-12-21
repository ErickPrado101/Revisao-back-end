// Função para verificar se um número é primo
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  const sieve = Array(num + 1).fill(true);
  sieve[0] = sieve[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= num; j += i) {
        sieve[j] = false;
      }
    }
  }

  return sieve[num];
};

const numeroTeste = 17;
if (isPrime(numeroTeste)) {
  console.log(`${numeroTeste} é um número primo.`);
} else {
  console.log(`${numeroTeste} não é um número primo.`);
}
