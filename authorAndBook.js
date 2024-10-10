class Author {
    constructor(name, email, gender) {
        this.name = name
        this.email = email
        this.gender = gender.toLowerCase()
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getGender() {
        return this.gender
    }

    toString() {
        return this.gender === 'male' ? `Mr. ${this.name}` : `Ms. ${this.name}`
    }
}

class Book {
    constructor(title, author, price, quantity) {
        this.title = title
        this.author = author
        this.price = price
        this.quantity = quantity
    }

    getTitle() {
        return this.title
    }

    setTitle(title) {
        this.title = title
    }

    getAuthor() {
        return this.author
    }

    setAuthor(author) {
        this.author = author
    }

    getPrice() {
        return this.price
    }

    setPrice(price) {
        this.price = price
    }

    getQuantity() {
        return this.quantity
    }

    setQuantity(quantity) {
        this.quantity = quantity
    }

    getProfit() {
        return this.price * this.quantity
    }

    toString() {
        return `${this.title} was written by ${this.author}, the price is ${this.price}, and the quantity is ${this.quantity}`
    }
}

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe")
console.log(author1.getGender())
console.log(author1.getName())
console.log(author1.toString())

let book1 = new Book("The Casual Vacancy", author1, 11.70, 100)
console.log(book1.getProfit())
console.log(book1.toString())