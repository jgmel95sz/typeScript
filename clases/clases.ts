class Persona{

    private _nombre: string;

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
   
    
    static metodoEstatico():number{
        return 10;
    }
    
}

let entidad = new Persona("");
entidad.nombre = "hoassla";
console.log(entidad.nombre);

console.log(Persona.metodoEstatico());