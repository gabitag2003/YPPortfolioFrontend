export class persona{
    id?: number; // con el signo de interrogación indicamos que ese dato no es necesario
    nombre: string;
    apellido : string ;   
    descripcion: string;
    img: string;


    constructor(nombre: string, apellido: string, descripcion: string,  img:string){
    this.nombre = nombre;
    this.apellido= apellido;
    this.descripcion = descripcion;
    this.img= img;
}
}