import { Estado, mano } from "./modelo";
import {
    generaCarta,
    urlCarta, 
    obtenerPuntuacion,
    compruebaMensaje,
    comprobarPuntuacion
} from "./motor";


export const botonDameCarta = document.getElementById("dame_carta"),
    botonMePlanto = document.getElementById("me_planto"),
    botonReanudar = document.getElementById("reanudar"),
    botonSeguir = document.getElementById("seguir"),
    cartaPrincipal = document.getElementById("carta"),
    elementoPuntuacion = document.getElementById("puntuacion"),
    elementoMensaje = document.getElementById("mensaje");

export const muestraCarta = () => {
    if (cartaPrincipal) {
        (cartaPrincipal as HTMLImageElement).src = mano.url;
    } else {
        console.error("muestraCarta: no se ha encontrado el elemento con id carta.");
    }
}

export const muestraPuntuacion = () => {
    if (elementoPuntuacion) {
        elementoPuntuacion.innerHTML = `Puntos: <span>${mano.puntuacion}</span>`
    } else {
        console.error("muestraPuntuacion: no se ha encontrado el elemento con id puntuacion.");
    }
};

export const bloquearPartida = () => {
    if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
        botonDameCarta.disabled = true;
    } else {
        console.error("bloquearPartida: no se ha encontrado el elemento con id dame_carta.");
    }
    if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
        botonMePlanto.disabled = true;
    } else {
        console.error("bloquearPartida: no se ha encontrado el elemento con id me_planto.");
    }
    if (botonSeguir && botonSeguir instanceof HTMLButtonElement) {
        botonSeguir.disabled = true;
    } else {
        console.error("bloquearPartida: no se ha encontrado el elemento con id seguir.");
    }
};

export const muestraMensaje = (estado: Estado) => {
    compruebaMensaje(estado);
    if (elementoMensaje) {
        elementoMensaje.innerHTML = mano.mensaje;
    } else {
        console.error("muestraMensaje: no se ha encontrado el elemento con id mensaje.");
    }
};

export const gameOver = (estado: Estado) => {
    if (estado === "GAME_OVER" || estado === "CLAVADO") {
        bloquearPartida();
        muestraMensaje(estado);
    }
    if (elementoMensaje) {
        if (estado === "GAME_OVER") {
            elementoMensaje.classList.add("gameOver");
            elementoMensaje.classList.remove("winner");
        }
        if (estado === "CLAVADO") {
            elementoMensaje.classList.remove("gameOver");
            elementoMensaje.classList.add("winner");
        }
    }
};


export const handleDameCarta = () => {
    let carta: number = generaCarta();
    urlCarta(carta);
    muestraCarta();
    obtenerPuntuacion(carta);
    muestraPuntuacion();
    const estado: Estado = comprobarPuntuacion(mano.puntuacion);
    gameOver(estado);
}

export const handleMePlanto = () => {
    bloquearPartida();
    const estado: Estado = comprobarPuntuacion(mano.puntuacion);
    muestraMensaje(estado);

    if (botonSeguir && botonSeguir instanceof HTMLButtonElement) {
        botonSeguir.style.display = 'block';
        botonSeguir.disabled = false;
    }
}
export const seguirPartida = () => {
    let carta: number = generaCarta();
    urlCarta(carta);
    muestraCarta();
    obtenerPuntuacion(carta);
    muestraPuntuacion();
    const estado: Estado = comprobarPuntuacion(mano.puntuacion);
    gameOver(estado);
};

export const nuevaPartida = () => {

    if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
        mano.puntuacion = 0;
        botonDameCarta.disabled = false;
    }
    if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
        mano.puntuacion = 0;
        botonMePlanto.disabled = false;
    }
    if (botonSeguir && botonSeguir instanceof HTMLButtonElement) {
        botonSeguir.style.display = 'none';
    }
    if (elementoMensaje) {
        elementoMensaje.innerHTML = "";
        elementoMensaje.classList.remove("gameOver", "winner");
    }
    if (elementoPuntuacion) {

        elementoPuntuacion.innerHTML = "";
    }
    (cartaPrincipal as HTMLImageElement).src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";

    muestraPuntuacion();

};