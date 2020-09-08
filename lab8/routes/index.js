const palindromeRoute = require("./palindrome");
const resultRoute = require("./result");

function constructorMethod(app) {
	app.use("/", palindromeRoute);
	app.use("/result", resultRoute);

	app.use("*", (req, res) => {
		res.status(404).json({error: "Route does not exist."});
	});
};

module.exports = constructorMethod;