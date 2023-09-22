let tekst = "50407120224"
let tempid = "002"
id = parseInt(tempid)
console.log(id)


let hospitalID = tekst.slice(7, 10)
console.log(hospitalID)

let first_three = tekst.slice(1, 3)
first_three.concat("20", first_three)
console.log(first_three)

if (tekst[0] == "a", "b"){
    console.log("Yay")
}