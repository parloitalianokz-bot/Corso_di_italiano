
import { db } from "./config-firebase.js";
import { ref, onValue, set, push, remove, update, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { creaLavagna, creaSezioneFisarmonica, creaBanner } from "./ui-helper.js";

// ============================================================
// 1. FUNZIONE PRINCIPALE
// ============================================================
export function initLezione(config, userInfo) {
    const { myUserName, myGroup, isDocente } = userInfo;
    const BASE_PATH = `${config.idFirebase || "lezione_default"}/${myGroup}`;

    console.log("Motore lezione avviato per:", myUserName);

    // 1. Inizializza l'header
    setupHeader(config, myUserName, myGroup);
    
    // 2. Genera tutto il contenuto dinamico (TUTTO l'HTML che abbiamo appena incollato)
    const contenitoreDinamico = document.getElementById('contenitore-dinamico');
    if (contenitoreDinamico) {
        contenitoreDinamico.innerHTML = generaHtmlDinamico(config, isDocente) || "<p>Errore: nessun dato lezione trovato.</p>";
    }
}

// ============================================================
// 2. FUNZIONI DI SUPPORTO (HEADER, ECC.)
// ============================================================

// Funzione per l'inizializzazione dell'interfaccia iniziale e dei titoli
function setupHeader(config, userName, group) {
    if (config) {
        // Imposta il titolo della scheda del browser
        document.title = config.titolo || "Lezione Interattiva";
        
        // Imposta i titoli testuali nella pagina
        const titEl = document.getElementById('titolo-lezione'); 
        if (titEl) titEl.innerText = config.titolo || "";
        
        const sottEl = document.getElementById('sottotitolo-lezione'); 
        if (sottEl) sottEl.innerText = config.sottotitolo || "";
        
        // Gestione del banner immagine
        const banEl = document.getElementById('banner-lezione'); 
        if (banEl && config.bannerImg) { 
            banEl.src = config.bannerImg; 
            banEl.style.display = "inline-block"; 
        }
        
        // Gestione del badge con il nome dello studente e il gruppo corrente
        const userInfoBadge = document.getElementById('user-info-badge');
            if (userInfoBadge) {
                userInfoBadge.innerHTML = `👤 <span class="user-name">${userName}</span> · 🏫 <span class="user-group">${group}</span>`;
        }
    }
}

function initFirebaseListeners(basePath, config) {
    // Qui andranno i tuoi onValue, le logiche della bacheca, ecc.
}


// ============================================================
// 3. GENERATORE HTML PRINCIPALE
// ============================================================

export function generaHtmlDinamico(ConfigLezione, isDocente) {
    let htmlDinamico = "";

    if (ConfigLezione?.elicitazione) {
        
        // --- INIZIO BLOCCO FLASHCARD CON FRECCE ---
        let flashcardsHtml = "";
        if (ConfigLezione.elicitazione?.vocabolario?.length > 0) {
            flashcardsHtml = `
            <div style="position: relative; display: flex; align-items: center; margin-bottom: 10px;">
                
                <!-- Freccia Sinistra -->
                <button onclick="scrollSlider(-1)" class="arrow-btn" style="left: -10px;">
                    &#10094;
                </button>
                
                <!-- Contenitore Scorrevole (Nota l'ID 'flashcard-slider') -->
                <div id="flashcard-slider" style="display: flex; overflow-x: auto; gap: 15px; padding: 15px 30px; scroll-behavior: smooth; width: 100%; scrollbar-width: none;">
                    ${ConfigLezione.elicitazione.vocabolario.map((vocab, i) => `
                        <div class="flashcard-item" onclick="document.getElementById('audio_vocab_${i}').play()">
                            <img src="${vocab.img}" alt="${vocab.parola}">
                            <div class="flashcard-label">🔊 ${vocab.parola}</div>
                            <audio id="audio_vocab_${i}" src="${vocab.audio}"></audio>
                        </div>
                    `).join('')}
                </div>

                <!-- Freccia Destra -->
                <button onclick="scrollSlider(1)" class="arrow-btn" style="right: -10px;">
                    &#10095;
                </button>
            </div>
            <p style="text-align: center; font-size: 0.8em; color: #7f8c8d; margin-top: -5px; margin-bottom: 20px;"><em>(Usa le frecce o scorri con il dito per vederle tutte)</em></p>
            `;
        }
        // --- FINE BLOCCO FLASHCARD ---

        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.elicitazione.titolo, 'elicitazione', `
        <div class="didactic-block fase-elicitazione">
            <p>${ConfigLezione.elicitazione.intro || ""}</p>
            
            ${ConfigLezione.elicitazione.immagineMappa ? `<div style="text-align: center; margin: 20px 0;"><img src="${ConfigLezione.elicitazione.immagineMappa}" alt="Immagine introduttiva dell'attività" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"></div>` : ''}
            
            ${flashcardsHtml}

            ${ConfigLezione.elicitazione.categorieEta ? `
<div style="margin-top: 30px; padding-top: 20px; border-top: 2px dashed #eee;">
    <div class="question-title">👥 Scegli la tua categoria:</div>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 20px 0;">
        ${ConfigLezione.elicitazione.categorieEta.map((cat, index) => `
            <div style="text-align: center; cursor: pointer;" onclick="scegliCategoria('${cat.id}')">
                <img src="${cat.img}" alt="${cat.etichetta}" style="width: 120px; height: 120px; object-fit: contain; border-radius: 12px; border: 3px solid #ddd; transition: all 0.3s ease;" id="img_cat_${cat.id}">
                <div style="margin-top: 5px; font-weight: bold; color: var(--primary-color);">${cat.etichetta}</div>
                <div id="nomi_cat_${cat.id}" style="font-size: 0.9em; color: #666; min-height: 20px;"></div>
            </div>
        `).join('')}
    </div>
    <div style="text-align: center; font-size: 0.9em; color: #999;">
        <em>Clicca sulla tua categoria. Poi guarda il tabellone.</em>
    </div>
</div>
` : ''}

${ConfigLezione.elicitazione.domandeBrainstorming ? ConfigLezione.elicitazione.domandeBrainstorming.map((item, index) => `
    <div style="margin-top: 30px; padding-top: 20px; border-top: 2px dashed #eee;">
        
        <!-- FLASHCARD DI SUPPORTO (SOLO PER LA PRIMA DOMANDA "fame") -->
        ${item.id === "fame" && ConfigLezione.elicitazione.flashcardCibo ? `
        <div style="margin-bottom: 15px;">
            <p style="font-size: 0.95em; color: #555; margin-bottom: 10px;"><em>📖 Ecco alcune idee:</em></p>
            <div style="position: relative; display: flex; align-items: center; margin-bottom: 10px;">
                <!-- Freccia Sinistra -->
                <button onclick="scrollSliderCibo(-1)" class="arrow-btn" style="left: -10px;">
                    &#10094;
                </button>
                
                <!-- Contenitore Scorrevole -->
                <div id="flashcard-slider-cibo" class="flashcard-slider">
                    ${ConfigLezione.elicitazione.flashcardCibo.map((vocab, i) => `
                        <div class="flashcard-item" onclick="document.getElementById('audio_cibo_${i}').play()">
                            <img src="${vocab.img}" alt="${vocab.parola}" style="height: 100px; object-fit: cover;">
                            <div class="flashcard-label">🔊 ${vocab.parola}</div>
                            <audio id="audio_cibo_${i}" src="${vocab.audio}"></audio>
                        </div>
                    `).join('')}
                </div>

                <!-- Freccia Destra -->
                <button onclick="scrollSliderCibo(1)" class="arrow-btn" style="right: -10px;">
                    &#10095;
                </button>
            </div>
            <p style="text-align: center; font-size: 0.8em; color: #7f8c8d; margin-top: -5px; margin-bottom: 10px;"><em>(Clicca sulle immagini per ascoltare la pronuncia)</em></p>
        </div>
        ` : ''}
        
        <div class="question-title">${item.domanda}</div>
        
        <!-- AREA DI SCRITTURA PERSONALE -->
        <div style="margin-top: 15px; background: #f8f9fa; border-radius: 8px; border: 1px solid #e9ecef; padding: 15px;">
            <h4 style="margin-top: 0; color: #2c3e50; font-size: 0.95em;">✍️ La tua risposta:</h4>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <textarea id="textarea_brainstorming_${item.id}" 
                          rows="3" 
                          class="input-didattico" 
                          placeholder="${item.placeholder}"
                          style="resize: vertical; min-height: 60px; width: 100%;"
                          disabled></textarea>
                <div style="display: flex; gap: 10px;">
                    <button id="btn_salva_brainstorming_${item.id}" 
                            class="btn-submit" 
                            onclick="salvaRispostaBrainstorming('${item.id}')"
                            style="display: none;">
                        💾 Salva
                    </button>
                    <button id="btn_modifica_brainstorming_${item.id}" 
                            class="btn-spectate" 
                            onclick="modificaRispostaBrainstorming('${item.id}')"
                            style="display: none;">
                        🔄 Modifica
                    </button>
                </div>
            </div>
        </div>
        
        <!-- RISPOSTE DELLA CLASSE -->
        <div style="margin-top: 15px; padding: 15px; background: white; border-radius: 8px; border: 1px solid #e9ecef;">
            <h4 style="margin-top: 0; color: #2c3e50; font-size: 0.95em;">💬 Risposte della classe:</h4>
            <div id="risposte_brainstorming_${item.id}" style="font-size: 0.95em;">
                <p style="color: #999; font-style: italic;">Ancora nessuna risposta...</p>
            </div>
        </div>
    </div>
`).join('') : ''}



${isDocente && ConfigLezione.elicitazione?.categorieEta ? `
<div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; border: 1px solid #ffeeba;">
    <h4 style="margin-top: 0; color: #856404;">📋 Risposte Studenti (Docente)</h4>
    <div id="risposte_categorie_docente" style="font-size: 0.95em;">
        <p style="color: #999; font-style: italic;">Caricamento risposte...</p>
    </div>
</div>
` : ''}




            <div class="question-title" style="margin-top: 30px; padding-top: 20px; border-top: 2px dashed #eee;">✍️ Scrivete qui le parole che conoscete già:</div>
                <div class="whiteboard-container">
                    ${creaLavagna('elicit', 'Scrivi qui la tua parola e premi Invia...')}
                </div>
        </div>`);
    }

    
 

    // Nuova versione semplificata che chiama la funzione esterna
    if (ConfigLezione?.ascolto) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.ascolto.titolo, 'ascolto', generaSchedaAscolto(ConfigLezione, isDocente));
    }

    if (ConfigLezione?.lettura) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.lettura.titolo, 'lettura', generaSchedaLettura(ConfigLezione, isDocente));
    }

    if (ConfigLezione?.comprensione) {
    // 1. Inizializza cComprensione con il banner
    let cComprensione = creaBanner("../img/banner_comprensione.webp", "Comprensione del testo");
    
    // 2. Aggiungi le istruzioni
    cComprensione += `<div class="didactic-block"><p>${ConfigLezione.comprensione.istruzioni || ""}</p>`;
    
    // 3. Aggiungi tutte le domande
    ConfigLezione.comprensione.domande.forEach((domanda) => {
        cComprensione += `
        <div class="quiz-box" id="quiz_box_${domanda.id}">
            <div class="quiz-question-text">${domanda.testo}</div>
            <div id="opzioni_${domanda.id}">`;
        
        domanda.opzioni.forEach((opzione, optIndex) => {
            cComprensione += `
                <label class="quiz-option" id="label_${domanda.id}_${optIndex}">
                    <input type="radio" name="radio_${domanda.id}" value="${optIndex}">
                    ${opzione}
                </label>`;
        });

        cComprensione += `</div>
            <button id="btn_invia_${domanda.id}" class="quiz-btn-invia" onclick="inviaRispostaQuiz('${domanda.id}', ${domanda.corretta})">Invia Risposta 🚀</button>
            <div id="feedback_${domanda.id}" style="margin-top: 10px; font-weight: bold; text-align: center;"></div>
            
            <div id="bacheca_${domanda.id}" class="bacheca-risultati" style="display: none;"></div>

            <div id="docente_panel_${domanda.id}" class="docente-panel" style="display: none;">
                <div>📊 Risposte ricevute: <strong id="count_${domanda.id}">0</strong></div>
                <button onclick="sbloccaBacheca('${domanda.id}')" style="background: var(--primary-color); color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-weight:bold;">Mostra a tutti 👁️</button>
            </div>
        </div>`;
    });

    // 4. Aggiungi il pulsante reset per il docente
    if (isDocente) {
        cComprensione += `
        <div style="text-align: center; margin-top: 30px; border-top: 2px solid #ccc; padding-top: 20px;">
            <button onclick="resettaTuttoIlQuiz()" style="background: #e74c3c; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">
                🧹 Reset Totale Quiz
            </button>
        </div>`;
    }
    
    cComprensione += `</div>`;
    
    // 5. AGGIUNGI TUTTO a htmlDinamico
    htmlDinamico += creaSezioneFisarmonica(ConfigLezione.comprensione.titolo, 'comprensione', cComprensione);
}

    
    if (ConfigLezione?.produzioneDomande) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.produzioneDomande.titolo, 'produzione', generaSchedaProduzione(ConfigLezione, isDocente));
    }

    if (ConfigLezione?.produzioneRisposte) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.produzioneRisposte.titolo, 'risposte', generaSchedaRisposte(ConfigLezione, isDocente));
    }

    if (ConfigLezione?.riordinoDialoghi) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.riordinoDialoghi.titolo, 'riordino', generaSchedaRiordino(ConfigLezione, isDocente));
    }

    if (ConfigLezione?.grammatica) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.grammatica.titolo, 'grammatica', generaSchedaGrammatica(ConfigLezione, isDocente));
    }

    if (ConfigLezione?.negazione) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.negazione.titolo, 'negazione', generaSchedaNegazione(ConfigLezione, isDocente));
    }

    if (ConfigLezione?.produzioneDialoghi) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.produzioneDialoghi.titolo, 'produzioneDialoghi', generaSchedaProduzioneDialoghi(ConfigLezione, isDocente));
    }

    if (ConfigLezione?.presentazionePersonale) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.presentazionePersonale.titolo, 'presentazione', generaSchedaPresentazione(ConfigLezione, isDocente));
    }

    if (ConfigLezione?.autovalutazione) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.autovalutazione.titolo, 'autovalutazione', generaSchedaAutovalutazione(ConfigLezione, isDocente));
    }

    return htmlDinamico;
}


// ============================================================
// 4. GENERATORI DI SCHEDE (in ordine di alfabetico)
// ============================================================

function generaSchedaAscolto(ConfigLezione, isDocente) {
    const a = ConfigLezione.ascolto;
    
    return `
    <div class="didactic-block">
        <p>${a.istruzioni}</p>
        
        <!-- Video -->
        <div style="text-align: center; margin: 20px 0; position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
            <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
                    src="https://www.youtube.com/embed/${a.videoUrl}?cc_load_policy=0" 
                    allowfullscreen></iframe>
        </div>

        <!-- FASE 1: Brainstorming Collaborativo -->
        <h4 style="margin-top:30px; border-bottom:1px solid #ccc; padding-bottom:10px;">${a.taskBrainstorming.titolo}</h4>
        <div class="whiteboard-container">
            ${creaLavagna(a.taskBrainstorming.id, a.taskBrainstorming.placeholder)}
        </div>

        <!-- FASE 2: Individuale + Feedback Docente -->
        <div style="margin-top:40px; padding-top:20px; border-top: 2px solid #3498db;">
            <h4 style="margin-bottom:10px;">${a.taskComprensione.titolo}</h4>
            <p>${a.taskComprensione.domanda}</p>
            
            <div id="input_area_${a.taskComprensione.id}" style="display:flex; gap:10px;">
                <input type="text" id="input_${a.taskComprensione.id}" class="input-didattico" placeholder="${a.taskComprensione.placeholder}">
                <button onclick="inviaRispostaAscolto('${a.taskComprensione.id}')">Invia</button>
            </div>
            
            ${isDocente ? `
                <div class="pannello-docente" style="background:#fff3cd; padding:10px; margin-top:10px;">
                    <strong>Risposte studenti</strong>
                    <div id="bacheca_doc_${a.taskComprensione.id}"></div>
                </div>
            ` : ""}
            <div id="bacheca_pub_${a.taskComprensione.id}" style="margin-top:10px;"></div>
        </div>
    </div>`;
}


function generaSchedaAutovalutazione(ConfigLezione, isDocente) {
    const a = ConfigLezione.autovalutazione;
    if (!a) return "";
    
    // Questa funzione ora crea solo il "guscio" vuoto.
    // Il contenuto verrà inserito dinamicamente dal codice che mettiamo in index.html.
    return `
        <div class="container-auto">
            <p>${a.istruzioni}</p>
            <div id="autovalutazione-main-container">
                <p>Caricamento dati...</p>
            </div>
        </div>`;
}


function generaSchedaLettura(ConfigLezione, isDocente) {
    const l = ConfigLezione.lettura;
    if (!l) return "";

    // Includo la classe "scheda-seppia" per il testo da leggere
    return `
    <div class="didactic-block">
        <!-- TESTO DA LEGGERE CON SFONDO LIBRO -->
        <div class="stile-libro">
            ${l.testoFormattato}
        </div>
        
        <!-- LAVAGNA SOTTO IL TESTO -->
        <div style="margin-top: 30px; border-top: 2px solid #eee; padding-top: 15px;">
            <h4 style="margin-bottom: 10px; color: #2c3e50;">${l.istruzioniLavagna}</h4>
            <div class="whiteboard-container">
                ${creaLavagna(l.idLavagna, 'Scrivi qui le parole nuove...')}
            </div>
        </div>
    </div>`;
}


function generaSchedaGrammatica(ConfigLezione, isDocente) {
    const d = ConfigLezione.grammatica;
    if (!d) return "";
    let html = `<div class="container-grammatica">`;

    html += creaBanner("../img/banner_grammatica.webp", "Esplorazione grammaticale");

    html += `
    <div style="background: #fdfbf7; padding: 15px; border-left: 5px solid #f39c12; margin-bottom: 20px;">
        <h4 style="margin-top:0;">1️⃣ Fase 1: Tu, Lei, Io</h4>
        <p><strong>Osserva i due dialoghi / Посмотрите на два диалога:</strong></p>
        <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 8px; font-size: 1.1em; background: white; padding: 8px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">👤 Ciao Olga, tu SEI americana? No, io SONO russa.</li>
            <li style="margin-bottom: 8px; font-size: 1.1em; background: white; padding: 8px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">👔 Buongiorno Victor, Lei È inglese? No, io SONO francese.</li>
        </ul>
        <p style="color: #c0392b; font-weight: bold; margin-top: 15px;">${d.fase1.domanda}</p>
    </div>`;

    html += `<h4 style="color: #d35400;">✍️ Completa i dialoghi:</h4>`;
    if (d.fase1.eserciziBacheca) {
        d.fase1.eserciziBacheca.forEach(ex => {
            html += `<div class="didactic-block" style="margin-bottom: 20px; border-left: 5px solid #f39c12;">
                        <p style="font-size: 1.1em; font-weight: bold; line-height: 1.8;">${ex.testo}</p>
                        <!-- Abbiamo tolto creaLavagna e messo il blocco dinamico -->
                        <div id="blocco_dinamico_gram_${ex.id}" class="blocco-dinamico">
                            <p style="color:#7f8c8d; font-style:italic;">Caricamento in corso...</p>
                        </div>
                     </div>`;
        });
    }

    html += `
    <div style="background: #e8f8f5; padding: 15px; border-left: 5px solid #27ae60; margin-bottom: 20px;">
        <h4 style="margin-top:0;">2️⃣ ${d.fase2.titolo}</h4>
        <p><em>${d.fase2.dialogo}</em></p>
        <p style="color: #27ae60;"><strong>${d.fase2.riflessione}</strong></p>`;
    
    if (d.fase2.eserciziBacheca) {
        d.fase2.eserciziBacheca.forEach(ex => {
            html += `<div class="didactic-block" style="margin-bottom: 15px; background: white; padding: 10px; border-radius: 4px; border: 1px dashed #27ae60;">
                        <p style="font-size: 1.1em; font-weight: bold; line-height: 1.8;">${ex.testo}</p>
                        <!-- Abbiamo tolto creaLavagna e messo il blocco dinamico -->
                        <div id="blocco_dinamico_gram_${ex.id}" class="blocco-dinamico">
                            <p style="color:#7f8c8d; font-style:italic;">Caricamento in corso...</p>
                        </div>
                     </div>`;
        });
    }
    html += `</div>`;

    html += `<div style="background: #ebf5fb; padding: 15px; border-left: 5px solid #3498db; margin-bottom: 20px;"><h4 style="margin-top:0;">3️⃣ ${d.fase3.titolo}</h4>`;
    d.fase3.blocchi.forEach((blocco) => {
        html += `<div style="background: rgba(255,255,255,0.5); padding: 10px; margin-bottom: 15px; border-radius: 4px;">
                    <h5 style="margin-top:0; color: #2980b9;">${blocco.titolo}</h5>
                    <ul>${blocco.esempi.map(e => `<li>${e}</li>`).join('')}</ul>
                    <p style="color:#c0392b; font-weight: bold;">${blocco.domanda}</p>
                 </div>`;
    });
    html += `</div>`;

    html += `
    <div style="background: #fff; padding: 20px; border: 2px solid #34495e;">
        <h4 style="margin-top:0;">✍️ ${d.fase4.istruzioni}</h4>
        <table style="width:100%; border-collapse: collapse;">`;
    
    d.fase4.tabella.forEach((riga, index) => {
        html += `<tr>
                    <td style="padding:10px; border-bottom:1px solid #ccc;">${riga.pronome}</td>
                    <td style="padding:10px; border-bottom:1px solid #ccc;">
                        <input type="text" id="tab_input_${index}" class="input-didattico" placeholder="?">
                    </td>
                 </tr>`;
    });
    
    html += `</table>`;

    if (!isDocente) {
        html += `<button onclick="verificaEInviaTabella()" style="margin-top:15px; padding:10px 20px; background:#34495e; color:white; border:none; cursor:pointer;">✅ Verifica e Invia</button>`;
    }

    html += `
        <div id="feedback_sintesi" style="margin-top:10px; font-weight:bold;"></div>
        <div id="tabella-risposte" style="margin-top: 20px; padding: 10px; border: 1px solid #ccc;">
            <p>Qui appariranno le risposte degli altri studenti...</p>
        </div>`;
             
    if (isDocente) {
        html += `<div id="pannello_docente_tabella" style="margin-top:20px; padding:15px; border: 2px dashed #f1c40f; background:#fff9e6;">
                    <p style="color: #7f8c8d; font-style: italic;">Caricamento bacheca studenti in corso...</p>
                 </div>`;
    }

    html += `</div></div>`;
    return html;
}


function generaSchedaNegazione(ConfigLezione, isDocente) {
    const n = ConfigLezione.negazione;
    if (!n) return "";
    let html = `<div class="container-negazione">`;

    // FASE 1 e 2: Osservazione e Analisi
    html += `
    <div style="background: #fdfbf7; padding: 15px; border-left: 5px solid #e74c3c; margin-bottom: 20px;">
        <h4 style="margin-top:0;">${n.scoperta.istruzioni}</h4>
        <ul style="list-style-type: none; padding: 0;">
            ${n.scoperta.esempi.map(es => `<li style="margin-bottom: 8px; font-size: 1.1em; background: white; padding: 8px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">${es}</li>`).join('')}
        </ul>
        <div style="margin-top: 15px; padding: 10px; background: rgba(231, 76, 60, 0.1); border-radius: 4px;">
            ${n.scoperta.domandeAnalisi}
        </div>
    </div>`;

    // FASE 3: Pratica (Esercizi Dinamici)
    html += `<h4 style="color: #2c3e50; margin-top:30px;">${n.pratica.istruzioni}</h4>`;
    n.pratica.eserciziBacheca.forEach(ex => {
        html += `<div class="didactic-block" style="margin-bottom: 15px; border-left: 5px solid #3498db; background: white; padding: 10px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                    <p style="font-size: 1.1em; font-weight: bold;">${ex.testo}</p>
                    <div id="blocco_dinamico_neg_${ex.id}" class="blocco-dinamico">
                        <p style="color:#7f8c8d; font-style:italic;">Caricamento in corso...</p>
                    </div>
                 </div>`;
    });

    // FASE 4: Regola Finale
    html += `<div style="background: #e8f8f5; padding: 15px; border-left: 5px solid #27ae60; margin-top: 30px;">
                <h4 style="margin-top:0;">${n.regola.istruzioni}</h4>`;
    n.regola.eserciziBacheca.forEach(ex => {
        html += `<div>
                    <p style="font-size: 1.1em;">${ex.testo}</p>
                    <div id="blocco_dinamico_neg_${ex.id}" class="blocco-dinamico">
                        <p style="color:#7f8c8d; font-style:italic;">Caricamento in corso...</p>
                    </div>
                 </div>`;
    });
    html += `</div></div>`;

    return html;
}



function generaSchedaProduzione(ConfigLezione, isDocente) {
    let html = `<div class="container-produzione">`;
    
    ConfigLezione.produzioneDomande.esercizi.forEach(ex => {
        html += `
        <div class="box-esercizio" id="box_${ex.id}" style="margin: 20px 0; padding: 20px; border: 1px solid #eee; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); background: white;">
            <p style="font-size: 1.1em;"><strong>Risposta:</strong> ${ex.risposta}</p>
            <p style="color: #666; font-style: italic;"><em>${ex.guida}</em></p>
            
            <div id="input_area_${ex.id}" style="display: flex; gap: 10px; align-items: center; margin-top: 15px;">
                <!-- Usa la classe input-didattico che hai definito nel CSS -->
                <input type="text" id="input_domanda_${ex.id}" class="input-didattico" placeholder="Scrivi qui la tua domanda...">
                
                <button onclick="inviaDomanda('${ex.id}')" style="padding: 12px 20px; border-radius: 12px; border: none; background: var(--primary-color, #3498db); color: white; cursor: pointer; font-weight: bold; white-space: nowrap;">
                    Invia
                </button>
            </div>

            ${isDocente ? `
                <div class="pannello-docente" style="background:#fff3cd; padding:15px; margin-top:15px; border-radius: 8px;">
                    <strong>Pannello Docente:</strong>
                    <div id="bacheca_docente_${ex.id}"></div>
                </div>
            ` : ""}
            
            <div id="bacheca_pubblica_${ex.id}" style="margin-top: 15px;"></div>
        </div>`;
    });
    html += `</div>`;
    return html;
}


function generaSchedaProduzioneDialoghi(ConfigLezione, isDocente) {
    const p = ConfigLezione.produzioneDialoghi;
    if (!p) return "";
    let html = `<div class="container-produzione-dialoghi">`;
    html += `<p style="margin-bottom: 20px;">${p.istruzioni}</p>`;

    p.blocchi.forEach(blocco => {
        // Usiamo la nuova classe dialogo-container
        html += `<div class="dialogo-container">`;

        // Se nel file dati c'è l'immagine, la disegniamo!
        if (blocco.img) {
            html += `<img src="${blocco.img}" alt="Ritratto di ${blocco.nomePersonaggio}" class="avatar-personaggio">`;
        }

        // Apriamo il contenitore della parte destra (il testo)
        html += `<div class="dialogo-content">`;
        html += `<h3 style="color:#2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 5px; margin-top:0;">👤 ${blocco.nomePersonaggio}</h3>`;

        // Generiamo le domande
        blocco.domande.forEach(q => {
            html += `
            <div style="margin-bottom: 15px; padding-left: 10px;">
                <p style="font-weight:bold; margin-bottom: 5px;">${q.testo}</p>
                <div id="blocco_dinamico_dial_${q.id}" class="blocco-dinamico">
                    <p style="color:#7f8c8d; font-style:italic;">Caricamento...</p>
                </div>
            </div>`;
        });
        
        // Chiudiamo i contenitori
        html += `</div>`; // Chiude dialogo-content
        html += `</div>`; // Chiude dialogo-container
    });
    html += `</div>`;
    return html;
}


    function generaSchedaPresentazione(ConfigLezione, isDocente) {
    const p = ConfigLezione.presentazionePersonale;
    if (!p) return "";
    let html = `<div class="container-presentazione"><p>${p.istruzioni}</p>`;

    html += creaBanner("../img/banner_parlare.webp", "Parlare di sè");

    p.campi.forEach(campo => {
        html += `
        <div style="margin-bottom: 20px; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
            <label><b>${campo.label}:</b></label>
            <div id="blocco_dinamico_pres_${campo.id}" class="blocco-dinamico">
                <p>Caricamento...</p>
            </div>
        </div>`;
    });
    html += `</div>`;
    return html;
}


function generaSchedaRiordino(ConfigLezione, isDocente) {
    if (!ConfigLezione.riordinoDialoghi) return ""; 
    let html = `<div class="container-riordino"><p><strong>${ConfigLezione.riordinoDialoghi.istruzioni}</strong></p>`;
    
    ConfigLezione.riordinoDialoghi.esercizi.forEach((ex, index) => {
        html += `
        <div class="box-esercizio" id="box_${ex.id}" style="margin: 20px 0; padding: 20px; border: 1px solid #eee; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); background: white;">
            
            <!-- Inserimento Immagine rappresentativa -->
            ${ex.img ? `<div style="text-align: center; margin-bottom: 20px;">
                            <img src="${ex.img}" alt="Illustrazione per il dialogo ${index + 1}" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </div>` : ""}

            <h4 style="color: #2c3e50; margin-top: 0;">Dialogo ${index + 1}</h4>
            <div style="background: #3498db; color: white; padding: 10px; border-radius: 4px; margin-bottom: 10px; font-weight: bold;">${ex.fraseFissa}</div>
            
            <div id="contenitore_frasi_${ex.id}" style="min-height: 100px; padding: 10px; background: #fdfdfd; border: 1px dashed #ccc; border-radius: 8px;">
                <p style="color:#7f8c8d; font-style:italic; text-align:center;">Caricamento frasi in corso...</p>
            </div>
            
            <div style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center;">
                <div id="feedback_${ex.id}" style="font-weight: bold; font-size: 1.1em;"></div>
                <div>
                    <button onclick="verificaRiordino('${ex.id}')" style="background: #27ae60; color: white; padding: 10px 15px; font-weight: bold; border: none; border-radius: 8px; cursor: pointer;">✅ Verifica Ordine</button>
                    ${isDocente ? `<button onclick="resetRiordino('${ex.id}')" style="background: #e74c3c; color: white; padding: 10px 15px; font-weight: bold; border: none; border-radius: 8px; cursor: pointer; margin-left: 10px;">🔄 Reset</button>` : ""}
                </div>
            </div>
        </div>`;
    });
    
    html += `</div>`;
    return html;
}

    

function generaSchedaRisposte(ConfigLezione, isDocente) {
    let html = `<div class="container-risposte"><p><strong>${ConfigLezione.produzioneRisposte.istruzioni}</strong></p>`;
    
    if (isDocente) {
        html += `
        <div style="background: #e8f4f8; padding: 15px; margin-bottom: 20px; border: 2px solid #3498db; border-radius: 8px; text-align: center;">
            <h4 style="margin-top: 0;">🎛️ Regia Docente</h4>
            <button onclick="impostaModalita('scrittura')" style="background: #3498db; color: white; padding: 10px 20px; font-weight: bold; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">✍️ Modalità Scrittura</button>
            <button onclick="impostaModalita('orale')" style="background: #e74c3c; color: white; padding: 10px 20px; font-weight: bold; border: none; border-radius: 4px; cursor: pointer;">🗣️ Modalità Orale</button>
        </div>`;
    }

    ConfigLezione.produzioneRisposte.esercizi.forEach(ex => {
        // Ho aggiunto border-radius, box-shadow e background white
        html += `
        <div class="box-esercizio" id="box_risposta_${ex.id}" style="margin: 20px 0; padding: 20px; border: 1px solid #eee; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); background: white;">
            <h3 style="color: var(--primary-color); margin-top: 0;">${ex.domanda}</h3>
            <div id="blocco_dinamico_${ex.id}" class="blocco-dinamico">
                <p style="color:#7f8c8d; font-style:italic;">Caricamento in corso...</p>
            </div>
        </div>`;
    });

    html += `</div>`;
    return html;
}



















