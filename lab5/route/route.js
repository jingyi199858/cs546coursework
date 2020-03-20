const express = require("express")
const app = express.Router();

let about_me = {
    "name": "Yi Jing",
    "cwid": "10419223",
    "biography": "My name is Yi Jing and I am currently a senior undergraduate student with computer sicence major.\n My major programing language is Java and I'm interested in area of Software Engineering and Web grogramming. ",
    "favoriteShows": ["Conan", "NBA", "South Park", "BBC news"],
    "hobbies": ["Soccer", "Playing guitar", "Watching Movie"]
}

let a_story = {
    "storyTitle": "Legend of Acrius",
    "story": "That really is the entire myth. A Cabal named Acrius desires the sun, and he takes it and becomes the first Emperor of the Cabal. Other scholars have already noted the parallels and differences with our own ancient Earth myth of Icarus, which famously has a far more humbling ending.\nI am more interested in how Cabal leaders throughout history have deployed this legend as a rhetorical and political justification for conquest. Among the most relevant such figures is Dominus Ghaul himself, who appears to have a personal affinity for the Acrius myth. \nI must also note here that, while linguistic analysis of the Cabal language and its many dialects is incomplete, they do not appear to have a word for the concept of 'hubris.'"
}

let education_of_mine = [
    {
      "schoolName": "Longfellow Middle School",
      "degree": "Middle School",
      "favoriteClass": "P.E.",
      "favoriteMemory": "Singing Country Road Take Me Home with my fellows in Concert band after class"
    },
    {
        "schoolName": "Mclean High School",
        "degree": "High School",
        "favoriteClass": "Percussion Band Trianing ",
        "favoriteMemory": "Homecoming party with my friends"
      },
      {
        "schoolName": "Stevens Institute of Technology",
        "degree": "Bachelor of Science",
        "favoriteClass": "Agile method of software engineering",
        "favoriteMemory": "Went to Casino event with my best friends"
      }
]


app.get("/", (req, res) => {
    try { 
        res.json("This page is home page and it's empty.");
    } catch (error) {
        res.status(500).send();
    }
});

app.get("/about", (req, res) => {
    try {
        res.json(about_me);
    } catch (error){
        res.status(404).send();
    }
});

app.get("/story", (req, res) => {
    try {
        res.json(a_story);
    } catch (error){
        res.status(404).send();
    }
});

app.get("/education", (req, res) => {
    try {
        res.json(education_of_mine);
    } catch (error){
        res.status(404).send();
    }
});

module.exports = app;