// 1. Generatore della Lavagna
export function creaLavagna(id, placeholder) {
    return `
    <div class="board-module" style="background: white; border-radius: 8px; border: 2px solid #cbd5e0; overflow: hidden; margin-top: 15px;">
        <div id="messages_container_${id}" style="padding: 15px; min-height: 60px; max-height: 250px; overflow-y: auto; background: #fdfdfd;">
            <div style="color: #95a5a6; font-style: italic; font-size: 0.9em;">Nessun inserimento. Scrivi per primo!</div>
        </div>
        <div id="edit_container_${id}" class="board-container" style="border-radius: 0; margin-top: 0; border-top: 2px solid #cbd5e0;">
            <div class="board-toolbar">
                <div id="status_${id}" class="status-badge">Caricamento... ⏳</div>
                <div class="action-buttons">
                    <button class="btn-write" onclick="takeMarker('${id}')">Scrivi ✍️</button>
                    <button id="btn_spec_${id}" class="btn-spectate" onclick="releaseMarker('${id}')" style="display:none;">Lascia 👁️</button>
                    <button id="btn_invia_${id}" class="btn-submit" onclick="submitMessage('${id}')" style="display:none;">Invia Parola 🚀</button>
                    <button class="btn-unlock" onclick="forceUnlock('${id}')">Libera 🔓</button>
                    <button class="btn-clear" onclick="clearInput('${id}')">Pulisci 🧹</button>
                </div>
            </div>
            <div id="board_${id}" class="editable-board" contenteditable="false" data-placeholder="${placeholder}"></div>
        </div>
    </div>`;
}

// 2. Generatore delle sezioni a tendina (Fisarmonica)
export function creaSezioneFisarmonica(titolo, id, contenuto) {
    return `<div class="accordion-header" onclick="toggleAccordion('${id}')">${titolo} <span>▼</span></div><div id="content_${id}" class="accordion-content">${contenuto}</div>`;
}