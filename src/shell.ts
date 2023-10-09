
import { partida} from "./modelo";

import { generarNumeroAleatorio } from "./motor";

import { handleCompruebaClick, iniciaPartidaUi} from "./ui";

// TODO: mover esto a DOM loaded
partida.numeroParaAcertar = generarNumeroAleatorio();


document.addEventListener("DOMContentLoaded", iniciaPartidaUi);

const botonComprobar = document.getElementById("comprobar");
botonComprobar?.addEventListener("click", handleCompruebaClick);

const botonInicia = document.getElementById("inicia");
botonInicia?.addEventListener("click", () => {
    iniciaPartidaUi();
});

// TODO iniciaPartida terminar acción del botón y crear salida para mostrar número aleatorio si pierdes.