$.getJSON("http://pokeapi.co/api/v2/pokemon/",
	function(response){
		var pokemons = response.results;
		crearPokemons(pokemons);
	});

function crearPokemons(pokemons) {
	var contenedorPokemons = $("#pokemons");
	var fila = $("<article/>", {"class": "row center"});
	$(pokemons).each(function (i,pokemon) {
		var contenedorImg = $("<div/>", {"class": "col m3 s6 carta hoverable"}).attr("data-info",pokemon.url);
		var imgPokemon = $("<img/>").attr("src",imagenesPokemons[i].imagen);
		var nombrePokemon = $("<a/>", {"class":" waves-light btn margin"}).text(pokemon.name).attr('href',"#modalPokemon");

		contenedorImg.append(imgPokemon).append(nombrePokemon);
		fila.append(contenedorImg);
		contenedorPokemons.append(fila);
	});
}
var imagenesPokemons = [
    {
        "imagen" : "assets/img/1-bulbasaur.png"
    },
    {
        "imagen" : "assets/img/2-ivysaur.png"
    },
    {
        "imagen" : "assets/img/3-venusaur.png"
    },
    {
        "imagen" : "assets/img/4-charmander.png"
    },
    {
        "imagen" : "assets/img/5-charmaleon.png"
    },
    {
        "imagen" : "assets/img/6-charizard.png"
    },
    {
        "imagen" : "assets/img/7-squirtle.png"
    },
    {
        "imagen" : "assets/img/8-wartortle.png"
    },
    {
        "imagen" : "assets/img/9-blastoise.png"
    },
    {
        "imagen" : "assets/img/10-caterpie.png"
    },
    {
        "imagen" : "assets/img/11-metapod.png"
    },
    {
        "imagen" : "assets/img/12-butterfree.png"
    },
    {
        "imagen" : "assets/img/13-weedle.png"
    },
    {
        "imagen" : "assets/img/14-kakuna.png"
    },
    {
        "imagen" : "assets/img/15-beedrill.png"
    },
    {
        "imagen" : "assets/img/16-pidgey.png"
    },
    {
        "imagen" : "assets/img/17-pidgeotto.png"
    },
    {
        "imagen" : "assets/img/18-pidgeot.png"
    },
    {
        "imagen" : "assets/img/19-rattata.png"
    },
    {
        "imagen" : "assets/img/20-raticate.png"
    }
];

//-------------JS----------------
// var xhr = new XMLHttpRequest();
//
// xhr.onreadystatechange = function (e) {
// 	if (this.readyState === 4) {
// 		if (this.status === 200) {
// 			var response = JSON.parse(this.response);
// 			var pokemons = response.results;
//
// 			crearPokemons(pokemons);
// 		}
//
// 	}
// };
//
// xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/");
//
// xhr.send();
