import Course from "./course.mjs"
import Student from "./student.mjs"
import School from "./school.mjs"
import Person from "./person.mjs"

/*const aimar = new Student("Aimar")
const marten = new Student("Marten")
aimar.setId(123455)
marten.setId(554321)

const math = new Course("Math")
const english = new Course("English")

const voco = new School("VOCO")
voco.addCourse(math)
voco.addCourse(english)
voco.addStudent(aimar)
voco.addStudent(marten)
voco.addStudentGrade(aimar, math, 5)
voco.addStudentGrade(aimar, english, 5)
voco.addStudentGrade(marten, english, 5)
voco.addStudentGrade(marten, math, 4)

aimar.getGrades()
marten.getGrades()

aimar.getAverageGrade()
marten.getAverageGrade()

math.getAverageGrade()
english.getAverageGrade()

voco.getStudents()

math.getGrades()*/

const school = new School("Awesome School")
const student1 = new Student("John Smith")
student1.setDateOfBirth(1995)
const student2 = new Student("Mary Lee")
student2.setDateOfBirth(2000)

school.addStudent(student1)
school.addStudent(student2)

//we cannot add one student twice
school.addStudent(student1)

console.log(school.getStudents().length)  // 2

const course1 = new Course("Math")
const course2 = new Course("Physics")

school.addCourse(course1)
school.addCourse(course2)

console.log(school)

//we cannot add one course twice
school.addCourse(course1)

console.log(school.getCourses().length) // 2

school.addStudentGrade(student1, course1, 4)
school.addStudentGrade(student1, course2, 5)
school.addStudentGrade(student2, course1, 5)

console.log(student1)
console.log(student2)

const student3 = new Student("Cocoo Turner")
student3.setDateOfBirth(2000)

//cannot add grades to the student who is not in the school
school.addStudentGrade(student3, course1, 5)

console.log(student3.getGrades().length) // 0

school.addStudent(student3)
school.addStudentGrade(student3, course1, 3)
school.addStudentGrade(student3, course2, 5)

console.log(student3.getGrades().length) // 2

console.log(student3.getGrades())  
console.log(course1.getGrades())  

console.log("Students ordered by average grade:")
console.log("Student - avg grade")
console.log("-".repeat(30))
console.log(school.getStudentsOrderedByAverageGrade())
console.log("-".repeat(30))
school.getStudentsOrderedByAverageGrade().forEach((student) => {
    console.log(student.name, student.getAverageGrade())
})

console.log("Course average grades")
school.getCourses().forEach((course) => {
    console.log(course.name, course.getAverageGrade())
})