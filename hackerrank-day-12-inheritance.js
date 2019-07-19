// Conditions:

// 90-100 = O
// 80-90 = E
// 70-80 = A
// 55-70 = P
// 40-55 = D
// < 40 = T

// Code for hackerRank below:
// ******************************************************************
// class Student extends Person {
//   /*	
//   *   Class Constructor
//   *   
//   *   @param firstName - A string denoting the Person's first name.
//   *   @param lastName - A string denoting the Person's last name.
//   *   @param id - An integer denoting the Person's ID number.
//   *   @param scores - An array of integers denoting the Person's test scores.
//   */
//   // Write your constructor here
//   constructor(fName, lName, id, scores) {
//       super(fName, lName, id, scores) 
//       this.fName = fName
//       this.lName = lName
//       this.id = id
//       this.scores = scores
//   }



//   /*	
//   *   Method Name: calculate
//   *   @return A character denoting the grade.
//   */
//   // Write your method here
//   calculate() {
//       let avg = this.scores.reduce((a,b) => a + b, 0) / this.scores.length
//       if (avg >= 90) {
//           return 'O'
//       } else if (avg >= 80) {
//           return 'E'
//       } else if (avg >= 70) {
//           return 'A'
//       } else if (avg >= 55) {
//           return 'P'
//       } else if (avg >= 40) {
//           return 'D'
//       } else {
//           return 'T'
//       }
//   }   
// }

// functioning test code below:
// **************************************************************

  let scores = [80, 100]
  function calculate(scores) {
      let avg = scores.reduce((a,b) => a + b, 0) / scores.length
      if (avg >= 90) {
        return 'O'
      } else if (avg >= 80) {
        return 'E'
      } else if (avg >= 70) {
        return 'A'
      } else if (avg >= 55) {
        return 'P'
      } else if (avg >= 40) {
        return 'D'
      } else {
        return 'T'
      }
  }
  
console.log(calculate(scores))

// }