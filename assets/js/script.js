console.log("Script chargé !")
// ------------------------Récupération de la liste Pokémon-------------------------
let listPokemon;
const getPokemons = async () => {
    try{
        const reponse = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
        const pokemons = await reponse.json();
        return pokemons;
    } catch (error){
        console.log("Echec de la récupération de la liste des pokemons");
    }
}
const displayPokemons = async () => {
    const pokemons = await getPokemons();
    return pokemons;
}

listPokemon = await displayPokemons();
console.log("listPokemon ", listPokemon);
// ---------------------------------------Création contenainer-------------------------
const container = document.createElement("div");
container.classList.add("container")
      document.body.appendChild(container);
      let img = document.querySelectorAll(".recherche");
      console.log(img.recherche)   
let fieldsetElement = document.createElement('fieldset');
    fieldsetElement.innerHTML = '<legend><img class="choix" src="https://fontmeme.com/permalink/231102/29dd2998ee90928dae0464aa6ec0faeb.png" alt="police-pokemon" border="0"></a></legend>';
    container.appendChild(fieldsetElement);

//--------------------------Structure HTML Boutons Radio---------------------------------
let elements = [
    { name: 'group1', value: 'option1', label: 'Par nom' },
    { name: 'group2', value: 'option2', label: 'Par élément'},
];

let radioGroup2 = createRadioButtons(elements);
    fieldsetElement.appendChild(radioGroup2);

const select = document.createElement('select');
      select.classList.add("select-pokemon");
    //   select.classList.add("select-pokemon-element");
      fieldsetElement.appendChild(select);
    let optionDefault = document.createElement("option");
        optionDefault.innerText = " ----Sélectionnez un Pokémon----";
        optionDefault.value = 0;
        optionDefault.setAttribute("selected", true);
        select.appendChild(optionDefault);
        console.log("Sélectionnez un Pokémon");
        listPokemon.forEach(pokemon => {
            let option = document.createElement("option");
            option.innerText = pokemon.name;
            option.value = pokemon.name;
            console.log("pokemon :", pokemon);
            select.appendChild(option)
        });
// ------------------------------Récupération et affichage Images Pokemon--------------
let selectPokemonImg = document.createElement("img")
    selectPokemonImg.classList.add("affichage-pokemon")
    fieldsetElement.appendChild(selectPokemonImg)
    select.addEventListener("change",() => {
        if (select == 0) {
            option.innerText ="Pokémon non sélectionner"
        }
        else {
            console.log("selection :" , select.value);
            let imgPokemon = listPokemon.find((unPokemon) => unPokemon.name == select.value);
            selectPokemonImg.setAttribute("src", imgPokemon.image);
            selectPokemonImg.style.display = "block";
            
        }
    } )
// ----------------------------------Récupération Elements Pokémon--------------------
let listElementPokemon;
const urlApiElement = "https://pokebuildapi.fr/api/v1/types";
await getListElementPokemon();
async function getListElementPokemon () {
    const res = await fetch(urlApiElement);
    listElementPokemon = await res.json();
}
const getPokemonsElement = async () => {
    try{
        const reponse = await fetch("https://pokebuildapi.fr/api/v1/types");
        const pokemonsElement = await reponse.json();
        return pokemonsElement;
    } catch (error){
        console.log("Echec de la récupération  des éléments pokemons");
    }
}
const displayPokemonsElement = async () => {
    const pokemonsElement = await getPokemonsElement();
    console.log("PokemonsElement : ", pokemonsElement);
}
// -----------------------------------Evénements butons radios-------------------------
function createRadioButtons(elements) {
    let radioGroup = document.createElement('div');
    radioGroup.classList.add('radio-group');

    elements.forEach(function(element) {
        let label = document.createElement('label');
        let radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = element.name;
            radio.value = element.value;
            radio.setAttribute('name', 'accessType');
            if (element.value == 'option1') {
                radio.setAttribute("checked", element.checked);
            }
            label.appendChild(radio);
            label.appendChild(document.createTextNode(element.label));
            radioGroup.appendChild(label);
    });

    return radioGroup;
} 
displayPokemonsElement();





