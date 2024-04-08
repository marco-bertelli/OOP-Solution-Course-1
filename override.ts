class FiguraGeometrica {
    protected nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

class Quadrato extends FiguraGeometrica {
    constructor() {
        super("Quadrato");
    }

    calcolaArea(lato: number, lato2?:number): number {
        return lato * lato;
    }
}

class Rettangolo extends Quadrato {
    calcolaArea(lato1: number, lato2: number): number {
        return lato1 * lato2;
    }
}

// Esempio di utilizzo delle classi
const quadrato = new Quadrato();
console.log("Area del quadrato:", quadrato.calcolaArea(5)); // Output: 25

const rettangolo = new Rettangolo();
console.log("Area del rettangolo:", rettangolo.calcolaArea(4, 6)); // Output: 24