class CalculateAge { }

CalculateAge.prototype.getObject = jest.fn(() => {
  return {
    years: 20,
    months: 4,
    days: 10
  };
});

module.exports = CalculateAge;
