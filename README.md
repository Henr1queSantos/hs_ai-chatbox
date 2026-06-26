# 🤖 HS AI Chat

A sleek AI-powered chatbox built with React and Google's Gemini API. Chat with a generative AI model directly in your browser, with support for dark/light mode.

🌐 **Live Demo:** [ai.henriquesantos.dev](https://ai.henriquesantos.dev)

---

## 📸 Preview

> Type a message and get an AI-generated response instantly. Supports dark and light themes.

---

## ✨ Features

- 💬 Conversational chat interface with user and AI message bubbles
- 🤖 Powered by **Google Gemini API** (`@google/generative-ai`)
- 🌙 Dark / ☀️ Light mode toggle
- ⚡ Fast, clean UI with a minimal design
- 🔄 Graceful error handling when the API is unavailable

---

## 🛠️ Tech Stack

- **React 19**
- **JavaScript (ES6+)**
- **CSS3**
- **[Google Gemini API](https://ai.google.dev/)** — generative AI responses
- **gh-pages** for deployment

---

## 🔑 API Setup

This project uses the [Google Gemini API](https://ai.google.dev/). To run it locally, you'll need a free API key.

1. Go to [aistudio.google.com](https://aistudio.google.com/) and sign in
2. Generate an **API Key**
3. Create a `.env` file at the root of the project:

```env
REACT_APP_GEMINI_API_KEY=your_api_key_here
```

> ⚠️ Never commit your `.env` file to version control. It's already listed in `.gitignore`.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm
- Google Gemini API key (see above)

### Installation

```bash
# Clone the repository
git clone https://github.com/Henr1queSantos/hs_ai-chatbox.git

# Navigate into the project
cd hs_ai-chatbox

# Install dependencies
npm install
```

### Running locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 📁 Project Structure

```
hs_ai-chatbox/
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   └── index.js
├── .env          ← your API key goes here (not committed)
├── package.json
└── README.md
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Henrique Santos**

- Portfolio: [henriquesantos.dev](https://henriquesantos.dev)
- GitHub: [@Henr1queSantos](https://github.com/Henr1queSantos)
