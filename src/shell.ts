import { Estado, mano } from "./modelo";
import {
    generaNumeroAleatorio,
    generaCarta,
    urlCarta,
    obtenerPuntuacion,
    compruebaMensaje,
    comprobarPuntuacion
} from "./motor";
import {
    muestraPuntuacion,
    muestraMensaje,
    muestraCarta,
    bloquearPartida,
    reanudarPartida
} from "./ui";


const finDePartida = (estado: Estado) => {
    if(estado === "GAME_OVER" || estado === "CLAVADO") {
        const mensajeFin = compruebaMensaje(estado);
        muestraMensaje(mensajeFin);
        bloquearPartida(estado);
    }
};

export const nuevaCarta = () => {
    // lógica
    const numeroAleatorio = generaNumeroAleatorio();
    const obtenPuntuacion = obtenerPuntuacion(numeroAleatorio);
    mano.puntuacion += obtenPuntuacion;
    const estado: Estado = comprobarPuntuacion(mano.puntuacion);
    const valorCarta = generaCarta(numeroAleatorio);
    // UI
    const urlImagen = urlCarta(valorCarta);
    muestraCarta(urlImagen);
    muestraPuntuacion();
    finDePartida(estado);
}

export const mePlanto = () => {
    const estado: Estado = comprobarPuntuacion(mano.puntuacion);
    const mensajeMePlanto = compruebaMensaje(estado);
    muestraMensaje(mensajeMePlanto);
    bloquearPartida(estado);
}

export const seguirPartida = () => {
    const estado: Estado = comprobarPuntuacion(mano.puntuacion);
    nuevaCarta();
    finDePartida(estado);
};

export const nuevaPartida = () => {
    mano.puntuacion = 0;
    mano.mensaje = "";
    mano.url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    muestraPuntuacion();
    muestraMensaje(mano.mensaje);
    muestraCarta(mano.url);
    reanudarPartida();
};

const eventos = () => {
    const botonDameCarta = document.getElementById("dame_carta");
    const botonMePlanto = document.getElementById("me_planto");
    const botonReanudar = document.getElementById("reanudar");
    const botonSeguir = document.getElementById("seguir");

    if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
        botonDameCarta.addEventListener("click", nuevaCarta);
    }
    if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
        botonMePlanto.addEventListener("click", mePlanto);
    };
    if (botonReanudar && botonReanudar instanceof HTMLButtonElement) {
        botonReanudar.addEventListener("click", nuevaPartida);
    };
    if (botonSeguir && botonSeguir instanceof HTMLButtonElement) {
        botonSeguir.addEventListener("click", seguirPartida);
    };
}


document.addEventListener("DOMContentLoaded", () => {
    muestraPuntuacion();
    eventos();
});
