const palindromeRoutes = require("./palindrome");
const resultRoute = require("./result");

const constructorMethod = app => {
  app.use("/palindrome", palindromeRoutes);
	app.use("/result", resultRoute);

  app.use("*", (req, res) => {
    res.redirect("/palindrome/static");
  });
};

module.exports = constructorMethod;
