var pokemon1 = "381";
var pokemon2 = "257";
var pokemon3 = "282";

class NuggetsPokemon {
  constructor(name, hp, attack, defense, abilities, types, pokeId, images) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
    this.types = types;
    this.pokeId = pokeId;
    this.images = images;
    poketrainer.pokemon.push(this);
  }
}

class PokemonData {
  constructor(infos) {
    this.infos = infos
  }
}

function getPokemon(pokemonName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
      pokeinfo = JSON.parse(this.responseText);
      var pokeId = pokeinfo["id"];
      pokeId = parseInt(pokeId);
        if (pokeId > 9 && pokeId < 100) {
          pokeId = pokeId.toString();
          pokeId = '0' + pokeId;
        }
        else if (pokeId < 10) {
          pokeId = pokeId.toString();
          pokeId = '00' + pokeId;
        }
      var images = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + pokeId + ".png";
   let poke = new NuggetsPokemon(
        pokeinfo.name,
        pokeinfo.stats[5]["base_stat"],
        pokeinfo.stats[4],
        pokeinfo.stats[3],
        pokeinfo.abilities,
        pokeinfo.types[0]["type"]["name"],
        pokeinfo.pokeId,
        images
      );
    let node = document.createElement('p');
      node.innerHTML = "<b><center>Stats:</center></b><b>HP:</b> " + pokeinfo.stats[5]["base_stat"] + "<br>" +
                        "<b>Attack:</b> " + pokeinfo.stats[4]["base_stat"] + "<br>" +
                        "<b>Defense:</b> " + pokeinfo.stats[3]["base_stat"];
      document.getElementById('pokeinfo').appendChild(node);
      node.style.background = "rgb(217, 217, 217, .4)";
      node.style.borderRadius = "25px";
      node.style.padding = "20px";
    let pageTitle = document.createElement('h2');
      pageTitle.innerHTML = "#" + pokeinfo.id + " - " + pokeinfo.name.charAt(0).toUpperCase() + pokeinfo.name.slice(1);
      document.getElementById('pokemon-name').appendChild(pageTitle);
    let pagePic = document.createElement('img');
          pagePic.src = poke.images;
          document.getElementById('pokemonPic').appendChild(pagePic);
          let pokemonAbility = document.createElement('p');
              pokemonAbility.innerHTML = "<b>Ability:</b><br>" +  pokeinfo.abilities[0]["ability"]["name"].charAt(0).toUpperCase() + pokeinfo.abilities[0]["ability"]["name"].slice(1);
                  document.getElementById('pokeability').appendChild(pokemonAbility);
                  pokemonAbility.style.background = "rgb(217, 217, 217, .4)";
                  pokemonAbility.style.borderRadius = "25px";
                  pokemonAbility.style.padding = "20px";
    // let pokemonAbility = document.createElement('p');
    //     pokemonAbility.innerHTML = "<b>Abilities:</b><br>" +  pokeinfo.abilities[0]["ability"]["name"].charAt(0).toUpperCase() + pokeinfo.abilities[0]["ability"]["name"].slice(1) + "<br>" +  pokeinfo.abilities[1]["ability"]["name"].charAt(0).toUpperCase() + pokeinfo.abilities[1]["ability"]["name"].slice(1);
    //         document.getElementById('pokeability').appendChild(pokemonAbility);
    //         pokemonAbility.style.background = "rgb(217, 217, 217, .4)";
    //         pokemonAbility.style.borderRadius = "25px";
    //         pokemonAbility.style.padding = "20px";

    }
  };
  xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/id/" + pokemonName + ".json", true);
  xhttp.send();
}

function pokemonBio(pokemon) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      for (i in data["flavor_text_entries"]) {
          if (data['flavor_text_entries'][(i)]['language']['name'] == 'en'){
          var infos = data['flavor_text_entries'][(i)]['flavor_text'];
        }
    let poke = new PokemonData(data.infos);
    }
      let node = document.createElement('p');
        node.innerHTML = "<center><b>Bio:</b></center>" + infos;
        document.getElementById('pokebio').appendChild(node);
        node.style.background = "rgb(217, 217, 217, .4)";
        node.style.borderRadius = "25px";
        node.style.padding = "20px";
    }
  };
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon-species/" + pokemon + "/", true);
  xhttp.send();
}

// For the scope of the Trainer all/get stuff



class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemon = [];
    // this.info = [];
  }

  all() {
    console.log(this.pokemon);
  }

  get(name) {
    var i = 0;
    for(i in this.pokemon.length)
    if(name == this.pokemon[i].name) {
      i++;
      console.log(this.pokemon[i]);
      break;
    }
  }

}

var poketrainer = new Trainer("NuggetsPokemon", pokemon1, pokemon2, pokemon3);
