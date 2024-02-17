

// Question 2
let Name = "moheen"
console.log(`hello ${Name}, would you like to learn some Python today?`);


// Question 3
console.log(Name.toLowerCase(),Name.toUpperCase(),Name.charAt(0).toUpperCase()+Name.substr(1).toLowerCase());


// Question 4
console.log("Mahatma Gandhi once said, “Live as if you were to die tomorrow. learn as if you were to live forever”");

// Question 5
let famous_person="Mahatma Gandhi"
let message="Live as if you were to die tomorrow. learn as if you were to live forever"
console.log(`${famous_person} once said, “${message}”`);


// Question 6
let name2="\t Moheen "
console.log("Name with spaces=>",name2,"after removing whitespaces=>",name2.trim());


// Question 7
console.log(4+4);
console.log(2*4);
console.log(10-2);
console.log(24/3);



// Question 9
let favouriteNumber=12
console.log("My Favourite number is =>",favouriteNumber);




// Question 10
// Moheen Sajjad 17/02/2024
// in this code i have made a simple calculator like functionality in which i perform add, sub, mul and divide
console.log(4+4);
console.log(2*4);
console.log(10-2);
console.log(24/3);

// i this code i have simply print the famous quotation by mahatma gandhi
console.log("Mahatma Gandhi once said, “Live as if you were to die tomorrow. learn as if you were to live forever”");



// Question 11
let names = ["bilal","hamza","areeb"]
for(let i=0;i<=2;i++){
    console.log(names[i]);
}


// Question 12
for(let i=0;i<=2;i++){
    console.log(`GoodMorning ${names[i]} how are you?`);
}


// Question 13
let vehiclesNames=['Lamborghini',"Ferrari","Bugatti"]
vehiclesNames.forEach((name)=>console.log(`i would like to own a ${name} car`))


// Question 14
let guests = ["Afzal","Noman","Ali Ahmed"]
guests.forEach((name)=>console.log(`Hello ${name} how are you? i would like to invite you for dinner`))



// Question 15
let removeGuest="Noman"
let newGuest = "Moheen Sajjad"
guests= guests.map((guest)=>{
    if(guest===removeGuest){
        return newGuest
    }else{
        return guest
    }
})
guests.forEach((name)=>console.log(`Hello ${name} how are you? i would like to invite you for dinner`))
console.log("we have found a bigger dinner table");


// Question 16
let newguestsList=["Hamza","Adnan","Kamran"]
guests.unshift(newguestsList[0])
guests.splice(2,0,newguestsList[1])
guests.push(newguestsList[2])
guests.forEach((name)=>console.log(`Hello ${name} join us for dinner`))

console.log("soryy we can only invite two people for dinner");


// Question 17
while(guests.length>2){
    let name =guests.pop()
    console.log(`sorry ${name} you are not invited for the dinner`);
}
console.log(guests);
guests.forEach((name)=>console.log(`Hello ${name} you are invited for dinner`))
guests=[]
console.log(guests);




// Question 18
let locations=["Germany","London","Turkey","NewYork","Switzerland"]
console.log("Original array",locations);
console.log("Sorted array",[...locations].sort());
console.log("original array",locations);
console.log("Reverse Aplhabetical order",[...locations].sort().reverse());
console.log("original array",locations);
locations.reverse()
console.log("Array is reversed",locations);
locations.reverse()
console.log("Array is again reversed",locations);
locations.sort()
console.log("Sorted Array",locations);
locations.reverse()
console.log("Array is reversed",locations);



// Question 19
console.log(`I am inviting ${guests.length} persons to the dinner`);



// Question 20
let countries:string[]=["Germany","London","Turkey","NewYork","Switzerland"]
console.log("famous countries are ",countries);




// Question 21
let student={
    name:"Moheen Sajjad",
    sid:12345,
    age:20
}

console.log(student);


// Question 22
// this will cause an index error because the index 8 do not exist
countries[8]




// Question 23
let age=20
let college = 'kiet'
let degree='bscs'
let marks=21
console.log("Test 1");
console.log("is 5 > 4 ? I predict True");
console.log(5>4);
console.log("Test2");
console.log("is age > 15 ? I predicat true");
console.log(age>15);
console.log("Test 3");
console.log("is college =='kiet' ? I predict true");
console.log(college=='kiet');
console.log("Test 4");
console.log("is degree =='bscs' ? I predict true");
console.log(degree=='bscs');
console.log("Test 5");
console.log("is marks>=3 ? I predict true");
console.log(marks>=3);
console.log("Test 6");
console.log("is 5 <= 4 ? I predict false");
console.log(5<=4);
console.log("Test 7");
console.log("is age == 15 ? I predicat false");
console.log(age==15);
console.log("Test 8");
console.log("is college =='Paf kiet' ? I predict false");
console.log(college=='Paf kiet');
console.log("Test 9");
console.log("is degree =='computer science' ? I predict false");
console.log(degree=='computer science');
console.log("Test 10");
console.log("is marks>=30 ? I predict false");
console.log(marks>=30);






// Question 24
console.log("is college =='kiet' ? I predict true");
console.log(college=='kiet');
console.log("is college !='kiet' ? I predict false");
console.log(college!='kiet');
console.log("is kiet in lowercase? I predict true");
console.log(college.toLocaleLowerCase()===college);
let number=10
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
console.log("Is 'Germany' in the countries array? I predict true");
console.log(countries.includes('Germany'));
console.log("Is 'Pakistan' in the countries array? I predict true");
console.log(countries.includes('Pakistan'));






// Question 25
let alien_color='Green'
if(alien_color=='Green') console.log("player earned 5 points");
if(alien_color=='Blue') console.log("player earned 10 points");





// Question 26
if(alien_color=="Green") {
    console.log("PLlayer earned 5 points");
}
else {
    console.log("player earned 10 points");
}

if(alien_color=="red") {
    console.log("PLlayer earned 5 points");
}
else {
    console.log("player earned 10 points");
}




// Question 27

if(alien_color=="Green"){
    console.log("PLlayer earned 5 points");
}else if(alien_color=="Yellow"){
    console.log("player earned 10 points");
}else if(alien_color=="red"){
    console.log("player earned 15 points");
}else{
    console.log("player earned nothing");
}

alien_color="Yellow"
if(alien_color=="Green"){
    console.log("PLlayer earned 5 points");
}else if(alien_color=="Yellow"){
    console.log("player earned 10 points");
}else if(alien_color=="red"){
    console.log("player earned 15 points");
}else{
    console.log("player earned nothing");
}

alien_color="red"
if(alien_color=="Green"){
    console.log("PLlayer earned 5 points");
}else if(alien_color=="Yellow"){
    console.log("player earned 10 points");
}else if(alien_color=="red"){
    console.log("player earned 15 points");
}else{
    console.log("player earned nothing");
}




// Question 28
let personAge = 20;

if (personAge < 2) {
    console.log("The person is a baby.");
} else if (personAge >= 2 && personAge < 4) {
    console.log("The person is a toddler.");
} else if (personAge >= 4 && personAge < 13) {
    console.log("The person is a kid.");
} else if (personAge >= 13 && personAge < 20) {
    console.log("The person is a teenager.");
} else if (personAge >= 20 && personAge < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}













// Question 29

let favorite_fruits = ["apple", "banana", "mango"];

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
let usernames = ["Moheen Sajjad","Hamza","Admin","Bilal","Areeb"]
usernames.forEach((name)=>{
    if(name=="Admin"){
        console.log(`Hello ${name}, would you like to see a status report?`);
    }
    else{
        console.log(`Hello ${name}, thank you for logging in again.`);
        
    }
})




// Question 31
if (usernames.length === 0) {
    console.log("We need to find some users");
} else {
    usernames.forEach((name)=>{
        if(name=="Admin"){
            console.log(`Hello ${name}, would you like to see a status report?`);
        }
        else{
            console.log(`Hello ${name}, thank you for logging in again.`);
            
        }
    })
}
usernames=[]
if (usernames.length === 0) {
    console.log("We need to find some users");
} else {
    usernames.forEach((name)=>{
        if(name=="Admin"){
            console.log(`Hello ${name}, would you like to see a status report?`);
        }
        else{
            console.log(`Hello ${name}, thank you for logging in again.`);
        }
    })
}





// Question 32
let current_users=["Moheen","ali","HAMZA","rohail","ahmed"]
let new_users=["hamza","kamran","bilal","arsalan","noman"]

for (let new_user of new_users) {
    let error = false;
    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            error = true;
            break;
        }
    }
    if (error) {
        console.log(`${new_user} is already used`);
    } else {
        console.log(`${new_user} is available!`);
    }
}






// Question 33
let numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinal: string;
    if (number === 1) {
        ordinal = "1st";
    } else if (number === 2) {
        ordinal = "2nd";
    } else if (number === 3) {
        ordinal = "3rd";
    } else {
        ordinal = `${number}th`;
    }
    console.log(ordinal);
}





// Question 34
let pizzas= ["Pepperoni", "Margherita", "BBQ Chicken"];

for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("Pizza is my absolute favorite food");
console.log("I can never get enough of its deliciousness");
console.log("Whether its classic pepperoni or BBQ chicken pizza always hits the spot");
console.log("I really love pizza!");





// Question 35
let animals: string[] = ["Dog", "Cat", "Rabbit"];

for (let animal of animals) {
    console.log(animal);
}

for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");





// Question 36
function make_shirt(size: string = "large", message: string = "I love TypeScript"){
    console.log(`Your shirt size is ${size} and the message is: ${message}`);
}

make_shirt("medium", "I am Ironman");



// Question 37
make_shirt();
make_shirt("medium");
make_shirt("small", "I am Ironman");





// Question 38
function describe_city(city: string, country: string = "i dont know") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi", "Pakistan");
describe_city("NewYork", "USA");
describe_city("Paris");





// Question 39
function city_country(city: string, country: string) {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("London", "UK"));









// Question 40
function make_album(artist: string, title: string, tracks?: number) {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2");
let album3 = make_album("Artist3", "Album3");
let album4 = make_album("Artist4", "Album4", 10)
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);








// Question 41
function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicians = ["Hamza","Ali","Arsalan"];
show_magicians(magicians);








// Question 42 and 43
let magiciansCopy=magicians.slice()

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    show_magicians(magicians)
}
make_great(magicians);
show_magicians(magiciansCopy)













// Question 44

function make_sandwich(...items: string[]) {
    console.log("Your sandwich includes all of these items");
    for (let item of items) {
        console.log("=> " +item);
    }
}


make_sandwich("onion", "Cheese", "Sauce", "Tomato");
make_sandwich("Chicken", "Cream", "Mayonnaise");
make_sandwich("Butter", "Beaf");








function cars(manufacturer: string, model: string, ...options: [string, any][]) {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let [key, value] of options) {
        car[key] = value;
    }

    return car;
}

console.log(cars("Honda", "Civic", ["color", "black"]));
