

export class Todo{
    constructor(tarea){
        this.tarea = tarea;
        this.id    = new Date().getTime(); //123525252
        this.completado = false;
        this.creado = new Date();
    }
}