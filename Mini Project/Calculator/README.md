# 📱 Modern Neumorphic Calculator
A sleek and fully responsive calculator built with **Vanilla JavaScript**, featuring a modern **Neumorphic UI**. This project focuses on high-precision layout scaling using the 62.5% font-size rule and CSS `clamp()` functions.


## 🚀 Live Demo
You can try the live application here: 
👉 **[View Live Project](https://ramitshapkota.github.io/JS-Learning-Journey/Mini%20Project/Calculator/index.html)**

---

## ✨ Features
* **Neumorphic Design:** Soft UI aesthetic using dual-shadow techniques to create a "pressed" and "floating" button effect.
* **Fully Responsive:** Uses `rem` units and `clamp()` to ensure a perfect layout from tiny 320px mobile screens to 4K monitors.
* **Smart Evaluation:** Real-time mathematical expression parsing with built-in support for decimals and negative numbers.
* **Touch Feedback:** Active-state CSS transitions to provide tactile feedback for mobile users.

## 🛠️ Tech Stack
* **Structure:** HTML5 (Semantic Forms)
* **Styling:** CSS3 (Flexbox, 62.5% Scaling Rule, Viewport Units `dvh`)
* **Logic:** Vanilla JavaScript (ES6+)

## 📖 What I Learned
Building this calculator was a deep dive into professional CSS architecture and clean JavaScript logic:
1. **The 62.5% Rule:** Mastering the reset of `html { font-size: 62.5% }` to make `1rem` equal exactly `10px`, simplifying responsive math.
2. **Fluid Typography & Sizing:** Implementing `clamp(min, preferred, max)` to replace dozens of media queries with single lines of "elastic" code.
3. **Advanced CSS Shadows:** Layering multiple `box-shadow` values to create realistic depth and 3D Neumorphism.
4. **String Manipulation:** Using `.slice(0, -1)` for "Delete (DE)" functionality and managing calculator states without external libraries.

## ⚙️ Installation & Usage
To run this project locally:
1. Clone the repository: `git clone https://github.com/RamitShapkota/calculator.git`
2. Open `index.html` in your favorite browser.
3. No build tools or dependencies required!

---
*Created with ❤️ by [RamitShapkota]*