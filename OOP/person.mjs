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
        return 2023- this.birthYear
    }

    getName() {
        return this.name
    }

    description() {
        return this.name + " on inimene, kes on syndinud " + this.year + ". aastal"
    }
}