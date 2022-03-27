function authHeader() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      // for Node.js Express back-end
      const newLocal = { 'x-access-token': accessToken };
      return newLocal;
    } else {
      return {};
    }
  }
  module.exports = authHeader;