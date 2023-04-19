
let  listElement = document.querySelector("ul");
const inputPokemon = document.querySelector("#inputPokemon")
const URL_API = 'https://pokeapi.co/api/v2/pokemon';
let URL_IMAGE ='';


function find(id){
        fetch(`${URL_API}/${id}`)
                .then(response=>response.json())
                .then((data)=> loadPokemon(data))
                .catch((error)=>{console.log(error)});
}


function loadPokemon(data){
    
    const {forms, sprites} = data;

    
    console.log(data);
    for (item of forms){
        const liElement = document.createElement("li");
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const span = document.createElement("span");
        const textH2 = document.createTextNode(item.name.toUpperCase());
        const textSpan = document.createTextNode("Biografia")

        const img = document.createElement("img");
        img.setAttribute("src",sprites.other.dream_world.front_default);
        h2.appendChild(textH2)
        span.appendChild(textSpan)
        liElement.appendChild(h2)
        div.appendChild(img);
        div.appendChild(span);
        liElement.appendChild(div) 
        listElement.appendChild(liElement);
        
    }
}

function limparElemento(elemento){
    listElement.innerHTML='';
}

function pesquisar(event){
    event.preventDefault();
    limparElemento(listElement)
    const valorInput = inputPokemon.value;
    find(valorInput)
}