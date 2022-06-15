let urlPkm = "https://pokeapi.co/api/v2/pokemon/" //url de la api que contiene los datos de UN POKEMON
//lamentablemente, no existe un url para obtener TODOS los pokemon
//como no existe ese llamado, vamos a tener que iterar este llamado, la cantidad de veces que querramos

var pkm = [] //array que va a contener los pkm
var searchFilter = "" //variable que va a contener el valor del input
var generationFilter = "" //variable que va a contener el valor del radius

async function fetchPokems() { //funcion que trae los datos de TODOS los pkm del intervalo
    let pokemons = []
    for (let i=1; i<=386; i++) { //iteracion de la funcion que me trae los datos de UN SOLO pkm
        (await fetch(urlPkm+i)).json().then(everyPkm => //consumo la api
            pokemons.push({ //pusheo los datos en un array
                order: everyPkm.order,
                name: everyPkm.name,
                image: everyPkm.sprites.front_default
            })
        )
    }
    //console.log(pokemons)
    createPkm(pokemons)
    return pokemons
}

pkm = await fetchPokems()

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
                pkm = fetchPokems(1,151).filter(everyPkm => everyPkm.name.toLowerCase().startsWith(searchFilter.toLowerCase().trim()))
                break;
            case 'g2':
                pkm = fetchPokems(152,251).filter(everyPkm => everyPkm.name.toLowerCase().startsWith(searchFilter.toLowerCase().trim()))
                break;
            case 'g3':
                pkm = fetchPokems(252,386).filter(everyPkm => everyPkm.name.toLowerCase().startsWith(searchFilter.toLowerCase().trim()))
                break;
        }
    } else {
        switch (generationFilter) {
            case 'g1':
                pkm = fetchPokems(1,151)
                break;
            case 'g2':
                pkm = fetchPokems(152,251)
                break;
            case 'g3':
                pkm = fetchPokems(252,386)
                break;
            default:
                pkm = fetchPokems(1,151)
                break;
        }
    }
}

document.querySelector("#g1").addEventListener("click",checkBoxGen)
document.querySelector("#g2").addEventListener("click",checkBoxGen)
document.querySelector("#g3").addEventListener("click",checkBoxGen)

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