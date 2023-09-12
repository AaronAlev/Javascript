const today = new Date()

let val = today

month = today.getMonth()
day = today.getDay()
date = today.getDate()
year = today.getFullYear()
hour = today.getHours()
time = today.getTime()

val = new Date("2023-09-10")
val.setDate(13)
val.setFullYear(2024)

console.log(val)