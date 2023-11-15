export default class Person {
    constructor(name) {
        this.name = name
    }

    setDateOfBirth(year) {
        this.birthYear = year
    }

    getDateOfBirth() {
        return this.birthYear
    }

    age() {
        const year = new Date()
        return year.getFullYear() - this.birthYear
    }

    getName() {
        return this.name
    }

    description() {
        return this.name + " on inimene, kes on syndinud " + this.birthYear + ". aastal"
    }
}