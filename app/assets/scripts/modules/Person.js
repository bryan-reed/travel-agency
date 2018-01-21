function Person(fullName, favoriteColor) {
	this.name = fullName;
	this.favoriteColor = favoriteColor;
	this.greet = function() {
		console.log(`Hello, my name is ${this.name}, and my favorite color is ${this.favoriteColor}`);
	}
}
module.exports = Person;