const madLibrary = {
    pluralNoun1: "bears",
    adjective1: "pretty",
    noun: "street",
    typeOfFood: "mexican",
    articleOfClothing: "dickey",
    verbEndingIning: "wallowing",
    pluralNoun2: "trees",
    pluralNoun3: "lasers",
    numberVal: "113",
    celebrity: "Taylor Swift",
    color: "golden rod",
    verbEndingIning2: "licking",
    typeOfFood: "Italian sweets",
    pluralNoun: "concrete shoes",
    adjective2: "gloomy",
    adjective3: "claustrophobic"
}

function populateStorage() {
    // convert to string
    const dbObjToString = JSON.stringify(madLibrary);
    localStorage.setItem('madLibrary', dbObjToString);
}

populateStorage();

function getDb() {
    const db = localStorage.setItem('madLibrary');
    //parse to js object
    const parseDB = JSON.parse(db);
}

window.onload = function writeMadLib() {

const database = localStorage.getItem('madLibrary');

const db = JSON.parse(database);
document.getElementById("para").innerHTML = `Would it surprise you to learn that the most majestic ${db.pluralNoun} in the world eat garbage?
    Well, they do! Everything from ${db.adjective1} soda cans to ${db.noun}-stained ${db.typeOfFood} boxes to used ${db.articleOfClothing} - and more!
    Some have been spotted ${db.verbEndingIning} dumpsters and then using their long ${db.pluralNoun} to spear as many bags of ${db.pluralNoun} as they can before being caught. According to an interview with the ${db.numberVal} Minutes News, ${db.celebrity} once came home to
    find a/an ${db.color} unicorn ${db.verbEndingIning} up in the recycling bin. The poor thing had mistaken leftover ${db.typeOfFood} for
    dried up ${db.pluralNoun}. "It was a/an ${db.adjective} minstake. I am a good cook!`;
}
