const express = require("express");
const router = express.Router();
const users = require("../data/users");
const bcrypt = require('bcryptjs');

router.get("/", (req,res) =>{
    if(req.session.user) {
        print_log(true, req);
        res.redirect("private");
    }else{
        print_log(false, req);
        res.render("login");
    }
    return;
});

router.post("/login", async (req, res) =>{
    let username = req.body.username;
    let password = req.body.password;
    print_log(false, req);
    if(!username){
        res.render("login", {message: "Username invalid", status: false});
        return;
    }
    if(!password){
        res.render("login", {message: "Password invalid", status: false});
        return;
    }
    try{
        if(!(await compare_pass(password, username))){
            res.render("login", {message: "Username or password invalid.", status: false});
            return;
        }else{
            req.session.user = get_users(username); 
            res.cookie("name","auth_cookie");
            res.redirect("private");
            return;
        }
    }catch(e){
        console.log(e);
    }
});

router.get("/private", async (req, res) =>{
    let user = req.session.user;
    if(user){
        print_log(true, req);
        res.render("private", {user});
    }else{
        print_log(false, req);
        res.render("login");
    }
});

router.get("/logout", async (req, res) =>{
    print_log(true, req);
    req.session.destroy();
    res.render("login", {message: "Logged out!"});
    return;
});

function get_users(name){ 
    for(let i = 0; i < users.length; i++){
        if(users[i].username == name){
            return users[i];
        }
    }
}

async function compare_pass(pass, name){  
	let i =0;
    while(i < users.length){
        if(await bcrypt.compare(pass, users[i].hashedPassword) && (name == users[i].username)){
            return true;
		}
		i++;
    }
    return false;
}

function print_log(auth, req){
    let str = "[" + new Date().toGMTString() + "]: " + req.method + " " + req.originalUrl;
    if(auth){
        str += " (Authenticated User)";
    }else{
        str += " (Non-Authenticated User)";
    }
    console.log(str);
    return;
}

module.exports = router;