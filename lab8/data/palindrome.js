let exportedMethods = {
	palindrome(str) {
        str = str.toLowerCase().replace(/[^a-z]+/g,"");
        return str === str.split("").reverse().join("")
     }
}

module.exports = exportedMethods;
