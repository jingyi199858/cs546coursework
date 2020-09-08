(function() {
  const calculatorMethods = {
    palindrome(str) {
      if(!str) throw "No input";
      if(typeof str !== "string") throw "Not string";
      str = str.toLowerCase().replace(/[^a-z]+/g,"");
      return str === str.split("").reverse().join("")
   }
  };

  function palindrome(str) {
    if(!str) throw "No input";
    if(typeof str !== "string") throw "Not string";
    str = str.toLowerCase().replace(/[^a-z]+/g,"");
    return str === str.split("").reverse().join("")
 }

  const staticForm = document.getElementById("static-form");

  if (staticForm) {
    // We can store references to our elements; it's better to
    // store them once rather than re-query the DOM traversal each time
    // that the event runs.
    const firstNumberElement = document.getElementById("number1");

    const errorContainer = document.getElementById("error-container");
    const errorTextElement = errorContainer.getElementsByClassName(
      "text-goes-here"
    )[0];

    const resultContainer = document.getElementById("result-container");

    // We can take advantage of functional scoping; our event listener has access to its outer functional scope
    // This means that these variables are accessible in our callback
    staticForm.addEventListener("submit", event => {
      event.preventDefault();

      try {
        // hide containers by default
        errorContainer.classList.add("hidden");
        resultContainer.classList.add("hidden");

        const firstNumberValue = firstNumberElement.value;

        const result = palindrome(
          firstNumberValue
        );
        let ul = document.getElementById("attempts");
        let li = document.createElement("li");
        if(result){
          li.appendChild(document.createTextNode("Palindrome test for" + " " + "'" + firstNumberValue + "'" + " " + "is" + " " + "Palindrome."));
          li.className = "is-palindrome";
        }else{
          li.appendChild(document.createTextNode("Palindrome test for" + " " + "'" + firstNumberValue + "'" + " " + "is" + " " + "not Palindrome"));
          li.className = "not-palindrome";
        }
        ul.appendChild(li);
        resultContainer.classList.remove("hidden");
      } catch (e) {
        const message = typeof e === "string" ? e : e.message;
        errorTextElement.textContent = e;
        errorContainer.classList.remove("hidden");
      }
    });
  }
})();
