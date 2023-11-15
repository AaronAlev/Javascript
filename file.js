const numbers = [43, 56, 33, 23, 44, 36, 5]
const numbers2 = new Array()

for (let i = 1; i < 6; i++){
    let randomValue = Math.ceil(Math.random() * 100)
    numbers2.push(randomValue)
}

numbers2.forEach((number) => {
    console.log(number)
})

numbers2.sort()

console.log(numbers2)