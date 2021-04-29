const fizzBuzz = require('./index');

describe('FizzBuzz', () => {
  test('should return 1-100 array', () => {
    const result = fizzBuzz();
    expect(result[0]).toEqual(1)
    expect(result[48]).toEqual(49)
    expect(result.length).toEqual(100)
  });
  test('should return Fizz if value on array is multiple of 3', () => {
    const result = fizzBuzz();
    expect(result[5]).toEqual('Fizz')
    expect(result[17]).toEqual('Fizz')
    expect(result[62]).toEqual('Fizz')
  })
  test('should return Buzz if value on array is multiple of 5', () => {
    const result = fizzBuzz();
    expect(result[9]).toEqual('Buzz')
    expect(result[49]).toEqual('Buzz')
    expect(result[99]).toEqual('Buzz')
  });




  test('should return an array which the length should be the same as the receive parameter', () => {
    expect(fizzBuzz(1, 10).length).toEqual(10);
    expect(fizzBuzz(1, 40).length).toEqual(40);
    expect(fizzBuzz(1, 20).length).toEqual(20);
  });
  test('should the first and the last value of the array be the expected values', () => {
    const result = fizzBuzz(4, 14);
    expect(result[0]).toEqual(4);
    expect(result[result.length - 1]).toEqual(14);
  });

  test('should return Whizz if is a prime number', () => {
    const result = fizzBuzz(1, 20);
    expect(result[6]).toEqual('Whizz');
    expect(result[10]).toEqual('Whizz');
    expect(result[12]).toEqual('Whizz');
  });

  test('should return FizzWhizz if value on array is  3 and BuzzWhizz is 5 at the same time', () => {
    const result = fizzBuzz();
    expect(result[2]).toEqual('FizzWhizz');
    expect(result[4]).toEqual('BuzzWhizz');

  });
  test('should throw an error if first parameter is greater than last parameter', () => {
    expect(() => {
      fizzBuzz(10, 1);
    }).toThrow();
    expect(() => {
      fizzBuzz(10, 1);
    }).toThrowError('The initial number should be smaller than last number!');
  });
  test('should throw an error if any parameter is negative', () => {
    expect(() => {
      fizzBuzz(-5, 1);
    }).toThrow();
    expect(() => {
      fizzBuzz(-1, 0);
    }).toThrowError('Negative values not allowed!');
    expect(() => {
      fizzBuzz(-10, -1);
    }).toThrowError('Negative values not allowed!');
  });
});