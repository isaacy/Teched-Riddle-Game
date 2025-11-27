# TED‑Ed Riddles 🎉

A **beautiful, kid‑friendly web app** that lets users solve classic TED‑Ed riddles. Each riddle shows a short description, a thumbnail, and a YouTube video link. Users pick an answer, get instant feedback, and can:
- **Try again** if they get it wrong
- **See the answer** with an explanation
- **Load a new random riddle** without refreshing the page

The UI follows a modern, premium design with smooth gradients, glass‑morphism cards, and micro‑animations. All content is stored locally in `src/data/riddles.js` and the app is built with **React + Vite**.

---

## 📦 Project Structure

```
RiddleGame/
├─ public/               # static assets (favicon, etc.)
├─ src/
│  ├─ components/       # RiddleCard, AnswerInput, FeedbackModal
│  ├─ data/             # riddles.js – array of riddles
│  ├─ App.jsx           # main app logic & navigation
│  ├─ App.css           # styling (premium design tokens)
│  └─ index.html        # entry point (Vite injects scripts)
├─ vite.config.js        # Vite config (base path for GitHub Pages)
├─ package.json
└─ README.md            # **this file**
```

---

## 🚀 Getting Started (local development)

```bash
# Clone the repo (you already have it locally)
cd RiddleGame

# Install dependencies
npm ci

# Run the dev server
npm run dev
```

Open <http://localhost:5173> – the app hot‑reloads as you edit files.

---

## 📦 Build for Production

```bash
npm run build
```

Vite creates an optimized static bundle in the `dist/` folder.

---

## 🌐 Deploying to a Website

You can host the static `dist/` folder on any static‑hosting service. Below are three popular, zero‑config options.

### 1️⃣ GitHub Pages (free)
1. **Set the base path** in `vite.config.js` (if the repo name is not the root):
   ```js
   export default defineConfig({
     base: '/teched-riddle-game/', // <-- repo name
   });
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Push the `dist/` folder to the `gh-pages` branch:
   ```bash
   npm install --save-dev gh-pages   # once
   # add a script in package.json: "deploy": "gh-pages -d dist"
   npm run deploy
   ```
4. Enable **GitHub Pages** in the repository settings → *Source* → `gh-pages` branch.
   Your site will be available at `https://<username>.github.io/teched-riddle-game/`.

### 2️⃣ Netlify (drag‑and‑drop or CI)
- **Drag‑and‑drop**: after `npm run build`, drag the `dist/` folder onto <https://app.netlify.com> → *New site* → *Deploy manually*.
- **CI**: connect the GitHub repo, set **Build command** to `npm run build` and **Publish directory** to `dist`. Netlify will redeploy on every push.

### 3️⃣ Vercel (zero‑config)
```bash
npm i -g vercel   # install Vercel CLI (once)
vercel            # follow prompts, select the repo
```
Vercel automatically detects the Vite build and serves the static output.

---

## 🛠️ Customising Riddles
All riddles live in `src/data/riddles.js`. Each entry follows this shape:
```js
{
  id: 4,
  title: "The Wizard Standoff Riddle",
  question: "You're a champion wizard facing two powerful opponents…",
  answer: "The Bannekar (weakest wand)",
  options: [
    "The Noether 9000 (strongest wand)",
    "The Gaussian (medium wand)",
    "The Bannekar (weakest wand)",
    "Don't cast at all"
  ],
  videoUrl: "https://www.youtube.com/watch?v=mmkCS5eA4f8",
  thumbnail: "https://i.ytimg.com/vi/mmkCS5eA4f8/hqdefault.jpg",
  explanation: "Choose the weakest wand and intentionally miss…"
},
```
Add, edit, or remove entries and run `npm run dev` to see changes instantly.

---

## 🎨 Design Philosophy
- **Premium aesthetics**: vibrant gradients, glass‑morphism cards, subtle hover animations.
- **Responsive layout**: works on desktop, tablet, and mobile.
- **Micro‑interactions**: button hovers, modal transitions, and a smooth “New Riddle” shuffle.

---

## 📄 License
MIT – feel free to fork, remix, and deploy your own version!

---

Happy puzzling! 🎈
