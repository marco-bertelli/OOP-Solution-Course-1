class Veicolo {
    suonaClacson(): string {
        return "Clacson generico";
    }
}

class Automobile extends Veicolo {
    suonaClacson(): string {
        return "Beep Beep!";
    }
}

class Camion extends Veicolo {
    suonaClacson(): string {
        return "Honk Honk!";
    }
}

// Funzione per utilizzare il polimorfismo
function suonaClacsonVeicolo(veicolo: Veicolo): void {
    console.log(veicolo.suonaClacson());
}

// Esempio di utilizzo delle classi
const automobile = new Automobile();
const camion = new Camion();

suonaClacsonVeicolo(automobile); // Output: "Beep Beep!"
suonaClacsonVeicolo(camion);     // Output: "Honk Honk!"