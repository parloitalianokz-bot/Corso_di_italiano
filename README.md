# 🇮🇹 Corso di Italiano - Lezioni Interattive

Piattaforma per l'insegnamento dell'italiano come L2 con attività interattive in tempo reale.

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

| Elemento | Descrizione |
|----------|-------------|
| **Obiettivo** | Verifica della comprensione |
| **Input** | Scelta multipla (opzioni predefinite) |
| **Scrittura** | Tutti possono rispondere contemporaneamente |
| **Salvataggio** | `set` (sovrascrive la risposta dello studente) |
| **Valutazione** | ✅ Automatica (feedback immediato) |
| **Esempi** | Fase 4 (Comprensione), Fase 9 (Numeri) |

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

## 📁 STRUTTURA DEL PROGETTO


Corso_di_italiano/
├── README.md ← Questo file
├── style.css
├── motore-lezione.js
├── ui-helper.js
├── studenti.js
├── config-firebase.js
├── img/
├── unita_001/
│ ├── index.html
│ └── dati-lezione.js
├── unita_002/
│ ├── index.html
│ └── dati-lezione.js
└── ...


---

## 🚀 COME USARE

1. **Studente** → Entra con il suo nome e gruppo
2. **Docente** → Entra con credenziali di docente, vede i pannelli di controllo
3. **Lezione** → Segue le fasi in ordine, con attività interattive

---

## 🛠️ TECNOLOGIE

- HTML/CSS/JavaScript
- Firebase Realtime Database
- GitHub Pages (hosting)

---

## 📝 NOTE

- Le attività sono progettate per essere **riutilizzabili** attraverso le unità
- I dati delle lezioni sono in `dati-lezione.js`
- Le logiche didattiche sono definite nella tassonomia sopra
