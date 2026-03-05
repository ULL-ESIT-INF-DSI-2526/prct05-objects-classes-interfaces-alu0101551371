import { describe, expect, test, beforeEach } from "vitest";
import { ElementoInformacion, Revista, Congreso, Libro, TFG, TFM } from "../src/ej1_gestor_referencias_bibliográficas/elementos";
import { Inventario } from "../src/ej1_gestor_referencias_bibliográficas/inventario"; 

describe("Gestor de referencias bibliográficas - Elementos Bibliográficos", () => {
	let revista1: Revista;
	let revista2: Revista;
	let congreso1: Congreso;
	let congreso2: Congreso;
	let libro: Libro;
	let tfg: TFG;
	let tfm: TFM;

	beforeEach(() => {
		revista1 = new Revista(
			"DIGNEA: A tool to generate diverse and discriminatory instance suites for optimisation domains",
			["Alejandro Marrero", "Eduardo Segredo", "Coromoto León", "Emma Hart"],
			["instance generation", "novelty search", "evolutionary algorithm", "knapsack"],
			"Framework generalizable para generar instancias diversas y discriminatorias en dominios de optimización.",
			new Date("2023-05-01"),
			1,
			"SoftwareX",
			0,
			22
		);

		revista2 = new Revista(
			"Engaging Primary and Secondary School Students in Computer Science Through Computational Thinking Training",
			["Rafael Herrero-Álvarez", "Gara Miranda", "Coromoto León", "Eduardo Segredo"],
			["IEEE", "optimización", "evolutionary computation"],
			"Referencia IEEE indicada por identificador de documento: 9749967.",
			new Date("2022-01-01"),
			1,
			"IEEE Xplore",
			9749967,
			1
		);

		congreso1 = new Congreso(
			"Generating diverse and discriminatory knapsack instances by searching for novelty in variable dimensions of feature-space",
			["Alejandro Marrero", "Eduardo Segredo", "Emma Hart", "Jakob Bossek", "Aneta Neumann"],
			["knapsack", "novelty search", "feature space", "GECCO"],
			"Generación de instancias de mochila maximizando diversidad y capacidad discriminatoria.",
			new Date("2023-07-12"),
			9,
			"ACM",
			"GECCO '23",
			"Lisbon, Portugal"
		);

		congreso2 = new Congreso(
			"Dealing with a problematic roundabout by optimizing a traffic light system through evolutionary computation",
			["Francisco Cruz-Zelante", "Eduardo Segredo", "Gara Miranda"],
			["traffic lights", "roundabout", "evolutionary computation", "GECCO"],
			"Optimización de semáforos en una rotonda problemática mediante computación evolutiva.",
			new Date("2021-07-07"),
			2,
			"ACM",
			"GECCO '21 Companion",
			"Lille, France"
		);

		libro = new Libro(
			"A Novelty-Search Approach to Filling an Instance-Space with Diverse and Discriminatory Instances for the Knapsack Problem",
			["Alejandro Marrero", "Eduardo Segredo", "Coromoto León", "Emma Hart"],
			["PPSN", "knapsack", "novelty search", "instance-space"],
			"Capítulo de libro sobre generación de instancias diversas/discriminatorias para el problema de la mochila.",
			new Date("2022-08-14"),
			14,
			"Springer International Publishing",
			"978-3-031-14714-2"
		);

		tfg = new TFG(
			"Resolución del Multi Depot Cumulative Capacitated Vehicle Routing Problem mediante computación evolutiva.",
			["Cristo Daniel Navarro Rodríguez"],
			["TFG", "routing", "evolutionary computation", "MDC-CVRP"],
			"Trabajo de fin de grado centrado en la resolución del MDC-CVRP con un algoritmo memético.",
			new Date("2021-01-01"),
			1,
			"Universidad de La Laguna",
			"No disponible"
		);

		tfm = new TFM(
			"On the automatic planning of healthy and balanced menus",
			["Alejandro Marrero Díaz"],
			["TFM", "menu planning", "evolutionary algorithms", "nutrition"],
			"Trabajo de fin de máster sobre planificación automática de menús saludables y equilibrados.",
			new Date("2019-01-01"),
			1,
			"Universidad de La Laguna",
			"No disponible"
		);
	});

	test("Interfaz elementos de información", () => {
		const informacion: ElementoInformacion = revista1;
		expect(informacion.titulo).toBe("DIGNEA: A tool to generate diverse and discriminatory instance suites for optimisation domains");
		expect(informacion.autor).toEqual(["Alejandro Marrero", "Eduardo Segredo", "Coromoto León", "Emma Hart"]);
		expect(informacion.palabrasClave).toEqual(["instance generation", "novelty search", "evolutionary algorithm", "knapsack"]);
		expect(informacion.resumen).toBe("Framework generalizable para generar instancias diversas y discriminatorias en dominios de optimización.");
		expect(informacion.fechaPublicacion).toEqual(new Date("2023-05-01"));
		expect(informacion.paginas).toBe(1);
		expect(informacion.editorial).toBe("SoftwareX");
	});

	test("Instancias de elementos bibliográficos", () => {
		expect(revista1).toBeInstanceOf(Revista);
		expect(revista2).toBeInstanceOf(Revista);
		expect(congreso1).toBeInstanceOf(Congreso);
		expect(congreso2).toBeInstanceOf(Congreso);
		expect(libro).toBeInstanceOf(Libro);
		expect(tfg).toBeInstanceOf(TFG);
		expect(tfm).toBeInstanceOf(TFM);
	});

	test("Formato IEEE", () => {
		expect(revista1.getFormatoIEEE()).toBe("Alejandro Marrero, Eduardo Segredo, Coromoto León, Emma Hart, \"DIGNEA: A tool to generate diverse and discriminatory instance suites for optimisation domains,\" SoftwareX, 2023. Vol. 22, No. 0.");
		expect(revista2.getFormatoIEEE()).toBe("Rafael Herrero-Álvarez, Gara Miranda, Coromoto León, Eduardo Segredo, \"Engaging Primary and Secondary School Students in Computer Science Through Computational Thinking Training,\" IEEE Xplore, 2022. Vol. 1, No. 9749967.");
		expect(congreso1.getFormatoIEEE()).toBe("Alejandro Marrero, Eduardo Segredo, Emma Hart, Jakob Bossek, Aneta Neumann, \"Generating diverse and discriminatory knapsack instances by searching for novelty in variable dimensions of feature-space,\" ACM, 2023. presented at GECCO '23, Lisbon, Portugal.");
		expect(congreso2.getFormatoIEEE()).toBe("Francisco Cruz-Zelante, Eduardo Segredo, Gara Miranda, \"Dealing with a problematic roundabout by optimizing a traffic light system through evolutionary computation,\" ACM, 2021. presented at GECCO '21 Companion, Lille, France.");
		expect(libro.getFormatoIEEE()).toBe("Alejandro Marrero, Eduardo Segredo, Coromoto León, Emma Hart, \"A Novelty-Search Approach to Filling an Instance-Space with Diverse and Discriminatory Instances for the Knapsack Problem,\" Springer International Publishing, 2022. ISBN: 978-3-031-14714-2.");
		expect(tfg.getFormatoIEEE()).toBe("Cristo Daniel Navarro Rodríguez, \"Resolución del Multi Depot Cumulative Capacitated Vehicle Routing Problem mediante computación evolutiva.,\" Universidad de La Laguna, 2021. Tutor: No disponible.");
		expect(tfm.getFormatoIEEE()).toBe("Alejandro Marrero Díaz, \"On the automatic planning of healthy and balanced menus,\" Universidad de La Laguna, 2019. Tutor: No disponible.");
	});
});

describe("Gestor de referencias bibliográficas - Inventario", () => {
	let inventario: Inventario;
	let revista: Revista;
	let congreso: Congreso;

	beforeEach(() => {
		inventario = new Inventario();

		revista = new Revista(
			"DIGNEA: A tool to generate diverse and discriminatory instance suites for optimisation domains",
			["Alejandro Marrero", "Eduardo Segredo", "Coromoto León", "Emma Hart"],
			["instance generation", "novelty search", "evolutionary algorithm", "knapsack"],
			"Framework generalizable para generar instancias diversas y discriminatorias en dominios de optimización.",
			new Date("2023-05-01"),
			1,
			"SoftwareX",
			0,
			22
		);

		congreso = new Congreso(
			"Generating diverse and discriminatory knapsack instances by searching for novelty in variable dimensions of feature-space",
			["Alejandro Marrero", "Eduardo Segredo", "Emma Hart", "Jakob Bossek", "Aneta Neumann"],
			["knapsack", "novelty search", "feature space", "GECCO"],
			"Generación de instancias de mochila maximizando diversidad y capacidad discriminatoria.",
			new Date("2023-07-12"),
			9,
			"ACM",
			"GECCO '23",
			"Lisbon, Portugal"
		);
	});

	test("Insertar elementos en el inventario", () => {
		inventario.setInventario([revista, congreso]);
		expect(inventario.filtrado({})).toEqual([revista, congreso]);
	});

	test("Filtrado por título", () => {
		inventario.setInventario([revista, congreso]);
		expect(inventario.filtrado({ tittle: "DIGNEA: A tool to generate diverse and discriminatory instance suites for optimisation domains" })).toEqual([revista]);
	});

	test("Filtrado por palabra clave", () => {
		inventario.setInventario([revista, congreso]);
		expect(inventario.filtrado({ keywords: "knapsack" })).toEqual([revista, congreso]);
	});

	test("Filtrado por autor", () => {
		inventario.setInventario([revista, congreso]);
		expect(inventario.filtrado({ author: "Jakob Bossek" })).toEqual([congreso]);
	});

	test("Filtrado por fecha de publicación", () => {
		inventario.setInventario([revista, congreso]);
		expect(inventario.filtrado({ publishDate: new Date("2023-05-01") })).toEqual([revista]);
	});

	test("Filtrado por editorial", () => {
		inventario.setInventario([revista, congreso]);
		expect(inventario.filtrado({ editorial: "ACM" })).toEqual([congreso]);
	});

	test("Should return an empty array if no elements match the filter", () => {
		inventario.setInventario([revista, congreso]);
		expect(inventario.filtrado({ tittle: "Non-existent title" })).toEqual([]);
		expect(inventario.filtrado({ keywords: "non-existent keyword" })).toEqual([]);
		expect(inventario.filtrado({ author: "Non-existent author" })).toEqual([]);
		expect(inventario.filtrado({ publishDate: new Date("2000-01-01") })).toEqual([]);
		expect(inventario.filtrado({ editorial: "Non-existent editorial" })).toEqual([]);
	});

	test("Filtrado con múltiples criterios", () => {
		inventario.setInventario([revista, congreso]);
		expect(inventario.filtrado({ keywords: "knapsack", author: "Alejandro Marrero" })).toEqual([revista, congreso]);
		expect(inventario.filtrado({ keywords: "knapsack", author: "Jakob Bossek" })).toEqual([congreso]);
		expect(inventario.filtrado({ keywords: "knapsack", author: "Non-existent author" })).toEqual([]);
	});

	test("Should return all elements if the filter is empty", () => {
		inventario.setInventario([revista, congreso]);
		expect(inventario.filtrado({})).toEqual([revista, congreso]);
	});
});