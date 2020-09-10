// Funcion principal para mostar los pokemon

function showCards(poke) { // Poke termina siendo otra variable
    console.log(poke);
    // Código para la tarjeta
    var card = document.createElement('div');
    card.className = "card col-lg-2 col-md-3 col-sm-6 mr-auto";

    // Código para el contenedor
    var cardContainer = document.getElementById('card-container');
    cardContainer.appendChild(card);
    // cardContainer.className = "bg-secondary"

    // Código para la imagen
    var img = document.createElement('img');
    img.className = "card-img-top bg-dark";
    img.src = poke.art_url;
    img.onclick = function() { //Función para tomar el evento de onclic cuando hacemos clic en la imagen

        // Obtener modal
        var modal = document.getElementById("myModal");

        // GObtener la Imagen e insertarla dentro del Modal - Podemos utilzar el "ALT" de la imágen para añadir la descripción 
        var img = document.getElementById("myImg");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");

        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = poke.description;


        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // img.id = "modal_imagen_id"; //Inserta un id al contenedor de imágenes
    card.appendChild(img);

    // Código para el card-body
    var cardBody = document.createElement('div');
    cardBody.className = "card-body ";

    // Código para el título
    var title = document.createElement('h5');
    title.className = "card-title";
    title.innerHTML = poke.name;

    //Código para mostrar en pantalla

    card.appendChild(cardBody);
    cardBody.appendChild(title);
}

for (var i = 0; i < pokemones.length; i++) {
    showCards(pokemones[i]);
}