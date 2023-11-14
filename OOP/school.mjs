export default class School {
    constructor(name) {
        this.name = name
        this.students = []
        this.courses = []
    }

    addCourse(course) {
        if(!(course in this.courses)) {
            this.courses.push(course)
        }
    }

    addStudent(student) {
        if(!(student in this.courses)) {
            this.students.push(student)
        }
    }

    addStudentGrade(student, course, grade) {
        student.addGrade(course, grade)
        course.addGrade(student, grade)
    }

    getStudents() {
        for(let i = 0; i < this.students.length; i++) {
            console.log(this.students[i])
        }
    }

    getCourses() {
        for(let i = 0; i < this.courses.length; i++) {
            console.log(this.courses[i])
        }
    }

    getStudentsOrderedByAverageGrade() {

    }
}