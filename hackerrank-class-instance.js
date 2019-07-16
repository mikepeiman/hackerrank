// Objective
// In this challenge, we're going to learn about the difference between a class and an instance; because this is an Object Oriented concept, it's only enabled in certain languages. Check out the Tutorial tab for learning materials and an instructional video!

// Task
// Write a Person class with an instance variable, , and a constructor that takes an integer, , as a parameter. The constructor must assign  to  after confirming the argument passed as  is not negative; if a negative argument is passed as , the constructor should set  to  and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:

// yearPasses() should increase the  instance variable by .
// amIOld() should perform the following conditional actions:
// If , print You are young..
// If  and , print You are a teenager..
// Otherwise, print You are old..
// To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it all quite yet!

function Person(initialAge) {
  this.age = initialAge
  // Add some more code to run some checks on initialAge
  if(initialAge <= 0) {
    console.log("Age is not valid, setting age to 0.")
    this.age = 0 
  }
  this.amIOld = function() {
    // Do some computations in here and print out the correct statement to the console
    if (this.age >= 18) {
      console.log("You are old.");
    } else if (this.age >= 13 && this.age < 18) {
      console.log("You are a teenager.");
    } else if (this.age < 13) {
      console.log("You are young.");
    }
  };
  this.yearPasses = function() {
    this.age++;
  };
}

function main() {
  var ages = [0, 10, 14, 16];
  var T = 4;
  for (i = 0; i < T; i++) {
    
    var age = ages[i];
    console.log(i,'in main(), age:', age)
    var p = new Person(age);
    p.amIOld();
    for (j = 0; j < 3; j++) {
      p.yearPasses();
    }
    p.amIOld();
    console.log("");
  }
}

main();
// Success!
