import { Estado, mano } from "./modelo";

const generaNumeroAleatorio = () => {
    let numeroAleatorio: number = 0;
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    return numeroAleatorio;
}

export const generaCarta = () => {
    let cartaRandom: number = 0;
    cartaRandom = generaNumeroAleatorio();
    if (cartaRandom >= 8) {
        cartaRandom = cartaRandom + 2;
    }
    return cartaRandom;

}

export const urlCarta = (carta: number): void => {
    switch (carta) {
        case 1:
            mano.url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
            break;
        case 2:
            mano.url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
            break;
        case 3:
            mano.url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
            break;
        case 4:
            mano.url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
            break;
        case 5:
            mano.url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
            break;
        case 6:
            mano.url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
            break;
        case 7:
            mano.url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
            break;
        case 10:
            mano.url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
            break;
        case 11:
            mano.url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
            break;
        case 12:
            mano.url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
            break;
        default:
            mano.url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
            break;
    }
};


export const obtenerPuntuacion = (carta: number) => {
    if (carta >= 10) {
        carta = 0.5;
    }
    mano.puntuacion = carta + mano.puntuacion;
}
export const comprobarPuntuacion = (puntuacion: number) => {

    if (puntuacion <= 4) {
        return "CONSERVADOR";
    }
    if (puntuacion > 4 && puntuacion <= 6) {
        return "MIEDO";

    }
    if (puntuacion > 6 && puntuacion <= 7) {
        return "CASI";

    }
    if (puntuacion === 7.5) {
        return "CLAVADO";
    }

    return (puntuacion > 7.5) ? "GAME_OVER" : "NUEVA_PARTIDA";

};
export const compruebaMensaje = (estado: Estado) => {
    switch(estado) {
        case "CONSERVADOR":
            mano.mensaje = "Has sido muy conservador";
            break;
        case "MIEDO":
            mano.mensaje = "Te ha entrado canguelo eh?";
            break;
        case "CASI":
            mano.mensaje = "Casi casí...";
            break;
        case "CLAVADO":
            mano.mensaje = "¡Lo has clavado! ¡Enhorabuena!";
            break;
        case "GAME_OVER":
            mano.mensaje = "Game over: has superado el número máximo";
            break;
        default:
            mano.mensaje = "No sé que ha pasado, pero no deberías estar aquí";
            break;
    }
};
