//Part 1:1
// Interpolation is the process of evaluating a string literal containing one or more placeholders, 
// yielding a result in which the placeholders are replaced with their corresponding values

//example

let carColor = "blue"; console.log("my car is carColor");

// concatenation is the operation of joining character strings end-to-end. For example, 
//the concatenation of "snow" + "ball" is "snowball"

// example

name = 'john' 
age = 20

console.log ='My name is'+ name + 'and I am' + age + 'years old'

//Part 1:2
// Don’t Repeat Yourself (DRY) 
// Adding additional, unnecessary code to a codebase increases the amount of work required to
// extend and maintain the software in the future.

//Part 1:3
// Declaring a variable is letting your computer know that there is a variable
// this variable could have a value or be empty. assigning a value is actually 
// giving the variable a value. Defining a variable is same as declaring a variable.

//Part 1:4
// We should use cons when we know the value of variable is not going to change 
// otherwise always use let as much as possible to avoid the scope monster

//Part 1:5
// Refers to the directory above another directory. Every directory, except the 
// root directory, lies beneath another directory. The higher directory is called 
//the parent directory Example: 

//part 1:6
// We can use basic unix commands for example -h cd mv mkdir ff cp

//part 1:7
// It helps to quickly call commands without typing it entirely. For example i
// n my home directory there is the directory Downloads. If I want to change 
// into it in a Bash-shell I simply have to enter cd Dow [tab]. After the tab-press 
// the directory name is completed automatically.

//part :2
//1. <
//2. >
//3. ===
//4. <,<
//5. ===, <
//6. !==
//7. ==

//part 3:1

// its a infinit loop as there is no false statement,a Common Way to Make an Endless Loop is that the for statement’s 
// exit condition is always true.

//part 3:2

// no its not because it has a false end statement

//Part 3:3

// i was assuming after running code judt one a but it had AAAAAAAAAAA

//Part 4:1

//Both loops repeat until a condition changes. Each time the loop runs a specific condition is looked for. 
//When the condition occurs or changes (depending on how it is set) the loop will end and the code will move on.
//With a while loop, a condition is set, and the while loop looks to see if that condition is met. If it isn’t, 
//he loop runs, if it is, the loop ends and the code moves on. The condition can be a value, a string, a bool, 
//it just depends on the type of data being looked at and manipulated

//part 4:2
for(let i = 0; i <= 999; i++){
    console.log(i);
 };

//Part 4:3

// 1st part i = 0 
//we are starting at index 0
// 2nd part i < 100 
//Run index upto 100
// 3rd part i++
// increase index by 1

//Part 4:4
for (let i = 999; i > 0; i--){
    console.log('Count down', i);
}
//Part 5

let number = "The value of i is: "

for(let i = 1; i <= 10; i++){
   console.log(number + i + " of 10");
};


