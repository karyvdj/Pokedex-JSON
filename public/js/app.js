var cargarPagina = function () {
	cargarPokemons();
  $('.modal').modal();
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
		var imgPokemon = $("<img/>");
		imgPokemon.attr("src",imagenesPokemons[i].imagen);
		var nombrePokemon = $("<a/>", {"class":" waves-light btn margin boton-info"});
		nombrePokemon.text(pokemon.name);
		nombrePokemon.attr('href',"#modalPokemon").attr("data-info",pokemon.url);

		contenedorImg.append(imgPokemon).append(nombrePokemon);
		fila.append(contenedorImg);
		contenedorPokemons.append(fila);
	});
}

var plantillaModal =
    "<article class='modal-content'>"+
				"<div class='row'>"+
						"<div class='col s6'>"+
								"<img src='__ruta__' alt='pokemon'>"+
						"</div>"+
						"<div class='col s6'>"+
							"<h4>__nombre__</h4>"+
							"<p><strong>Color: </strong>__color__</p>"+
							"<p><strong>Forma: </strong>__forma__</p>"+
              "<p><strong>Habitat: </strong>__habitat__</p>"+
              "<p><strong>Género: </strong>__genero__</p>"+
						"</div>"+
				"</div>"+
      "</article>"+
      "<div class='modal-footer'>"+
  			"<a href='#' class='modal-action modal-close waves-effect waves-teal btn-floating orange darken-1 center right'>&#215;</a>"+
  		"</div>";


var detallePokemon = function () {
  var infoPokemon = $(this).data("info");
  var imgModal = $(this).prev().attr("src");
  var nombreModal = $(this).text();//obtiene el valor que ya se tiene

  $.getJSON(infoPokemon , function (response) {
    var especies = response.species.url; //obtener los valores de la url
    $.getJSON(especies, function (response) {
      var color = response.color.name;
      var forma = response.shape.name;
      var habitat = response.habitat.name;
      var genero = response.genera[2].genus;

      mostrarDetalles(
        {
          nombre: nombreModal,
          img: imgModal,
          color: color,
          forma: forma,
          habitat: habitat,
          genero: genero
        }
      );
    });
  });

}

var mostrarDetalles = function (detalles) {
    var modal = $("#modalPokemon");
    var plantillaFinal = "";
    plantillaFinal += plantillaModal.replace("__ruta__", detalles.img)
        .replace("__nombre__", detalles.nombre)
        .replace("__color__", detalles.color)
        .replace("__forma__", detalles.forma)
        .replace("__habitat__", detalles.habitat)
        .replace("__genero__", detalles.genero);

    modal.html(plantillaFinal);
}

var imagenesPokemons = [
    {
        imagen : "assets/img/1-bulbasaur.png"
    },
    {
        imagen : "assets/img/2-ivysaur.png"
    },
    {
        imagen : "assets/img/3-venusaur.png"
    },
    {
        imagen : "assets/img/4-charmander.png"
    },
    {
        imagen : "assets/img/5-charmaleon.png"
    },
    {
        imagen : "assets/img/6-charizard.png"
    },
    {
        imagen : "assets/img/7-squirtle.png"
    },
    {
        imagen : "assets/img/8-wartortle.png"
    },
    {
        imagen : "assets/img/9-blastoise.png"
    },
    {
        imagen : "assets/img/10-caterpie.png"
    },
    {
        imagen : "assets/img/11-metapod.png"
    },
    {
        imagen : "assets/img/12-butterfree.png"
    },
    {
        imagen : "assets/img/13-weedle.png"
    },
    {
        imagen : "assets/img/14-kakuna.png"
    },
    {
        imagen : "assets/img/15-beedrill.png"
    },
    {
        imagen : "assets/img/16-pidgey.png"
    },
    {
        imagen : "assets/img/17-pidgeotto.png"
    },
    {
        imagen : "assets/img/18-pidgeot.png"
    },
    {
        imagen : "assets/img/19-rattata.png"
    },
    {
        imagen : "assets/img/20-raticate.png"
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
