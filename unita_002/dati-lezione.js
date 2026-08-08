/**
 * DATI LEZIONE - CONFIGURAZIONE COMPLETA
 */

export const ConfigLezione = {
    // ID UNIVOCO PER FIREBASE
    idFirebase: "unita_002",

    // INTESTAZIONE
    titolo: "Unità 2 - Un bravo ragazzo",
    sottotitolo: "Livello A1 - Possesso e sensazioni",
    bannerImg: "img/banner_unita2.webp",

    // 1. SCHEDA 1
    elicitazione: {
    titolo: "Fase 1: 🧊 Per rompere il ghiaccio",
    intro: "Clicca sull'immagine che rappresenta la tua età. Poi guarda il tabellone per vedere le risposte della classe.",
    categorieEta: [
    { 
        id: "bambino", 
        etichetta: "Bambino / Bambina", 
        img: "img/bambini_categoria.webp",
        opzioni: [
            { valore: "un bambino", etichetta: "Io sono un bambino" },
            { valore: "una bambina", etichetta: "Io sono una bambina" }
        ]
    },
    { 
        id: "ragazzo", 
        etichetta: "Ragazzo / Ragazza", 
        img: "img/ragazzi_categoria.webp",
        opzioni: [
            { valore: "un ragazzo", etichetta: "Io sono un ragazzo" },
            { valore: "una ragazza", etichetta: "Io sono una ragazza" }
        ]
    },
    { 
    id: "adulto", 
    etichetta: "Uomo / Donna", 
    img: "img/adulti_categoria.webp",
    opzioni: [
        { valore: "un uomo", etichetta: "Io sono un uomo" },
        { valore: "una donna", etichetta: "Io sono una donna" }
    ]
},
    { 
        id: "anziano", 
        etichetta: "Anziano / Anziana", 
        img: "img/anziani_categoria.webp",
        opzioni: [
            { valore: "un anziano", etichetta: "Io sono un anziano" },
            { valore: "un'anziana", etichetta: "Io sono un'anziana" }
        ]
    }
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

        flashcardBevande: [
    { parola: "Acqua", audio: "audio/bevande/acqua.mp3", img: "img/bevande/acqua.webp" },
    { parola: "Aranciata", audio: "audio/bevande/aranciata.mp3", img: "img/bevande/aranciata.webp" },
    { parola: "Birra", audio: "audio/bevande/birra.mp3", img: "img/bevande/birra.webp" },
    { parola: "Caffè", audio: "audio/bevande/caffe.mp3", img: "img/bevande/caffe.webp" },
    { parola: "Cappuccino", audio: "audio/bevande/cappuccino.mp3", img: "img/bevande/cappuccino.webp" },
    { parola: "Coca Cola", audio: "audio/bevande/coca_cola.mp3", img: "img/bevande/coca_cola.webp" },
    { parola: "Limoncello", audio: "audio/bevande/limoncello.mp3", img: "img/bevande/limoncello.webp" },
    { parola: "Prosecco", audio: "audio/bevande/prosecco.mp3", img: "img/bevande/prosecco.webp" },
    { parola: "Succo di frutta", audio: "audio/bevande/succo_frutta.mp3", img: "img/bevande/succo_frutta.webp" },
    { parola: "Tè", audio: "audio/bevande/te.mp3", img: "img/bevande/te.webp" },
    { parola: "Vino", audio: "audio/bevande/vino.mp3", img: "img/bevande/vino.webp" }
],

        numeriEta: [
    { numero: 0, lettere: "zero" },
    { numero: 1, lettere: "uno" },
    { numero: 2, lettere: "due" },
    { numero: 3, lettere: "tre" },
    { numero: 4, lettere: "quattro" },
    { numero: 5, lettere: "cinque" },
    { numero: 6, lettere: "sei" },
    { numero: 7, lettere: "sette" },
    { numero: 8, lettere: "otto" },
    { numero: 9, lettere: "nove" },
    { numero: 10, lettere: "dieci" },
    { numero: 11, lettere: "undici" },
    { numero: 12, lettere: "dodici" },
    { numero: 13, lettere: "tredici" },
    { numero: 14, lettere: "quattordici" },
    { numero: 15, lettere: "quindici" },
    { numero: 16, lettere: "sedici" },
    { numero: 17, lettere: "diciassette" },
    { numero: 18, lettere: "diciotto" },
    { numero: 19, lettere: "diciannove" },
    { numero: 20, lettere: "venti" },
    { numero: 21, lettere: "ventuno" },
    { numero: 22, lettere: "ventidue" },
    { numero: 23, lettere: "ventitre" },
    { numero: 24, lettere: "ventiquattro" },
    { numero: 25, lettere: "venticinque" },
    { numero: 26, lettere: "ventisei" },
    { numero: 27, lettere: "ventisette" },
    { numero: 28, lettere: "ventotto" },
    { numero: 29, lettere: "ventinove" },
    { numero: 30, lettere: "trenta" },
    { numero: 31, lettere: "trentuno" },
    { numero: 32, lettere: "trentadue" },
    { numero: 33, lettere: "trentatre" },
    { numero: 34, lettere: "trentaquattro" },
    { numero: 35, lettere: "trentacinque" },
    { numero: 36, lettere: "trentasei" },
    { numero: 37, lettere: "trentasette" },
    { numero: 38, lettere: "trentotto" },
    { numero: 39, lettere: "trentanove" },
    { numero: 40, lettere: "quaranta" },
    { numero: 41, lettere: "quarantuno" },
    { numero: 42, lettere: "quarantadue" },
    { numero: 43, lettere: "quarantatre" },
    { numero: 44, lettere: "quarantaquattro" },
    { numero: 45, lettere: "quarantacinque" },
    { numero: 46, lettere: "quarantasei" },
    { numero: 47, lettere: "quarantasette" },
    { numero: 48, lettere: "quarantotto" },
    { numero: 49, lettere: "quarantanove" },
    { numero: 50, lettere: "cinquanta" },
    { numero: 51, lettere: "cinquantuno" },
    { numero: 52, lettere: "cinquantadue" },
    { numero: 53, lettere: "cinquantatre" },
    { numero: 54, lettere: "cinquantaquattro" },
    { numero: 55, lettere: "cinquantacinque" },
    { numero: 56, lettere: "cinquantasei" },
    { numero: 57, lettere: "cinquantasette" },
    { numero: 58, lettere: "cinquantotto" },
    { numero: 59, lettere: "cinquantanove" },
    { numero: 60, lettere: "sessanta" },
    { numero: 61, lettere: "sessantuno" },
    { numero: 62, lettere: "sessantadue" },
    { numero: 63, lettere: "sessantatre" },
    { numero: 64, lettere: "sessantaquattro" },
    { numero: 65, lettere: "sessantacinque" },
    { numero: 66, lettere: "sessantasei" },
    { numero: 67, lettere: "sessantasette" },
    { numero: 68, lettere: "sessantotto" },
    { numero: 69, lettere: "sessantanove" },
    { numero: 70, lettere: "settanta" },
    { numero: 71, lettere: "settantuno" },
    { numero: 72, lettere: "settantadue" },
    { numero: 73, lettere: "settantatre" },
    { numero: 74, lettere: "settantaquattro" },
    { numero: 75, lettere: "settantacinque" },
    { numero: 76, lettere: "settantasei" },
    { numero: 77, lettere: "settantasette" },
    { numero: 78, lettere: "settantotto" },
    { numero: 79, lettere: "settantanove" },
    { numero: 80, lettere: "ottanta" },
    { numero: 81, lettere: "ottantuno" },
    { numero: 82, lettere: "ottantadue" },
    { numero: 83, lettere: "ottantatre" },
    { numero: 84, lettere: "ottantaquattro" },
    { numero: 85, lettere: "ottantacinque" },
    { numero: 86, lettere: "ottantasei" },
    { numero: 87, lettere: "ottantasette" },
    { numero: 88, lettere: "ottantotto" },
    { numero: 89, lettere: "ottantanove" },
    { numero: 90, lettere: "novanta" },
    { numero: 91, lettere: "novantuno" },
    { numero: 92, lettere: "novantadue" },
    { numero: 93, lettere: "novantatre" },
    { numero: 94, lettere: "novantaquattro" },
    { numero: 95, lettere: "novantacinque" },
    { numero: 96, lettere: "novantasei" },
    { numero: 97, lettere: "novantasette" },
    { numero: 98, lettere: "novantotto" },
    { numero: 99, lettere: "novantanove" },
    { numero: 100, lettere: "cento" }
],
        

        // Attività di brainstorming (forum con risposte personali)
    domandeBrainstorming: [
    {
        id: "fame",
        domanda: "🍝 Cosa mangi quando hai fame?",
        placeholder: "Quando ho fame, mangio...",
        chiaveFirebase: "brainstorming_fame"
    },
    {
        id: "sete",
        domanda: "🥤 Cosa bevi quando hai sete?",
        placeholder: "Quando ho sete, bevo...",
        chiaveFirebase: "brainstorming_sete"
    }
],
        
    immagineMappa: "",
    vocabolario: []
},
        
    // 2. SCHEDA 2
    ascolto: {
        titolo: "Fase 2: 🎧 Orecchie aperte! (Ascolto)",
        videoUrl: "6kl8KZftC_A",
        istruzioni: "Guarda il video e ascolta attentamente la pronuncia.",
        taskBrainstorming: { id: "u001_ascolto_brainstorming", titolo: "1. Caccia alle parole!", placeholder: "Scrivi una parola che hai sentito..." },
        taskComprensione: { 
    id: "u001_ascolto_comprensione", 
    titolo: "2. Cosa hai capito?", 
    domanda: "📝 Scrivi una o due frasi in italiano su cosa parla il video:", 
    placeholder: "Nel video si parla di..." 
}
    },

    // 3. SCHEDA 3
    lettura: {
        titolo: "Fase 3: 📖 Leggiamo insieme",
        titoloTesto: "Un bravo ragazzo",
        testoFormattato: `
    <p>La mamma e suo figlio Marco <b>sono</b> in casa. Marco <b>è</b> in camera, <b>è</b> a letto; la madre <b>è</b> in cucina.</p>
    <p>Il figlio chiama la madre e dice: “Mamma, <b>ho sete</b>”. Allora la madre porta un bicchiere d'acqua. Il figlio beve l'acqua, e non <b>ha</b> più sete.</p>
    <p>Ma poi dice: “Mamma, <b>ho fame</b>”. Allora la madre porta un piatto di pasta. Marco mangia la pasta, e non <b>ha</b> più fame.</p>
    <p>Ma poi dice: “Mamma, <b>ho freddo</b>”. Allora la madre porta una coperta. Con la coperta, il figlio non <b>ha</b> più freddo.</p>
    <p>Ma poi dice: “Mamma, <b>ho sonno</b>”. Allora la madre spegne la luce e chiude la finestra, e lui dorme.</p>
    <p>Marco dorme un po', e poi dice: “Mamma, <b>ho paura</b>”.</p>
    <p>Allora la madre dice: “Perché <b>hai</b> paura? Non sei più un bambino. <b>Hai</b> già trentacinque anni”.</p>
`,
        idLavagna: "u001_lettura_glossario",
        istruzioniLavagna: "✍️ Vocabolario: Quali parole nuove hai trovato?"
    },

    // 4. SCHEDA 4
comprensione: {
    titolo: "Fase 4: 🧠 Capiamo il testo",
    istruzioni: "Scegli la risposta corretta.",
    domande: [
        { 
            id: "u002_q1", 
            testo: "1. La madre", 
            opzioni: ["a. è in cucina", "b. è in camera", "c. è a letto"], 
            corretta: 0 
        },
        { 
            id: "u002_q2", 
            testo: "2. Il figlio", 
            opzioni: ["a. è in cucina", "b. è a scuola", "c. è a letto"], 
            corretta: 2 
        },
        { 
            id: "u002_q3", 
            testo: "3. Quando il figlio ha sete, la madre porta", 
            opzioni: ["a. un piatto di pasta", "b. un bicchiere d'acqua", "c. una coperta"], 
            corretta: 1 
        },
        { 
            id: "u002_q4", 
            testo: "4. Quando il figlio ha fame, la madre porta", 
            opzioni: ["a. una coperta", "b. una finestra", "c. un piatto di pasta"], 
            corretta: 2 
        },
        { 
            id: "u002_q5", 
            testo: "5. Quando il figlio ha freddo, la madre porta", 
            opzioni: ["a. una finestra", "b. una coperta", "c. un bicchiere d'acqua"], 
            corretta: 1 
        },
        { 
            id: "u002_q6", 
            testo: "6. Quando il figlio ha sonno, la madre", 
            opzioni: ["a. apre la finestra", "b. chiude la coperta", "c. spegne la luce"], 
            corretta: 2 
        },
        { 
            id: "u002_q7", 
            testo: "7. Il figlio", 
            opzioni: ["a. è piccolo", "b. è grande"], 
            corretta: 1 
        }
    ]
},
    // 5. PRODUZIONE DOMANDE
produzioneDomande: {
    titolo: "Fase 5: 🎤 Creiamo le domande",
    istruzioni: "Leggi la risposta e scrivi la domanda corretta.",
    esercizi: [
        { 
            id: "u002_p1", 
            risposta: "Marco è a letto.", 
            guida: "💡 Dove?", 
            modello: "Dove è Marco?" 
        },
        { 
            id: "u002_p2", 
            risposta: "La madre è in cucina.", 
            guida: "💡 Dove?", 
            modello: "Dov'è la madre?" 
        },
        { 
            id: "u002_p3", 
            risposta: "Quando il figlio ha sete, la madre porta un bicchiere d'acqua.", 
            guida: "💡 Che cosa?", 
            modello: "Che cosa porta la madre quando il figlio ha sete?" 
        },
        { 
            id: "u002_p4", 
            risposta: "Quando il figlio ha fame, la madre porta un piatto di pasta.", 
            guida: "💡 Che cosa?", 
            modello: "Che cosa porta la madre quando il figlio ha fame?" 
        },
        { 
            id: "u002_p5", 
            risposta: "Quando il figlio ha freddo, la madre porta una coperta.", 
            guida: "💡 Che cosa?", 
            modello: "Che cosa porta la madre quando il figlio ha freddo?" 
        },
        { 
            id: "u002_p6", 
            risposta: "Quando il figlio ha sonno, la madre spegne la luce.", 
            guida: "💡 Che cosa?", 
            modello: "Che cosa fa la madre quando il figlio ha sonno?" 
        },
        { 
            id: "u002_p7", 
            risposta: "Marco ha 35 anni.", 
            guida: "💡 Quanti?", 
            modello: "Quanti anni ha Marco?" 
        },
        { 
            id: "u002_p8", 
            risposta: "Marco beve l'acqua.", 
            guida: "💡 Che cosa?", 
            modello: "Che cosa beve Marco?" 
        },
        { 
            id: "u002_p9", 
            risposta: "Marco mangia la pasta.", 
            guida: "💡 Che cosa?", 
            modello: "Che cosa mangia Marco?" 
        },
        { 
            id: "u002_p10", 
            risposta: "Marco è grande.", 
            guida: "💡 Come?", 
            modello: "Come è Marco?" 
        }
    ]
},

    // 6. PRODUZIONE RISPOSTE
produzioneRisposte: {
    titolo: "Fase 6: 💬 Parliamone insieme",
    istruzioni: "Rispondi alle domande.",
    esercizi: [
        { id: "u002_r1", domanda: "1) Dov'è Marco?" },
        { id: "u002_r2", domanda: "2) Dov'è la madre di Marco?" },
        { id: "u002_r3", domanda: "3) Che cosa fa la madre quando Marco ha sete?" },
        { id: "u002_r4", domanda: "4) Che cosa beve Marco?" },
        { id: "u002_r5", domanda: "5) Che cosa fa la madre quando Marco ha fame?" },
        { id: "u002_r6", domanda: "6) Che cosa mangia Marco?" },
        { id: "u002_r7", domanda: "7) Che cosa fa la madre quando Marco ha freddo?" },
        { id: "u002_r8", domanda: "8) Che cosa fa la madre quando Marco ha sonno?" },
        { id: "u002_r9", domanda: "9) Che cosa dice la madre quando Marco ha paura?" },
        { id: "u002_r10", domanda: "10) Quanti anni ha Marco?" }
    ]
},

    // 7. RIORDINO DIALOGHI
riordinoDialoghi: {
    titolo: "Fase 7: 🧩 Riordina i dialoghi",
    istruzioni: "Metti in ordine le frasi.",
    esercizi: [
        {
            id: "u002_dial_1",
            img: "img/dialogo_1.webp",
            fraseFissa: "",
            frasiMobili: [
                "Chi è Gianni?",
                "Gianni è un ragazzo italiano.",
                "E quanti anni ha?",
                "Gianni ha venti anni."
            ],
            variantiAccettate: [
                [0, 1, 2, 3]
            ]
        },
        {
            id: "u002_dial_2",
            img: "img/dialogo_2.webp",
            fraseFissa: "",
            frasiMobili: [
                "Chi sono Kairat e Aizhan?",
                "Kairat e Aizhan sono due ragazzi kazaki.",
                "Ah interessante. Quanti anni hanno?",
                "Kairat ha diciannove anni e Aizhan ha venti anni."
            ],
            variantiAccettate: [
                [0, 1, 2, 3]
            ]
        },
        {
            id: "u002_dial_3",
            img: "img/dialogo_3.webp",
            fraseFissa: "",
            frasiMobili: [
                "Chi è quella persona nella foto?",
                "È Hans. È un mio amico tedesco.",
                "Quanti anni ha Hans?",
                "Ha sessanta anni."
            ],
            variantiAccettate: [
                [0, 1, 2, 3]
            ]
        }
    ]
},

            // 8. ESSERE O AVERE? (Cloze)
    essereAvereCloze: {
        titolo: "Fase 8: 🎯 Essere o avere?",
        istruzioni: "Scegli il verbo corretto tra ESSERE e AVERE.",
        esercizi: [
    { 
        id: "ea_1", 
        testo: "Paolo mangia poco, perchè non _____ fame.",
        opzioni: ["è", "ha"],
        risposta: "ha",
        immagine: "img/cloze/paolo_fame.webp",
        spiegazione: "🗣️ Смысл абсолютно понятен! Паоло мало ест, потому что сыт! Однако для выражения этого физического ощущения мы используем не глагол 'быть', а скорее 'обладать' голодом. (AVERE FAME). Quindi, come diciamo per Paolo? Paolo non...?"
    },
    { 
        id: "ea_2", 
        testo: "Marie _____ francese, _____ di Parigi.",
        opzioni: ["è", "ha"],
        risposta: ["è", "è"],
        immagine: "img/cloze/marie.webp",
        spiegazione: "🌍 Смысл абсолютно понятен! Мари — француженка, она из Парижа. Для национальности и места происхождения мы всегда используем ESSERE. Это её личные качества, которые её описывают. В русском языке мы тоже говорим о том, КТО она есть, а не что она 'имеет'. Quindi: Marie...?"
    },
    { 
        id: "ea_3", 
        testo: "La lezione _____ interessante.",
        opzioni: ["è", "ha"],
        risposta: "è",
        immagine: "img/cloze/lezione.webp",
        spiegazione: "📚 Отличная попытка! Урок действительно интересный. Но мы описываем качество предмета. В итальянском для описания качеств мы всегда используем ESSERE. Попробуй исправить: La lezione...?"
    },
    { 
        id: "ea_4", 
        testo: "Tu _____ trentacinque anni.",
        opzioni: ["sei", "hai"],
        risposta: "hai",
        immagine: "img/cloze/tu_anni.webp",
        spiegazione: "🎂 Прекрасно! Тебе 35 лет. Но в итальянском языке мы буквально 'обладаем' годами: возраст — это то, что мы имеем, это наше! Поэтому мы используем AVERE: 'ho 35 anni'. Мы не 'являемся' годами, а 'имеем' их. Quindi, per 'Tu...' какой глагол выберем? Tu...?"
    },
    { 
        id: "ea_5", 
        testo: "Noi _____ molta paura del buio.",
        opzioni: ["siamo", "abbiamo"],
        risposta: "abbiamo",
        immagine: "img/cloze/bambini_paura.webp",
        spiegazione: "😨 Ого, это действительно страшно! Мы очень боимся темноты. Но помни, что страх — это сильное чувство, наше физическое состояние. В итальянском языке для таких чувств (как голод, жажда, страх, сон) мы всегда используем AVERE. Это как 'обладать' страхом, иметь его. Проверь глагол для 'Noi': Noi...?"
    },
    { 
        id: "ea_6", 
        testo: "Voi _____ molto sportivi.",
        opzioni: ["siete", "avete"],
        risposta: "siete",
        immagine: "img/cloze/sportivi.webp",
        spiegazione: "🏃 Вы отлично подметили, вы в прекрасной форме! Вы очень спортивные. Но это качество, описание личности. А для описания качеств человека мы всегда используем ESSERE. Попробуй изменить глагол для 'Voi': Voi...?"
    },
    { 
        id: "ea_7", 
        testo: "Io _____ un cane.",
        opzioni: ["sono", "ho"],
        risposta: "ho",
        immagine: "img/cloze/cane.webp",
        spiegazione: "🐕 Ой, ну это вряд ли! Вы же не ходите на четырёх лапах! 🐾 В итальянском языке мы буквально 'обладаем' собакой. Как и в русском 'у меня есть', мы владеем ей, а не 'являемся' собакой. Для этого нам нужен глагол AVERE. Попробуй исправить: Io...?"
    },
    { 
        id: "ea_8", 
        testo: "La casa _____ grande, ma _____ vecchia.",
        opzioni: ["è", "ha"],
        risposta: ["è", "è"],
        immagine: "img/cloze/casa.webp",
        spiegazione: "🏠 Отличная структура предложения, всё очень логично! Дом большой, но старый. Мы описываем качества дома. А для описания качеств предметов и мест мы всегда используем ESSERE. Попробуй исправить глаголы: La casa... grande, ma... vecchia."
    }
]
    },
    

    // 9. GRAMMATICA
grammatica: {
    titolo: "Fase 9: 🔍 Alla scoperta della grammatica",

    // FASE 1: Tu/Lei/Io
    fase1: {
        istruzioni: "Osserva i dialoghi:",
        esempi: [
            "👤 — Ciao Marco, tu HAI trentacinque anni? — Sì, io HO trentacinque anni.",
            "👔 — Buongiorno Signor Hans, Lei HA sessanta anni? — Sì, io HO sessanta anni."
        ],
        domanda: `🤔 В чем разница? В каком диалоге обращение неформальное (на «ты»), а в каком — формальное (на «Вы»)?
<br><br>
🗣️ Какую форму глагола используют Marco и Hans, чтобы сказать о своем возрасте? 
<em>(Rispondete a voce)</em>`,
        eserciziBacheca: [
            { id: "u002_gram_f1_1", testo: "Buongiorno Mary, Lei ___________ fame? Sì, io ___________ molta fame." },
            { id: "u002_gram_f1_2", testo: "Ciao Yoko, tu ___________ freddo? No, io non ___________ freddo." }
        ]
    },

    // FASE 2: Plurali (Noi/Voi)
    fase2: {
        titolo: "👥 Passiamo al plurale",
        dialogo: "— Ciao ragazzi, voi AVETE sete?<br>— Sì, noi ABBIAMO molta sete!",
        riflessione: "🤔 Что вы замечаете? Какую форму используют ребята, чтобы ответить вместе от лица «мы»? Какую форму мы используем, чтобы обратиться к ним на «вы» (множественное число)? <em>(Rispondete a voce)</em>",
        eserciziBacheca: [
            { id: "u002_gram_f2_1", testo: "— Ragazzi, voi ___________ paura del buio? — No, noi non ___________ paura!" }
        ]
    },

    // FASE 3: Terza persona e ambiguità
    fase3: {
        titolo: "🌐 Lui, Lei, Loro",
        blocchi: [
            {
                titolo: "Parliamo degli altri",
                esempi: [
                    "Marco HA paura. Lui HA trentacinque anni.",
                    "Giovanna HA cinquant'anni. Lei HA una casa in campagna.",
                    "Kairat e Aizhan HANNO diciannove e venti anni. Loro HANNO sonno."
                ],
                domanda: "🤔 Какую форму глагола мы используем для «он» (lui), «она» (lei) и «они» (loro)? <em>(Rispondete a voce)</em>"
            },
            {
                titolo: "Lui/Lei o Lei (formale)?",
                esempi: [
                    "👔 — Buongiorno Signora Olga, Lei ha cinquantacinque anni? — Sì, ho cinquantacinque anni.",
                    "👤 — Yoko è giapponese, lei ha ventidue anni."
                ],
                domanda: "🤔 Как мы понимаем, говорим ли мы о «ней» (lei) или вежливо обращаемся к собеседнику на «Вы» (Lei)? <em>(Rispondete a voce)</em>"
            }
        ]
    },

    // FASE 4: Sintesi Autonoma
    fase4: {
        titolo: "✍️ Sintesi Autonoma",
        istruzioni: "Completa la tabella:",
        tabella: [
            { pronome: "Io", sol: ["ho"] },
            { pronome: "Tu", sol: ["hai"] },
            { pronome: "Lei (formale) - Lui - Lei", sol: ["ha"] },
            { pronome: "Noi", sol: ["abbiamo"] },
            { pronome: "Voi", sol: ["avete"] },
            { pronome: "Loro", sol: ["hanno"] }
        ]
    }
},
    



            // 10. SCEGLI ESSERE O AVERE (Fase 10)
    scegliEssereAvere: {
        titolo: "Fase 10: 🎯 Scegli il verbo giusto",
        istruzioni: "Scegli il verbo corretto tra ESSERE e AVERE e coniugalo alla persona giusta. Se hai dubbi, apri i popup con le coniugazioni!",
        esercizi: [
            { 
                id: "sa_1", 
                testo: "Io _____ un gatto.",
                risposta: "ho", 
                opzioni: ["sono", "ho"] 
            },
            { 
                id: "sa_2", 
                testo: "Tu _____ due bambini.",
                risposta: "hai", 
                opzioni: ["sei", "hai"] 
            },
            { 
                id: "sa_3", 
                testo: "Lui ha 5 anni, _____ un bambino.",
                risposta: "è", 
                opzioni: ["è", "ha"] 
            },
            { 
                id: "sa_4", 
                testo: "Noi _____ italiani.",
                risposta: "siamo", 
                opzioni: ["siamo", "abbiamo"] 
            },
            { 
                id: "sa_5", 
                testo: "Voi _____ una macchina?",
                risposta: "avete", 
                opzioni: ["siete", "avete"] 
            },
            { 
                id: "sa_6", 
                testo: "Loro _____ molto simpatici.",
                risposta: "sono", 
                opzioni: ["sono", "hanno"] 
            },
            { 
                id: "sa_7", 
                testo: "Loro _____ due cani.",
                risposta: "hanno", 
                opzioni: ["sono", "hanno"] 
            },
            { 
                id: "sa_8", 
                testo: "Io _____ sposato.",
                risposta: "sono", 
                opzioni: ["sono", "ho"] 
            },
            { 
                id: "sa_9", 
                testo: "Voi _____ in Italia?",
                risposta: "siete", 
                opzioni: ["siete", "avete"] 
            }
        ],
        coniugazioni: {
            essere: {
                titolo: "📚 Coniugazione del verbo ESSERE",
                persone: [
                    { pronome: "Io", voce: "sono" },
                    { pronome: "Tu", voce: "sei" },
                    { pronome: "Lui / Lei", voce: "è" },
                    { pronome: "Noi", voce: "siamo" },
                    { pronome: "Voi", voce: "siete" },
                    { pronome: "Loro", voce: "sono" }
                ]
            },
            avere: {
                titolo: "📚 Coniugazione del verbo AVERE",
                persone: [
                    { pronome: "Io", voce: "ho" },
                    { pronome: "Tu", voce: "hai" },
                    { pronome: "Lui / Lei", voce: "ha" },
                    { pronome: "Noi", voce: "abbiamo" },
                    { pronome: "Voi", voce: "avete" },
                    { pronome: "Loro", voce: "hanno" }
                ]
            }
        }
    },
    

    

    // 11. NUMERI (invece di NEGAZIONE)
numeri: {
    titolo: "Fase 11: 🔢 I numeri italiani",

    // FASE 1: Numeri da 0 a 9 (Presentazione)
fase1: {
    titolo: "I numeri da 0 a 9",
    istruzioni: "Ascolta e ripeti i numeri / Слушайте и повторяйте числа:",
    img: "img/numeri/cifre.webp",
    audio: "audio/numeri/cifre.mp3",
    esercizi: [
        { id: "num_1", domanda: "5 →", opzioni: ["cinque", "sette", "tre"], corretta: 0 },
        { id: "num_2", domanda: "8 →", opzioni: ["otto", "nove", "sei"], corretta: 0 },
        { id: "num_3", domanda: "2 →", opzioni: ["due", "uno", "tre"], corretta: 0 },
        { id: "num_4", domanda: "3 →", opzioni: ["tre", "quattro", "sei"], corretta: 0 },
        { id: "num_5", domanda: "6 →", opzioni: ["cinque", "sei", "sette"], corretta: 1 }
    ]
},
    fase2: {
    titolo: "I numeri da 10 a 19",
    istruzioni: "Osserva e scopri la logica dei numeri / Посмотрите и узнайте логику чисел:",
    audio: "audio/numeri/11-19.mp3", 
    
    // Introduzione al 10
    introduzione: {
        titolo: "Il numero 10",
        parola: "dieci",
        img: "img/numeri/10.webp",
        audio: "audio/numeri/10.mp3"
    },
    
    // Colonna A: 11-16 (Unità + dici)
    colonnaA: {
        titolo: "Unità + dici",
        colore: "#1a6e3a",  // Verde Italia
        sfondo: "#e8f5e9",   // Verde chiaro
        numeri: [
            { numero: 11, unita: "uno", scomposizione: ["un", "dici"] },
            { numero: 12, unita: "due", scomposizione: ["do", "dici"] },
            { numero: 13, unita: "tre", scomposizione: ["tre", "dici"] },
            { numero: 14, unita: "quattro", scomposizione: ["quattor", "dici"] },
            { numero: 15, unita: "cinque", scomposizione: ["quin", "dici"] },
            { numero: 16, unita: "sei", scomposizione: ["se", "dici"] }
        ]
    },
    
    // Colonna B: 17-19 (dicia + unità)
    colonnaB: {
        titolo: "dicia + unità",
        colore: "#ce2b37",  // Rosso Italia
        sfondo: "#fce4ec",   // Rosso chiaro
        numeri: [
            { numero: 17, unita: "sette", scomposizione: ["dicia", "ssette"] },
            { numero: 18, unita: "otto", scomposizione: ["dici", "otto"] },
            { numero: 19, unita: "nove", scomposizione: ["dicia", "nnove"] }
        ]
    },
    
    // Domande per la scoperta
    domande: [
    "🤔 Cosa noti? In quale colonna l'unità viene prima di 'dici'?<br><span style='color: #7f8c8d; font-size: 0.9em;'> Что вы замечаете? В какой колонке единица стоит перед «dici»?</span>",
    "🤔 Cosa succede con 17, 18 e 19? Dove va 'dici'?<br><span style='color: #7f8c8d; font-size: 0.9em;'> Что происходит с числами 17, 18 и 19? Куда переходит «dici»?</span>",
    "🤔 Guarda le unità di partenza (uno, due, tre...). Come cambiano?<br><span style='color: #7f8c8d; font-size: 0.9em;'> Посмотрите на начальные единицы (uno, due, tre...). Как они меняются?</span>"
],
    
    // Esercizio di completamento
    esercizio: {
        tipo: "completamento",
        titolo: "✍️ Completa la sequenza:",
        spazi: [
            { posizione: 1, parola: "undici" },
            { posizione: 2, parola: "dodici" },
            { posizione: 3, parola: "tredici" },
            { posizione: 4, parola: "quattordici" },
            { posizione: 5, parola: "quindici" },
            { posizione: 6, parola: "sedici" },
            { posizione: 7, parola: "diciassette" },
            { posizione: 8, parola: "diciotto" },
            { posizione: 9, parola: "diciannove" }
        ],
        spaziDaCompletare: [4, 6, 8]  // 14, 16, 18
    }
},

    // FASE 3: Decine + 1 e 8 (Logica del taglio)
fase3: {
    titolo: "Le decine + 1 e 8",
    istruzioni: "Scopri le decine e la loro logica / Узнайте десятки и их логику:",
    
    // Introduzione: Le decine
    introduzione: {
        titolo: "Le decine",
        img: "img/numeri/decine.webp",
        audio: "audio/numeri/decine.mp3"
    },
    
    // Sequenza 20-29
    sequenza20: {
        titolo: "Da 20 a 29",
        numeri: [
            { numero: 20, parola: "venti" },
            { numero: 21, parola: "vent**u**no", speciale: true },
            { numero: 22, parola: "ventidue" },
            { numero: 23, parola: "ventitré" },
            { numero: 24, parola: "ventiquattro" },
            { numero: 25, parola: "venticinque" },
            { numero: 26, parola: "ventisei" },
            { numero: 27, parola: "ventisette" },
            { numero: 28, parola: "vent**o**tto", speciale: true },
            { numero: 29, parola: "ventinove" }
        ]
    },
    
    // Sequenza 30-39
    sequenza30: {
        titolo: "Da 30 a 39",
        numeri: [
            { numero: 30, parola: "trenta" },
            { numero: 31, parola: "trent**u**no", speciale: true },
            { numero: 32, parola: "trentadue" },
            { numero: 33, parola: "trentatré" },
            { numero: 34, parola: "trentaquattro" },
            { numero: 35, parola: "trentacinque" },
            { numero: 36, parola: "trentasei" },
            { numero: 37, parola: "trentasette" },
            { numero: 38, parola: "trent**o**tto", speciale: true },
            { numero: 39, parola: "trentanove" }
        ]
    },
    
    // Domande per la scoperta
    domande: [
        "🤔 Caccia all'intruso! (Rifletti e rispondi) <br>Guarda i numeri con le lettere in grassetto. Che cosa succede alla vocale finale di venti e trenta quando incontra uno e otto? Perché secondo te?<br><span style='color: #7f8c8d; font-size: 0.9em;'>Посмотрите на цифры, выделенные жирным шрифтом. Что происходит с последней гласной в числах двадцать и тридцать, когда она встречается с единицей и восемью? Как вы думаете, почему?</span> <br><br>💡 Suggerimento: Prova a pronunciare ad alta voce: 'venti-uno' e 'ventuno'. 'venti-otto' e 'ventotto'. Quale parola suona più veloce e fluida?<br><span style='color: #7f8c8d; font-size: 0.9em;'>💡 Попробуйте произнести вслух «venti-uno» и «ventuno». Какое слово звучит быстрее и приятнее?</span>"
    ],
    
    // Esercizio di completamento
    esercizio: {
        titolo: "✍️ Applica la stessa logica per le decine successive:",
        spazi: [
            { posizione: 41, rispostaCorretta: "quarantuno" },
            { posizione: 42, rispostaCorretta: "quarantadue" },
            { posizione: 43, rispostaCorretta: "quarantatré" },
            { posizione: 48, rispostaCorretta: "quarantotto" },
            { posizione: 52, rispostaCorretta: "cinquantadue" },
            { posizione: 54, rispostaCorretta: "cinquantaquattro" },
            { posizione: 58, rispostaCorretta: "cinquantotto" },
            { posizione: 61, rispostaCorretta: "sessantuno" },
            { posizione: 67, rispostaCorretta: "sessantasette" },
            { posizione: 69, rispostaCorretta: "sessantanove" },
            { posizione: 73, rispostaCorretta: "settantatré" },
            { posizione: 78, rispostaCorretta: "settantotto" },
            { posizione: 85, rispostaCorretta: "ottantacinque" },
            { posizione: 88, rispostaCorretta: "ottantotto" },
            { posizione: 92, rispostaCorretta: "novantadue" },
            { posizione: 97, rispostaCorretta: "novantasette" }
        ]
    }
},    

    // FASE 4: Grandi numeri (cento, mille, milione, miliardo)
        fase4: {
            titolo: "I grandi numeri (cento, mille, milione, miliardo)",
            istruzioni: "Scopri le regole dei numeri grandi / Узнайте правила больших чисел:",
            
            // OSSERVAZIONE 1: Numeri con "cento"
            osservazione1: {
                titolo: "📌 Osserva 1: I numeri che finiscono in 'cento'",
                audio: "audio/numeri/centinaia.mp3",
                esempi: [
                    "100 = cento",
                    "200 = duecento",
                    "300 = trecento",
                    "400 = quattrocento",
                    "500 = cinquecento",
                    "600 = seicento",
                    "700 = settecento",
                    "800 = ottocento",
                    "900 = novecento"
                ],
                domande: [
                    "🤔 Cosa noti? (Что вы заметили?)",
                    "🤔 Quale parte cambia e quale resta costante? (Какая часть меняется, а какая остается неизменной?)"
                ]
            },
            
            // OSSERVAZIONE 2: Numeri con "mila"
            osservazione2: {
                titolo: "📌 Osserva 2: I numeri che finiscono in 'mila'",
                audio: "audio/numeri/migliaia.mp3",
                esempi: [
                    "1.000 = mille",
                    "2.000 = duemila",
                    "3.000 = tremila",
                    "4.000 = quattromila",
                    "5.000 = cinquemila",
                    "6.000 = seimila",
                    "7.000 = settemila",
                    "8.000 = ottomila",
                    "9.000 = novemila"
                ],
                domande: [
                    "🤔 Cosa succede a 'mille' quando mettiamo un numero davanti? (Что происходит со словом «mille», если перед ним поставить цифру?)"
                ]
            },
            
            // OSSERVAZIONE 3: Milioni e Miliardi
            osservazione3: {
                titolo: "📌 Osserva 3: Milioni e Miliardi",
                audio: "audio/numeri/milioni_miliardi.mp3",
                esempi: [
                    "1.000.000 = un milione",
                    "2.000.000 = due milioni",
                    "3.000.000 = tre milioni",
                    "1.000.000.000 = un miliardo",
                    "2.000.000.000 = due miliardi",
                    "3.000.000.000 = tre miliardi"
                ],
                domande: [
                    "🤔 Come cambiano 'milione' e 'miliardo' al plurale? (Как изменяется форма существительных 'milione' и 'miliardo' во множественном числе?)",
                ]
            },
            
            // TABELLA RIASSUNTIVA
            tabellaRiassuntiva: {
                titolo: "📊 Tabella riassuntiva",
                regole: [
                    { regola: "cento", descrizione: "invariabile", colore: "#1a6e3a", esempi: "100 = cento, 200 = duecento" },
                    { regola: "mille", descrizione: "cambia in 'mila'", colore: "#ce2b37", esempi: "1.000 = mille, 2.000 = duemila" },
                    { regola: "milione / miliardo", descrizione: "nomi (hanno il plurale)", colore: "#f1c40f", esempi: "1.000.000 = un milione, 2.000.000 = due milioni" }
                ]
            },
            
            // ESERCIZIO BASE: Completamento tabella
            esercizioBase: {
                titolo: "✍️ Completa la tabella",
                spazi: [
                    { posizione: 300, rispostaCorretta: "trecento" },
                    { posizione: 700, rispostaCorretta: "settecento" },
                    { posizione: 4000, rispostaCorretta: "quattromila" },
                    { posizione: 8000, rispostaCorretta: "ottomila" },
                    { posizione: 3000000, rispostaCorretta: "tre milioni" },
                    { posizione: 6000000, rispostaCorretta: "sei milioni" }
                ]
            },
            
            // SFIDA: Date importanti
sfidaDate: {
    titolo: "💪 Sfida: Le date importanti per gli italiani",
    istruzioni: "Scrivi in lettere queste date:",
    audio: "audio/date/",
    date: [
        { anno: 1934, rispostaCorretta: "millenovecentotrentaquattro" },
        { anno: 1938, rispostaCorretta: "millenovecentotrentotto" },
        { anno: 1982, rispostaCorretta: ["millenovecentottantadue", "millenovecentoottantadue"] },
        { anno: 2006, rispostaCorretta: "duemilasei" }
    ],
    domandaCulturale: "🔎 Perché queste date sono importanti per gli italiani?",
    immagineRivela: "img/mondiali.webp"
}
        },
    

        // FASE 5: Tombola!
    fase5: {
        titolo: "🎲 Tombola dei numeri!",
        istruzioni: "Il docente estrae i numeri. Segna quelli che hai sulla tua cartella!",
        numeriMin: 1,
        numeriMax: 50,
        numeriPerCartella: 6,
        istruzioniDocente: "Clicca su 'Estrai' per pescare un numero. Quando uno studente dice 'Tombola!', verifica la sua cartella.",
        // Testo per il numero estratto (in lettere)
        numeroEstrattoLabel: "🎯 Numero estratto:",
        // Testo per la cartella dello studente
        cartellaLabel: "🎲 La tua cartella",
        // Testi dei pulsanti
        btnEstrai: "Estrai",
        btnNuovaPartita: "🔄 Nuova partita",
        btnTombola: "🏆 Tombola!",
        btnConferma: "✅ Conferma vittoria",
        btnAnnulla: "❌ Annulla",
        // Messaggi
        messaggioAttesa: "⏳ In attesa dell'estrazione...",
        messaggioVincitore: "🏆 Lo studente ha vinto!",
        messaggioVerifica: "🔍 In verifica...",
        messaggioNessunNumero: "⚠️ Non ci sono più numeri da estrarre!",
        immagineTombola: "img/tombola.webp"
    }
},
    

                // 10. INDOVINELLI CON I NUMERI 
    profiloAnonimo: {
        titolo: "Fase 10: 🕵️ Chi è? (Indovinelli)",
        idFirebase: "profilo_anonimo",
        
        // ==========================================
        // ATTIVITÀ 1: Gioco dell'abbinamento
        // ==========================================
        abbinamento: {
            titolo: "🎯 Attività 1: Abbina le immagini ai profili",
            istruzioni: "Osserva le immagini, leggi/ascolta i profili e abbina ogni profilo al personaggio corretto.",
            
            // Personaggi (immagini in griglia 2x2)
            personaggi: [
    { 
        id: "A", 
        nome: "Marco", 
        etichetta: "Il bambino",
        immagine: "img/personaggi/bambino.webp" 
    },
    { 
        id: "B", 
        nome: "Anna", 
        etichetta: "La ragazza",
        immagine: "img/personaggi/ragazza.webp" 
    },
    { 
        id: "C", 
        nome: "Signor Rossi", 
        etichetta: "L'adulto",
        immagine: "img/personaggi/adulto.webp" 
    },
    { 
        id: "D", 
        nome: "Giulia", 
        etichetta: "L'anziana",
        immagine: "img/personaggi/anziano.webp" 
    }
],
            
                        // Profili (in ordine casuale - mescolati rispetto alle immagini)
                                                profili: [
                { 
                    id: 1, 
                    testo: "👵 Ho 70 anni. Ho una figlia. Ho un gatto. Ho sonno!",
                    audio: "audio/personaggi/anziana.mp3",
                    rispostaCorretta: "D"
                },
                { 
                    id: 2, 
                    testo: "👦 Ho 10 anni. Ho una sorella. Ho un cane. Ho fame!",
                    audio: "audio/personaggi/bambino.mp3",
                    rispostaCorretta: "A"
                },
                { 
                    id: 3, 
                    testo: "🧑 Ho 50 anni. Ho un figlio. Ho una macchina. Ho freddo!",
                    audio: "audio/personaggi/adulto.mp3",
                    rispostaCorretta: "C"
                },
                { 
                    id: 4, 
                    testo: "👧 Ho 25 anni. Ho un fratello. Ho una bicicletta. Ho sete!",
                    audio: "audio/personaggi/ragazza.mp3",
                    rispostaCorretta: "B"
                }
            ],
        },
        
        // ==========================================
        // ATTIVITÀ 2: Profilo anonimo degli studenti
        // ==========================================
        profiloStudente: {
            titolo: "✍️ Attività 2: Crea il tuo profilo anonimo",
            istruzioni: "Compila il tuo profilo (anonimo). Poi indovina chi ha scritto gli altri profili!",
            
                        campi: [
                { 
                    id: "eta", 
                    label: "Età", 
                    type: "number", 
                    placeholder: "Scrivi la tua età in cifre (es. 35)",
                    helpL1: "(scrivi in cifre)"
                },
                // Parenti
                { id: "fratello", label: "Ho un fratello", type: "checkbox" },
                { id: "sorella", label: "Ho una sorella", type: "checkbox" },
                { id: "figlio", label: "Ho un figlio", type: "checkbox" },
                { id: "figlia", label: "Ho una figlia", type: "checkbox" },
                // Animali e oggetti
                { id: "cane", label: "Ho un cane", type: "checkbox" },
                { id: "gatto", label: "Ho un gatto", type: "checkbox" },
                { id: "macchina", label: "Ho una macchina", type: "checkbox" },
                { id: "bicicletta", label: "Ho una bicicletta", type: "checkbox" },
                // Sensazioni
                { id: "fame", label: "Ho fame", type: "checkbox" },
                { id: "sete", label: "Ho sete", type: "checkbox" },
                { id: "freddo", label: "Ho freddo", type: "checkbox" },
                { id: "sonno", label: "Ho sonno", type: "checkbox" }
            ]
        },
        
        // FASE 3: Indovinelli degli studenti
        indovinelli: {
            titolo: "🔍 Chi ha scritto questo profilo?",
            istruzioni: "Leggi i profili e scrivi il nome dello studente che pensi lo abbia scritto.",
            placeholder: "Scrivi il nome dello studente..."
        },
        
        // FASE 4: Rivelazione (solo docente)
        rivelazione: {
            titolo: "🏆 Ecco chi ha scritto ogni profilo!",
            pulsanteRivela: "Rivela i nomi"
        }
    },



        // 12. ESERCIZIO DI RAFFORZAMENTO (AVERE + NUMERI)
esercizioRafforzamento: {
    titolo: "Fase 12: 🏠 Cosa hanno...?",
    istruzioni: "Completa le frasi con il verbo AVERE. Usa i numeri in lettere e fai l'accordo corretto.",
    esempio: {
        soggetto: "Marco",
        numero: 3,
        sostantivoSingolare: "mela",
        fraseCorretta: "Marco ha tre mele."
    },
    scenari: [
        {
            id: "frigo",
            titolo: "🧊 In frigo",
            immagine: "img/scenario_frigo.webp",
            descrizione: "Guarda il frigo e completa le frasi:",
            esercizi: [
                { soggetto: "Marco", numero: 3, sostantivoSingolare: "mela" },
                { soggetto: "Maria", numero: 6, sostantivoSingolare: "pesce" },        // ← sostituito uovo
                { soggetto: "Tu", numero: 2, sostantivoSingolare: "pizza", interrogativa: true },
                { soggetto: "Noi", numero: 4, sostantivoSingolare: "grappolo d'uva" },
                { soggetto: "Voi", numero: 3, sostantivoSingolare: "insalata", interrogativa: true },
                { soggetto: "Loro", numero: 5, sostantivoSingolare: "succo di frutta" },
                { soggetto: "Io", numero: 2, sostantivoSingolare: "panino" },
                { soggetto: "Paolo", numero: 7, sostantivoSingolare: "biscotto" },
                { soggetto: "Noi", numero: 4, sostantivoSingolare: "cioccolatino" }
            ]
        },
        {
            id: "casa",
            titolo: "🛋️ In casa",
            immagine: "img/scenario_casa.webp",
            descrizione: "Guarda la casa e completa le frasi:",
            esercizi: [
                { soggetto: "Maria", numero: 2, sostantivoSingolare: "divano" },
                { soggetto: "Tu", numero: 4, sostantivoSingolare: "sedia", interrogativa: true },
                { soggetto: "Paolo", numero: 3, sostantivoSingolare: "letto" },
                { soggetto: "Noi", numero: 5, sostantivoSingolare: "finestra" },
                { soggetto: "Voi", numero: 6, sostantivoSingolare: "porta", interrogativa: true },
                { soggetto: "Loro", numero: 2, sostantivoSingolare: "televisore" },
                { soggetto: "Io", numero: 3, sostantivoSingolare: "specchio" },
                { soggetto: "Noi", numero: 4, sostantivoSingolare: "tavolo" },
                { soggetto: "Tu", numero: 7, sostantivoSingolare: "lampada", interrogativa: true }
            ]
        },
        {
            id: "famiglia",
            titolo: "👨‍👩‍👧‍👦 In famiglia",
            immagine: "img/scenario_famiglia.webp",
            descrizione: "Guarda la famiglia e completa le frasi:",
            esercizi: [
                { soggetto: "Luigi", numero: 1, sostantivoSingolare: "padre" },
                { soggetto: "Io", numero: 1, sostantivoSingolare: "madre" },
                { soggetto: "Maria", numero: 2, sostantivoSingolare: "figlio" },
                { soggetto: "Tu", numero: 3, sostantivoSingolare: "figlia", interrogativa: true },
                { soggetto: "Noi", numero: 2, sostantivoSingolare: "nonno" },
                { soggetto: "Voi", numero: 2, sostantivoSingolare: "nonna", interrogativa: true },
                { soggetto: "Loro", numero: 3, sostantivoSingolare: "zio" },
                { soggetto: "Io", numero: 4, sostantivoSingolare: "zia" },
                { soggetto: "Paolo", numero: 5, sostantivoSingolare: "amico" },
                { soggetto: "Noi", numero: 6, sostantivoSingolare: "amica" }
            ]
        }
    ]
},


    

    // 13. FASE 1 - SCRITTURA: Le mie 3 cose importanti
    scritturaCoseImportanti: {
        titolo: "Fase 13: 💎 Le mie 3 cose importanti",
        istruzioni: "Scrivi 3 cose che per te hanno molta importanza. Possono essere oggetti, persone, animali o anche concetti astratti.",
        esempio: {
            frasi: [
                "Io ho una macchina molto bella, è rossa e veloce.",
                "Io ho una famiglia molto grande, è molto importante per me.",
                "Io ho due fratelli, sono bravi e belli."
            ],
            struttura: "Io ho [numero] [cosa/persona/animale] [essere] [descrizione]."
        },
        campi: [
            { id: "frase_1", placeholder: "Scrivi la tua prima cosa importante..." },
            { id: "frase_2", placeholder: "Scrivi la tua seconda cosa importante..." },
            { id: "frase_3", placeholder: "Scrivi la tua terza cosa importante..." }
        ]
    },


            // 14. FASE ORALE - Parla con un compagno
    faseOrale: {
       titolo: "Fase 14: 🗣️ Parla con un compagno",
          istruzioni: "Usa le tue 3 frasi per fare domande al tuo compagno!",
    istruzioniDocente: "Inserisci i nomi degli studenti presenti oggi, poi genera le coppie.",
       chat: {
           abilitata: true,
           placeholderStudente: "Chiedi un suggerimento al docente...",
          placeholderDocente: "Scrivi un suggerimento per lo studente..."
       }
    },
    


    // 14. PRESENTAZIONE PERSONALE
    presentazionePersonale: {
        titolo: "Fase 14: 🎤 Parliamo di noi",
        istruzioni: "Scrivi le tue informazioni. Usa queste frasi come base:",
        campi: [
            { id: "u001_pres_nome", label: "Nome", suggerimento: "Io sono..." },
            { id: "u001_pres_naz", label: "Nazionalità", suggerimento: "Sono..." },
            { id: "u001_pres_prof", label: "Professione", suggerimento: "Sono..." },
            { id: "u001_pres_perche", label: "Perché studio italiano", suggerimento: "Studio l'italiano perché..." }
        ]
    },

        // 15. AUTOVALUTAZIONE
    autovalutazione: {
        titolo: "Fase 15: ✅ Autovalutazione",
        istruzioni: "Com'è andata questa unità? Clicca sul tuo livello:",
        obiettivi: [
            { id: "u001_auto_1", testo: "So coniugare il verbo 'essere'.", shortLabel: "Coniugazione" },
            { id: "u001_auto_2", testo: "So presentarmi.", shortLabel: "Presentazione" },
            { id: "u001_auto_3", testo: "So negare un'informazione.", shortLabel: "Negazione" },
            { id: "u001_auto_4", testo: "So fare domande sugli altri.", shortLabel: "Domande" }
        ]
    }
};