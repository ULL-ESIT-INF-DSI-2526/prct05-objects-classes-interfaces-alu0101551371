import { Chef } from "./chef";
import { Recetas } from "./recetario";

export class Sistema {
  private chefs: Chef[];

  /**
   * Crear una nueva instancia del Sistema de gestión de chefs y recetas
   * @param chefs Array inicial de chefs en el sistema
   */
  constructor(chefs: Chef[]) {
    this.chefs = chefs;
  }

  /**
   * Obtiene la lista de todos los chefs en el sistema
   * @returns Array de chefs registrados en el sistema
   */
  public getChefs(): Chef[] {
    return this.chefs;
  }

  /**
   * Establece la lista de chefs en el sistema
   * @param chefs Array de chefs a establecer como nuevos chefs del sistema
   */
  public setChefs(chefs: Chef[]): void {
    this.chefs = chefs;
  }

  /**
   * Agrega un nuevo chef al sistema
   * @param chef Chef a agregar al sistema
   */
  public agregarChef(chef: Chef): void {
    this.chefs.push(chef);
  }

  /**
   * Filtra los chefs del sistema según los criterios especificados
   * @param filtro Objeto con criterios de filtrado opcional (nombre, número de seguidores, recetario)
   * @returns Array de chefs que cumplen con los criterios de filtrado
   */
  public filtradoChefs(filtro: {
    nombre?: string;
    seguidores?: number;
    recetario?: Recetas[];
  }): Chef[] {
    let filtrado: Chef[] = [];
    filtrado = this.chefs.filter((chef) => {
      if (filtro.nombre && filtro.nombre != chef.nombre) return false;
      if (filtro.seguidores && filtro.seguidores != chef.seguidores)
        return false;
      if (
        filtro.recetario &&
        !filtro.recetario.some((receta) => chef.recetario.includes(receta))
      )
        return false;
      return true;
    });
    return filtrado;
  }

  /**
   * Genera una tabla con información detallada de todos los chefs, sus recetas y pasos
   * @returns Array de objetos con información de chefs, recetas y pasos en formato tabular
   */
  public tablaChefs(): {
    chef: string;
    receta: string;
    anyo: number;
    pasos_totales: number;
    tiempo_min: number;
    tiempo_max: number;
    paso: string;
    duracion: number;
    etiquetas: string;
  }[] {
    return this.chefs.flatMap((c) =>
      c.recetario.flatMap((r) =>
        r.pasos.map((p) => ({
          chef: c.nombre,
          receta: r.nombre,
          anyo: r.anyoPublicacion,
          pasos_totales: r.getNumeroPasos(),
          tiempo_min: r.getDuracionTotal()[0],
          tiempo_max: r.getDuracionTotal()[1],
          paso: p.nombre,
          duracion: p.duracion,
          etiquetas: p.etiquetasClasificacion.join(", "),
        })),
      ),
    );
  }

  /**
   * Muestra una tabla formateada en la consola con la información de chefs, recetas y pasos
   */
  public showChefs(): void {
    console.table(this.tablaChefs());
  }
}
