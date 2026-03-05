import { describe, expect, test, beforeEach } from "vitest";
import { Chef } from "../src/ej3_recetario/chef";
import { Paso } from "../src/ej3_recetario/paso";
import { Recetas } from "../src/ej3_recetario/recetario";
import { Sistema } from "../src/ej3_recetario/sistema";

describe("Recetario", () => {
  let receta1: Recetas;
  let receta2: Recetas;
  let receta3: Recetas;

  beforeEach(() => {
    receta1 = new Recetas("Receta 1", 2020, [
      new Paso("Paso 1", 10, ["etiqueta1"], 5),
      new Paso("Paso 2", 20, ["etiqueta2"], 3, true),
    ]);

    receta2 = new Recetas("Receta 2", 2021, [
      new Paso("Paso A", 15, ["etiquetaA"], 4),
      new Paso("Paso B", 25, ["etiquetaB"], 2),
    ]);

    receta3 = new Recetas("Receta 3", 2020, [
      new Paso("Paso X", 5, ["etiquetaX"], 6),
      new Paso("Paso Y", 30, ["etiquetaY"], 1),
    ]);
  });

	test("Interfaz de elementos de Recetas", () => {
		expect(receta1.nombre).toBe("Receta 1");
		expect(receta1.anyoPublicacion).toBe(2020);
		expect(receta1.pasos.length).toBe(2);
		expect(receta1.pasos).toEqual([
			{nombre: "Paso 1", duracion: 10, etiquetasClasificacion: ["etiqueta1"], numVecesCompletado: 5, pasoOpcional: undefined}, 
			{nombre: "Paso 2", duracion: 20, etiquetasClasificacion: ["etiqueta2"], numVecesCompletado: 3, pasoOpcional: true}
		]);
	});

	test("getNumeroPasos", () => {
		expect(receta1.getNumeroPasos()).toBe(2);
		expect(receta2.getNumeroPasos()).toBe(2);
		expect(receta3.getNumeroPasos()).toBe(2);
		receta3.pasos.push(new Paso("Paso Z", 10, ["etiquetaZ"], 0));
		expect(receta3.getNumeroPasos()).toBe(3);
	});

	test("getDuracionTotal", () => {
		expect(receta1.getDuracionTotal()).toEqual([30, 50]);
		expect(receta2.getDuracionTotal()).toEqual([40, 40]);
		expect(receta3.getDuracionTotal()).toEqual([35, 35]);
		receta3.pasos.push(new Paso("Paso Z", 10, ["etiquetaZ"], 0));
		expect(receta3.getDuracionTotal()).toEqual([45, 45]);
	});

	test("filtradoPasos", () => {
		expect(receta1.filtradoPasos({nombre: "Paso 1"})).toEqual([
			{nombre: "Paso 1", duracion: 10, etiquetasClasificacion: ["etiqueta1"], numVecesCompletado: 5, pasoOpcional: undefined}
		]);
		expect(receta2.filtradoPasos({duracion: 25})).toEqual([
			{nombre: "Paso B", duracion: 25, etiquetasClasificacion: ["etiquetaB"], numVecesCompletado: 2, pasoOpcional: undefined}
		]);
		expect(receta3.filtradoPasos({etiquetasClasificacion: "etiquetaX"})).toEqual([
			{nombre: "Paso X", duracion: 5, etiquetasClasificacion: ["etiquetaX"], numVecesCompletado: 6, pasoOpcional: undefined}
		]);

		expect(receta1.filtradoPasos({pasoOpcional: true})).toEqual([
			{nombre: "Paso 2", duracion: 20, etiquetasClasificacion: ["etiqueta2"], numVecesCompletado: 3, pasoOpcional: true}
		]);

		expect(receta1.filtradoPasos({nombre: "Paso 3"})).toEqual([]);

		expect(receta1.filtradoPasos({})).toEqual([
			{nombre: "Paso 1", duracion: 10, etiquetasClasificacion: ["etiqueta1"], numVecesCompletado: 5, pasoOpcional: undefined},
			{nombre: "Paso 2", duracion: 20, etiquetasClasificacion: ["etiqueta2"], numVecesCompletado: 3, pasoOpcional: true}
		]);

		expect(receta3.filtradoPasos({pasoOpcional: false})).toEqual([]);

		expect(receta3.filtradoPasos({etiquetasClasificacion: "etiquetaZ"})).toEqual([]);
	});
});

describe("Chef", () => {
	let chef1: Chef;
	let chef2: Chef;

	beforeEach(() => {
		chef1 = new Chef("Chef 1", 1000, [
			new Recetas("Receta 1", 2020, [
				new Paso("Paso 1", 10, ["etiqueta1"], 5),
				new Paso("Paso 2", 20, ["etiqueta2"], 3, true),
			]),
			new Recetas("Receta 2", 2021, [
				new Paso("Paso A", 15, ["etiquetaA"], 4),
				new Paso("Paso B", 25, ["etiquetaB"], 2),
			]),
		]);

		chef2 = new Chef("Chef 2", 500, [
			new Recetas("Receta X", 2020, [
				new Paso("Paso X", 5, ["etiquetaX"], 6),
				new Paso("Paso Y", 30, ["etiquetaY"], 1),
			]),
		]);
	});

	test("Interfaz de elementos de Chef", () => {
		expect(chef1.nombre).toBe("Chef 1");
		expect(chef1.seguidores).toBe(1000);
		expect(chef1.recetario.length).toBe(2);
		expect(chef1.recetario[0].nombre).toBe("Receta 1");
		expect(chef1.recetario[0].anyoPublicacion).toBe(2020);
		expect(chef1.recetario[0].pasos.length).toBe(2);
		expect(chef1.recetario[0].pasos[0]).toEqual(
			{nombre: "Paso 1", duracion: 10, etiquetasClasificacion: ["etiqueta1"], numVecesCompletado: 5, pasoOpcional: undefined}
		);
	});

	test("filtradoRecetario", () => {
		expect(chef1.filtradoRecetario({nombre: "Receta 1"})).toEqual([
			{
				nombre: "Receta 1",
				anyoPublicacion: 2020,
				pasos: [
					{nombre: "Paso 1", duracion: 10, etiquetasClasificacion: ["etiqueta1"], numVecesCompletado: 5, pasoOpcional: undefined},
					{nombre: "Paso 2", duracion: 20, etiquetasClasificacion: ["etiqueta2"], numVecesCompletado: 3, pasoOpcional: true}
				]
			}
		]);

		expect(chef1.filtradoRecetario({anyoPublicacion: 2021})).toEqual([
			{
				nombre: "Receta 2",
				anyoPublicacion: 2021,
				pasos: [
					{nombre: "Paso A", duracion: 15, etiquetasClasificacion: ["etiquetaA"], numVecesCompletado: 4, pasoOpcional: undefined},
					{nombre: "Paso B", duracion: 25, etiquetasClasificacion: ["etiquetaB"], numVecesCompletado: 2, pasoOpcional: undefined}
				]
			}
		]);

		expect(chef1.filtradoRecetario({nombre: "Receta 3"})).toEqual([]);
	});
});

describe("Paso", () => {
	let paso1: Paso;

	beforeEach(() => {
		paso1 = new Paso("Paso 1", 10, ["etiqueta1"], 5);
	});

	test("Interfaz de elementos de Paso", () => {
		expect(paso1.nombre).toBe("Paso 1");
		expect(paso1.duracion).toBe(10);
		expect(paso1.etiquetasClasificacion).toEqual(["etiqueta1"]);
		expect(paso1.numVecesCompletado).toBe(5);
		expect(paso1.pasoOpcional).toBeUndefined();
	});
});

describe("Sistema", () => {
	let sistema: Sistema;

	beforeEach(() => {
		sistema = new Sistema([
			new Chef("Chef 1", 1000, [
				new Recetas("Receta 1", 2020, [
					new Paso("Paso 1", 10, ["etiqueta1"], 5),
					new Paso("Paso 2", 20, ["etiqueta2"], 3, true),
				]),
				new Recetas("Receta 2", 2021, [
					new Paso("Paso A", 15, ["etiquetaA"], 4),
					new Paso("Paso B", 25, ["etiquetaB"], 2),
				]),
			]),
			new Chef("Chef 2", 500, [
				new Recetas("Receta X", 2020, [
					new Paso("Paso X", 5, ["etiquetaX"], 6),
					new Paso("Paso Y", 30, ["etiquetaY"], 1),
				]),
			]),
		]);
	});

	test("Chefs en el sistema", () => {
		expect(sistema.getChefs().length).toBe(2);
		expect(sistema.getChefs()[0].nombre).toBe("Chef 1");
		expect(sistema.getChefs()[1].nombre).toBe("Chef 2");
		expect(sistema.getChefs()[0].recetario.length).toBe(2);
		expect(sistema.getChefs()[1].recetario.length).toBe(1);
		expect(sistema.getChefs()[0].recetario[0].nombre).toBe("Receta 1");
		expect(sistema.getChefs()[1].recetario[0].nombre).toBe("Receta X");
		expect(sistema.getChefs()[0].recetario[0].pasos.length).toBe(2);
		expect(sistema.getChefs()[1].recetario[0].pasos.length).toBe(2);
		expect(sistema.getChefs()[0].recetario[0].pasos[0]).toEqual(
			{nombre: "Paso 1", duracion: 10, etiquetasClasificacion: ["etiqueta1"], numVecesCompletado: 5, pasoOpcional: undefined}
		);
		expect(sistema.getChefs()[1].recetario[0].pasos[0]).toEqual(
			{nombre: "Paso X", duracion: 5, etiquetasClasificacion: ["etiquetaX"], numVecesCompletado: 6, pasoOpcional: undefined}
		);
	});

	test("Agregar un nuevo chef", () => {
		const nuevoChef = new Chef("Chef 3", 200, [
			new Recetas("Receta Z", 2022, [
				new Paso("Paso Z1", 20, ["etiquetaZ1"], 0),
				new Paso("Paso Z2", 40, ["etiquetaZ2"], 0, true),
			]),
		]);
		sistema.agregarChef(nuevoChef);
		expect(sistema.getChefs().length).toBe(3);
	});

	test("getChefs y setChefs", () => {
		const chefsIniciales = sistema.getChefs();
		expect(chefsIniciales.length).toBe(2);

		const nuevoChef = new Chef("Chef 3", 200, [
			new Recetas("Receta Z", 2022, [
				new Paso("Paso Z1", 20, ["etiquetaZ1"], 0),
				new Paso("Paso Z2", 40, ["etiquetaZ2"], 0, true),
			]),
		]);
		sistema.setChefs([...chefsIniciales, nuevoChef]);
		expect(sistema.getChefs().length).toBe(3);
	});

	test("filtradoChefs", () => {
		expect(sistema.filtradoChefs({nombre: "Chef 1"})).toEqual([
			{
				nombre: "Chef 1",
				seguidores: 1000,
				recetario: [
					{
						nombre: "Receta 1",
						anyoPublicacion: 2020,
						pasos: [
							{nombre: "Paso 1", duracion: 10, etiquetasClasificacion: ["etiqueta1"], numVecesCompletado: 5, pasoOpcional: undefined},
							{nombre: "Paso 2", duracion: 20, etiquetasClasificacion: ["etiqueta2"], numVecesCompletado: 3, pasoOpcional: true}
						]
					},
					{
						nombre: "Receta 2",
						anyoPublicacion: 2021,
						pasos: [
							{nombre: "Paso A", duracion: 15, etiquetasClasificacion: ["etiquetaA"], numVecesCompletado: 4, pasoOpcional: undefined},
							{nombre: "Paso B", duracion: 25, etiquetasClasificacion: ["etiquetaB"], numVecesCompletado: 2, pasoOpcional: undefined}
						]
					}
				]
			}
		]);

		expect(sistema.filtradoChefs({seguidores: 500})).toEqual([
			{
				nombre: "Chef 2",
				seguidores: 500,
				recetario: [
					{
						nombre: "Receta X",
						anyoPublicacion: 2020,
						pasos: [
							{nombre: "Paso X", duracion: 5, etiquetasClasificacion: ["etiquetaX"], numVecesCompletado: 6, pasoOpcional: undefined},
							{nombre: "Paso Y", duracion: 30, etiquetasClasificacion: ["etiquetaY"], numVecesCompletado: 1, pasoOpcional: undefined}
						]
					}
				]
			}
		]);


		expect(sistema.filtradoChefs({nombre: "Chef 3"})).toEqual([]);
	});
});