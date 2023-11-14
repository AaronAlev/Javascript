export default class Student {
    constructor(name) {
        this.name = name
        this.id = null
        this.grades = []
    }

    setId(id) {
        if(this.id == null) {
            this.id = id
        }
    }

    getId() {
        console.log(this.id)
    }

    addGrade(course, grade) {
        this.grades.push([course, grade])
    }

    getGrades() {
        console.log(this.name + "'s grades:")
        for(let i = 0; i < this.grades.length; i++){
            console.log(this.grades[i][1] + " in " + this.grades[i][0].name)
        }
    }

    getAverageGrade() {
        let count = 0
        let total = 0
        for(let i = 0; i < this.grades.length; i++) {
            total += this.grades[i][1]
            count += 1
        }
        console.log("Average grade for " + this.name + " is " + total / count)
    }

    description() {
        this.name
    }
}
