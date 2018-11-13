var pokemon1 = "777";
var pokemon2 = "257";
var pokemon3 = "282";

class NuggetsPokemon {
  constructor(name, hp, attack, defense, abilities, abilities2, types, pokeId, images) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
    this.abilities2 = abilities2;
    this.types = types;
    this.pokeId = pokeId;
    this.images = images
  }
}

function getPokemon(pokemonName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
      pokeinfo = JSON.parse(this.responseText);
      console.log(pokeinfo);
      var pokeId = pokeinfo["id"]; // this is the id*.. so it should be id
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
      console.log(images);
   let poke = new NuggetsPokemon(
        pokeinfo.name,
        pokeinfo.stats[5]["base_stat"],
        pokeinfo.stats[4],
        pokeinfo.stats[3],
        pokeinfo.abilities[0]["ability"]["name"],
        pokeinfo.abilities[1]["ability"]["name"],
        pokeinfo.types[0]["type"]["name"],
        pokeinfo.pokeId,
        images
      );
      console.log(poke);
    let node = document.createElement('p');
      node.innerHTML = "<b>HP:</b> " + pokeinfo.stats[5]["base_stat"] + "<br>" +
                        "<b>Attack:</b> " + pokeinfo.stats[4]["base_stat"] + "<br>" +
                        "<b>Defense:</b> " + pokeinfo.stats[3]["base_stat"] + "<br>" +
                        "<b>Ability:</b> " +  pokeinfo.abilities[0]["ability"]["name"].charAt(0).toUpperCase() + pokeinfo.abilities[0]["ability"]["name"].slice(1) + ", " +  pokeinfo.abilities[1]["ability"]["name"].charAt(0).toUpperCase() + pokeinfo.abilities[1]["ability"]["name"].slice(1);
      document.getElementById('pokeinfo').appendChild(node);
    let pageTitle = document.createElement('h2');
      pageTitle.innerHTML = "#" + pokeinfo.id + " - " + pokeinfo.name.charAt(0).toUpperCase() + pokeinfo.name.slice(1);
      document.getElementById('pokemon-name').appendChild(pageTitle);
    // let pageType = document.createElement('p');
    //     pageType.innerHTML = "<b>Type: </b>" + pokeinfo.types[0]["type"]["name"];
    //     pageType.style.background = "rgba(250, 71, 157,.7)";        }
    //     pageType.style.borderRadius = "25px";
    //     document.getElementById('pokemon-type').appendChild(pageType);
    let pagePic = document.createElement('img');
          pagePic.src = poke.images;
          console.log(poke.images);
          document.getElementById('pokemonPic').appendChild(pagePic);
    }
  };
  xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/id/" + pokemonName + ".json", true);
  xhttp.send();
}
