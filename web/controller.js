const passwordPolicy = require("./passwordPolicy");

function showLogin(req, res) {
  res.render("login", { error: null });
}

function handleLogin(req, res) {
  const password = req.body.password || "";

  const error = passwordPolicy.validate(password);
  if (error) {
    return res.render("login", { error });
  }

  res.render("welcome", { password });
}

function logout(req, res) {
  res.redirect("/");
}

module.exports = { showLogin, handleLogin, logout };
