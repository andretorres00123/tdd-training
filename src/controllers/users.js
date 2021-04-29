const CalculateAge = require('calculate-age');

class UserController {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  calculateAge(birthDay) {
    return new CalculateAge(birthDay, '2021-04-04').getObject();
  }

  isAuthorized(requester) {
    if (requester.role !== 'Admin') {
      return false;
    }
    return true;
  }

  async createUser(request) {
    const requester = request.requester;

    try {
      if (!this.isAuthorized(requester)) {
        return { status: 'forbbiden' };
      }
      await this.userRepo.save(request);
      return { status: 'completed' };
    } catch (err) {
      return { status: 'failed' };
    }
  }
}

module.exports = UserController;