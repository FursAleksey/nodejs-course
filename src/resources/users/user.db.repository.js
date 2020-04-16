const User = require('./user.model');

/**
 * @returns {Promise<[]>}
 */
function getAll() {
  return User.find({});
}

/**
 * @param {object<User>} user
 * @returns {Promise<User>}
 */
function createUser(user) {
  return User.create(user);
}

/**
 * @param {string} id
 * @returns {Promise<Promise<*>|*>}
 */
function getUserById(id) {
  return User.findById(id);
}

/**
 * @param {object<User>} user
 * @param {object} newData
 * @returns {Promise<void>}
 */
function updateUser(user, newData) {
  return User.updateOne(user, newData);
}

/**
 * @param {object<User>} user
 * @returns {Promise<void>}
 */
function deleteUser(user) {
  User.findOneAndDelete(user);
}

module.exports = {
  getAll,
  createUser,
  getUserById,
  deleteUser,
  updateUser
};