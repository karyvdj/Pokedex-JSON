$.getJSON("http://pokeapi.co/api/v2/pokemon/",
	function(response){
		var pokemons = response.results;
		crearPokemons(pokemons);
	});

function crearPokemons(pokemons) {
	var ul = $("#pokemons");

	pokemons.forEach(function (pokemon) {
		var li = $("<a>", {"class":"col m3 s5 push-m1 push-s1 waves-effect waves-light btn margin"});
		li.text(pokemon.name);

		ul.append(li);
	});
}

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
