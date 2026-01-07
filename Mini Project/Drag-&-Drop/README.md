# 📑 Dynamic Drag & Drop Interface

A sleek and interactive task management UI built with **Vanilla JavaScript**. This project focuses on the **HTML5 Drag and Drop API**, utilizing a clean layout and seamless state transitions to move items between dynamic containers.

## 🚀 Live Demo
You can try the live application here: 
👉 **[View Live Project](https://ramitshapkota.github.io/JS-Learning-Journey/Mini%20Project/Drag-%26-Drop/index.html)**

---

## ✨ Features
* **Native Drag-and-Drop:** Full implementation of the HTML5 API (`dragstart`, `dragover`, `drop`) for a high-performance user experience.
* **Bi-directional Movement:** Items can be moved freely from the Left Box to the Right Box and vice-versa.
* **Visual State Cues:** Dynamic transparency effects and cursor changes to provide immediate feedback during a drag state.
* **Clean UI Layout:** Minimalist design using Flexbox and dashed-border containers to provide a clear, organized workspace.

## 🛠️ Tech Stack
* **Structure:** HTML5 (Draggable attributes & Semantic tags)
* **Styling:** CSS3 (Flexbox, UI feedback states, Box Model)
* **Logic:** Vanilla JavaScript (ES6+ Event Listeners)



## 📖 What I Learned
Building this project involved mastering the communication between draggable "sources" and valid "target" containers:

1. **The Event Handshake:** Learning that browsers prevent dropping by default. I mastered using `e.preventDefault()` within the `dragover` event to "unlock" containers.
2. **Node Manipulation:** Using `appendChild()` to physically move elements from one parent container to another in the DOM tree while maintaining their properties.
3. **Capture vs. Target:** Identifying the correct element being moved using `e.target` during the `dragstart` phase.
4. **User Experience (UX):** Implementing manual opacity changes to distinguish between the "ghost image" being dragged and the original item's position.



## ⚙️ Installation & Usage
To run this project locally:
1. Clone the repository: `git clone https://github.com/RamitShapkota/JS-Learning-Journey.git`
2. Navigate to the `Mini Project/Drag&Drop` folder.
3. Open `index.html` in your favorite browser.
4. No build tools or external dependencies required!

---
*Created with ❤️ by [RamitShapkota]*
