// Based on the recommended learning materials from Hackerrank 30-day challenge #11
// https://www.hackerrank.com/challenges/30-2d-arrays/tutorial
// working from this https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript

function Book() {

}

let b = new Book

console.log(b.constructor) // this is not a recommended way to check type, as this method can be overwritten
console.log(b instanceof Book) // instanceof is the reliable way to check type inheritance
console.log({}.constructor === Object)

function Hero(name, level) {
  this.name = name;
  this.level = level;
  this.greet = function() {
    return `Hello ${name}. Your destiny awaits.`
  }
  this.compare = function(otherHero) {
    return compareLevels(this, otherHero)
  }
}

const Kilroy = new Hero("Kilroy", 25)
console.log(Kilroy.greet())

Hero.prototype.checkin = function() {
  return `${this.name}, your level is only ${this.level}. You doing okay?`
}

console.log(Kilroy.checkin())

class Superhero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  greet() {
    return `Hello ${this.name}. Your destiny awaits.`
  }

  compare(otherHero) {
    return compareLevels(this, otherHero)
  }
}

const Jacko = new Superhero("Jacko", 25)
console.log(Jacko.greet())

function compareLevels(firstHero, secondHero) {
  // firstHero.level > secondHero.level ? (`${firstHero.name} is level ${firstHero.level} - greater than ${secondHero.name}!`) : false
  // secondHero.level > firstHero.level ? (`${secondHero.name} is level ${secondHero.level} - greater than ${firstHero.name}!`) : false
  // firstHero.level === secondHero.level ? ('They are equal!') : false
}

console.log(Jacko.compare(Kilroy))
console.log(Kilroy.compare(Jacko))