/* const url = `https://pokebuildapi.fr/api/v1/pokemon/${pokemon}`;
 */
const getData = async () => {
    try{
        let inputPokemon = document.getElementById("nomPokemon");
        let pokemon = inputPokemon.value;

        console.log(pokemon);

        const res = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokemon}`);
        const data = await res.json();

        console.log(data);
        console.log(data.apiTypes[0].name);

        let pokemonType = data.apiTypes[0].name;

        const newDiv = document.createElement('div');


        if(pokemonType == "Eau"){
          newDiv.classList.add(
              'block',
              'max-w-[18rem]',
              'rounded-lg',
              'text-left',
              'text-surface',
              'shadow-secondary-1',
              'dark:bg-surface-dark',
              'dark:text-black',
              'mx-auto',
              'my-10',
              'card',
              'card-pokemon-eau'
  
          );

        }
        else if (pokemonType == "Feu"){
          newDiv.classList.add(
              'block',
              'max-w-[18rem]',
              'rounded-lg',
              'text-left',
              'text-surface',
              'shadow-secondary-1',
              'dark:bg-surface-dark',
              'dark:text-black',
              'mx-auto',
              'my-10',
              'card-pokemon-feu'
  
          );

        }

        else{

        newDiv.classList.add(
            'block',
            'max-w-[18rem]',
            'rounded-lg',
            'text-left',
            'text-surface',
            'shadow-secondary-1',
            'dark:bg-surface-dark',
            'dark:text-black',
            'mx-auto',
            'my-10',
            'card-pokemon'

        );

        }
        

        newDiv.innerHTML = `
        <div class="p-6">
        <p class="mb-1 font-medium leading-tight ">${data.name}</p>
        <div class="img-pokemon">
        <img src="${data.image}" alt="${data.name}" />
        </div>
        
        <div class="stat-pokemon my-5 flex flex-row">
        <div class="flex-col ml-2 justify-start">
          <p>HP</p>
          <p>ATTACK</p>
          <p>DEFENSE</p>
          <p>SPEED</p>
    
        </div>
    
        <div class="flex-col justify-end ml-20 italic">
          <p>${data.stats.HP}</p>
          <p>${data.stats.attack}</p>
          <p>${data.stats.defense}</p>
          <p>${data.stats.speed}</p>
        </div>
    
        
    
       </div>
    
    
      </div>





    `;

    // Ajouter la div au DOM
    const container = document.querySelector('.container');
    container.appendChild(newDiv);


    }

    catch(err){
        console.log(err);
    }
}


