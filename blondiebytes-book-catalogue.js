// https://www.youtube.com/watch?v=ul0sdBqrivw

class Book {
  constructor(title, pageCount, ISBN) {
  this.title = title
  this.pageCount = pageCount
  this.ISBN = ISBN  
  isCheckedOut = false
  this.dayCheckedOut = null
  }

  getTitle() {
    return this.title
  }

  getPageCount() {
    return this.pageCount
  }

  getISBN() {
    return this.ISBN  
  }

  isItCheckedOut() {
    return isCheckedOut
  }

  dayCheckedOut() {
    return this.dayCheckedOut
  }

  setIsCheckedOut(currentIsCheckedOut, currentDate) {
    this.isCheckedOut = currentIsCheckedOut
    this.dayCheckedOut = new Date()
  }
}