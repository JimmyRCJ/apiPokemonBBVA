function llamadaPokemon(){
    for (let i = 1; i <= 20; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        fetch(url)
          .then(res => res.json())
          .then(pokemon => {
            console.log(pokemon.forms[0].name);
            var tag_1 = document.createElement("tr");
            var tag_2 = document.createElement("td");
            var boton = document.createElement("button");
            boton.innerHTML = "Ver detalles";
            tag_1.appendChild(tag_2);
            var text = document.createTextNode(pokemon.forms[0].name);
            tag_2.appendChild(text);
            tag_2.appendChild(text);

            tag_1.appendChild(boton);

            var element = document.getElementById("tablaPokemon");
            element.appendChild(tag_1);

          });
      }
}

llamadaPokemon();