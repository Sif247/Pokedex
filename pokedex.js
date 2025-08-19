

fetch("./pokedex.json")
.then(response =>
{
    return response.json();
})
.then(dati => {
    console.log(dati );
    generaCards(dati);

    
    const ricerca = document.getElementById("ricerca");
    ricerca.addEventListener("keyup", (e)=>{
        const pokfiltrati = dati.filter(pok => {
            return pok.name.english.toLowerCase().startsWith(e.target.value.toLowerCase());
        })
        generaCards(pokfiltrati);        
    });
})
.catch(err => {})


function generaCards(pokemon)
{
    const pokedex = document.getElementById("pokedex");
    pokedex.innerHTML = "";
    pokemon.forEach(pokemon => {

       const col = document.createElement("div");
        col.classList.add("col-md-4", "mb-3", "d-flex", "justify-content-center");


        const card = document.createElement("div");
        card.classList.add("card", "text-center"); 
        card.style.width = "15rem";
    

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        
        let id
        if(pokemon.id < 10)
        {
            id = "00" + pokemon.id
        }
        else if(pokemon.id >= 10 && pokemon.id < 100)
        {
            id = "0" + pokemon.id
        }
        else
        {
            id = pokemon.id
        }
        img.src = `./images/${id}.png`;
        img.alt = pokemon.name.english;

        // corpo della card con il nome
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "p-2");

        const title = document.createElement("h5");
        title.classList.add("card-title", "mb-0");
        title.textContent = pokemon.name.english;


        cardBody.appendChild(title);
        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);      
        pokedex.appendChild(col);
        
    });
}