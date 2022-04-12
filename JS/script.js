function positions(firstPlace, secondPlace, lastPlace){
    if(firstPlace === "Daniel"){
        return [firstPlace, secondPlace, lastPlace]
    }else if(secondPlace === "Daniel"){
        return [secondPlace, firstPlace, lastPlace]
    }else{
        return [firstPlace, lastPlace, secondPlace]
    }
}

let podio = positions("Manoel", "Daniel", "Rafael")
console.log("1º colocado: " + podio[0])
console.log("2º colocado: " + podio[1])
console.log("3º colocado: " + podio[2])
