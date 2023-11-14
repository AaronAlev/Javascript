export default class Course {
    constructor(name) {
        this.grades = []
        this.name = name
    }

    addGrade(student, grade) {
        this.grades.push([student, grade])
    }

    getGrades() {
        console.log("Grades for " + this.name + ":")
        for(let i = 0; i < this.grades.length; i++){
            console.log(this.grades[i][0].name + ": " + this.grades[i][1])
        }
    }

    getAverageGrade() {
        let count = 0
        let total = 0
        for(let i = 0; i < this.grades.length; i++) {
            total += this.grades[i][1]
            count += 1
        }
        console.log("Average grade of " + this.name + " is " + (total / count))
    }

    description() {
        return this.name
    }
}