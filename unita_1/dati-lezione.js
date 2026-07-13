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
        domande: [{ id: "domanda1", testo: "Domanda 1?" }]
    },

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