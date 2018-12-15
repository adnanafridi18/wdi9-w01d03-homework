// easy going 
for (let i = 1; i <= 20; i++){
    console.log(i);
}

// get even 
for(let i = 0; i <= 200; i +=2){
    console.log(i);
 }

 // excited kitten
 //1.
 let meow = "Love me, pet me! HSSSSSSS!";
 for(let i = 0; i <= 20; i++){
    
    console.log(meow);
 }

 //2.
 const bobCat = ["Human!! Why you taking picture of me?", "...the catnip made me do it", "why does the red dot always go away"];
for(let i = 0; i < 20; i++){
    if(i % 2 == 0){
    const randomNumberUptoThree = Math.floor(Math.random()* 3)
    console.log(bobCat[randomNumberUptoThree]);
}
}
 //Fizzbuzz
 
 for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
 }

 //Getting to know you
 const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

//1.
shahzad[0] = "gameboy";
daniel[1] = daniel[1] + 1; 
ryan[2] = "gothamcity";
reuben[2] = "chicago",
jim[2] = "denver", "ny", "paris",



//yell at the ninja turtles
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for(i = 0; i < ninjaTurtles.length; i++){
   console.log(ninjaTurtles[i].toUpperCase()); 
}

//return of the closets
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
//1
const kristynsShoes = kristynsCloset.shift();
  console.log(kristynsCloset);

  for(let i = 0; i < kristynsCloset.length; i++){
}
console.log("WHIRR: Now washing " + kristynsCloset[i]);

// Multiple of 3 and 5

let total = 0;
for (let i = 0; i < 1000; i++){
    if (i % 3 === 0 || i % 5 === 0) {
        total = total + i;
    }
}
