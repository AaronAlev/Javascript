import Person from "./person.mjs"

export default class Student extends Person {
    constructor(name) {
        super(name)
        this.id = null
        this.grades = []
    }

    setId(id) {
        if(this.id == null) {
            this.id = id
        }
    }

    getId() {
        return this.id
    }

    addGrade(course, grade) {
        this.grades.push([course, grade])
    }

    getGrades() {
        return this.grades
    }

    getAverageGrade() {
        let count = 0
        let total = 0
        for(let i = 0; i < this.grades.length; i++) {
            total += this.grades[i][1]
            count += 1
        }
        return total / count
    }

    description() {
        return this.name
    }
}
