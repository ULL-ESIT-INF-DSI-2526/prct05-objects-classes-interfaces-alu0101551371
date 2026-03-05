import { ElementoBibliografico } from "./elementos";

export class Inventario {
  /**
   * Crear una nueva instancia del Inventario de referencias bibliográficas
   * @param _elementos Lista inicial de elementos bibliográficos en el inventario
   */
	constructor(private _elementos: ElementoBibliografico[] = []) { }

  /**
   * Establece los elementos del inventario
   * @param elementos Array de elementos bibliográficos a establecer en el inventario
   */
	public setInventario(elementos: ElementoBibliografico[]): void {
    this._elementos = elementos;
  }

  /**
   * Filtra los elementos del inventario según los criterios especificados
   * @param filtro Objeto con criterios de filtrado opcional (título, palabras clave, autor, fecha de publicación, editorial)
   * @returns Array de elementos bibliográficos que cumplen con los criterios de filtrado
   */
	public filtrado(filtro: {tittle?: string, keywords?: string, author?: string, publishDate?: Date, editorial?: string} ): ElementoBibliografico[] {
    let new_inventario: ElementoBibliografico[] = this._elementos;
    new_inventario = new_inventario.filter( elemento => {
      if (filtro.tittle && elemento.titulo != filtro.tittle ) return false;
      if (filtro.keywords && !elemento.palabrasClave.includes(filtro.keywords)) return false; 
      if (filtro.author && !elemento.autor.includes(filtro.author)) return false;
      if (filtro.publishDate && elemento.fechaPublicacion.getTime() != filtro.publishDate.getTime()) return false;
      if (filtro.editorial && elemento.editorial != filtro.editorial) return false;
      return true;
    });
    return new_inventario;
  }
}