class Persona {
    protected nome: string;
    protected cognome: string;

    constructor(nome: string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome;
    }
}

class Studente extends Persona {
    private matricola: string;

    constructor(nome: string, cognome: string, matricola: string) {
        super(nome, cognome);
        this.matricola = matricola;
    }

    descrizione(): string {
        return `Studente: ${this.nome} ${this.cognome}, Matricola: ${this.matricola}`;
    }
}

// Esempio di utilizzo delle classi
const studente = new Studente("Mario", "Rossi", "123456");
console.log(studente.descrizione()); // Output: "Studente: Mario Rossi, Matricola: 123456"