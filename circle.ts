class Cerchio {
    raggio: number;

    constructor(raggio: number) {
        this.raggio = raggio;
    }

    calcolaArea(): number {
        return Math.PI * Math.pow(this.raggio, 2);
    }

    calcolaCirconferenza(): number {
        return 2 * Math.PI * this.raggio;
    }
}

// Esempio di utilizzo della classe Cerchio
const cerchio = new Cerchio(5);

console.log("Area del cerchio:", cerchio.calcolaArea());
console.log("Circonferenza del cerchio:", cerchio.calcolaCirconferenza());