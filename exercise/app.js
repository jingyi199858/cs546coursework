const dic = require("./dictionary")

try {
    console.log(dic.lookupDefinition("programming"))
}catch (error){
    console.log(error)
}

try {
    console.log(dic.lookupDefinition("c++"))
}catch (error){
    console.log(error)
}
try {
    console.log(dic.lookupDefinition("java"))
}catch (error){
    console.log(error)
}

try {
    console.log(dic.lookupDefinition("python"))
}catch (error){
    console.log(error)
}

try{
    console.log(dic.getWord("The action or process of writing computer programs."))
}catch (error){
    console.log(error)
}

try{
    console.log(dic.getWord("C++ is fast."))
}catch (error){
    console.log(error)
}

try{
    console.log(dic.getWord("Java is server concetrated"))
}catch (error){
    console.log(error)
}

try{
    console.log(dic.getWord("Python is easy"))
}catch (error){
    console.log(error)
}