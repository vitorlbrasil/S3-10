function positions(firstPlace, secondPlace, lastPlace) {
    const arrayPositions = [firstPlace, secondPlace, lastPlace]

    if (arrayPositions[0] === "Daniel") {
        console.log("1º colocado: " + arrayPositions[0])
        console.log("2º colocado: " + arrayPositions[1])
        console.log("3º colocado: " + arrayPositions[2])
    }else if(arrayPositions[1] === "Daniel"){
        let x = arrayPositions[1]
        arrayPositions[1] = arrayPositions[0]
        arrayPositions[0] = x

        console.log("1º colocado: " + arrayPositions[0])
        console.log("2º colocado: " + arrayPositions[1])
        console.log("3º colocado: " + arrayPositions[2])
    }else{
        let x = arrayPositions[2]
        arrayPositions[2] = arrayPositions[1]
        arrayPositions[1] = x

        console.log("1º colocado: " + arrayPositions[0])
        console.log("2º colocado: " + arrayPositions[1])
        console.log("3º colocado: " + arrayPositions[2])
    }

}

let podio = positions("Rafael", "Manoel", "Daniel")
