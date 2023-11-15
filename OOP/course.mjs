export default class Course {
    constructor(name) {
        this.grades = []
        this.name = name
    }

    addGrade(student, grade) {
        this.grades.push([student, grade])
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