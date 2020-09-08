let exportedMethods = {
  palindrome(str) {
    if(!str) throw "No input";
    if(typeof str !== "string") throw "Not string";
    str = str.toLowerCase().replace(/[^a-z]+/g,"");
    return str === str.split("").reverse().join("")
 }
};

module.exports = exportedMethods;
