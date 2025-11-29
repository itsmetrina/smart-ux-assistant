# Smart UI Copy Assistant

A polished **Next.js + AI** full‑stack learning project that generates UX microcopy (buttons, tooltips, banners, error messages) using OpenAI models. Includes advanced features like **Improve Copy**, **Translate Copy**, and a fully custom **dark‑mode professional UI**.

This project is to showcase:

* Practical AI integration experience
* Full‑stack skills using Next.js App Router
* Building a portfolio‑ready AI product

---

# ✨ Features

### ✔ AI‑powered UX Copy Generation

Enter component type, tone, and context → AI generates 3 clean UX copy variations.

### ✔ Improve Copy

Click **Improve ✨** on any generated text to get a refined, higher‑quality version.

### ✔ Translate Copy

Translate the generated copy into:

* English
* Hindi
* Bengali

### ✔ Fully Dark Mode UI

Custom black theme powered by Tailwind + CSS variables.

### ✔ Smooth UX

* Animated fade‑in transitions
* Non‑blocking result cards
* Auto‑scroll to results
* Card hover effects
* Polished interactions

---

# 🛠️ Tech Stack

* **Next.js 16** (App Router)
* **React 19**
* **TailwindCSS** (custom dark mode)
* **OpenAI API** (`gpt-4o-mini`)
* **TypeScript**

---

# 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/itsmetrina/smart-ui-copy-assistant.git
cd smart-ui-copy-assistant
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a file named:

```
.env.local
```

Add:

```env
OPENAI_API_KEY=your_key_here
```

### 4. Run the dev server

```bash
npm run dev
```

Open in browser:
👉 [http://localhost:3000](http://localhost:3000)

---

# 🚀 Deploying to Vercel

Deploying this project on Vercel is extremely simple.

### Step 1 — Install Vercel CLI

```bash
npm i -g vercel
```

### Step 2 — Login

```bash
vercel login
```

### Step 3 — Deploy

Inside the project directory:

```bash
vercel
```

Or use Vercel Dashboard:

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Import your GitHub repo
3. Add environment variable:

   * `OPENAI_API_KEY`
4. Deploy

### Vercel automatically:

* Detects Next.js
* Builds serverless API routes
* Hosts frontend + backend together
* Optimizes Tailwind

---

# 🗂️ Folder Structure

```
app/
  ├── api/
  │   ├── _lib/rateLimiter.ts
  │   ├── generate/route.ts
  │   ├── improve/route.ts
  │   └── translate/route.ts
  ├── components/
  │   ├── CopyForm.tsx
  │   ├── CopyPreview.tsx
  │   ├── ImproveResult.tsx
  │   └── TranslateResult.tsx
  ├── hooks/
  │   ├── useAI.ts
  │   ├── useCooldown.ts
  │   ├── useDebounce.ts
  │   ├── useMobileHistorySheet.ts
  │   ├── useScroolToResult.ts
  ├── store/
  │   ├── useHistory.ts
  ├── layout.tsx
  ├── page.tsx
  └── globals.css
public/
.env.local
```

---

# 🧠 How It Works

### **Frontend (Client Components)**

* Form triggers `/api/generate`
* CopyPreview renders suggestions
* Improve + Translate trigger respective APIs
* Smooth auto‑scroll brings results into view
* Mobile bottom sheet shows full history

### **Backend (Next.js Route Handlers)**

* `/api/generate` → returns structured variations
* `/api/improve` → returns refined copy
* `/api/translate` → returns `en`, `hi`, `bn` JSON object

All routes run securely as server functions.

---

# 📘 Example Prompt

```
Component: button
Tone: friendly
Context: Checkout submit button
```

AI returns:

```
["Place Your Order","Finish Checkout","Complete Your Purchase"]
```

---
<!-- 
# 🎨 UI Screenshots

*(Optional — Add images once deployed)*

--- -->

# 🤝 Contributing

Feel free to open issues or PRs for improvements, new features, or suggestions.

---

# 🧩 Future Enhancements (Ideas)

* Save copy to localStorage
* Copy-to-clipboard button
* History panel
* Framer Motion animation upgrades

---

# 📄 License

MIT License — free to use, modify, and share.

---

# 🚀 Final Note

This project is a clean, my portfolio‑ready demonstration of:

* Next.js full‑stack skills
* AI integration
* UI/UX execution
* Component architecture
* Modern frontend engineering