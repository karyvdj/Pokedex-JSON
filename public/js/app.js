var cargarPagina = function () {
	cargarPokemons();
	$(document).on("click", ".boton-info", detallePokemon);

}

var cargarPokemons = function () {
	var url = "http://pokeapi.co/api/v2/pokemon/";
	$.getJSON(url,function (response){
		var pokemons = response.results;
		crearPokemons(pokemons);
	});
}


function crearPokemons(pokemons) {
	var contenedorPokemons = $("#pokemons");
	var fila = $("<article/>", {"class": "row center"});
	$(pokemons).each(function (i,pokemon) {
		var contenedorImg = $("<div/>", {"class": "col m3 s6 carta hoverable"});
		contenedorImg.attr("data-info",pokemon.url);
		var imgPokemon = $("<img/>");
		imgPokemon.attr("src",imagenesPokemons[i].imagen);
		var nombrePokemon = $("<a/>", {"class":" waves-light btn margin boton-info"});
		nombrePokemon.text(pokemon.name);
		nombrePokemon.attr('href',"#modalPokemon");

		contenedorImg.append(imgPokemon).append(nombrePokemon);
		fila.append(contenedorImg);
		contenedorPokemons.append(fila);
	});
}

var pantillaModal =
	"<section id='modalPokemon' class='modal'>"+
			"<article class='modal-content'>"+
					"<div class='row'>"+
							"<div class='col s6'>"
									"<img id='imgPokemon' src='imagenesPokemons[i].imagen' alt='nombre'>"+
							"</div>"+
							"<div class='col s6'>"+
								"<h4>__nombre__</h4>"+
								"<p>"+
									"Tipo:"+
									"<strong>agua</strong>"+
								"</p>"+
								"<p><strong>Poder: </strong>__nombre__</p>"+
								"<p><strong>Vida: </strong>__habilidad__</p>"
							"</div>"+
					"</div>"+
			"</article>"+
			"<div class='modal-footer>"+
				"<a href='#' class='modal-action modal-close waves-effect waves-green btn-floating grey center righ'>&#215;</a>"+
			"</div>"+
	"</section>";

var detallePokemon = function () {
  var url = $(this).data("url");
    var modal = $("#modalPokemon");
    $.getJSON(url , function (response) {
      modal.html(
        pantillaModal.replace("__nombre__", response.name)
        .replace("__habilidad__", response.ability)
      );
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

$(document).ready(cargarPagina);

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
