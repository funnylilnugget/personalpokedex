var pokemon1 = "togedemaru";
var pokemon2 = "blaziken";
var pokemon3 = "gardevoir";

class NuggetsPokemon {
  constructor(name, hp, attack, defense, abilities, abilities2, id) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
    this.abilities2 = abilities2;
    this.id = id;
  }
}

function getPokemon(pokemonName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
      pokeinfo = JSON.parse(this.responseText);
      console.log(pokeinfo);
   let poke = new NuggetsPokemon(
        pokeinfo.name,
        pokeinfo.stats[5]["base_stat"],
        pokeinfo.stats[4],
        pokeinfo.stats[3],
        pokeinfo.abilities[0]["ability"]["name"],
        pokeinfo.abilities[1]["ability"]["name"],
        pokeinfo.id
      );
    let node = document.createElement('p');
      node.innerHTML = "<b>HP:</b> " + pokeinfo.stats[5]["base_stat"] + "<br>" +
                        "<b>Attack:</b> " + pokeinfo.stats[4]["base_stat"] + "<br>" +
                        "<b>Defense:</b> " + pokeinfo.stats[3]["base_stat"] + "<br>" +
                        "<b>Ability:</b> " +  pokeinfo.abilities[0]["ability"]["name"].charAt(0).toUpperCase() + pokeinfo.abilities[0]["ability"]["name"].slice(1) + ", " +  pokeinfo.abilities[1]["ability"]["name"].charAt(0).toUpperCase() + pokeinfo.abilities[1]["ability"]["name"].slice(1);
      document.getElementById('pokeinfo').appendChild(node);
    let pageTitle = document.createElement('h2');
      pageTitle.innerHTML = "#" + pokeinfo.id + " - " + pokeinfo.name.charAt(0).toUpperCase() + pokeinfo.name.slice(1);
      document.getElementById('pokemon-name').appendChild(pageTitle);
    }
  };
  xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/name/" + pokemonName + ".json", true);
  xhttp.send();
}


// https://pokeapi.co/api/v2/pokemon-species/blaziken
