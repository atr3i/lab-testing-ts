export type Estado =
    | "CONSERVADOR"
    | "MIEDO"
    | "CASI"
    | "CLAVADO"
    | "GAME_OVER"
    | "NUEVA_PARTIDA";

interface Mano {
    url: string;
    mensaje: string;
    puntuacion: number;
}
export const mano: Mano = {
    url: "",
    mensaje: "",
    puntuacion: 0
}
