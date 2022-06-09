let urlMove = "https://pokeapi.co/api/v2/move/" //url de la api que contiene los datos de UN MOVIMIENTO
//lamentablemente, no existe un url para obtener TODOS los movimientos
//como no existe ese llamado, vamos a tener que iterar este llamado, una cantidad de veces que querramos

let moves = [] //array que va a contener las propiedades de todos los movimientos fetcheados

async function fetchMove(id) { //funcion que trae los datos de UN SOLO movimiento
    let response = await fetch(urlMove+id) //lo primero que tiene que hacer la funcion es ESPERAR la carga de un archivo (base de datos)
    let data = await response.json() // espero la transformacion del json
    //console.log(data)
    return data
}

async function fetchMoves() { //funcion que trae los datos de TODOS los movimientos (50)
    for (let i=1; i<=20; i++) { //iteracion de la funcion que me trae los datos de UN SOLO movimiento
        let data = await fetchMove(i) //consumo la api
        moves.push(data) //pusheo los datos en un array
    }
    //console.log(moves)
    let sorted = sortedMoves(moves) //array con los movimientos ordenados por PRECISION
    let filtered = filteredMoves(sorted) //array con los movimientos FILTRADOS por tipo de ataque y ordenados por precision
    createMoveMinMax(sorted)
    createMoves(sorted)
    createProm(filtered)
}

fetchMoves()

function createMove(movesArraysortedByCat,movesArraySortedByAssi) { //funcion que imprime TODOS los movimientos con su nombre/presición/tipo
    let move = "" //creo la variable que va a almacenar TODOS los templates
    movesArray.forEach(everyMove => //recorro el array que entra como parámetro para guardar en cada ciclo el template correspondiente
        move += `
        <tr class="table-light d-flex justify-content-center">
            <td scope="row" class="d-flex justify-content-center align-items-center text-center col-3">${everyMove.name}</th>
            <td scope="row" class="d-flex justify-content-center align-items-center text-center col-2">${everyMove.accuracy}</th>
            <td scope="row" class="d-flex justify-content-center align-items-center text-center col-2">${everyMove.type.name}</th>
        </tr>
        `
        )
    document.querySelector("#accuracyTable").innerHTML += move //imprimo en el selector correspondiente
}

function createMoveMinMax(movesArray) { //funcion que imprime TODOS los movimientos con su nombre/presición/tipo
    let move = "" //creo la variable que va a almacenar TODOS los templates
    movesArray.forEach((everyMove,index) => {//recorro el array que entra como parámetro para guardar en cada ciclo el template correspondiente
        if (index===0) {
            move += `
            <tr class="table-light d-flex justify-content-center">
                <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">MAX</th>
                <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${everyMove.name}</th>
                <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${everyMove.accuracy}</th>
                <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${everyMove.type.name}</th>
            </tr>
            `
        } else if (index===(movesArray.length-1)) {
            move += `
            <tr class="table-light d-flex justify-content-center">
                <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">MIN</th>
                <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${everyMove.name}</th>
                <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${everyMove.accuracy}</th>
                <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${everyMove.type.name}</th>
            </tr>
            `
        }
    })
    document.querySelector("#accuracyTable1").innerHTML += move //imprimo en el selector correspondiente
}

function createMoves(movesArray) { //funcion que imprime TODOS los movimientos con su nombre/presición/tipo
    let move = "" //creo la variable que va a almacenar TODOS los templates
    movesArray.forEach((everyMove,index) => {//recorro el array que entra como parámetro para guardar en cada ciclo el template correspondiente
            move += `
            <tr class="table-light d-flex justify-content-center">
                <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${index+1}</th>
                <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${everyMove.name}</th>
                <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${everyMove.accuracy}</th>
                <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${everyMove.type.name}</th>
            </tr>
            `
    })
    document.querySelector("#accuracyTable2").innerHTML += move //imprimo en el selector correspondiente
}

function createProm(movesArray) { //funcion que imprime la tabla promedio de la precision por tipo de ataque
    let move = "" //creo la variable que va a almacenar TODOS los templates
    movesArray.forEach(everyMove => {//recorro el array que entra como parámetro para guardar en cada ciclo el template correspondiente
            move += `
            <tr class="table-light d-flex justify-content-center">
                <td scope="col" class="col-1 d-flex justify-content-center align-items-center text-center" colspan="1">${everyMove.type}</td>
                <td scope="col" class="col-1 d-flex flex-column justify-content-center align-items-center text-center" colspan="1">${everyMove.moves.map(everyMove => `<span>${everyMove}</span>`)}</td>
                <td scope="col" class="col-1 d-flex flex-column justify-content-center align-items-center text-center" colspan="1">${everyMove.accuracyStats.map(everyStat => `<span>${everyStat}</span>`)}</td>
                <td scope="col" class="col-1 d-flex justify-content-center align-items-center text-center" colspan="1">${everyMove.moves.length}</td>
                <td scope="col" class="col-1 d-flex justify-content-center align-items-center text-center" colspan="1">accuracy prom</td>
            </tr>
            `
    })
    document.querySelector("#accuracyTable3").innerHTML += move //imprimo en el selector correspondiente
}

function sortedMoves (moves) { //funcion que ordenará los datos por precisión y eliminará los nulos
    moves = moves.filter(everyMove => (everyMove.accuracy))  // aplico un filtro para eliminar los nulos
        .sort((a, b) => b.accuracy - a.accuracy) //aplicamos un ordenamiento de los datos por PRECISION
    //console.log(moves) 
    return moves
}

function filteredMoves (moves) { //funcion que filtrará los datos de un tipo de movimiento
    let arrayTypes = []
    moves.forEach(everyMove => arrayTypes.push(everyMove.type.name))
    arrayTypes = new Set(arrayTypes)
    arrayTypes = [...arrayTypes]
    //console.log(arrayTypes)
    moves = arrayTypes.map(everyType => {
        let data = {
            type: everyType,
            accuracyStats: moves.filter(everyMove => everyMove.type.name===everyType).map(everyMove => everyMove.accuracy),
            moves: moves.filter(everyMove => everyMove.type.name===everyType).map(everyMove => everyMove.name)
        }
        return data
    })
    console.log(moves)
    return moves
}