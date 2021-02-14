class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}




class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: ${this._idRaton} ${this._tipoEntrada} ${this._marca}`
    }
}

let raton1 = new Raton("USB", "Zowie");
console.log(raton1.toString());


class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclados = ++Teclado.contadorTeclados;
    }
    get idTeclados(){
        return this._idTeclados;
    }
    toString(){
        return `Teclado: ${this._idTeclados} ${this._tipoEntrada} ${this._marca}`
    }
}

let teclado1 = new Teclado("USB", "Red Dragon");
console.log(teclado1.toString());

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño; 
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: ${this._idMonitor} ${this._marca}  ${this._tamaño}`;
    }
}

let monitor1 = new Monitor("ViewSonic", 32);
console.log(monitor1.toString());

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    toString(){
        return `Computadora: ${this._idComputadora} \n ${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._raton}`;
    }
}

let computadora1 = new Computadora("PC GAMER", monitor1, teclado1, raton1);
console.log(computadora1.toString());

class Orden{
    static contadorOrdenes = 0;
    constructor(){
            this._idOrden = ++Orden.contadorOrdenes;
            this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }
    mostrarOrden(){
        let computadorasOrden = "";
        for(let computadora of this._computadoras){
            computadorasOrden += `${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();