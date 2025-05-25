
const getData = async () => {
  try {
    let inputPokemon = document.getElementById("nomPokemon");
    let pokemon = inputPokemon.value;

    console.log(pokemon);

    const res = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokemon}`);
    const data = await res.json();


    /* console.log(data); */

    const newDiv = document.createElement('div');

    console.log("Taille du array ", data.apiTypes.length);

    for (i = 0; i < data.apiTypes.length; i++) {

/*       let poketype = [];
 */
      /* const count = poketype.push(data.apiTypes[i].name); */

      /* console.log("Poketype  ", poketype); */

      if (data.apiTypes[i].name == "Feu") {

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
          'card-front',
          'card-pokemon-feu'
        );
      }


      else if (data.apiTypes[i].name == "Eau") {

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
          'card-front',
          'card-pokemon-eau'
        );
      }

      else if (data.apiTypes[i].name == "Herbe") {

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
          'card-front',
          'card-pokemon-herbe'
        );
      }

      else if (data.apiTypes[i].name == "Électrik") {

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
          'card-front',
          'card-pokemon-elec'
        );
      }

      else if (data.apiTypes[i].name == "Psy") {

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
          'card-front',
          'card-pokemon-psy'
        );
      }

      else if (data.apiTypes[i].name == "Obscure") {

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
          'card-front',
          'card-pokemon-obscure'
        );
      }

      else if (data.apiTypes[i].name == "Dragon") {

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
          'card-front',
          'card-pokemon-dragon'
        );
      }

      else if (data.apiTypes[i].name == "Poison") {

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
          'card-front',
          'card-pokemon-poison'
        );
      }

      else {

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
          'card-front',
          'card-pokemon-normal'
        );
      }


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


    const card = document.createElement("div");
    const contain = document.querySelector('.card-container');
    card.classList.add('card');
    contain.appendChild(card);
    card.appendChild(newDiv);


    card.addEventListener('mousemove', (e) => {
      const { offsetWidth: width, offsetHeight: height } = card;
      const { offsetX: x, offsetY: y } = e;

      const rotateX = ((y / height) - 0.5) * -20;
      const rotateY = ((x / width) - 0.5) * 20;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    const cardContainer = document.querySelector('.card-container');
    cardContainer.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });


  }

  catch (err) {
    console.log(err);
  }
}


