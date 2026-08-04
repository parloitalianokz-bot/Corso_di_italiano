# 🇮🇹 Corso di Italiano - Lezioni Interattive

Piattaforma per l'insegnamento dell'italiano come L2 con attività interattive in tempo reale.

---

## 📁 STRUTTURA DEL PROGETTO

```
Corso_di_italiano/
|
+-- README.md                          <- Questo file
+-- style.css                          <- CSS globale (condiviso)
+-- config-firebase.js                 <- Configurazione Firebase (condiviso)
+-- studenti.js                        <- Registro studenti (condiviso)
+-- ui-helper.js                       <- Utility UI (condiviso)
|
+-- template/                          <- TEMPLATE per nuove unità
|   +-- motore-lezione.js              <- Copia questo per le nuove unità
|   +-- index.html                     <- Copia questo per le nuove unità
|
+-- unita_001/
|   +-- index.html
|   +-- dati-lezione.js
|   +-- motore-lezione.js
|
+-- unita_002/
|   +-- index.html
|   +-- dati-lezione.js
|   +-- motore-lezione.js
|
+-- ... (fino a unita_100)
```

---

## 🚀 COME CREARE UNA NUOVA UNITÀ

### Step 1: Creare la cartella

Crea una nuova cartella per l'unità, ad esempio `unita_003/`

### Step 2: Copiare i file dal template

Copia i file dalla cartella `template/` nella nuova unità:

```
template/motore-lezione.js    →    unita_003/motore-lezione.js
template/index.html           →    unita_003/index.html
```

### Step 3: Creare il file `dati-lezione.js`

Crea il file `unita_003/dati-lezione.js` con i dati specifici della lezione.

### Step 4: Modificare il motore (se necessario)

Il motore template contiene già tutte le funzioni per le fasi standard. Se la tua unità ha bisogno di fasi diverse:

1. Apri `unita_003/motore-lezione.js`
2. Nella funzione `generaHtmlDinamico()`, **aggiungi o rimuovi** le chiamate alle fasi che servono
3. Se aggiungi una nuova fase, crea la funzione `generaSchedaNuovaFase()` nella sezione 5

---

## 📝 REGOLE PER GLI IMPORT

### In `index.html`:

| File | Import corretto |
|------|-----------------|
| `motore-lezione.js` | `"./motore-lezione.js"` |
| `dati-lezione.js` | `"./dati-lezione.js"` |
| `studenti.js` | `"../studenti.js"` |
| `config-firebase.js` | `"../config-firebase.js"` |

### In `motore-lezione.js`:

| File | Import corretto |
|------|-----------------|
| `config-firebase.js` | `"../config-firebase.js"` |
| `ui-helper.js` | `"../ui-helper.js"` |

---

## 🏗️ STRUTTURA DEL MOTORE (motore-lezione.js)

Ogni `motore-lezione.js` è organizzato in 5 sezioni:

| Sezione | Contenuto |
|---------|-----------|
| **1. IMPORTAZIONI** | Importa i file condivisi dalla root |
| **2. FUNZIONE PRINCIPALE** | `initLezione()` - punto di ingresso |
| **3. FUNZIONI DI SETUP** | `setupHeader()` - header e badge |
| **4. GENERATORE PRINCIPALE** | `generaHtmlDinamico()` - coordina le fasi |
| **5. GENERATORI DELLE SCHEDE** | Funzioni `generaScheda...()` per ogni fase |

---

## 📋 COME AGGIUNGERE UNA NUOVA FASE

### 1. Aggiungi la chiamata in `generaHtmlDinamico()`

```javascript
// ============================================================
// FASE X: NOME DELLA FASE
// ============================================================
if (ConfigLezione?.nomeChiave) {
    htmlDinamico += creaSezioneFisarmonica(
        ConfigLezione.nomeChiave.titolo,
        'id_fase',
        generaSchedaNomeFase(ConfigLezione, isDocente)
    );
}
```

### 2. Crea la funzione generatrice

```javascript
// ================================================================
// 5.X FASE X: NOME DELLA FASE
// ================================================================

function generaSchedaNomeFase(ConfigLezione, isDocente) {
    const dati = ConfigLezione.nomeChiave;
    if (!dati) return "";
    
    let html = `<div class="didactic-block">`;
    html += `<p>${dati.istruzioni}</p>`;
    // ... contenuto specifico ...
    html += `</div>`;
    
    return html;
}
```

---

## 📚 TASSONOMIA DELLE LOGICHE DIDATTICHE

> **Scopo:** Definire un linguaggio comune per descrivere le attività del corso, facilitare la progettazione e il riutilizzo del codice.

### 1. LAVAGNA CONDIVISA (Turnazione)

| Elemento | Descrizione |
|----------|-------------|
| **Obiettivo** | Brainstorming collettivo, pioggia di idee |
| **Input** | Testo libero |
| **Scrittura** | Un solo studente alla volta (token) |
| **Salvataggio** | `push` (messaggi in sequenza) |
| **Valutazione** | ❌ Nessuna |
| **Esempi** | Unità 1 (Fase 1), Attività 4 (Cosa ricordiamo?) |

### 2. FORUM (Risposte Personali)

| Elemento | Descrizione |
|----------|-------------|
| **Obiettivo** | Produzione scritta individuale |
| **Input** | Testo libero (textarea) |
| **Scrittura** | Tutti possono scrivere contemporaneamente |
| **Salvataggio** | `set` (sovrascrive la risposta dello studente) |
| **Valutazione** | ✅ Semaforo (docente: 🟢🟡🔴) |
| **Esempi** | Fase 2 (Mangiare e bere), Fase 5 (Produzione domande), Fase 6 (Parliamone insieme) |

### 3. QUIZ (Risposta Chiusa)

#### 3.1 QUIZ Bloccato (Verifica e Negoziazione)

| Elemento | Descrizione |
|----------|-------------|
| **Obiettivo** | Verifica della comprensione e negoziazione della risposta corretta |
| **Input** | Scelta multipla (opzioni predefinite) |
| **Scrittura** | Tutti possono rispondere contemporaneamente |
| **Salvataggio** | `set` (sovrascrive la risposta dello studente) |
| **Valutazione** | ✅ Automatica (feedback immediato) |
| **Studente** | La risposta è bloccata dopo l'invio. La negoziazione con il docente porta alla correzione. |
| **Esempi** | Fase 4 (Comprensione) |

#### 3.2 QUIZ Libero (Esercitazione e Scoperta)

| Elemento | Descrizione |
|----------|-------------|
| **Obiettivo** | Esercitazione libera, lo studente impara dai propri errori |
| **Input** | Scelta multipla (opzioni predefinite) |
| **Scrittura** | Tutti possono rispondere contemporaneamente |
| **Salvataggio** | `set` (sovrascrive la risposta dello studente) |
| **Valutazione** | ✅ Automatica (feedback immediato) |
| **Studente** | Può riprovare liberamente, il docente vede i tentativi e i progressi della classe. |
| **Esempi** | Fase 9 (Numeri) |

### 4. RIORDINO

| Elemento | Descrizione |
|----------|-------------|
| **Obiettivo** | Riordinare elementi in sequenza logica |
| **Input** | Frasi o elementi da riordinare |
| **Scrittura** | Tutti possono interagire contemporaneamente |
| **Salvataggio** | `set` (ordine salvato su Firebase) |
| **Valutazione** | ✅ Automatica (verifica dell'ordine) |
| **Esempi** | Fase 7 (Riordina i dialoghi) |

### 5. RIEMPIMENTO

| Elemento | Descrizione |
|----------|-------------|
| **Obiettivo** | Completare spazi vuoti con la parola corretta |
| **Input** | Input singolo (parola o numero) |
| **Scrittura** | Tutti possono scrivere contemporaneamente |
| **Salvataggio** | `set` (sovrascrive la risposta dello studente) |
| **Valutazione** | ✅ Automatica (confronto con la soluzione) |
| **Esempi** | Tabella di grammatica (coniugazione), esercizi cloze |

### 6. SEMAFORO (Modulo di Valutazione)

| Elemento | Descrizione |
|----------|-------------|
| **Definizione** | Modulo di valutazione applicato al FORUM |
| **Valutazione** | Docente: 🟢 (approvato), 🟡 (modifica richiesta), 🔴 (respinto) |
| **Esempi** | Fase 5 (Produzione domande), Fase 6 (Parliamone insieme) |

---

### 📊 RIEPILOGO

| Logica | Input | Scrittura | Salvataggio | Valutazione | Esempi |
|--------|-------|-----------|-------------|-------------|--------|
| **Lavagna Condivisa** | Testo libero | Turnazione | `push` | ❌ | Brainstorming |
| **Forum** | Testo libero | Simultanea | `set` | ✅ Semaforo | Fase 2, 5, 6 |
| **Quiz** | Scelta multipla | Simultanea | `set` | ✅ Automatica | Fase 4, Numeri |
| **Riordino** | Elementi | Simultanea | `set` | ✅ Automatica | Fase 7 |
| **Riempimento** | Input singolo | Simultanea | `set` | ✅ Automatica | Grammatica, Cloze |

---

## 🛠️ TECNOLOGIE

- HTML/CSS/JavaScript
- Firebase Realtime Database
- GitHub Pages (hosting)

---

## ⚠️ REGOLE IMPORTANTI

1. **Ogni unità ha il suo motore** → modifiche a un'unità non influenzano le altre
2. **I file condivisi (root) non si toccano** → `style.css`, `config-firebase.js`, `studenti.js`, `ui-helper.js`
3. **Il template è la base** → copia da `template/` per nuove unità
4. **Gli import seguono le regole** → `./` per file nella stessa cartella, `../` per file in root

---

## 🚀 COME USARE

1. **Studente** → Entra con il suo nome e gruppo
2. **Docente** → Entra con credenziali di docente, vede i pannelli di controllo
3. **Lezione** → Segue le fasi in ordine, con attività interattive

---

## ❓ DOMANDE FREQUENTI

### Perché ogni unità ha il suo motore?

Per **sicurezza**: se fai un errore nell'Unità 2, l'Unità 1 continua a funzionare. Con 100 unità, questo è fondamentale.

### Posso usare lo stesso motore per più unità?

**Sì**, se le unità hanno le stesse fasi. Ma è più sicuro copiare il template e modificarlo solo se necessario.

### Come aggiungo una nuova fase a tutte le unità?

1. Aggiungi la funzione nel `template/motore-lezione.js`
2. Poi copia il template nelle unità esistenti (o solo in quelle che ne hanno bisogno)

---

## 📄 ESEMPIO: `dati-lezione.js`

```javascript
export const ConfigLezione = {
    idFirebase: "unita_003",
    titolo: "Unità 3 - Titolo della lezione",
    sottotitolo: "Livello A1 - Descrizione",
    bannerImg: "img/banner_unita3.webp",

    // FASE 1: Elicitazione
    elicitazione: {
        titolo: "Fase 1: 🧊 Per rompere il ghiaccio",
        // ... contenuto ...
    },

    // FASE 2: Ascolto
    ascolto: {
        titolo: "Fase 2: 🎧 Ascoltiamo",
        // ... contenuto ...
    },

    // ... altre fasi ...
};
```

---

## 📋 COME GESTIRE LE VERSIONI DEL MOTORE

| Situazione | Cosa fare |
|------------|-----------|
| Nuova unità con fasi standard | Copia da `template/` |
| Nuova unità con fasi personalizzate | Copia da `template/` e modifica |
| Aggiunta di una nuova fase standard | Aggiorna `template/` e le unità esistenti |
| Bug in una fase | Corregge solo nell'unità interessata |
| Nuovo tipo di attività | Aggiungi al template e documenta |

---

## 📝 NOTE FINALI

- Le attività sono progettate per essere **riutilizzabili** attraverso le unità
- I dati delle lezioni sono in `dati-lezione.js`
- Le logiche didattiche sono definite nella tassonomia sopra
- **Il motore è il cervello, i dati sono il cuore** della lezione

---

**Buon lavoro! 🇮🇹**
