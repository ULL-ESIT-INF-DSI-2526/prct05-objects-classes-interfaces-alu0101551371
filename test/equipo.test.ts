import { expect, describe, test, beforeEach } from "vitest";
import { Equipo } from '../src/modi_torneo/equipo';

describe("Equipo", () => {
	let equipo1: Equipo;

	beforeEach(() => {
		equipo1 = new Equipo(1, "T1", "KOREA", new Date("2026-02-06"), 1500, "Los Iluminati", ["Faker", "Doran", "Oner", "Peyz", "Keria"], [5, 6]);
	});

	test("Instanciación de Equipo con métodos de la clase Abstracta", () => {
		expect(equipo1.getIdentificador()).toBe(1);
		expect(equipo1.getNombre()).toBe("T1");
		expect(equipo1.getRegion()).toBe("KOREA");
		expect(equipo1.getFechaInscripcion()).toEqual(new Date("2026-02-06"));
		expect(equipo1.getPuntuacion()).toBe(1500);
	});

	test("Método de perfil de Equipo", () => {
		expect(equipo1.perfil()).toBe("Equipo: T1, Sponsor: Los Iluminati, Miembros: Faker, Doran, Oner, Peyz, Keria")
	});
});