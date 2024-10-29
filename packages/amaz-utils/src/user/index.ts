function getToken() {
  const token = localStorage.getItem("token");
  return token;
}
function setToken(token) {
  localStorage.setItem("token", token);
  return token;
}
function removeToken() {
  localStorage.removeItem("token");
  localStorage.setItem("fromPath", window.location.href);
}

export { removeToken, getToken, setToken };

export default {
  removeToken,
  getToken,
  setToken,
};
