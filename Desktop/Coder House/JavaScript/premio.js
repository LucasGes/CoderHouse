const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
    const container = document.getElementById("pokemonLista");

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((pokemon) => {
          const card = document.createElement("div");
          card.classList.add("card");

          const name = document.createElement("h2");
          name.textContent = pokemon.name;

          const image = document.createElement("img");
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then((response) => response.json())
            .then((pokemonData) => {
              image.src = pokemonData.sprites.front_default;
              image.alt = pokemon.name;
              image.classList.add("pokemon-image");
            });

          const typesList = document.createElement("ul");
          typesList.classList.add("types-list");

          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then((response) => response.json())
            .then((pokemonData) => {
              pokemonData.types.forEach((type) => {
                const listItem = document.createElement("li");
                listItem.textContent = type.type.name;
                typesList.appendChild(listItem);
              });
            });

          const chooseButton = document.createElement("button");
          chooseButton.textContent = "Elegir";
          chooseButton.addEventListener("click", () => {
            Swal.fire({
                title: "Compra Finalizada",
                text: "Felicitaciones te llevas un " + pokemon.name +"de regalo",
                icon: "success",
                confirmButtonText: '<a href="http://127.0.0.1:5500/index.html" id="a">Finalizar compra!</a>',
              });
                     });

          card.appendChild(name);
          card.appendChild(image);
         
          card.appendChild(chooseButton);

          container.appendChild(card);
        });
      });
