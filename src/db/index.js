

class UserRepo {
  constructor(dbUrl) {
    if (!dbUrl) {
      throw new Error('No Database URL');
    }
    this.dbUrl = dbUrl;
  }

  save(user) {
    return new Promise((resolve, reject) => {
      if (!user) {
        reject('Error saving user');
      }
      setTimeout(resolve, 1000);
    });
  }

  getUserById(userId) {
    return new Promise((resolve, reject) => {
      if (!userId) {
        reject('No user found');
      }
      setTimeout(() => {
        resolve({ id: 'xyz-123', name: 'Andre', email: 'test@test.com' });
      }, 1000);
    });
  }
}

module.exports = UserRepo;