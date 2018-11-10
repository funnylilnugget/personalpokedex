var pokemon1 = "araquanid";
var pokemon2 = "blaziken";
var pokemon3 = "gardevoir";

class NuggetsPokemon {
  constructor(name, hp, attack, defense, abilities, abilities2) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
    this.abilities2 = abilities2;
  }
}

function getPokemon(pokemonName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
      pokeinfo = JSON.parse(this.responseText);
   let poke = new NuggetsPokemon(
        pokeinfo.name,
        pokeinfo.stats[5]["base_stat"],
        pokeinfo.stats[4],
        pokeinfo.stats[3],
        pokeinfo.abilities[0]["ability"]["name"],
        pokeinfo.abilities[1]["ability"]["name"]
      );
    let node = document.createElement('p');
      node.innerHTML = "HP: " + pokeinfo.stats[5]["base_stat"] + "<br>" +
                        "Attack: " + pokeinfo.stats[4]["base_stat"] + "<br>" +
                        "Defense: " + pokeinfo.stats[3]["base_stat"] + "<br>" +
                        "Ability: " +  pokeinfo.abilities[0]["ability"]["name"].charAt(0).toUpperCase() + pokeinfo.abilities[0]["ability"]["name"].slice(1) + ", " +  pokeinfo.abilities[1]["ability"]["name"].charAt(0).toUpperCase() + pokeinfo.abilities[1]["ability"]["name"].slice(1);
      document.getElementById('pokeinfo').appendChild(node);
    let pageTitle = document.createElement('h2');
      pageTitle.innerHTML = pokeinfo.name.charAt(0).toUpperCase() + pokeinfo.name.slice(1);
      document.getElementById('pokemon-name').appendChild(pageTitle);
    }
  };
  xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/" + pokemonName + ".json", true);
  xhttp.send();
}
