# 📝 Professional Form Validation

A high-performance, responsive contact form built with **Vanilla JavaScript**. This project focuses on strict data validation using **Universal Regular Expressions**, persistent data handling with **Local Storage**, and real-time user feedback.


## 🚀 Live Demo
You can try the live application here: 
👉 **[View Live Project](https://ramitshapkota.github.io/JS-Learning-Journey/Mini%20Project/Form_Validation/index.html)**

---

## ✨ Features
* **Universal RegEx Validation:** * **Name:** Supports international accented characters, hyphens, and multi-word names.
    * **Email:** Validates complex modern domains and long extensions (e.g., .photography, .international).
* **Local Storage Persistence:** Automatically saves valid user input to the browser so data isn't lost on page refresh.
* **Real-Time Feedback:** Instant visual cues using Font Awesome icons and dynamic error messages.
* **Auto-Hide Logic:** Error messages automatically disappear after 3 seconds using `setTimeout` for a cleaner user experience.
* **Secure Input Handling:** Uses `textContent` to prevent XSS (Cross-Site Scripting) when displaying error messages.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3 (Flexbox & Absolute Positioning)
* **Logic:** Vanilla JavaScript (ES6+)
* **Icons:** [Font Awesome](https://fontawesome.com/)

## 📖 What I Learned
Through this project, I mastered several core JavaScript and UI/UX concepts:
1. **Advanced Regular Expressions:** How to write patterns that support global users (accented characters) while remaining strict enough to prevent junk data.
2. **JSON Serialization:** Using `JSON.stringify()` and `JSON.parse()` to store and retrieve complex objects from `localStorage`.
3. **DOM Manipulation:** Dynamically updating elements to provide immediate feedback without page reloads.
4. **CSS Positioning:** Implementing `position: absolute` within `position: relative` containers to place validation icons precisely inside input fields.

## ⚙️ Installation & Usage
To run this project locally:
1. Clone the repository: 
   ```bash
   git clone [https://github.com/RamitShapkota/form-validation.git](https://github.com/RamitShapkota/form-validation.git)
