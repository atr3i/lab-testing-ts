import { vi } from "vitest";
import { Estado, mano } from "./modelo";
import { comprobarPuntuacion, generaCarta, generaNumeroAleatorio, obtenerPuntuacion } from "./motor";


describe("generaNumeroAleatorio", () => {

    it("MathRandom lo forzamos a que devuelva 1, y debería devolver el número 1", () => {
        // Arrange
        const numeroEsperado: number = 1;
        vi.spyOn(global.Math, "random").mockReturnValue(0)
        // Act
        const resultado = generaNumeroAleatorio();
        // Assert
        expect(resultado).toBe(numeroEsperado);
    });

    it("MathRandom lo forzamos a que devuelva 1, y debería devolver el número 10", () => {
        // Arrange
        const numeroEsperado: number = 10;
        vi.spyOn(global.Math, "random").mockReturnValue(0.9)
        // Act
        const resultado = generaNumeroAleatorio();
        // Assert
        expect(resultado).toBe(numeroEsperado);
    });
});

describe("generaCarta", () => {
    it("Si carta random es mayor a 7, a carta random se le sumará 2", () => {
        // Arrange
        const resultadoEsperado: number = 12;
        const cartaRandom: number = 10;
        vi.spyOn(mano, "puntuacion", "get").mockReturnValue(12);
        // Act
        const resultado = generaCarta(cartaRandom);
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });
});

describe("obtenerPuntuacion", () => {
    it("Si número es mayor a 7, la puntuacion valdrá medio punto (0.5)", () => {
        // Arrange
        const resultadoEsperado: number = 0.5;
        const numero: number = 8;
        vi.spyOn(mano, "puntuacion", "get").mockReturnValue(0.5)
        // Act
        const resultado = obtenerPuntuacion(numero);
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });
});

describe("comprobarPuntuacion", () => {
    it("Si puntuacion es menor a 4 el estado a devolver será CONSERVADOR", () => {
        // Arrange
        const resultadoEsperado: Estado = "CONSERVADOR";
        const puntuacion: number = 4;
        // Act
        const resultado = comprobarPuntuacion(puntuacion);
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Si puntuacion es igual a 7.5 el estado a devolver será CLAVADO", () => {
        // Arrange
        const resultadoEsperado: Estado = "CLAVADO";
        const puntuacion: number = 7.5;
        // Act
        const resultado = comprobarPuntuacion(puntuacion);
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Si puntuacion es mayor que 7.5 el estado a devolver será GAME_OVER", () => {
        // Arrange
        const resultadoEsperado: Estado = "GAME_OVER";
        const puntuacion: number = 8;
        // Act
        const resultado = comprobarPuntuacion(puntuacion);
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Si puntuacion es mayor que 4 y menor o igual a 6 el estado a devolver será MIEDO", () => {
        // Arrange
        const resultadoEsperado: Estado = "MIEDO";
        const puntuacion: number = 6;
        // Act
        const resultado = comprobarPuntuacion(puntuacion);
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Si puntuacion es mayor que 6 y menor o igual a 7 el estado a devolver será CASI", () => {
        // Arrange
        const resultadoEsperado: Estado = "CASI";
        const puntuacion: number = 7;
        // Act
        const resultado = comprobarPuntuacion(puntuacion);
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

});