const person = {
    name: 'Mr.Bean',
    age: 45,
    email: 'mr.bean@gmail.com',
    hobbies: ['Silly', 'Stupid'],
    address: {
        city: 'London',
        country: 'Britain'
    },
    printHobbies: function(){
        this.hobbies.forEach(function(hobbie){
            console.log(hobbie)
        })
    },
    returnAddress: function(){
        for(addressKey in this.address){
            console.log(this.address[addressKey])
        }
    }
}

let val = person.name
person.printHobbies()
person.returnAddress()
// console.log(val)