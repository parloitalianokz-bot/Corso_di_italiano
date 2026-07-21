/**
 * DATI LEZIONE - CONFIGURAZIONE COMPLETA
 */

export const ConfigLezione = {
    // 1. ID UNIVOCO PER FIREBASE
    idFirebase: "unita_002",

    // 2. INTESTAZIONE
    titolo: "Unità 2 - Un bravo ragazzo",
    sottotitolo: "Livello A1 - Possesso e sensazioni",
    bannerImg: "img/banner_unita2.webp",

    // 3. SCHEDA 1
    elicitazione: {
    titolo: "Fase 1: ✨ Sei giovane o anziano?",
    intro: "Clicca sull'immagine che rappresenta la tua età. Poi guarda il tabellone per vedere le risposte della classe.",
    
    categorieEta: [
        { id: "bambino", etichetta: "Bambino / Bambina", img: "img/bambini_categoria.webp" },
        { id: "ragazzo", etichetta: "Ragazzo / Ragazza", img: "img/ragazzi_categoria.webp" },
        { id: "adulto", etichetta: "Adulto / Adulta", img: "img/adulti_categoria.webp" },
        { id: "anziano", etichetta: "Anziano / Anziana", img: "img/anziani_categoria.webp" }
        ],

        flashcardCibo: [
    { parola: "Bistecca alla Fiorentina", audio: "audio/cibo/bistecca_fiorentina.mp3", img: "img/cibo/bistecca_fiorentina.webp" },
    { parola: "Bruschette", audio: "audio/cibo/bruschette.mp3", img: "img/cibo/bruschette.webp" },
    { parola: "Caprese", audio: "audio/cibo/caprese.mp3", img: "img/cibo/caprese.webp" },
    { parola: "Gelato", audio: "audio/cibo/gelato.mp3", img: "img/cibo/gelato.webp" },
    { parola: "Lasagne", audio: "audio/cibo/lasagne.mp3", img: "img/cibo/lasagne.webp" },
    { parola: "Pizza", audio: "audio/cibo/pizza.mp3", img: "img/cibo/pizza.webp" },
    { parola: "Ravioli", audio: "audio/cibo/ravioli.mp3", img: "img/cibo/ravioli.webp" },
    { parola: "Risotto", audio: "audio/cibo/risotto.mp3", img: "img/cibo/risotto.webp" },
    { parola: "Spaghetti ai Frutti di Mare", audio: "audio/cibo/spaghetti_frutti_mare.mp3", img: "img/cibo/spaghetti_frutti_mare.webp" },
    { parola: "Spaghetti alla Carbonara", audio: "audio/cibo/spaghetti_carbonara.mp3", img: "img/cibo/spaghetti_carbonara.webp" },
    { parola: "Tiramisù", audio: "audio/cibo/tiramisu.mp3", img: "img/cibo/tiramisu.webp" }
],

        // Attività di brainstorming (forum con risposte personali)
domandeBrainstorming: [
    {
        id: "fame",
        domanda: "🍝 Cosa mangi quando hai fame?",
        placeholder: "Quando ho fame, mangio...",
        chiaveFirebase: "brainstorming_fame"
    }
],
    
    immagineMappa: "",
    vocabolario: []
},
        
    // 4. SCHEDA 2
    ascolto: {
        titolo: "Fase 2: 🎧 Orecchie aperte! (Ascolto)",
        videoUrl: "5FpbKA_i074",
        istruzioni: "Guarda il video e ascolta attentamente la pronuncia.",
        taskBrainstorming: { id: "u001_ascolto_brainstorming", titolo: "1. Caccia alle parole!", placeholder: "Scrivi una parola che hai sentito..." },
        taskComprensione: { id: "u001_ascolto_comprensione", titolo: "2. Cosa hai capito?", domanda: "Riassumi in russo di cosa parla il video:", placeholder: "Scrivi qui il tuo riassunto..." }
    },

    // 5. SCHEDA 3
    lettura: {
        titolo: "Fase 3: 📖 Chi sono i nostri ospiti? (Lettura)",
        testoFormattato: `
            <p>L'albergo "Ponte Vecchio" <b>è</b> a Firenze, in Italia. <b>È</b> un albergo grande, con molte camere. <b>È</b> un albergo comodo per gli stranieri, perché <b>è</b> in centro.</p>
            <p>Chi <b>sono</b> gli ospiti dell'albergo "Ponte Vecchio" in questo momento?</p>
            <p>Victor <b>è</b> un cliente dell'albergo. Victor <b>è</b> francese; <b>è</b> avvocato. Adesso <b>è</b> in Italia per affari.</p>
            <p>Anche Klaus e Karl <b>sono</b> clienti dell'albergo. <b>Sono</b> tedeschi e <b>sono</b> studenti. <b>Sono</b> in Italia per studiare l'italiano.</p>
            <p>Mary <b>è</b> inglese; <b>è</b> insegnante, ed <b>è</b> in Italia per insegnare l'inglese. Yoko, invece, <b>è</b> giapponese; <b>è</b> dentista ed <b>è</b> in Italia per una conferenza.</p>
            <p>Olga <b>è</b> russa. <b>È</b> studentessa. <b>È</b> in Italia per studiare l'italiano e per fare shopping.</p>
            <p>Paolo Rossi <b>è</b> il direttore dell'albergo "Ponte Vecchio". <b>È</b> sposato e ha tre figli. <b>È</b> sempre molto occupato con i clienti.</p>
        `,
        idLavagna: "u001_lettura_glossario",
        istruzioniLavagna: "✍️ Vocabolario: Quali parole nuove hai trovato?"
    },

    // 6. SCHEDA 4
    comprensione: {
        titolo: "Fase 4: 🕵️‍♂️ Sfida di comprensione",
        istruzioni: "Scegli la risposta corretta.",
        domande: [
            { id: "u001_q1", testo: "1. L'albergo Ponte Vecchio è...", opzioni: ["a. a Roma.", "b. a Firenze."], corretta: 1 },
            { id: "u001_q2", testo: "2. L'albergo Ponte Vecchio è...", opzioni: ["a. in periferia", "b. in centro"], corretta: 1 },
            { id: "u001_q3", testo: "3. Victor è...", opzioni: ["a. avvocato.", "b. direttore."], corretta: 0 },
            { id: "u001_q4", testo: "4. Victor è in Italia per...", opzioni: ["a. turismo", "b. affari"], corretta: 1 },
            { id: "u001_q5", testo: "5. Karl e Klaus...", opzioni: ["a. è studente", "b. sono studenti"], corretta: 1 },
            { id: "u001_q6", testo: "6. Karl e Klaus studiano...", opzioni: ["a. il tedesco", "b. l'italiano"], corretta: 1 },
            { id: "u001_q7", testo: "7. Mary è in Italia...", opzioni: ["a. per insegnare l'inglese", "b. per insegnare l'italiano."], corretta: 0 },
            { id: "u001_q8", testo: "8. Mary è...", opzioni: ["a. un'insegnante inglese", "b. un'insegnante italiana"], corretta: 0 },
            { id: "u001_q9", testo: "9. Yoko è...", opzioni: ["a. insegnante", "b. dentista"], corretta: 1 },
            { id: "u001_q10", testo: "10. Yoko è in Italia...", opzioni: ["a. per una conferenza", "b. per turismo"], corretta: 0 },
            { id: "u001_q11", testo: "11. Olga è in Italia...", opzioni: ["a. per conoscere ragazzi", "b. per studiare e fare shopping"], corretta: 1 },
            { id: "u001_q12", testo: "12. Olga è...", opzioni: ["a. una studentessa italiana", "b. una studentessa di italiano"], corretta: 1 },
            { id: "u001_q13", testo: "13. Il direttore...", opzioni: ["a. è molto occupato.", "b. è molto sposato"], corretta: 0 }
        ]
    },

    // 7. PRODUZIONE DOMANDE
    produzioneDomande: {
        titolo: "Fase 5: 🎤 Diventa un reporter",
        istruzioni: "Leggi la risposta e scrivi la domanda corretta.",
        esercizi: [
            { id: "u001_p1", risposta: "L'albergo Ponte Vecchio è a Firenze.", guida: "💡 Dove?", modello: "Dove è l'albergo Ponte Vecchio?" },
            { id: "u001_p2", risposta: "L'albergo Ponte Vecchio è in centro.", guida: "💡 Dove?", modello: "Dove è l'albergo Ponte Vecchio?" },
            { id: "u001_p3", risposta: "Victor è un avvocato.", guida: "💡 Chi? Che lavoro fa?", modello: "Chi è Victor?" },
            { id: "u001_p4", risposta: "Victor è in Italia per affari.", guida: "💡 Perché?", modello: "Perché Victor è in Italia?" },
            { id: "u001_p5", risposta: "Karl e Klaus sono studenti.", guida: "💡 Chi?", modello: "Chi sono Karl e Klaus?" },
            { id: "u001_p6", risposta: "Karl e Klaus studiano l'italiano.", guida: "💡 Perché?", modello: "Perché Karl e Klaus sono in Italia?" },
            { id: "u001_p7", risposta: "Mary è in Italia per insegnare l'inglese.", guida: "💡 Perché?", modello: "Perché Mary è in Italia?" },
            { id: "u001_p8", risposta: "Mary è un'insegnante inglese.", guida: "💡 Chi? Che lavoro fa?", modello: "Chi è Mary?" },
            { id: "u001_p9", risposta: "Yoko è dentista.", guida: "💡 Che lavoro fa?", modello: "Che lavoro fa Yoko?" },
            { id: "u001_p10", risposta: "Yoko è in Italia per una conferenza.", guida: "💡 Perché?", modello: "Perché Yoko è in Italia?" },
            { id: "u001_p11", risposta: "Olga è in Italia per studiare e per fare shopping.", guida: "💡 Perché?", modello: "Perché Olga è in Italia?" },
            { id: "u001_p12", risposta: "Olga è una studentessa di italiano.", guida: "💡 Chi?", modello: "Chi è Olga?" },
            { id: "u001_p13", risposta: "Il direttore è molto occupato.", guida: "💡 Com'è?", modello: "Com'è il direttore?" }
        ]
    },

    // 8. PRODUZIONE RISPOSTE
    produzioneRisposte: {
        titolo: "Fase 6: 💬 Parliamone insieme",
        istruzioni: "Rispondi alle domande.",
        esercizi: [
            { id: "u001_r1", domanda: "1) Dov'è l'albergo Ponte Vecchio?" },
            { id: "u001_r2", domanda: "2) Perché è comodo per i turisti?" },
            { id: "u001_r3", domanda: "3) Chi sono i clienti dell'albergo?" },
            { id: "u001_r4", domanda: "4) Chi è Victor?" },
            { id: "u001_r5", domanda: "5) Perché Victor è in Italia?" },
            { id: "u001_r6", domanda: "6) Chi è Yoko?" },
            { id: "u001_r7", domanda: "7) Perché Yoko è in Italia?" },
            { id: "u001_r8", domanda: "8) Chi sono Karl e Klaus?" },
            { id: "u001_r9", domanda: "9) Perché Karl e Klaus sono in Italia?" },
            { id: "u001_r10", domanda: "10) Chi è Olga?" },
            { id: "u001_r11", domanda: "11) Perché Olga è in Italia?" },
            { id: "u001_r12", domanda: "12) Chi è Mary?" },
            { id: "u001_r13", domanda: "13) Perché Mary è in Italia?" },
            { id: "u001_r14", domanda: "14) Chi è il signor Rossi?" }
        ]
    },

    // 9. RIORDINO DIALOGHI
    riordinoDialoghi: {
        titolo: "Fase 7: 🧩 Riordina i dialoghi",
        istruzioni: "Metti in ordine le frasi.",
        esercizi: [
            { id: "u001_dial_1", img: "img/dialogo_1.webp", fraseFissa: "— Ciao Olga! Sei inglese?", frasiMobili: ["— No, non sono inglese; sono russa.", "— Tu lavori o studi?", "— Sono studentessa.", "— Perché sei in Italia?", "— Perché la moda italiana è bella."], variantiAccettate: [[1, 4, 5, 2, 3]] },
            { id: "u001_dial_2", img: "img/dialogo_2.webp", fraseFissa: "— Buongiorno Victor! Lei è tedesco?", frasiMobili: ["— No, non sono tedesco, sono francese.", "— Lei è ingegnere?", "— No, sono avvocato.", "— Perché è in Italia?", "— Per affari."], variantiAccettate: [[1, 4, 5, 2, 3]] },
            { id: "u001_dial_3", img: "img/dialogo_3.webp", fraseFissa: "— Buongiorno Karl e Klaus! Voi siete stranieri?", frasiMobili: ["— Sì, siamo stranieri; siamo tedeschi.", "— Siete in Italia per turismo?", "— No, siamo qui per studiare l'italiano.", "— Abitate in albergo?", "— Sì, siamo clienti dell'albergo Ponte Vecchio."], variantiAccettate: [[1, 4, 5, 2, 3]] }
        ]
    },

    // 10. GRAMMATICA
    grammatica: {
        titolo: "Fase 8: 🔍 Alla scoperta del verbo essere",

        // FASE 1: Tu/Lei/Io
        fase1: {
            istruzioni: "Osserva i dialoghi:",
            esempi: ["👤 Tu SEI americana? Io SONO russa.", "👔 Lei È inglese? Io SONO francese."],
            domanda: `🤔 В чем разница? В каком диалоге обращение неформальное (на «ты»), а в каком — формальное (на «Вы»)?
    <br><br>
    🗣️ Какую форму глагола используют Ольга и Виктор, чтобы говорить о себе? 
    <em>(Rispondete a voce)</em>`,
            eserciziBacheca: [
                { id: "u001_gram_f1_1", testo: "Buongiorno Mary, Lei ____ inglese? Sì, io ____ inglese." },
                { id: "u001_gram_f1_2", testo: "Ciao Yoko, tu ____ cinese? No, io non ____ cinese, ____ giapponese." }
            ]
        },

        // FASE 2: Plurali (Noi/Voi)
        fase2: {
            titolo: "👥 Passiamo al plurale",
            dialogo: "— Buongiorno Klaus, buongiorno Karl, voi SIETE svizzeri?<br>— No, noi non SIAMO svizzeri, noi SIAMO tedeschi.",
            riflessione: "🤔 Что вы замечаете? Какую форму используют Клаус и Карл, чтобы ответить вместе? Какую форму мы используем, чтобы обратиться к обоим? <em>(Rispondete a voce)</em>",
            eserciziBacheca: [
                { id: "u001_gram_f2_1", testo: "Ciao ragazzi, voi ________ spagnoli? No, noi ________ argentini." }
            ]
        },

        // FASE 3: Terza persona e ambiguità
        fase3: {
            titolo: "🌐 Lui, Lei, Loro",
            blocchi: [
                {
                    titolo: "Parliamo degli altri",
                    esempi: ["Mary È inglese. Lei È insegnante.", "Paolo Rossi È italiano. Lui È il direttore.", "Karl e Klaus SONO tedeschi. Loro SONO studenti."],
                    domanda: "🤔 Какую форму глагола мы используем для «он», «она» и «они»? <em>(Rispondete a voce)</em>"
                },
                {
                    titolo: "Capire il soggetto",
                    esempi: ["👤 Ciao Olga, sei italiana? No, SONO russa.", "👤 I clienti dell'albergo SONO stranieri."],
                    domanda: "🤔 Как мы понимаем, говорим ли мы об «я» или об «они»? <em>(Rispondete a voce)</em>"
                },
                {
                    titolo: "Lui/Lei o Lei (formale)?",
                    esempi: ["👔 Buongiorno Victor, Lei è francese? Sì, sono francese.", "👤 Yoko è giapponese, lei è dentista."],
                    domanda: "🤔 Как мы понимаем, говорим ли мы о «он/она» или вежливо обращаемся к «Вы» (Lei)? <em>(Rispondete a voce)</em>"
                }
            ]
        },

        // FASE 4: Sintesi Autonoma
        fase4: {
            titolo: "✍️ Sintesi Autonoma",
            istruzioni: "Completa la tabella:",
            tabella: [
                { pronome: "Io", sol: ["sono"] },
                { pronome: "Tu", sol: ["sei"] },
                { pronome: "Lei (formale) - Lui - Lei", sol: ["è", "e'"] },
                { pronome: "Noi", sol: ["siamo"] },
                { pronome: "Voi", sol: ["siete"] },
                { pronome: "Loro", sol: ["sono"] }
            ]
        }
    },

    // 11. NEGAZIONE
    negazione: {
        titolo: "Fase 9: 🚫 Dire di no",

        // FASE 1: Osservazione
        scoperta: {
            istruzioni: "👀 Fase 1: Osservazione",
            esempi: [
                "Io SONO italiano ➡️ Io non SONO inglese",
                "Yoko È giapponese ➡️ Mary non È giapponese",
                "Paolo Rossi È sposato ➡️ Karl e Klaus non SONO sposati"
            ],
            domandeAnalisi: `
                🤔 Какие предложения утверждают, а какие отрицают?<br>
                🤔 Что мы добавляем, чтобы сказать прямо противоположное?<br>
                🤔 Слово «non» ставится перед глаголом или после него?<br>
                🤔 Меняется ли слово «non», если мы используем «я» (io), «ты» (tu) или «он» (lui)?
            `
        },

        // FASE 2: Pratica
        pratica: {
            istruzioni: "✍️ Fase 2: Pratica<br><i>Fate come nell'esempio: Victor è inglese? ➡️ No, Victor non è inglese. Victor è francese.</i>",
            eserciziBacheca: [
                { id: "u001_neg_1", testo: "1) Yoko è francese?" },
                { id: "u001_neg_2", testo: "2) Karl e Klaus sono russi?" },
                { id: "u001_neg_3", testo: "3) Yoko è avvocatessa?" },
                { id: "u001_neg_4", testo: "4) Victor è dentista?" },
                { id: "u001_neg_5", testo: "5) Mary è studentessa?" },
                { id: "u001_neg_6", testo: "6) Il signor Rossi è un cliente dell'albergo?" },
                { id: "u001_neg_7", testo: "7) Olga è insegnante?" },
                { id: "u001_neg_8", testo: "8) Olga è tedesca?" },
                { id: "u001_neg_9", testo: "9) L'albergo 'Ponte Vecchio' è a Milano?" }
            ]
        },

        // FASE 3: La regola
        regola: {
            istruzioni: "🧠 Fase 3: La regola",
            eserciziBacheca: [
                { id: "u001_neg_reg", testo: "Scrivi la regola." }
            ]
        }
    },

    // 12. PRODUZIONE DIALOGHI
    produzioneDialoghi: {
        titolo: "Fase 10: 🎭 Completa i dialoghi",
        istruzioni: "Rispondi alle domande per ogni personaggio:",
        blocchi: [
            { nomePersonaggio: "Olga", img: "img/olga.webp", domande: [{ id: "u001_dial_olga_1", testo: "Sei americana?" }, { id: "u001_dial_olga_2", testo: "Tu lavori o sei studentessa?" }, { id: "u001_dial_olga_3", testo: "Sei sposata?" }, { id: "u001_dial_olga_4", testo: "Perché sei in Italia?" }] },
            { nomePersonaggio: "Victor", img: "img/victor.webp", domande: [{ id: "u001_dial_vic_1", testo: "Lei è straniero?" }, { id: "u001_dial_vic_2", testo: "Lei lavora?" }, { id: "u001_dial_vic_3", testo: "Perché è in Italia?" }] },
            { nomePersonaggio: "Karl e Klaus", img: "img/karlklaus.webp", domande: [{ id: "u001_dial_kk_1", testo: "Voi siete svizzeri?" }, { id: "u001_dial_kk_2", testo: "Voi lavorate o siete studenti?" }, { id: "u001_dial_kk_3", testo: "Perché siete in Italia?" }] },
            { nomePersonaggio: "Mary", img: "img/mary.webp", domande: [{ id: "u001_dial_mary_1", testo: "Lei è italiana?" }, { id: "u001_dial_mary_2", testo: "Lei è studentessa?" }, { id: "u001_dial_mary_3", testo: "Perché è in Italia?" }] },
            { nomePersonaggio: "Signor Rossi", img: "img/paolorossi.webp", domande: [{ id: "u001_dial_rossi_1", testo: "Lei è italiano?" }, { id: "u001_dial_rossi_2", testo: "Lei è un cliente dell'albergo?" }, { id: "u001_dial_rossi_3", testo: "Lei è sposato?" }] },
            { nomePersonaggio: "Yoko", img: "img/yoko.webp", domande: [{ id: "u001_dial_yoko_1", testo: "Lei è cinese?" }, { id: "u001_dial_yoko_2", testo: "Lei lavora?" }, { id: "u001_dial_yoko_3", testo: "Perché è in Italia?" }] }
        ]
    },

    // 13. PRESENTAZIONE PERSONALE
    presentazionePersonale: {
        titolo: "Fase 11: 🎤 Mi presento",
        istruzioni: "Scrivi le tue informazioni. Usa queste frasi come base:",
        campi: [
            { id: "u001_pres_nome", label: "Nome", suggerimento: "Io sono..." },
            { id: "u001_pres_naz", label: "Nazionalità", suggerimento: "Sono..." },
            { id: "u001_pres_prof", label: "Professione", suggerimento: "Sono..." },
            { id: "u001_pres_perche", label: "Perché studio italiano", suggerimento: "Studio l'italiano perché..." }
        ]
    },

    // 14. AUTOVALUTAZIONE
    autovalutazione: {
        titolo: "Fase 12: ✅ Autovalutazione",
        istruzioni: "Com'è andata questa unità? Clicca sul tuo livello:",
        obiettivi: [
            { id: "u001_auto_1", testo: "So coniugare il verbo 'essere'.", shortLabel: "Coniugazione" },
            { id: "u001_auto_2", testo: "So presentarmi.", shortLabel: "Presentazione" },
            { id: "u001_auto_3", testo: "So negare un'informazione.", shortLabel: "Negazione" },
            { id: "u001_auto_4", testo: "So fare domande sugli altri.", shortLabel: "Domande" }
        ]
    }
};
