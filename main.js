var pokemon1 = "mimikyu-disguised";
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
      data = JSON.parse(this.responseText);
      // console.log(data);
   let poke = new NuggetsPokemon(
        data.name,
        data.stats[5]["base_stat"],
        data.stats[4],
        data.stats[3],
        data.abilities[0]["ability"]["name"],
        data.abilities[1]["ability"]["name"]
      );
    let node = document.createElement('p');
      node.innerHTML = "HP: " + data.stats[5]["base_stat"] + "<br>" +
                        "Attack: " + data.stats[4]["base_stat"] + "<br>" +
                        "Defense: " + data.stats[3]["base_stat"] + "<br>" +
                        "Ability: " +  data.abilities[0]["ability"]["name"] + ", " +  data.abilities[1]["ability"]["name"];
      document.getElementById('data').appendChild(node);
    }
  };
  xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/" + pokemonName + ".json", true);
  xhttp.send();
}
