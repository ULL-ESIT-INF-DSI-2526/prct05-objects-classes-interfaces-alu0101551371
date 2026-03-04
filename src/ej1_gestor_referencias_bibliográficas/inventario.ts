import { ElementoBibliografico, Revista, Libro, TFG, TFM } from "./elementos";

export class Inventario {
	constructor(private _elementos: ElementoBibliografico[] = []) { }

	public setInventario(elementos: ElementoBibliografico[]): void {
    this._elementos = elementos;
  }

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