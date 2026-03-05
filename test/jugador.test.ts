import { expect, describe, test, beforeEach } from "vitest";
import { Jugador } from '../src/modi_torneo/jugador';

describe("Jugador", () => {
	let jugador1: Jugador;

	beforeEach(() => {
		jugador1 = new Jugador(1, "Lucas", "SPAIN", new Date("2023-01-01"), 1500, "LucasGT", "ORO", 20);
	});

	test("Instanciación de Jugador con metodos de la clase Abstracta", () => {
		expect(jugador1.getIdentificador()).toBe(1);
		expect(jugador1.getNombre()).toBe("Lucas");
		expect(jugador1.getRegion()).toBe("SPAIN");
		expect(jugador1.getFechaInscripcion()).toEqual(new Date("2023-01-01"));
		expect(jugador1.getPuntuacion()).toBe(1500);
	});

	test("setIdentificador", () => {
		jugador1.setIdentificador(33);
		expect(jugador1.getIdentificador()).toBe(33);
	});

	test("setNombre sin error", () => {
		jugador1.setNombre("Manolo");
		expect(jugador1.getNombre()).toBe("Manolo");
	});

	test("setNombre con error", () => {
		expect(() => jugador1.setNombre("")).toThrowError('El nombre no puede estar vacío.');
	});

	test("setRegion", () => {
		jugador1.setRegion("USA");
		expect(jugador1.getRegion()).toBe("USA");
	});

	test("setFechaInscripcion sin error", () => {
		jugador1.setFechaInscripcion(new Date ("2022-01-01"));
		expect(jugador1.getFechaInscripcion()).toEqual(new Date ("2022-01-01"));
	});

	test("setFechaInscripcion con error", () => {
		expect(() => jugador1.setFechaInscripcion(new Date ("2027-01-01"))).toThrowError('La fecha de inscripción no puede ser futura.');
	});

	test("setPuntuacion sin error", () => {
		jugador1.setPuntuacion(3333);
		expect(jugador1.getPuntuacion()).toBe(3333);
	});

	test("setPuntuacion con error", () => {
		expect(() => jugador1.setPuntuacion(-1)).toThrowError('La puntuación acumulada no puede ser negativa.');
	});

	test("Método perfil de Jugador", () => {
		expect(jugador1.perfil()).toBe("Jugador: Lucas, Gamertag: LucasGT, Rango: ORO, Partidas Jugadas: 20");
	});
});