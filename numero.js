const numbers = []
numbers.push(prompt("Ingresa un número"))
numbers.push(prompt("Ingresa un número"))

if(numbers[0] > 10){
    if(numbers[1] > 100){
        console.log("A")
    }else{
        console.log("B")
    }
}else{
    if(numbers[1] > 1000){
        console.log("C")
    }else{
        console.log("D")
    }
}
console.log(numbers[0])