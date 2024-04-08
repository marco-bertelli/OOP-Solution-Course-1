interface GestoreConto {
    deposita(ammontare: number): void;
    preleva(ammontare: number): void;
    visualizzaSaldo(): void;
}

class ContoBancario implements GestoreConto {
    private saldo: number;

    constructor(saldoIniziale: number) {
        this.saldo = saldoIniziale;
    }

    deposita(ammontare: number): void {
        if (ammontare > 0) {
            this.saldo += ammontare;
            console.log(`Hai depositato ${ammontare} euro. Il saldo attuale è ${this.saldo} euro.`);
        } else {
            console.log("L'ammontare da depositare deve essere maggiore di zero.");
        }
    }

    preleva(ammontare: number): void {
        if (ammontare > 0 && ammontare <= this.saldo) {
            this.saldo -= ammontare;
            console.log(`Hai prelevato ${ammontare} euro. Il saldo attuale è ${this.saldo} euro.`);
        } else {
            console.log("Non hai abbastanza fondi per effettuare il prelievo.");
        }
    }

    visualizzaSaldo(): void {
        console.log(`Il saldo attuale è ${this.saldo} euro.`);
    }
}

// Esempio di utilizzo della classe ContoBancario
const mioConto = new ContoBancario(1000);

mioConto.deposita(500);
mioConto.preleva(200);
mioConto.visualizzaSaldo();