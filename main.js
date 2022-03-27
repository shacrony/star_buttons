const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
 
    function tocarSom (idElementoAudio) {
        document.querySelector(idElementoAudio).play();
}
    while  (contador <= listaDeTeclas.length) {
        
        const tecla = listaDeTeclas[contador];

        const instrumento = tecla.classList[1];

        const idAudio = `#som_${instrumento}`;

        console.log(idAudio)

        tecla.onclick = function () {
            tocarSom(idAudio);
        }

        contador = contador + 1 ;
}