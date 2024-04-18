class ArchiviazioneFile {
    private db: any;
    private parser: Parser;

    constructor(database: any, parser: Parser) {
        this.db = database;
        this.parser = parser;
    }

    async eseguiOperazione(path: string): Promise<void> {
        console.log('Log inizio operazione');
        try {
            const records = await this.parser.leggiFile(path);
            console.log(`Letti ${records.length} record dal file`);

            const recordValidati = await this.parser.validaRecords(records);
            console.log(`Validati ${recordValidati.length} record`);

            await this.salvaNelDatabase(recordValidati);
            console.log('Record salvati nel database');
        } catch (error) {
            console.error('Errore durante l\'operazione:', error);
        }
        console.log('Log fine operazione');
    }

    private async salvaNelDatabase(records: any[]): Promise<void> {
        // Implementazione del salvataggio nel database
    }
}

interface Parser {
    leggiFile(path: string): Promise<any[]>;
    validaRecords(records: any[]): Promise<any[]>;
}

class XMLParser implements Parser {
    async leggiFile(path: string): Promise<any[]> {
        // Implementazione specifica per la lettura di file XML
        return [];
    }

    async validaRecords(records: any[]): Promise<any[]> {
        // Implementazione specifica per la validazione di record XML
        return [];
    }
}

class JSONParser implements Parser {
    async leggiFile(path: string): Promise<any[]> {
        // Implementazione specifica per la lettura di file JSON
        return [];
    }

    async validaRecords(records: any[]): Promise<any[]> {
        // Implementazione specifica per la validazione di record JSON
        return [];
    }
}

class CSVParser implements Parser {
    async leggiFile(path: string): Promise<any[]> {
        // Implementazione specifica per la lettura di file CSV
        return [];
    }

    async validaRecords(records: any[]): Promise<any[]> {
        // Implementazione specifica per la validazione di record CSV
        return [];
    }
}

// Utilizzo delle classi
const dbConfig = {/* Configurazione del database */};
const xmlParser = new XMLParser();
const jsonParser = new JSONParser();
const csvParser = new CSVParser();

const archiviazioneXML = new ArchiviazioneFile(dbConfig, xmlParser);
const archiviazioneJSON = new ArchiviazioneFile(dbConfig, jsonParser);
const archiviazioneCSV = new ArchiviazioneFile(dbConfig, csvParser);

// Esecuzione delle operazioni
archiviazioneXML.eseguiOperazione('percorso/al/file.xml');
archiviazioneJSON.eseguiOperazione('percorso/al/file.json');
archiviazioneCSV.eseguiOperazione('percorso/al/file.csv');