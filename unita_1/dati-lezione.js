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
        titolo: "Fase 1: ✨ Benvenuti in Italia! (Mappa e Personaggi)",
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

    // 4. SCHEDA 2: ASCOLTO (DOPPIA FASE)
    ascolto: {
        titolo: "Fase 2: 🎧 Orecchie aperte! (Ascolto)",
        videoUrl: "5FpbKA_i074", 
        istruzioni: "Guarda il video e ascolta attentamente la pronuncia.",
        
        // Task 1: Collaborativo
        taskBrainstorming: {
            id: "ascolto_brainstorming",
            titolo: "1. Caccia alle parole!",
            placeholder: "Scrivi una parola che hai sentito..."
        },
        
        // Task 2: Individuale + Feedback
        taskComprensione: {
            id: "ascolto_comprensione",
            titolo: "2. Cosa hai capito?",
            domanda: "Riassumi in russo (o italiano semplice) di cosa parla il video:",
            placeholder: "Scrivi qui il tuo riassunto..."
        }
    },

    // 5. SCHEDA 3: LETTURA
    lettura: {
        titolo: "Fase 3: 📖 Chi sono i nostri ospiti? (Lettura)",
        testoFormattato: `
            <p>L'albergo "Ponte Vecchio" <b>è</b> a Firenze, in Italia. <b>È</b> un albergo grande, con molte camere. <b>È</b> un albergo comodo per gli stranieri, perché <b>è</b> in centro.</p>
            <p>Chi sono gli ospiti dell'albergo "Ponte Vecchio" in questo momento?</p>
            <p>Victor <b>è</b> un cliente dell'albergo. Victor <b>è</b> francese; <b>è</b> avvocato. Adesso <b>è</b> in Italia per affari.</p>
            <p>Anche Klaus e Karl sono clienti dell'albergo. Sono tedeschi e sono studenti. Sono in Italia per studiare l'italiano.</p>
            <p>Mary <b>è</b> inglese; <b>è</b> insegnante, ed <b>è</b> in Italia per insegnare l'inglese. Yoko, invece, <b>è</b> giapponese; <b>è</b> dentista ed <b>è</b> in Italia per una conferenza.</p>
            <p>Olga <b>è</b> russa. <b>È</b> studentessa. <b>È</b> in Italia per studiare l'italiano e per fare shopping.</p>
            <p>Paolo Rossi <b>è</b> il direttore dell'albergo "Ponte Vecchio". <b>È</b> sposato e ha tre figli. <b>È</b> sempre molto occupato con i clienti.</p>
        `, 
        
        idLavagna: "lettura_glossario",
        istruzioniLavagna: "✍️ Vocabolario: Quali parole nuove hai trovato?"
    },


    // 6. SCHEDA 4: COMPRENSIONE
    comprensione: {
        titolo: "Fase 4: 🕵️‍♂️ Detective in azione! (Comprensione)",
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
    titolo: "Fase 5: 🎤 Diventa un reporter (Crea le domande)",
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
        titolo: "Fase 6: 💬 Parliamone insieme (Rispondi alle domande)",
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
        titolo: "Fase 7: 🧩 Metti in ordine i pezzi (Riordina i dialoghi)",
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
    }, 

    // 7. SCHEDA 5: GRAMMATICA
    grammatica: {
        titolo: "Fase 8: 🔍 Scopriamo il verbo 'essere' (Grammatica)",
        
        // FASE 1: Tu/Lei/Io
        fase1: {
            istruzioni: "Osserva i dialoghi:",
            esempi: ["👤 Tu SEI americana? Io SONO russa.", "👔 Lei È inglese? Io SONO francese."],
            domanda: `🤔 В чем разница? В каком диалоге обращение неформальное (на «ты»), а в каком — формальное (на «Вы»)?
    <br><br>
    🗣️ Какую форму глагола используют Ольга и Виктор, чтобы говорить о себе? 
    <em>(Rispondete a voce)</em>"`,
            
            // SPOSTATO QUI: Ora è nella Fase 1!
            eserciziBacheca: [
                { id: "gram_1", testo: "👔 Buongiorno Mary, Lei ____ inglese?<br>👤 Sì, io ____ inglese.", suggerimento: "Copia qui il dialogo e completalo" },
                { id: "gram_2", testo: "👤 Ciao Yoko, tu ____ cinese?<br>👤 No, io non ____ cinese, ____ giapponese.", suggerimento: "Copia qui il dialogo e completalo" }
            ]
        },

        // FASE 2: Plurali (Noi/Voi)
        fase2: {
            titolo: "👥 Passiamo al plurale",
            dialogo: "— Buongiorno Klaus, buongiorno Karl, voi SIETE svizzeri?<br>— No, noi non SIAMO svizzeri, noi SIAMO tedeschi.",
            riflessione: "🤔 Что вы замечаете? Какую форму используют Клаус и Карл, чтобы ответить вместе? Какую форму мы используем, чтобы обратиться к обоим? <em>(Rispondete a voce)</em>",
            
            // Cambiati gli ID da p1,p2,p3 a g_plur_1,g_plur_2... per non confonderli con produzioneDomande
            eserciziBacheca: [
                { id: "g_plur_1", testo: "👤👤 Ciao ragazzi, voi ________ spagnoli?<br>👤👤 No, noi ________ argentini.", suggerimento: "Copia il dialogo e completa" },
                { id: "g_plur_2", testo: "👔 Buongiorno Signor Verdi, Lei ________ italiano?<br>👤 Sì, io ________ italiano.", suggerimento: "Copia il dialogo e completa" },
                { id: "g_plur_3", testo: "👤 Ciao Aizhan, tu ________ kirghiza?<br>👤 No, io ________ kazaka.", suggerimento: "Copia il dialogo e completa" }
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
    
   // 8. SCHEDA 6: LA NEGAZIONE
    negazione: {
        titolo: "Fase 9: 🚫 Dire di no (La negazione)",
        
        // FASE 1: Osservazione
        scoperta: {
            istruzioni: "👀 Fase 1: Osservazione",
            esempi: [
                "Io SONO italiano ➡️ Io non SONO inglese",
                "Yoko È giapponese ➡️ Mary non È giapponese",
                "Paolo Rossi È sposato ➡️ Karl e Klaus non SONO sposati"
            ],
            domandeAnalisi: `
                🤔 Что мы добавляем, чтобы сказать прямо противоположное?<br>
                🤔 Какие предложения утверждают, а какие отрицают?<br>
                🤔 Слово «non» ставится перед глаголом или после него?<br>
                🤔 Меняется ли слово «non», если мы используем «я» (io), «ты» (tu) или «он» (lui)?
            `
        },

        // FASE 2: Pratica
        pratica: {
            istruzioni: "✍️ Fase 2: Pratica<br><i>Fate come nell'esempio: Victor è inglese? ➡️ No, Victor non è inglese. Victor è francese.</i>",
            eserciziBacheca: [
                { id: "neg_1", testo: "1) Yoko è francese?", suggerimento: "No, Yoko non è..." },
                { id: "neg_2", testo: "2) Karl e Klaus sono russi?", suggerimento: "No, ..." },
                { id: "neg_3", testo: "3) Yoko è avvocatessa?", suggerimento: "" },
                { id: "neg_4", testo: "4) Victor è dentista?", suggerimento: "" },
                { id: "neg_5", testo: "5) Mary è studentessa?", suggerimento: "" },
                { id: "neg_6", testo: "6) Il signor Rossi è un cliente dell'albergo?", suggerimento: "" },
                { id: "neg_7", testo: "7) Olga è insegnante?", suggerimento: "" },
                { id: "neg_8", testo: "8) Olga è tedesca?", suggerimento: "" },
                { id: "neg_9", testo: "9) L'albergo 'Ponte Vecchio' è a Milano?", suggerimento: "" }
            ]
        },

        // FASE 3: La regola
        regola: {
            istruzioni: "🧠 Fase 3: La regola",
            eserciziBacheca: [
                { id: "neg_regola", testo: "Напишите правило своими словами:<br><i>Per negare qualcosa si mette l'avverbio ____ prima del verbo.</i>", suggerimento: "Scrivi la regola qui..." }
            ]
        }
    },

    
    // 9. SCHEDA 7: RINFORZO
    rinforzo: {
        titolo: "🛠️ Rinforzo",
        istruzioni: "...",
        idLavagna: "rinforzo_box"
    },

    autovalutazione: {
        titolo: "🏁 Autovalutazione",
        idLavagna: "auto_box"
    }
};
