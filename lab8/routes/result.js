const express = require("express");
const router = express.Router();
const data = require("../data");
const checker = data.palindrome;

router.post("/",async (req, res) => {
	if (req.body['phrase']) {
        const result = checker.palindrome(req.body['phrase']);
		if(result == true){
            res.render("result", {title: "Result!", text: req.body['phrase'], result: result, class: "success"});
        }
		else{
            res.render("result", {title: "Result!", text: req.body['phrase'], result: result, class: "failure"});
        }
	} else {
		res.status(400).render("error", {title: "Error", description: "No text entered", class: "error"});
	}
});

router.get("/", async(req, res) => {
	res.status(400).render("error", {title: "Error"});
});

module.exports = router;