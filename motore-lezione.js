
import { db } from "./config-firebase.js";
import { ref, onValue, set, push, remove, update, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { creaLavagna, creaSezioneFisarmonica } from "./ui-helper.js";

// Questa funzione sarà il "cuore" che avvia tutto
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
            userInfoBadge.innerHTML = `👤 ${userName} | 🏫 Gruppo: <b style="color: var(--primary-color);">${group}</b>`;
        }
    }
}

function initFirebaseListeners(basePath, config) {
    // Qui andranno i tuoi onValue, le logiche della bacheca, ecc.
}


// ==========================================
// GENERATORI HTML DELLE SCHEDE
// ==========================================

export function generaHtmlDinamico(ConfigLezione, isDocente) {
    let htmlDinamico = "";

    if (ConfigLezione && ConfigLezione.elicitazione) {
        htmlDinamico += creaSezioneFisarmonica("Fase 1: " + ConfigLezione.elicitazione.titolo, 'elicitazione', `
        <div class="didactic-block fase-elicitazione">
            <p>${ConfigLezione.elicitazione.intro || ""}</p>
            ${ConfigLezione.elicitazione.immagineMappa ? `<div style="text-align: center; margin: 20px 0;"><img src="${ConfigLezione.elicitazione.immagineMappa}" style="max-width: 100%; border-radius: 8px;"></div>` : ''}
            <div class="question-title">✍️ Scrivete qui le parole che conoscete già:</div>
            ${creaLavagna('elicit', 'Scrivi qui la tua parola e premi Invia...')}
        </div>`);
    }

    if (ConfigLezione && ConfigLezione.ascolto) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.ascolto.titolo, 'ascolto', `
        <div class="didactic-block">
            <p>${ConfigLezione.ascolto.istruzioni || ""}</p>
            <div style="text-align: center; margin: 20px 0; position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
                <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
                        src="https://www.youtube.com/embed/${ConfigLezione.ascolto.videoUrl}?cc_load_policy=0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                </iframe>
            </div>
            ${creaLavagna('ascolto', 'Cosa avete capito?...')}
        </div>`);
    }

    if (ConfigLezione && ConfigLezione.lettura) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.lettura.titolo, 'lettura', `
        <div class="didactic-block">
            ${ConfigLezione.lettura.testoFormattato}
            <div style="margin-top: 20px;">${creaLavagna('lettura', 'Commento al testo...')}</div>
        </div>`);
    }

    if (ConfigLezione && ConfigLezione.comprensione) {
        let cComprensione = `<div class="didactic-block"><p>${ConfigLezione.comprensione.istruzioni || ""}</p>`;
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

        if (isDocente) {
            cComprensione += `
            <div style="text-align: center; margin-top: 30px; border-top: 2px solid #ccc; padding-top: 20px;">
                <button onclick="resettaTuttoIlQuiz()" style="background: #e74c3c; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">
                    🧹 Reset Totale Quiz
                </button>
            </div>`;
        }
        cComprensione += `</div>`;
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.comprensione.titolo, 'comprensione', cComprensione);
    }

    if (ConfigLezione && ConfigLezione.produzioneDomande) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.produzioneDomande.titolo, 'produzione', generaSchedaProduzione(ConfigLezione, isDocente));
    }

    if (ConfigLezione && ConfigLezione.produzioneRisposte) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.produzioneRisposte.titolo, 'risposte', generaSchedaRisposte(ConfigLezione, isDocente));
    }

    if (ConfigLezione && ConfigLezione.riordinoDialoghi) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.riordinoDialoghi.titolo, 'riordino', generaSchedaRiordino(ConfigLezione, isDocente));
    }

    if (ConfigLezione && ConfigLezione.grammatica) {
        htmlDinamico += creaSezioneFisarmonica(ConfigLezione.grammatica.titolo, 'grammatica', generaSchedaGrammatica(ConfigLezione, isDocente));
    }

    return htmlDinamico;
}

function generaSchedaProduzione(ConfigLezione, isDocente) {
    let html = `<div class="container-produzione">`;
    ConfigLezione.produzioneDomande.esercizi.forEach(ex => {
        html += `
        <div class="box-esercizio" id="box_${ex.id}" style="margin: 20px 0; padding: 15px; border: 1px solid #ddd;">
            <p><strong>Risposta:</strong> ${ex.risposta}</p>
            <p><em>${ex.guida}</em></p>
            <div id="input_area_${ex.id}">
                <input type="text" id="input_domanda_${ex.id}" placeholder="Scrivi la tua domanda...">
                <button onclick="inviaDomanda('${ex.id}')">Invia</button>
            </div>
            ${isDocente ? `
                <div class="pannello-docente" style="background:#fff3cd; padding:10px; margin-top:10px;">
                    <strong>Pannello Docente:</strong>
                    <div id="bacheca_docente_${ex.id}"></div>
                </div>
            ` : ""}
            <div id="bacheca_pubblica_${ex.id}"></div>
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
        html += `
        <div class="box-esercizio" id="box_risposta_${ex.id}" style="margin: 20px 0; padding: 15px; border: 1px solid #ddd;">
            <h3 style="color: var(--primary-color); margin-top: 0;">${ex.domanda}</h3>
            <div id="blocco_dinamico_${ex.id}" class="blocco-dinamico">
                <div id="input_area_risp_${ex.id}" style="margin-top: 10px;">
                    <input type="text" id="input_risp_${ex.id}" placeholder="Scrivi la tua risposta qui..." style="width: 80%; padding: 8px;">
                    <button onclick="inviaRisposta('${ex.id}')" style="padding: 8px;">Invia</button>
                </div>
                ${isDocente ? `<div class="pannello-docente" style="background:#fff3cd; padding:10px; margin-top:10px;"><strong>Correzioni Docente:</strong><div id="bacheca_doc_risp_${ex.id}"></div></div>` : ""}
                <div id="bacheca_pub_risp_${ex.id}" style="margin-top: 10px;"></div>
            </div>
        </div>`;
    });

    html += `
    <div style="margin-top: 40px; border-top: 3px solid #3498db; padding-top: 20px;">
        <h3 style="color: #2c3e50;">🎙️ Racconto e Correzione</h3>
        <p>Raccontate la storia usando le domande come traccia.</p>
        ${isDocente ? `
        <div style="background: #fcf3cf; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h4 style="margin-top: 0;">📝 Area Trascrizione (Solo Docente)</h4>
            <textarea id="trascrizione_docente" rows="4" style="width: 100%; margin-bottom: 10px; padding: 8px; border-radius: 4px;" placeholder="Incolla qui la trascrizione..."></textarea>
            <button onclick="inviaTrascrizione()" style="background: #27ae60; color: white; padding: 8px 15px; font-weight: bold; border: none; border-radius: 4px; cursor: pointer;">1. Invia testo alla Lavagna ✍️</button>
            <button id="btn_toggle_lavagna" onclick="toggleLavagnaCorrezione()" style="background: #e74c3c; color: white; padding: 8px 15px; font-weight: bold; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px;">2. 👀 Mostra Lavagna agli Studenti</button>
        </div>` : `
        <div id="attesa_trascrizione" style="text-align: center; color: #7f8c8d; font-size: 1.1em; font-style: italic; margin-bottom: 20px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
            🗣️ Parla! L'insegnante sta ascoltando e prendendo appunti...
        </div>`}
        <div id="contenitore_lavagna_correzione" style="${isDocente ? 'display:block;' : 'display:none;'}">
            ${creaLavagna('correzione_orale', 'Qui apparirà il testo da correggere...')}
        </div>
    </div></div>`;
    return html;
}

function generaSchedaRiordino(ConfigLezione, isDocente) {
    if (!ConfigLezione.riordinoDialoghi) return ""; 
    let html = `<div class="container-riordino"><p><strong>${ConfigLezione.riordinoDialoghi.istruzioni}</strong></p>`;
    
    ConfigLezione.riordinoDialoghi.esercizi.forEach((ex, index) => {
        html += `
        <div class="box-esercizio" style="margin: 20px 0; padding: 15px; border: 1px solid #ddd; background: #fafafa; border-radius: 8px;">
            <h4 style="color: #2c3e50; margin-top: 0;">Dialogo ${index + 1}</h4>
            <div style="background: #3498db; color: white; padding: 10px; border-radius: 4px; margin-bottom: 10px; font-weight: bold;">${ex.fraseFissa}</div>
            <div id="contenitore_frasi_${ex.id}" style="min-height: 100px; padding: 10px; background: #fff; border: 1px dashed #ccc; border-radius: 4px;">
                <p style="color:#7f8c8d; font-style:italic; text-align:center;">Caricamento frasi in corso...</p>
            </div>
            <div style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center;">
                <div id="feedback_${ex.id}" style="font-weight: bold; font-size: 1.1em;"></div>
                <div>
                    <button onclick="verificaRiordino('${ex.id}')" style="background: #27ae60; color: white; padding: 8px 15px; font-weight: bold; border: none; border-radius: 4px; cursor: pointer;">✅ Verifica Ordine</button>
                    ${isDocente ? `<button onclick="resetRiordino('${ex.id}')" style="background: #e74c3c; color: white; padding: 8px 15px; font-weight: bold; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px;">🔄 Reset (Docente)</button>` : ""}
                </div>
            </div>
        </div>`;
    });
    html += `</div>`;
    return html;
}

function generaSchedaGrammatica(ConfigLezione, isDocente) {
    const d = ConfigLezione.grammatica;
    if (!d) return "";
    let html = `<div class="container-grammatica">`;

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
                        ${creaLavagna(ex.id, ex.suggerimento)}
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
                        ${creaLavagna(ex.id, ex.suggerimento)}
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
                        <input type="text" id="tab_input_${index}" style="padding:5px; border:1px solid #ccc;" placeholder="?">
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