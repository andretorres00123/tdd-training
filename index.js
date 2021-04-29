const fizzBuzz = (initialNumber = 1, lastValue = 100) => {
  const lista = [];
  if (initialNumber > lastValue) {
    throw new Error('The initial number should be smaller than last number!');
  }
  if (initialNumber < 0 || lastValue < 0) {
    throw new Error('Negative values not allowed!');
  }
  for (i = initialNumber; i < lastValue + 1; i++) {
    let value = '';
    if (i % 3 === 0) {
      value = 'Fizz';
    }
    if (i % 5 === 0) {
      value += 'Buzz';
    }
    if (isPrime(i)) {
      value += 'Whizz';
    }

    lista.push(value ? value : i);
  }
  return lista;
};

function isPrime(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}

module.exports = fizzBuzz;