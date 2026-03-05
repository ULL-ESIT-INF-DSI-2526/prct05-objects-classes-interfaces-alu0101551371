# Práctica 5 - Objetos, Clases e Interfaces en TypeScript

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/-ciDUVo2)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=22917910)

## Descripción general

En esta práctica tendremos que resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad los objetos, clases e interfaces de TypeScript.

Todas las soluciones a los ejercicios deberán estar alojadas en el repositorio generado tras la aceptación de la asignación de GitHub Classroom. En ese sentido, utilice en dicho repositorio una estructura de proyecto similar a la que hemos visto en clase.

---

## Estructura del proyecto

```
prct05-objects-classes-interfaces-alu0101551371/
├── src/                                        # Código fuente
│   ├── ej1_gestor_referencias_bibliográficas/
│   │   ├── elementos.ts
│   │   └── inventario.ts
│   ├── ej2_conecta4/
│   │   ├── conecta4.ts
│   │   └── jugador.ts
│   └── ej3_recetario/
│       ├── chef.ts
│       ├── paso.ts
│       ├── recetario.ts
│       └── sistema.ts
├── test/                                       # Pruebas unitarias
│   ├── ej1_gestor.test.ts
│   ├── ej2_conecta4.test.ts
│   └── ej3_recetario.test.ts
├── docs/                                       # Documentación generada
├── dist/                                       # Compilado JavaScript
├── coverage/                                   # Cobertura de pruebas
├── package.json                                # Dependencias y scripts
├── tsconfig.json                               # Configuración TypeScript
├── typedoc.json                                # Configuración TypeDoc
├── vitest.config.js                            # Configuración Vitest
├── vitest.config.ts                            # Configuración Vitest (TypeScript)
├── eslint.config.mjs                           # Configuración ESLint
├── .prettierrc                                 # Configuración Prettier
└── README.md                                   # Este archivo
```

---

## Tareas previas

- Acepte la [asignación de GitHub Classroom]() asociada a esta práctica.
- Comience a familiarizarse con los [principios SOLID]() de Programación Orientada a Objetos. En próximas prácticas, el desarrollo de su código fuente deberá ajustarse a estos principios. También tiene disponibles los apuntes de la asignatura para aprender más sobre dichos principios.
- Lea la documentación sobre [TSDoc]() y [TypeDoc]() y visualice los vídeos de configuración y uso disponibles en el aula virtual. Estas herramientas nos permitirán generar documentación automática a partir de comentarios en nuestro código.
- Familiarícese con las herramientas para integración continua: [Vitest](), [Coveralls]() y flujos de trabajo en [GitHub Actions](). Visualice los vídeos elaborados por el profesorado en el aula virtual. Durante esta práctica el uso de estas herramientas es opcional, pero se recomienda su configuración para próximas prácticas donde será obligatorio.

---

## Ejercicios

Lleve a cabo todos y cada uno de los ejercicios propuestos a continuación. Dado que vamos a trabajar con clases e interfaces y que, probablemente, cada ejercicio implique el desarrollo de diferentes entidades, el código fuente de cada ejercicio deberá estar alojado en un directorio independiente con nombre `ejercicio-n/` dentro del directorio `src/`. Dentro del directorio correspondiente a cada ejercicio, intente incluir cada entidad desarrollada en un fichero independiente.

Incluya la documentación de sus clases mediante el uso de **TSDoc** y genere dicha documentación con **TypeDoc**. Luego, adopte una metodología de **desarrollo dirigido por pruebas (TDD)**. Tenga en cuenta que seguir la metodología TDD implica confirmar el correcto funcionamiento del código desarrollado, así como los casos en los que dicho código debería informar de un error cuando la entrada no sea la correcta (errors should never pass silently). En consecuencia, desarrolle pruebas unitarias que comprueben el correcto funcionamiento del código y, además, incluya otras pruebas unitarias que verifiquen que el software es robusto ante entradas no válidas o inesperadas.

---

### Ejercicio 1 - Gestor de referencias bibliográficas

Los gestores de referencias bibliográficas son herramientas que permiten almacenar, consultar y exportar información en diferentes formatos sobre elementos bibliográficos: recursos electrónicos, trabajos de fin de titulación (grado o máster), tesis, patentes, artículos de revistas, contribuciones a congresos, libros o capítulos de libros, entre otros.

Deberá diseñar e implementar el conjunto de clases e interfaces necesarias para representar un gestor de referencias bibliográficas que permita gestionar información sobre diferentes tipos de elementos bibliográficos.

**Información mínima de cada elemento bibliográfico:**
- Título
- Autor o autores
- Palabras clave
- Resumen
- Fecha de publicación
- Páginas
- Editorial

Tenga en cuenta que cada elemento bibliográfico puede contener información adicional dependiendo de su tipología. Por ejemplo, un artículo de revista deberá incluir número de revista y volumen.

**Funcionalidad requerida del gestor:**
- Almacenar la información de múltiples elementos bibliográficos
- Mostrar por la consola la información almacenada en formato tabla (`console.table`)
- Permitir búsquedas de elementos bibliográficos por palabras clave
- Filtrar resultados por título, autores, fecha de publicación y editorial
- Mostrar resultados de búsqueda en formato tabla
- Exportar resultados de búsqueda en formato IEEE
- Con independencia del tipo de elemento bibliográfico, siempre deberá poder obtener una referencia en formato IEEE

**Tipos de elementos bibliográficos a considerar:**
- Artículos de revista
- Contribuciones a congreso
- Capítulos de libro
- Trabajos de Fin de Grado (TFG)
- Trabajos de Fin de Máster (TFM)

---

### Ejercicio 2 - Conecta 4

Todos (o casi todos) hemos jugado alguna vez al Conecta 4. En una rejilla de 6 filas y 7 columnas, dos jugadores se turnan para ir colocando un conjunto de fichas dejándolas caer por alguna de las siete columnas de la rejilla. Cada jugador dispone de un total de 21 fichas de un color diferente.

En cada turno, una ficha tomará la primera posición libre de la columna seleccionada por el jugador que corresponda. Si la columna está completa, esto es, ya cuenta con seis fichas, dicha columna no podrá ser seleccionada.

El objetivo del jugador es colocar cuatro fichas consecutivas ya sea en una misma fila, una misma columna o en diagonal.

Cree la jerarquía de clases e interfaces necesarias para implementar el juego Conecta 4.

**Funcionalidad requerida:**
- El juego comienza con el Jugador 1 colocando la primera ficha
- Los jugadores deben ir alternándose en turnos sucesivos con el Jugador 2
- Se deberá mostrar por consola a qué jugador le toca colocar una ficha
- Si un jugador intenta colocar una ficha en una columna completa, se mostrará un mensaje informando de que la columna está completa y se le permitirá seleccionar otra columna
- Una vez que el jugador correspondiente haya colocado una ficha, debe mostrarse el estado del tablero
- Cuando alguno de los dos jugadores gane, se debe informar de lo anterior en la consola y terminar el juego

---

### Ejercicio 3 - Recetario

Diseñe el conjunto de clases e interfaces necesarias para almacenar un recetario.

**Información de un chef:**
- Nombre
- Seguidores
- Recetario

**Información de una receta:**
- Nombre
- Año de publicación
- Pasos

**Información de cada paso de una receta:**
- Nombre/Descripción corta
- Duración estimada en segundos
- Etiquetas de clasificación
- Paso opcional (booleano)
- Número de veces completado

**Funcionalidad requerida del sistema:**
- Almacenar información de diferentes chefs, sus recetas y los pasos para elaborar cada una de ellas
- Mostrar por la consola toda la información en formato tabla (`console.table`)
- Llevar a cabo búsquedas de chefs, recetas y pasos mostrando resultados en formato tabla
- Calcular el número de pasos de una receta
- Calcular el tiempo total de elaboración de una receta, a partir de la duración de todos sus pasos
- Si la receta posee pasos opcionales, proporcionar un rango con el tiempo mínimo y máximo de elaboración

---

## Scripts disponibles

| Script           | Descripción                                                   |
| ---------------- | ------------------------------------------------------------- |
| `npm run dev`    | Ejecuta el compilador en modo observador                      |
| `npm run test`   | Ejecuta las pruebas unitarias con Vitest                      |
| `npm run doc`    | Genera documentación con TypeDoc                              |
| `npm run format` | Formatea el código con Prettier                               |

---

## Pruebas unitarias

Cada ejercicio cuenta con una suite de pruebas unitarias en la carpeta `test/`. Las pruebas se ejecutan con Vitest.

### Ejecutar pruebas

```bash
# Ejecutar todas las pruebas
npm run test
```

---

## Generación de documentación

Se utiliza TypeDoc para generar documentación automática a partir de los comentarios JSDoc.

```bash
# Generar documentación
npm run doc

# La documentación se genera en la carpeta /docs
```

---

## Verifica código

```bash
# Ejecutar ESLint
npx eslint .

# Formatear con Prettier
npm run format
```

---

## Enlaces útiles

- [Práctica 5 - Objetos, clases e interfaces](https://ull-esit-inf-dsi-2526.github.io/prct05-objects-classes-interfaces/)
- [Objetos, clases e interfaces](https://ull-esit-inf-dsi-2526.github.io/typescript-theory/typescript-objects-classes-interfaces.html)
- [Guía de Vitest](https://vitest.dev/)
- [TypeDoc - Generador de documentación](https://typedoc.org/)
- [ESLint - Linter para JavaScript/TypeScript](https://eslint.org/)
- [Prettier - Code Formatter](https://prettier.io/)

---

Última actualización: 5 de marzo de 2026

[![CI Tests](https://github.com/ULL-ESIT-INF-DSI-2526/prct05-objects-classes-interfaces-alu0101551371/actions/workflows/ci.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2526/prct05-objects-classes-interfaces-alu0101551371/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2526/prct05-objects-classes-interfaces-alu0101551371/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2526/prct05-objects-classes-interfaces-alu0101551371?branch=main)