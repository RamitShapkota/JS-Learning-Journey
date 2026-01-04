# 📝 To-Do List App
A sleek and responsive To-Do List application built with **Vanilla JavaScript**. This project demonstrates efficient DOM manipulation, event delegation, and persistent data storage using the browser's Local Storage.

> **Note:** [Add a screenshot or GIF of your To-Do List here!]

## 🚀 Live Demo
You can try the live application here: 
👉 **[View Live Project](https://ramitshapkota.github.io/JS-Learning-Journey/Mini%20Project/To-Do%20List/index.html)**

---

## ✨ Features
* **Task Management:** Easily add new tasks and remove them instantly with the '×' button.
* **Interactive UI:** Click on any task to toggle a "checked" state with a visual strike-through effect.
* **Data Persistence:** Uses `localStorage` so your tasks are saved even after closing the browser.
* **Smart Validation:** Built-in alert to prevent users from adding empty tasks.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3 (Flexbox & Absolute Positioning)
* **Logic:** Vanilla JavaScript (ES6)
* **Assets:** Custom PNG icons for checked and unchecked states.

## 📖 What I Learned
As a learner, this project helped me master several key concepts:
1. **Event Delegation:** Using a single event listener on the parent `<ul>` to handle clicks on dynamically created `<li>` and `<span>` elements.
2. **DOM Manipulation:** Creating and appending elements like `span` and `li` on the fly using `document.createElement`.
3. **Local Storage:** Saving the entire `innerHTML` of a container to preserve the user's list state across sessions.
4. **CSS Pseudo-elements:** Utilizing `::before` to manage custom icons without adding extra tags to the HTML structure.

## ⚙️ Installation & Usage
To run this project locally:
1. Clone the repository: 
   ```bash
   git clone [https://github.com/RamitShapkota/JS-Learning-Journey.git](https://github.com/RamitShapkota/JS-Learning-Journey.git)