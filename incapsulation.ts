class Locale {
    protected nome: string;
    protected indirizzo: string;

    constructor(nome: string, indirizzo: string) {
        this.nome = nome;
        this.indirizzo = indirizzo;
    }
}

class Ristorante extends Locale {
    private numeroPiatti: number;

    constructor(nome: string, indirizzo: string, numeroPiatti: number) {
        super(nome, indirizzo);
        this.numeroPiatti = numeroPiatti;
    }

    visualizzaNome(): string {
        return this.nome;
    }

    visualizzaIndirizzo(): string {
        return this.indirizzo;
    }

    visualizzaNumeroPiatti(): number {
        return this.numeroPiatti;
    }
}

// Esempio di utilizzo della classe Ristorante
const ristorante = new Ristorante("La Trattoria", "Via Roma 123", 50);

console.log("Nome del ristorante:", ristorante.visualizzaNome());
console.log("Indirizzo del ristorante:", ristorante.visualizzaIndirizzo());
console.log("Numero di piatti nel menu:", ristorante.visualizzaNumeroPiatti());