import { Estado, mano } from "./modelo";
import { comprobarPuntuacion } from "./motor";

export const muestraCarta = (url: string): void => {
    const cartaPrincipal = document.getElementById("carta");
    if (cartaPrincipal && cartaPrincipal instanceof HTMLImageElement) {
        cartaPrincipal.src = url; 
    } else {
        console.error("muestraCarta: no se ha encontrado el elemento con id carta.");
    }
};

export const muestraPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    console.log(elementoPuntuacion);
    if (elementoPuntuacion && elementoPuntuacion instanceof HTMLSpanElement) {
        elementoPuntuacion.innerText = `${mano.puntuacion}`;
    } else {
        console.error("muestraPuntuacion: no se ha encontrado el elemento con id puntuacion.");
    }
};

export const muestraMensaje = (mensaje: string): void => {
    const elementoMensaje =  document.getElementById("mensaje");
    if (elementoMensaje && elementoMensaje instanceof HTMLElement) {
        elementoMensaje.innerText = mensaje;
        if (mensaje === "") elementoMensaje.setAttribute("class", "");
        cambiaClase(elementoMensaje);
       
    } else {
        console.error("muestraMensaje: no se ha encontrado el elemento con id mensaje.");
    }
};

const cambiaClase = (elemento: Element) => {
    const estado: Estado = comprobarPuntuacion(mano.puntuacion);
    if(estado === "GAME_OVER") {
        elemento.classList.add("gameOver");
        elemento.classList.remove("winner");
    }
    if(estado === "CLAVADO") {
        elemento.classList.remove("gameOver");
        elemento.classList.add("winner");
    }

};

export const bloquearPartida = (estado: Estado) => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => { 
        button.id === "reanudar" || button.id === "seguir" ? button.disabled = false : button.disabled = true;
        if (button.id === "seguir") button.style.display = "block";
        if (estado === "GAME_OVER" || estado === "CLAVADO") {
            if (button.id === "seguir") button.style.display = "none";
        }
    });
};

export const reanudarPartida = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.disabled = false;
        if (button.id === "seguir") button.style.display = "none";
    });
};
