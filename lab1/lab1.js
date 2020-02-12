const questionOne = function questionOne(arr) {
    // Implement question 1 here
    // To store the final result
    if(arr.length == 0){
        return 0;
    }
    let result = 0;
    for(let i = 0; i < arr.length;i++){
        result += arr[i] * arr[i];
    }
    return result;
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    if(num <= 1){
        return num;
    }
    return questionTwo(num-1) + questionTwo(num-2);
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    let vowels = "aeiouAEIOU";
    let result = 0;
    let temp;
    for(let i = 0; i < text.length; i++){
        // Get ith character in text
        temp = text.charAt(i);
        if(vowels.indexOf(temp)!= -1){
            result += 1;
        }
    }
    return result;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if(num > 1){
        return num * questionFour(num -1);
    }
    else{
        return 1;
    }
}

module.exports = {
    firstName: "Yi", 
    lastName: "Jing", 
    studentId: "10419223",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};

console.log(questionOne([]))