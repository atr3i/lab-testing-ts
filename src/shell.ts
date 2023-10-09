import "./style.css";

import {
    handleDameCarta,
    handleMePlanto,
    seguirPartida,
    botonDameCarta,
    botonMePlanto,
    botonReanudar,
    botonSeguir,
    nuevaPartida
   
} from "./ui";



if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.addEventListener("click", handleDameCarta);
}
if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.addEventListener("click", handleMePlanto);
};

if (botonReanudar && botonReanudar instanceof HTMLButtonElement) {
    botonReanudar.addEventListener("click", nuevaPartida);
};

if (botonSeguir && botonSeguir instanceof HTMLButtonElement) {
    botonSeguir.addEventListener("click", seguirPartida);
};