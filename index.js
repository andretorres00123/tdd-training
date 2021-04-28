const fizzBuzz = (initialNumber = 1, lastValue = 100) => {
  const lista = [];

  for (i = initialNumber; i < lastValue + 1; i++) {
    let value = '';
    if (i % 3 === 0) {
      value = 'Fizz';
    }
    if (i % 5 === 0) {
      value += 'Buzz';
    }
    lista.push(value ? value : i);
  }
  return lista;
};

console.log(fizzBuzz());

module.exports = fizzBuzz;