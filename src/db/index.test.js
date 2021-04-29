const UserRepo = require('./index');

describe('UserRepo', () => {
  describe('constructor()', () => {
    test('should throw an error if no dbUrl is passed', () => {
      expect(() => new UserRepo()).toThrow('No Database URL');
    });
    test('should return the expected instance', () => {
      const userRepo = new UserRepo('mongo://localhost:2710/test');
      expect(userRepo.dbUrl).toEqual('mongo://localhost:2710/test');
    });
  });
});
