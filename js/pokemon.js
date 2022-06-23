let urlPkm = "https://pokeapi.co/api/v2/pokemon/" //url de la api que contiene los datos de UN POKEMON
//lamentablemente, no existe un url para obtener TODOS los pokemon
//como no existe ese llamado, vamos a tener que iterar este llamado, la cantidad de veces que querramos

var pkm = [] //array que va a contener los pkm
var searchFilter = "" //variable que va a contener el valor del input
var generationFilter = "" //variable que va a contener el valor del radius

var generations = [
    {gen: '1st gen', id: "g1", starters: [1,9]},
    {gen: '2nd gen', id: "g2", starters: [152,160]},
    {gen: '3rd gen', id: "g3", starters: [252,260]},
    {gen: '4th gen', id: "g4", starters: [387,395]}
]

function createOptions(options) {
    let innerOptions = ""
    options.forEach((everyOption) => {
            innerOptions += `
            <fieldset class="d-flex">
                <input type="radio" class="generation" name="gen" value=${everyOption.id} id=${everyOption.id}>
                <label class="labelGeneration" for=${everyOption.id}>${everyOption.gen}</label>
            </fieldset>
            `
    })
    document.querySelector("#options").innerHTML =innerOptions
}

createOptions(generations)

async function fetchPokems(n1,n2) { //funcion que trae los datos de TODOS los pkm del intervalo
    let pokemons = []
    for (let i=n1; i<=n2+1; i++) { //iteracion de la funcion que me trae los datos de UN SOLO pkm
        (await fetch(urlPkm+i)).json().then(everyPkm => //consumo la api
            pokemons.push({ //pusheo los datos en un array
                order: everyPkm.order,
                name: everyPkm.name,
                image: everyPkm.sprites.front_default
            })
        )
    }
    console.log(pokemons)
    createPkm(pokemons)
    return pokemons
}

pkm = await fetchPokems(1,9)

function inputFilter(event) { //funcion que trae los datos de los pkm filtrados
    searchFilter = event.target.value
    console.log(pkm)
    let filter = pkm.filter(everyPkm => everyPkm.name.toLowerCase().startsWith(searchFilter.toLowerCase().trim()))
    console.log(filter)
    createPkm(filter)
}

document.querySelector("#search").addEventListener("keyup",inputFilter)

function checkBoxGen(event) {
    generationFilter = event.target.value
    if (searchFilter) {
        switch (generationFilter) {
            case 'g1':
                pkm = fetchPokems(1,9).filter(everyPkm => everyPkm.name.toLowerCase().startsWith(searchFilter.toLowerCase().trim()))
                break;
            case 'g2':
                pkm = fetchPokems(152,160).filter(everyPkm => everyPkm.name.toLowerCase().startsWith(searchFilter.toLowerCase().trim()))
                break;
            case 'g3':
                pkm = fetchPokems(252,260).filter(everyPkm => everyPkm.name.toLowerCase().startsWith(searchFilter.toLowerCase().trim()))
                break;
            case 'g4':
                pkm = fetchPokems(387,395).filter(everyPkm => everyPkm.name.toLowerCase().startsWith(searchFilter.toLowerCase().trim()))
                break;
        }
    } else {
        switch (generationFilter) {
            case 'g1':
                pkm = fetchPokems(1,9)
                break;
            case 'g2':
                pkm = fetchPokems(152,160)
                break;
            case 'g3':
                pkm = fetchPokems(252,260)
                break;
            case 'g4':
                pkm = fetchPokems(387,395)
                break;
        }
    }
}

document.querySelector("#g1").addEventListener("click",checkBoxGen)
document.querySelector("#g2").addEventListener("click",checkBoxGen)
document.querySelector("#g3").addEventListener("click",checkBoxGen)
document.querySelector("#g4").addEventListener("click",checkBoxGen)

function createPkm(arrayPkm) { //funcion que imprime TODOS los pkm
    let innerPkm = "" //seteo la variable que va a almacenar TODOS los templates
    arrayPkm.forEach((everyPkm) => {//recorro el array que entra como parámetro para guardar en cada ciclo el template correspondiente
            innerPkm += `
            <div class="d-flex flex-column flex-wrap justify-content-center align-items-center text-center cardPkm">
                <p>${everyPkm.order} - ${everyPkm.name}</p>
                <img src=${everyPkm.image}>
            </div>
            `
    })
    document.querySelector("#pkmTable").innerHTML =innerPkm //imprimo en el selector correspondiente
}