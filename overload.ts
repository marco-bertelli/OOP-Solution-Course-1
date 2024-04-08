class Calcolatrice {
    calcola(x: number, y: number): number;
    calcola(x: string, y: string): string;
    
    calcola(x: number | string, y: number | string): number | string {
        if (typeof x === 'number' && typeof y === 'number') {
            return this.calcolaNumeri(x, y);
        } else if (typeof x === 'string' && typeof y === 'string') {
            return this.calcolaStringhe(x, y);
        } else {
            throw new Error("I tipi forniti non sono supportati.");
        }
    }

    private calcolaNumeri(x: number, y: number): number {
        return x + y;
    }

    private calcolaStringhe(x: string, y: string): string {
        return x + y;
    }
}

// Esempio di utilizzo della classe Calcolatrice
const calcolatrice = new Calcolatrice();

console.log(calcolatrice.calcola(5, 3)); // Stampa: 8
console.log(calcolatrice.calcola("Hello", " World")); // Stampa: Hello World