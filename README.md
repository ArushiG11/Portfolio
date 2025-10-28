# Arushi Gupta — AI Portfolio Website

Welcome to the codebase powering [arushigupta11.netlify.app](https://arushigupta11.netlify.app) — my interactive portfolio showcasing work in machine learning, software engineering, and AI system design.

---

## 🔮 About the Project

This portfolio is built with **Next.js**, **React**, and modern frontend tooling, enriched with:

* 🧠 A built-in chatbot powered by **RAG + OpenAI API** to answer questions based on my resume and projects
* 🌊 Interactive visual design — fluid animations, shader backgrounds, and WebGL elements
* 📁 Project showcase, experience page, resume viewer, and a rich contact form
* 💬 Dedicated "Why Hire Me?" page with live Q&A + auto-suggested FAQs

---

## 🚀 Live URL

▶ [https://arushigupta11.netlify.app](https://arushigupta11.netlify.app)

---

## 🛠️ Tech Stack

* **Frontend:** Next.js 14 (App Router), React, Tailwind CSS, Framer Motion
* **3D & Effects:** @react-three/fiber, shadergradient, tsparticles, GSAP (selective)
* **AI Backend:** RAG pipeline using Supabase + OpenAI embeddings + /api/chat endpoint
* **Vector Store:** Supabase pgvector extension
* **Deployment:** Netlify

---

## 🧩 Key Features

* `Chat Assistant:` LLM-powered Q&A using LangChain-style embeddings
* `Project Viewer:` Interactive cards with expandable detail view
* `Why Hire Me:` Tailored landing page with embedded chat and curated FAQs
* `Education + Community:` Timeline and grid-based layout with animations
* `Floating 3D Orb:` WebGL blob with interactive mouse-based pulses

---

## 📂 Folder Structure (simplified)

```
src/
├── app/
│   ├── page.tsx              # Home with animated intro and chatbot CTA
│   ├── projects/             # Projects page
│   ├── experience/           # Timeline of work
│   ├── education/            # Education + Community timeline
│   ├── why-hire-me/          # Interactive hiring page
│   ├── api/chat/             # Chat API using OpenAI
│
├── components/
│   ├── Chat.tsx              # Chat UI component
│   ├── NeuralBlob.tsx        # 3D orb background
│   ├── Navbar.tsx            # Navigation bar
│
├── data/                     # Static data (projects, FAQs)
├── styles/                   # Global styles, Tailwind config
├── scripts/                  # Embedding + upload helpers
```

---

## 🧠 Running Locally

1. Clone the repo
2. Create a `.env` file with your OpenAI and Supabase credentials
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start dev server:

   ```bash
   npm run dev
   ```

---

## 🤝 Contributions

This is a personal project but always open to collaboration or feature suggestions!
Feel free to fork or reach out via the [Contact page](https://arushigupta11.netlify.app/contact).

---

## 📬 Contact

📧 [arushi.gupta1@rutgers.edu](mailto:arushi.gupta1@rutgers.edu)
🌐 [arushigupta11.netlify.app](https://arushigupta11.netlify.app)

---

> Built with love for AI, software, and open collaboration.
