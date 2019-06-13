export class Persona{
    private _nombre:string;

	constructor(nombre: string) {
		this._nombre = nombre;
    }

    /**
     * Getter nombre
     * @return {string}
     */
	public get nombre(): string {
		return this._nombre;
	}

    /**
     * Setter nombre
     * @param {string} value
     */
	public set nombre(value: string) {
		this._nombre = value;
	}
 

}