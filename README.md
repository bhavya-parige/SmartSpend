# 💸 SmartSpend — Personal Finance Dashboard

A modern **React + Redux** expense tracking dashboard that helps users manage spending, monitor categories, and gain simple insights through a clean, responsive UI.

---

## 📸 Preview

### Bar and Pie charts
<img src="./assets/PieAndBar.png" width="700" />

### Category insights
<img src="./assets/Insights.png" width="700" />

---

## ✨ Features

* ➕ Add new transactions
* 🗑️ Delete transactions
* 💾 Persistent data with `localStorage`
* 📊 Spending summary dashboard
* 📊 Pie / Bar charts with Recharts
* 🍔 Category insights (Food spending analysis)
* ⚛️ Global state management with Redux
* 📱 Responsive and clean UI
* ⚡ Fast frontend-only app (no backend required)

---

## 🛠️ Tech Stack

* **React**
* **Redux** (manual setup, no Redux Toolkit)
* **JavaScript (ES6+)**
* **CSS3**
* **LocalStorage**

---

## 📂 Project Structure

```text
src/
├── main.jsx
├── App.jsx
├── styles.css
├── components/
│   ├── Dashboard.js
│   ├── TransactionForm.js
│   └── TransactionList.js
└── redux/
    ├── actions.js
    ├── reducers.js
    └── store.js
```

---

## 🧠 How It Works

### State Management

Redux manages the list of transactions globally, making it easy to share data across components.

### Persistence

All transactions are saved in `localStorage`, so data remains after page refresh.

### Insights

The dashboard analyzes spending and provides quick feedback, such as:

* ⚠️ High food spending
* ✅ Food spending OK

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/bhavya-parige/SmartSpend.git
cd SmartSpend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

---

## 📈 Future Improvements

* 🌙 Dark mode
* 📅 Date filters
* 🔎 Search transactions
* 💱 Multiple currencies
* ☁️ Backend + authentication
* 🤖 AI-powered financial recommendations

---

## 🧪 Example Use Cases

* Track daily expenses
* Monitor food budget
* Build budgeting habits
* Showcase React + Redux skills in a portfolio

---

## 💡 Why This Project Matters

SmartSpend demonstrates practical frontend engineering skills:

* Component-based architecture
* Controlled forms
* State management
* Data persistence
* Conditional rendering
* Clean UI styling

---

## 👨‍💻 Author

Your Name
GitHub: `https://github.com/your-username`
LinkedIn: `https://linkedin.com/in/bhavya-parege`

---

## ⭐ Support

If you like this project, consider giving it a **star** on GitHub!
