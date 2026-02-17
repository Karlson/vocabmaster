# 📚 VocabMaster

A progressive vocabulary learning PWA with spaced repetition, 900+ English-Russian word pairs, and text-to-speech pronunciation.

## ✨ Features

- **Progressive Difficulty** — 5 levels from Beginner to Advanced, unlock the next by mastering 70% of current level
- **900+ Words** — carefully curated English-Russian vocabulary across all difficulty levels
- **Text-to-Speech** — automatic pronunciation with manual playback buttons (toggleable)
- **Spaced Repetition** — words you struggle with appear more often; mastered words move to review
- **Study Modes** — All words, Unlearned only, or Review mastered
- **Batch Learning** — 20 words per session to avoid overload
- **Swipe Gestures** — swipe right = know, swipe left = don't know (mobile)
- **Progress Tracking** — streaks, accuracy stats, per-level progress bars
- **Offline Support** — works without internet via Service Worker
- **Installable PWA** — add to home screen on iOS/Android for native app experience
- **Persistent Progress** — all data saved in localStorage

## 📱 Install on Phone

### iPhone (Safari)
1. Open the app URL in Safari
2. Tap **Share** button (⬆️)
3. Select **"Add to Home Screen"**

### Android (Chrome)
1. Open the app URL in Chrome
2. Tap **⋮** (three dots menu)
3. Select **"Add to Home Screen"**


## 🎯 How It Works

### Levels

| Level | Name | Words | Examples |
|-------|------|-------|---------|
| 1 | Beginner | ~140 | cat, house, run, apple, bed |
| 2 | Elementary | ~200 | weather, achieve, courage, publish |
| 3 | Intermediate | ~200 | accomplish, legislation, phenomenon |
| 4 | Upper-Intermediate | ~200 | ambiguous, exacerbate, paradigm |
| 5 | Advanced | ~200 | acquiesce, ephemeral, sycophant |

### Mastery System

- Each word requires **3 correct answers** to be marked as mastered
- Wrong answers **decrease** progress by 1 (regression)
- Master **70%** of a level to unlock the next one
- Unmastered words are prioritized in study sessions

### Study Modes

- **📚 All** — full set, 20 words per session, weakest first
- **🆕 Unlearned** — only words not yet mastered
- **🔄 Review** — only mastered words to refresh memory

## 🔊 Pronunciation

- Uses built-in **Web Speech API** (no external services)
- Auto-pronounces each new card (when sound is on)
- **🔊** button on card — tap to hear the word
- **🔈** button on example — tap to hear the sentence
- Toggle sound on/off — setting is remembered

## 🛠 Tech Stack

- Vanilla JavaScript (no frameworks, no build step)
- Tailwind CSS (via CDN)
- Web Speech API for TTS
- Service Worker for offline
- localStorage for persistence

## 📄 License

MIT
