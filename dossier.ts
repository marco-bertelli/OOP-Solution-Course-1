class DossierTitoli {
    private titolari: Titolare[];
    private operazioni: Operazione[];

    constructor(titolari: Titolare[]) {
        if (titolari.length === 0) {
            throw new Error('Deve esistere almeno un titolare.');
        }
        this.titolari = titolari;
        this.operazioni = [];
    }

    aggiungiTitolare(titolare: Titolare) {
        this.titolari.push(titolare);
    }

    aggiungiCointestatario(cointestatario: Cointestatario) {
        if (this.titolari.length === 0) {
            throw new Error('Deve esistere almeno un titolare per aggiungere un cointestatario.');
        }
        this.titolari.push(cointestatario);
    }

    aggiungiDelegato(delegato: Delegato) {
        if (this.titolari.length === 0) {
            throw new Error('Deve esistere almeno un titolare per aggiungere un delegato.');
        }
        this.titolari.push(delegato);
    }

    aggiungiOperazione(operazione: Operazione) {
        this.operazioni.push(operazione);
    }

    calcolaValoreTotale(): number {
        let valoreTotale = 0;
        for (const operazione of this.operazioni) {
            if (operazione.tipo === TipoOperazione.Acquisto) {
                valoreTotale += operazione.quantita * operazione.valoreNominal;
            } else if (operazione.tipo === TipoOperazione.Vendita) {
                valoreTotale -= operazione.quantita * operazione.valoreNominal;
            }
        }
        return valoreTotale;
    }

    estrattoConto(rangeDate: {dataInizio: Date, dataFine: Date}): Operazione[] {
        return this.operazioni.filter(operazione =>
            operazione.dataEsecuzione >= rangeDate.dataInizio && operazione.dataEsecuzione <= rangeDate.dataFine
        );
    }
}

class Titolare {
    constructor(private codiceFiscale: string) {
        if (!codiceFiscale) {
            throw new Error('Un titolare deve avere un codice fiscale.');
        }
    }
}

class Cointestatario extends Titolare {}

class Delegato extends Titolare {}

enum TipoOperazione {
    Acquisto,
    Vendita,
    Scambio
}

class Operazione {
    constructor(
        public tipo: TipoOperazione,
        public nomeTitolo: string,
        public quantita: number,
        public valoreNominal: number,
        public dataEsecuzione: Date
    ) {}
}

// Utilizzo delle classi
const titolare1 = new Titolare('ABCDEF01G23H456I');
const dossier = new DossierTitoli([titolare1]);
const operazione1 = new Operazione(TipoOperazione.Acquisto, 'Azione1', 10, 100, new Date());
dossier.aggiungiOperazione(operazione1);
const estrattoConto = dossier.estrattoConto({dataInizio: new Date('2024-01-01'), dataFine: new Date()});
console.log('Estratto conto:', estrattoConto);
console.log('Valore totale dei titoli:', dossier.calcolaValoreTotale());