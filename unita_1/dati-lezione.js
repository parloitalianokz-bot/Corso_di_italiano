/**
 * DATI LEZIONE - CONFIGURAZIONE
 */

export const ConfigLezione = {
    // 1. ID UNIVOCO PER FIREBASE
    idFirebase: "unita_01_albergo_centro",

    // 2. INTESTAZIONE
    titolo: "Unità 1 - Un albergo in centro",
    sottotitolo: "Livello A1 - Iniziamo a viaggiare",
    bannerImg: "img/ponte_vecchio_firenze.jpg", 

    // 3. SCHEDA 1: ESPLORAZIONE E GIOCO LESSICALE
    elicitazione: {
        titolo: "✨ Conosci l'Italia e i personaggi?",
        intro: "Osserva la mappa e le flashcard. Clicca sulle immagini per ascoltare e memorizzare le parole.",
        immagineMappa: "img/mappa_italia.webp",
        vocabolario: [
            { parola: "L'albergo", audio: "audio/albergo.mp3", img: "img/albergo.webp" },
            { parola: "Il centro", audio: "audio/centro.mp3", img: "img/centro.webp" },
            { parola: "La camera", audio: "audio/camera.mp3", img: "img/camera.webp" },
            { parola: "L'avvocato", audio: "audio/avvocato.mp3", img: "img/avvocato.webp" },
            { parola: "Lo studente", audio: "audio/studente.mp3", img: "img/studente.webp" },
            { parola: "L'insegnante", audio: "audio/insegnante.mp3", img: "img/insegnante.webp" },
            { parola: "Il dentista", audio: "audio/dentista.mp3", img: "img/dentista.webp" },
            { parola: "Il direttore", audio: "audio/direttore.mp3", img: "img/direttore.webp" },
            { parola: "Grande", audio: "audio/grande.mp3", img: "img/grande.webp" },
            { parola: "Comodo", audio: "audio/comodo.mp3", img: "img/comodo.webp" },
            { parola: "Occupato", audio: "audio/occupato.mp3", img: "img/occupato.webp" }
        ]
    },

    // 4. SCHEDA 2: ASCOLTO
    ascolto: {
        titolo: "🎧 Ascolto",
        videoUrl: "5FpbKA_i074", // <--- Inserisci solo l'ID qui
        istruzioni: "Guarda il video e ascolta attentamente la pronuncia."
    },

    // 5. SCHEDA 3: LETTURA
    lettura: {
    titolo: "📖 Lettura: Un albergo in centro",
    testoFormattato: `
        <p>L'albergo "Ponte Vecchio" <b>è</b> a Firenze, in Italia. <b>È</b> un albergo grande, con molte camere. <b>È</b> un albergo comodo per gli stranieri, perché <b>è</b> in centro.</p>
        <p>Chi sono gli ospiti dell'albergo "Ponte Vecchio" in questo momento?</p>
        <p>Victor <b>è</b> un cliente dell'albergo. Victor <b>è</b> francese; <b>è</b> avvocato. Adesso <b>è</b> in Italia per affari.</p>
        <p>Anche Klaus e Karl sono clienti dell'albergo. Sono tedeschi e sono studenti. Sono in Italia per studiare l'italiano.</p>
        <p>Mary <b>è</b> inglese; <b>è</b> insegnante, ed <b>è</b> in Italia per insegnare l'inglese. Yoko, invece, <b>è</b> giapponese; <b>è</b> dentista ed <b>è</b> in Italia per una conferenza.</p>
        <p>Olga <b>è</b> russa. <b>È</b> studentessa. <b>È</b> in Italia per studiare l'italiano e per fare shopping.</p>
        <p>Paolo Rossi <b>è</b> il direttore dell'albergo "Ponte Vecchio". <b>È</b> sposato e ha tre figli. <b>È</b> sempre molto occupato con i clienti.</p>
    `
},

    // 6. SCHEDA 4: COMPRENSIONE
    comprensione: {
        titolo: "📝 Comprensione",
        istruzioni: "Scegli la risposta corretta per ogni domanda. Quando sei sicuro, clicca su 'Invia Risposta'.",
        domande: [
            {
                id: "q1",
                testo: "1. L’albergo Ponte Vecchio",
                opzioni: ["a. è a Roma.", "b. è a Firenze."],
                corretta: 1 
            },
            {
                id: "q2",
                testo: "2. L’albergo Ponte Vecchio",
                opzioni: ["a. è in periferia", "b. è in centro"],
                corretta: 1
            },
            {
                id: "q3",
                testo: "3. Victor è",
                opzioni: ["a. avvocato.", "b. il direttore dell'albergo."],
                corretta: 0
            },
            {
                id: "q4",
                testo: "4. Victor",
                opzioni: ["a. è in Italia per turismo", "b. è in Italia per affari"],
                corretta: 1
            },
            {
                id: "q5",
                testo: "5. Karl e Klaus",
                opzioni: ["a. è studente", "b. sono studenti"],
                corretta: 1
            },
            {
                id: "q6",
                testo: "6. Karl e Klaus",
                opzioni: ["a. sono in Italia per studiare il tedesco", "b. sono in Italia per studiare l’italiano"],
                corretta: 1
            },
            {
                id: "q7",
                testo: "7. Mary è in Italia",
                opzioni: ["a. per insegnare l'inglese", "b. per insegnare l'italiano."],
                corretta: 0
            },
            {
                id: "q8",
                testo: "8. Mary è",
                opzioni: ["a. un’insegnante inglese", "b. un’insegnante italiana"],
                corretta: 0
            },
            {
                id: "q9",
                testo: "9. Yoko",
                opzioni: ["a. è insegnante", "b. è dentista"],
                corretta: 1
            },
            {
                id: "q10",
                testo: "10. Yoko è in Italia",
                opzioni: ["a. per una conferenza", "b. per turismo"],
                corretta: 0
            },
            {
                id: "q11",
                testo: "11. Olga è in Italia",
                opzioni: ["a. per conoscere i ragazzi italiani", "b. per studiare e per fare shopping"],
                corretta: 1
            },
            {
                id: "q12",
                testo: "12. Olga è",
                opzioni: ["a. una studentessa italiana", "b. una studentessa di italiano"],
                corretta: 1
            },
            {
                id: "q13",
                testo: "13. Il direttore dell’albergo",
                opzioni: ["a. è molto occupato.", "b. è molto sposato"],
                corretta: 0
            }
        ]
   },
    
        produzioneDomande: {
    titolo: "✍️ Crea la domanda",
    istruzioni: "Leggi la risposta e scrivi la domanda corretta usando il suggerimento.",
    esercizi: [
        {
            id: "p1",
            risposta: "L’albergo Ponte Vecchio è a Firenze.",
            guida: "💡 Dove?",
            modello: "Dove è l’albergo Ponte Vecchio?"
        },
        {
            id: "p2",
            risposta: "L’albergo Ponte Vecchio è in centro.",
            guida: "💡 Dove?",
            modello: "Dove è l’albergo Ponte Vecchio?"
        },
        {
            id: "p3",
            risposta: "Victor è un avvocato.",
            guida: "💡 Chi? Che lavoro fa?",
            modello: "Chi è Victor? Che lavoro fa Victor?"
        },
        {
            id: "p4",
            risposta: "Victor è in Italia per affari.",
            guida: "💡 Perché?",
            modello: "Perché Victor è in Italia?"
        },
        {
            id: "p5",
            risposta: "Karl e Klaus sono studenti.",
            guida: "💡 Chi?",
            modello: "Chi sono Karl e Klaus?"
        },
        {
            id: "p6",
            risposta: "Karl e Klaus sono in Italia per studiare l’italiano.",
            guida: "💡 Perché?",
            modello: "Perché Karl e Klaus sono in Italia?"
        },
        {
            id: "p7",
            risposta: "Mary è in Italia per insegnare l'inglese.",
            guida: "💡 Perché?",
            modello: "Perché Mary è in Italia?"
        },
        {
            id: "p8",
            risposta: "Mary è un’insegnante inglese.",
            guida: "💡 Chi? Che lavoro fa?",
            modello: "Chi è Mary? Che lavoro fa Mary?"
        },
        {
            id: "p9",
            risposta: "Yoko è dentista.",
            guida: "💡 Che lavoro fa?",
            modello: "Che lavoro fa Yoko?"
        },
        {
            id: "p10",
            risposta: "Yoko è in Italia per una conferenza.",
            guida: "💡 Perché?",
            modello: "Perché Yoko è in Italia?"
        },
        {
            id: "p11",
            risposta: "Olga è in Italia per studiare e per fare shopping.",
            guida: "💡 Perché?",
            modello: "Perché Olga è in Italia?"
        },
        {
            id: "p12",
            risposta: "Olga è una studentessa di italiano.",
            guida: "💡 Chi? Che cosa studia?",
            modello: "Chi è Olga? Che cosa studia?"
        },
        {
            id: "p13",
            risposta: "Il direttore dell’albergo è molto occupato.",
            guida: "💡 Com'è?",
            modello: "Com'è il direttore dell’albergo?"
        }
    ]
    },

    produzioneRisposte: {
        titolo: "🗣️ Rispondi alle domande",
        istruzioni: "👉 Ora provate a rispondere alle domande con frasi complete!",
        esercizi: [
            { id: "r1", domanda: "1) Dov’è l’albergo Ponte Vecchio?" },
            { id: "r2", domanda: "2) Perché è comodo per i turisti?" },
            { id: "r3", domanda: "3) Chi sono i clienti dell’albergo?" },
            { id: "r4", domanda: "4) Chi è Victor?" },
            { id: "r5", domanda: "5) Perché Victor è in Italia?" },
            { id: "r6", domanda: "6) Chi è Yoko?" },
            { id: "r7", domanda: "7) Perché Yoko è in Italia?" },
            { id: "r8", domanda: "8) Chi sono Karl e Klaus?" },
            { id: "r9", domanda: "9) Perché Karl e Klaus sono in Italia?" },
            { id: "r10", domanda: "10) Chi è Olga?" },
            { id: "r11", domanda: "11) Perché Olga è in Italia?" },
            { id: "r12", domanda: "12) Chi è Mary?" },
            { id: "r13", domanda: "13) Perché Mary è in Italia?" },
            { id: "r14", domanda: "14) Chi è il signor Rossi?" }
        ]
    },

    riordinoDialoghi: {
        titolo: "🔄 Riordina i dialoghi",
        istruzioni: "👉 Lavorate in coppia: usate le frecce ⬆️ e ⬇️ per mettere in ordine le frasi del dialogo. Poi cliccate su 'Verifica'.",
        esercizi: [
            {
                id: "dial_1",
                fraseFissa: "— Ciao Olga! Sei inglese?",
                frasiMobili: [
                    "— No, non sono inglese; sono russa.",                      // 1
                    "— Tu lavori o studi?",                                     // 2
                    "— Sono studentessa.",                                      // 3
                    "— Perché sei in Italia?",                                  // 4
                    "— Sono in Italia perché la moda italiana è molto bella."   // 5
                ],
                variantiAccettate: [
                    [1, 4, 5, 2, 3] 
                ]
            },
            {
                id: "dial_2",
                fraseFissa: "— Buongiorno Victor! Lei è tedesco?",
                frasiMobili: [
                    "— No, non sono tedesco, sono francese.",                   // 1
                    "— Lei è ingegnere?",                                       // 2
                    "— No, sono avvocato.",                                     // 3
                    "— Perché è in Italia?",                                    // 4
                    "— Per affari."                                             // 5
                ],
                variantiAccettate: [
                    [1, 4, 5, 2, 3] 
                ]
            },
            {
                id: "dial_3",
                fraseFissa: "— Buongiorno Karl e Klaus! Voi siete stranieri?",
                frasiMobili: [
                    "— Sì, siamo stranieri; siamo tedeschi.",                   // 1
                    "— Siete in Italia per turismo?",                           // 2
                    "— No, siamo qui per studiare l’italiano.",                 // 3
                    "— Abitate in albergo?",                                    // 4
                    "— Sì, siamo clienti dell’albergo Ponte Vecchio."           // 5
                ],
                variantiAccettate: [
                    [1, 4, 5, 2, 3] 
                ]
            }
        ]
    }

    

    // 7. SCHEDA 5: GRAMMATICA
    grammatica: {
        titolo: "🧐 Alla scoperta della Grammatica",
        spiegazione: "...",
        idLavagna: "grammatica_box"
    },

    // 8. SCHEDA 6: PRODUZIONE ORALE
    orale: {
        titolo: "💬 Produzione Orale",
        spunto: "...",
        idLavagna: "orale_box"
    },

    // 9. SCHEDA 7: RINFORZO
    rinforzo: {
        titolo: "🛠️ Rinforzo",
        istruzioni: "...",
        idLavagna: "rinforzo_box"
    },

    // 10. SCHEDA 8: AUTOVALUTAZIONE
    autovalutazione: {
        titolo: "🏁 Autovalutazione",
        idLavagna: "auto_box"
    }
}; // <-- CHIUSURA DEFINITIVA DELL'OGGETTO
