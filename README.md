# 📚 VocabMaster Pro

An AI-powered progressive vocabulary learning PWA with spaced repetition (FSRS), mini-games, reading mode, audio learning, and 900+ English-Russian word pairs.

**Think of it as Anki + Duolingo + AI Tutor — in a single HTML file.**

## ✨ Core Features

### 🧠 Spaced Repetition (FSRS)
- Scientifically-backed interval algorithm: 1min → 10min → 1d → 3d → 7d → 15d → 30d → 60d → 90d
- Three answer grades: **Again / Good / Easy** — each affects the next interval differently
- Per-word ease factor that adapts to your performance
- Daily review queue with smart scheduling
- Daily limit of 15 new words to prevent overload

### 🔄 5 Card Modes
Words cycle through different exercise types, especially when you make mistakes:

| Mode | Description |
|------|-------------|
| 📝 Normal | See word → recall translation |
| 🔄 Reverse | See translation → recall English word |
| 🎯 Choice | Pick correct translation from 4 options |
| ⌨️ Type | Type the English word from memory |
| ✍️ Sentence | Write a sentence using the word (AI-checked) |

On wrong answer, the word re-appears 3-5 cards later in the **next mode** (0→1→2→3→4→0).

### 🤖 AI Tutor (Claude API)
Contextual language assistant available everywhere — on cards, in reading mode, on failed words:

- **📝 Explain** — definition, collocations, register, example
- **🧠 Mnemonic** — sound associations, mini-stories for memorization
- **💬 Examples** — 5 sentences across different contexts (easy/medium/hard)
- **🔀 Difference** — comparison with similar/confused words
- **🗣 Usage** — real situations, common mistakes Russian speakers make
- **Free chat** — ask anything about any word
- Aware of your confusion patterns — knows what you mix up

### 📖 Reading Mode
Paste any English text — every word gets color-coded by your knowledge:
- 🟢 Green — mastered
- 🟡 Yellow — learning
- 🔵 Blue — in dictionary but not started
- 🔴 Red — unknown
- Click any word → auto-translate, pronunciation, add to study
- **CEFR level estimation** (A1-C2) for the text
- **Comprehension percentage** with recommendations

### 🎧 Audio Mode (Hands-Free)
Learn while walking, commuting, or exercising:
- Speaks English word → 2.5s pause → Russian translation → next word
- Controls: ⏮ Back | ⏸ Pause | ⏭ Skip
- Works with screen locked
- Available for daily review or per-level

### 🔗 Knowledge Graph
Automatic word relationship display after answering:
- **Roots**: `/port/` → transport, export, import, support
- **Prefixes**: `re-` → replace, reduce, recover, reinforce
- **Synonyms**: `= large, huge, enormous, vast`
- **Antonyms**: `≠ small`
- 20 roots, 9 prefixes, 18 synonym groups, 30+ antonym pairs

### 🎮 Mini-Games
Three games for engaging practice (use already-learned words):

- **🔗 Word Match** — connect 6 word-translation pairs, 60 seconds
- **🔀 Word Scramble** — unscramble letters, 10 rounds, 3 attempts each
- **⚡ Speed Round** — how many words in 60 seconds?

### 🏆 Achievements (18 Badges)
Unlocked automatically based on analytics data:

| Badge | How to earn |
|-------|-------------|
| 🌱🌿🌳🏔 Growth | 10 / 50 / 100 / 300 words mastered |
| 🔥💎👑 Streak | 3 / 7 / 30 days in a row |
| ⚡ Speed | Answer in under 2 seconds |
| 💯 Perfectionist | Flawless session (10+ words) |
| 🦉 Night Owl | Study after 11 PM |
| 🌅 Early Bird | Study before 7 AM |
| 🗡 Leech Slayer | Master a leech word |
| 🔓🚀🏆 Levels | Unlock level 2 / 3 / 5 |
| 🤖 AI Student | Use the AI tutor |
| 📖 Bookworm | Add a word from reading mode |
| 🏋️ Marathon | 50 words in one day |
| 🎮 Gamer | Play a mini-game |

### 📊 Analytics Dashboard
Comprehensive learning metrics:
- Today / week / all-time accuracy
- Average response time
- Daily activity chart (14 days)
- Accuracy by level
- Fastest and slowest words
- Hardest words (most failures)
- **Confusion pairs** — what you answer instead of the correct word
- Recent sessions history
- One-tap **"Train confused words"** button

### 🏷 Topics (14 Categories)
Study by theme with per-topic progress:

Body, Family, Home, Food, Nature, Colors, Actions, Work, Thinking, Emotions, Business, Complex, Academic, Rare

### ⭐ Word of the Day
Daily featured word on home screen — deterministic by date, with pronunciation, translation, example, and synonyms from Knowledge Graph.

### 🎯 Onboarding Level Test
First launch: 25-word test (5 per level) to determine your starting level. Known words are automatically marked as learned in the SRS system.

## 📱 Adding Words

### ✏️ One by One
Form with fields: word, translation, example, hint, level.

### 📋 Bulk Text
Paste lists in any format:
```
apple - яблоко
banana - банан
grape;виноград;I like grapes.;фрукт
```
Supports separators: ` - `, ` — `, `;`, `Tab`

### 📝 Text Parser
Paste any English text — the app extracts unique words, filters stop words (150+), auto-translates via MyMemory API, and lets you pick which ones to add. Editable translations.

### 📊 Google Sheets
1. Create a Google Sheet with columns: **word | translation | example | hint**
2. File → Publish to the web
3. Paste the link — words load automatically

## 🔊 Pronunciation
- Built-in **Web Speech API** — no external services needed
- Auto-pronounce on each new card (toggleable 🔊/🔇)
- 🔊 button on card — tap to hear word
- 🔈 button on example — hear the full sentence
- Audio mode uses Russian TTS for translations
- Setting persists across sessions

## 📤 Data Management
- **Export** — download all progress, user words, and streak data as JSON
- **Import** — restore from backup file
- All data stored in localStorage with separate keys for progress, user words, analytics, streak, AI config, and confusion data

## ⌨️ Keyboard Shortcuts (Desktop)
| Key | Action |
|-----|--------|
| Space | Show translation |
| 1 / ← | Again |
| 2 / → | Good |
| 3 | Easy |

## 📱 Install as App

### iPhone (Safari)
1. Open the app URL in Safari
2. Tap **Share** (⬆️)
3. **"Add to Home Screen"**

### Android (Chrome)
1. Open the app URL in Chrome
2. Tap **⋮** menu
3. **"Add to Home Screen"**

## 🚀 Deploy

### GitHub Pages (free)
```bash
git clone https://github.com/YOUR_USER/vocabmaster.git
cd vocabmaster
git add .
git commit -m "deploy"
git push
```
Settings → Pages → Source: main → Save.

Live at: `https://YOUR_USER.github.io/vocabmaster/`

### Vercel (free)
1. Push to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Deploy

## 📁 Project Structure
```
vocabmaster/
├── index.html        # Complete app (HTML + JS + CSS)
├── manifest.json     # PWA manifest
├── sw.js             # Service Worker (offline cache)
├── icon-192.png      # App icon 192x192
├── icon-512.png      # App icon 512x512
└── README.md
```

## 🔧 Configuration

### AI Tutor Setup
1. Get API key at [console.anthropic.com](https://console.anthropic.com)
2. In app: ⚙️ → AI Tutor section → paste key
3. Default model: `claude-sonnet-4-20250514` (configurable)

### Customization
- `NEW_PER_DAY` — daily new word limit (default: 15)
- `LEECH_THRESHOLD` — failures before marking as leech (default: 6)
- `MT` — mastery threshold to unlock next level (default: 0.7 = 70%)
- `AUDIO_PAUSE` — pause between word and translation in audio mode (default: 2500ms)

## 🛠 Tech Stack
- Vanilla JavaScript (no frameworks, no build step)
- Tailwind CSS (CDN)
- Web Speech API (TTS)
- MyMemory API (auto-translation)
- Claude API (AI tutor, sentence checking)
- Service Worker (offline)
- localStorage (persistence)

## 📄 License
MIT
