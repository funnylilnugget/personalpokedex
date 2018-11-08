// const POKEMON = [];

// var pokemon1 = "latios";
// var pokemon2 = "blaziken";
// var pokemon3 = "gardevoir";

class NuggetsPokemon {
  constructor(name, hp, attack, defense, abilities) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
}



function getPokemon1(pokemonName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);

   let poke = new NuggetsPokemon(
        data.name,
        data.stats[5]
      );
      console.log(poke);
    }
  };
  xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/latios.json", true);
  xhttp.send();
}

function getPokemon2(pokemonName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);

   let poke = new NuggetsPokemon(
        data.name,
        data.stats[5]
      );
      console.log(poke);
    }
  };
  xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/blaziken.json", true);
  xhttp.send();
}

function getPokemon3(pokemonName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);

   let poke = new NuggetsPokemon(
        data.name,
        data.stats[5]
      );
      console.log(poke);
    }
  };
  xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/gardevoir.json", true);
  xhttp.send();
}
// var pokemonSelection = new NuggetsPokemon(pokemon1, pokemon2, pokemon3)
