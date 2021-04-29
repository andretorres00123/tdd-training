const UserController = require('./users');
const CalculateAge = require('calculate-age');
const UserRepo = require('../db');
jest.mock('../db');

const mockUserRepo = new UserRepo('test://localhost');

describe('UserController', () => {
  let instance;

  beforeAll(() => {
    instance = new UserController(mockUserRepo);
  });

  describe('constructor()', () => {
    test('should be the expected instance of UserController', () => {
      expect(instance instanceof UserController).toEqual(true);
      expect(instance.userRepo).toEqual(mockUserRepo);
    });
  });

  describe('createUser()', () => {
    let result;

    test('should returned status be completed', async () => {
      jest.spyOn(instance, 'isAuthorized').mockReturnValueOnce(true);
      result = await instance.createUser({});
      expect(result.status).toEqual('completed');
    });

    describe('when the requester is not authorized', () => {
      test('should returned status be forbbiden', async () => {
        jest.spyOn(instance, 'isAuthorized').mockReturnValueOnce(false);
        result = await instance.createUser({});
        expect(result.status).toEqual('forbbiden');
      });
    });

    describe('when the user creation fails', () => {
      test('should return status be failed', async () => {
        jest.spyOn(instance, 'isAuthorized').mockReturnValueOnce(true);
        mockUserRepo.save.mockRejectedValueOnce(new Error('Error connecting whit the database'));
        result = await instance.createUser({ name: 'Andre', email: "test@test.com" });
        expect(result.status).toEqual('failed');
      });
    });
  });

  describe('isAuthorized()', () => {
    test('should return true if the requested has role admin', () => {
      const result = instance.isAuthorized({ role: 'Admin' });
      expect(result).toBeTruthy();
    });
    test('should return false if the requested is not role Admin', () => {
      const result = instance.isAuthorized({ role: 'User' });
      expect(result).toBeFalsy();
    })
  });

  describe('calculateAge()', () => {
    test('should return the expected age object', () => {
      const result = instance.calculateAge('2001-01-01');

      expect(result).toEqual({
        years: 20,
        months: 4,
        days: 10
      });
    });
  });
});
