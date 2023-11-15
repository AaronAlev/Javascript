import Student from "./student.mjs"

export default class School {
    constructor(name) {
        this.name = name
        this.students = []
        this.courses = []
        this.newId = 1
    }

    addCourse(course) {
        let inArray = false
        for(let i = 0; i < this.courses.length; i++) {
            if (this.courses[i] == course) {
                inArray = true
            }
        }
        if (inArray == false) {
            this.courses.push(course)
        }
    }

    addStudent(student) {
        let inArray = false
        for(let i = 0; i < this.students.length; i++) {
            if (this.students[i] == student) {
                inArray = true
            }
        }
        if (inArray == false) {
            this.students.push(student)
            if (student.getId() == null) {
                student.setId(this.newId)
                this.newId += 1
            }

        }
    }

    addStudentGrade(student, course, grade) {
        let inArray = false
        for(let i = 0; i < this.students.length; i++) {
            if (this.students[i] == student) {
                inArray = true
            }
        }
        if (inArray == true) {
            student.addGrade(course, grade)
            course.addGrade(student, grade)
        }
    }

    getStudents() {
        return this.students
    }

    getCourses() {
        return this.courses
    }

    getStudentsOrderedByAverageGrade() {
        return this.students.sort((a, b) => b.getAverageGrade() - a.getAverageGrade())
    }
}