var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 2
var Name = "moheen";
console.log("hello ".concat(Name, ", would you like to learn some Python today?"));
// Question 3
console.log(Name.toLowerCase(), Name.toUpperCase(), Name.charAt(0).toUpperCase() + Name.substr(1).toLowerCase());
// Question 4
console.log("Mahatma Gandhi once said, “Live as if you were to die tomorrow. learn as if you were to live forever”");
// Question 5
var famous_person = "Mahatma Gandhi";
var message = "Live as if you were to die tomorrow. learn as if you were to live forever";
console.log("".concat(famous_person, " once said, \u201C").concat(message, "\u201D"));
// Question 6
var name2 = "\t Moheen ";
console.log("Name with spaces=>", name2, "after removing whitespaces=>", name2.trim());
// Question 7
console.log(4 + 4);
console.log(2 * 4);
console.log(10 - 2);
console.log(24 / 3);
// Question 9
var favouriteNumber = 12;
console.log("My Favourite number is =>", favouriteNumber);
// Question 10
// Moheen Sajjad 17/02/2024
// in this code i have made a simple calculator like functionality in which i perform add, sub, mul and divide
console.log(4 + 4);
console.log(2 * 4);
console.log(10 - 2);
console.log(24 / 3);
// i this code i have simply print the famous quotation by mahatma gandhi
console.log("Mahatma Gandhi once said, “Live as if you were to die tomorrow. learn as if you were to live forever”");
// Question 11
var names = ["bilal", "hamza", "areeb"];
for (var i = 0; i <= 2; i++) {
    console.log(names[i]);
}
// Question 12
for (var i = 0; i <= 2; i++) {
    console.log("GoodMorning ".concat(names[i], " how are you?"));
}
// Question 13
var vehiclesNames = ['Lamborghini', "Ferrari", "Bugatti"];
vehiclesNames.forEach(function (name) { return console.log("i would like to own a ".concat(name, " car")); });
// Question 14
var guests = ["Afzal", "Noman", "Ali Ahmed"];
guests.forEach(function (name) { return console.log("Hello ".concat(name, " how are you? i would like to invite you for dinner")); });
// Question 15
var removeGuest = "Noman";
var newGuest = "Moheen Sajjad";
guests = guests.map(function (guest) {
    if (guest === removeGuest) {
        return newGuest;
    }
    else {
        return guest;
    }
});
guests.forEach(function (name) { return console.log("Hello ".concat(name, " how are you? i would like to invite you for dinner")); });
console.log("we have found a bigger dinner table");
// Question 16
var newguestsList = ["Hamza", "Adnan", "Kamran"];
guests.unshift(newguestsList[0]);
guests.splice(2, 0, newguestsList[1]);
guests.push(newguestsList[2]);
guests.forEach(function (name) { return console.log("Hello ".concat(name, " join us for dinner")); });
console.log("soryy we can only invite two people for dinner");
// Question 17
while (guests.length > 2) {
    var name_1 = guests.pop();
    console.log("sorry ".concat(name_1, " you are not invited for the dinner"));
}
console.log(guests);
guests.forEach(function (name) { return console.log("Hello ".concat(name, " you are invited for dinner")); });
guests = [];
console.log(guests);
// Question 18
var locations = ["Germany", "London", "Turkey", "NewYork", "Switzerland"];
console.log("Original array", locations);
console.log("Sorted array", __spreadArray([], locations, true).sort());
console.log("original array", locations);
console.log("Reverse Aplhabetical order", __spreadArray([], locations, true).sort().reverse());
console.log("original array", locations);
locations.reverse();
console.log("Array is reversed", locations);
locations.reverse();
console.log("Array is again reversed", locations);
locations.sort();
console.log("Sorted Array", locations);
locations.reverse();
console.log("Array is reversed", locations);
// Question 19
console.log("I am inviting ".concat(guests.length, " persons to the dinner"));
// Question 20
var countries = ["Germany", "London", "Turkey", "NewYork", "Switzerland"];
console.log("famous countries are ", countries);
// Question 21
var student = {
    name: "Moheen Sajjad",
    sid: 12345,
    age: 20
};
console.log(student);
// Question 22
// this will cause an index error because the index 8 do not exist
countries[8];
// Question 23
var age = 20;
var college = 'kiet';
var degree = 'bscs';
var marks = 21;
console.log("Test 1");
console.log("is 5 > 4 ? I predict True");
console.log(5 > 4);
console.log("Test2");
console.log("is age > 15 ? I predicat true");
console.log(age > 15);
console.log("Test 3");
console.log("is college =='kiet' ? I predict true");
console.log(college == 'kiet');
console.log("Test 4");
console.log("is degree =='bscs' ? I predict true");
console.log(degree == 'bscs');
console.log("Test 5");
console.log("is marks>=3 ? I predict true");
console.log(marks >= 3);
console.log("Test 6");
console.log("is 5 <= 4 ? I predict false");
console.log(5 <= 4);
console.log("Test 7");
console.log("is age == 15 ? I predicat false");
console.log(age == 15);
console.log("Test 8");
console.log("is college =='Paf kiet' ? I predict false");
console.log(college == 'Paf kiet');
console.log("Test 9");
console.log("is degree =='computer science' ? I predict false");
console.log(degree == 'computer science');
console.log("Test 10");
console.log("is marks>=30 ? I predict false");
console.log(marks >= 30);
// Question 24
console.log("is college =='kiet' ? I predict true");
console.log(college == 'kiet');
console.log("is college !='kiet' ? I predict false");
console.log(college != 'kiet');
console.log("is kiet in lowercase? I predict true");
console.log(college.toLocaleLowerCase() === college);
var number = 10;
console.log("Is number == 10? I predict true.");
console.log(number == 10);
console.log("Is number > 5? I predict true.");
console.log(number > 5);
console.log("Is number < 20? I predict true.");
console.log(number < 20);
console.log("Is number >= 10? I predict true.");
console.log(number >= 10);
console.log("Is number <= 10? I predict true.");
console.log(number <= 10);
console.log("Is number > 5 and number < 15? I predict true.");
console.log(number > 5 && number < 15);
console.log("Is number > 15 or number < 5? I predict false.");
console.log(number > 15 || number < 5);
console.log("==============================================");
console.log("Is 'Germany' in the countries array? I predict true");
console.log(countries.includes('Germany'));
console.log("Is 'Pakistan' in the countries array? I predict true");
console.log(countries.includes('Pakistan'));
// Question 25
var alien_color = 'Green';
if (alien_color == 'Green')
    console.log("player earned 5 points");
if (alien_color == 'Blue')
    console.log("player earned 10 points");
// Question 26
if (alien_color == "Green") {
    console.log("PLlayer earned 5 points");
}
else {
    console.log("player earned 10 points");
}
if (alien_color == "red") {
    console.log("PLlayer earned 5 points");
}
else {
    console.log("player earned 10 points");
}
// Question 27
if (alien_color == "Green") {
    console.log("PLlayer earned 5 points");
}
else if (alien_color == "Yellow") {
    console.log("player earned 10 points");
}
else if (alien_color == "red") {
    console.log("player earned 15 points");
}
else {
    console.log("player earned nothing");
}
alien_color = "Yellow";
if (alien_color == "Green") {
    console.log("PLlayer earned 5 points");
}
else if (alien_color == "Yellow") {
    console.log("player earned 10 points");
}
else if (alien_color == "red") {
    console.log("player earned 15 points");
}
else {
    console.log("player earned nothing");
}
alien_color = "red";
if (alien_color == "Green") {
    console.log("PLlayer earned 5 points");
}
else if (alien_color == "Yellow") {
    console.log("player earned 10 points");
}
else if (alien_color == "red") {
    console.log("player earned 15 points");
}
else {
    console.log("player earned nothing");
}
// Question 28
var personAge = 20;
if (personAge < 2) {
    console.log("The person is a baby.");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("The person is a toddler.");
}
else if (personAge >= 4 && personAge < 13) {
    console.log("The person is a kid.");
}
else if (personAge >= 13 && personAge < 20) {
    console.log("The person is a teenager.");
}
else if (personAge >= 20 && personAge < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Question 29
var favorite_fruits = ["apple", "banana", "mango"];
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
// Question 30
var usernames = ["Moheen Sajjad", "Hamza", "Admin", "Bilal", "Areeb"];
usernames.forEach(function (name) {
    if (name == "Admin") {
        console.log("Hello ".concat(name, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(name, ", thank you for logging in again."));
    }
});
// Question 31
if (usernames.length === 0) {
    console.log("We need to find some users");
}
else {
    usernames.forEach(function (name) {
        if (name == "Admin") {
            console.log("Hello ".concat(name, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(name, ", thank you for logging in again."));
        }
    });
}
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users");
}
else {
    usernames.forEach(function (name) {
        if (name == "Admin") {
            console.log("Hello ".concat(name, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(name, ", thank you for logging in again."));
        }
    });
}
// Question 32
var current_users = ["Moheen", "ali", "HAMZA", "rohail", "ahmed"];
var new_users = ["hamza", "kamran", "bilal", "arsalan", "noman"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var error = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            error = true;
            break;
        }
    }
    if (error) {
        console.log("".concat(new_user, " is already used"));
    }
    else {
        console.log("".concat(new_user, " is available!"));
    }
}
// Question 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _b = 0, numbers_1 = numbers; _b < numbers_1.length; _b++) {
    var number_1 = numbers_1[_b];
    var ordinal = void 0;
    if (number_1 === 1) {
        ordinal = "1st";
    }
    else if (number_1 === 2) {
        ordinal = "2nd";
    }
    else if (number_1 === 3) {
        ordinal = "3rd";
    }
    else {
        ordinal = "".concat(number_1, "th");
    }
    console.log(ordinal);
}
// Question 34
var pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
for (var _c = 0, pizzas_1 = pizzas; _c < pizzas_1.length; _c++) {
    var pizza = pizzas_1[_c];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("Pizza is my absolute favorite food");
console.log("I can never get enough of its deliciousness");
console.log("Whether its classic pepperoni or BBQ chicken pizza always hits the spot");
console.log("I really love pizza!");
// Question 35
var animals = ["Dog", "Cat", "Rabbit"];
for (var _d = 0, animals_1 = animals; _d < animals_1.length; _d++) {
    var animal = animals_1[_d];
    console.log(animal);
}
for (var _e = 0, animals_2 = animals; _e < animals_2.length; _e++) {
    var animal = animals_2[_e];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
// Question 36
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Your shirt size is ".concat(size, " and the message is: ").concat(message));
}
make_shirt("medium", "I am Ironman");
// Question 37
make_shirt();
make_shirt("medium");
make_shirt("small", "I am Ironman");
// Question 38
function describe_city(city, country) {
    if (country === void 0) { country = "i dont know"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi", "Pakistan");
describe_city("NewYork", "USA");
describe_city("Paris");
// Question 39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("London", "UK"));
// Question 40
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2");
var album3 = make_album("Artist3", "Album3");
var album4 = make_album("Artist4", "Album4", 10);
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
// Question 41
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ["Hamza", "Ali", "Arsalan"];
show_magicians(magicians);
// Question 42 and 43
var magiciansCopy = magicians.slice();
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    show_magicians(magicians);
}
make_great(magicians);
show_magicians(magiciansCopy);
// Question 44
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Your sandwich includes all of these items");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("=> " + item);
    }
}
make_sandwich("onion", "Cheese", "Sauce", "Tomato");
make_sandwich("Chicken", "Cream", "Mayonnaise");
make_sandwich("Butter", "Beaf");
function cars(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var _b = options_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
console.log(cars("Toyota", "Camry", ["color", "blue"]));
