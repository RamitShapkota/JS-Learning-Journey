const cart = document.querySelector("#cart");
const addItemBtn = document.querySelector("#addItem");

function renumberItems() {
    const items = cart.querySelectorAll(".cart-item");
    items.forEach((item, index) => {
        item.querySelector("span").textContent = `Item ${index + 1}`;
    });
}

//add item dynamically
addItemBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    // li.className="cart-item";
    li.classList.add("cart-item");

    li.innerHTML = `
    <span></span>
    <div class="controls">
    <button class="dec">-</button>
    <span class="qty">1</span>
    <button class="inc">+</button>
    <button class="remove">Remove</button>
    </div>`;
    cart.appendChild(li);
    renumberItems();
});

/*
  🔥 EVENT DELEGATION
  One listener handles all actions
*/

cart.addEventListener("click", (e) => {
    const item = e.target.closest(".cart-item") //finds the nearest parent element with class cart-item or itself
    if (!item) return;

    const qtyE1 = item.querySelector(".qty");
    let qty = Number(qtyE1.textContent);

    if (e.target.classList.contains("inc")) {
        qtyE1.textContent = qty + 1;
    }

    if (e.target.classList.contains("dec")) {
        if (qty > 1) {
            qtyE1.textContent = qty - 1;
        }
    }

    if (e.target.classList.contains("remove")) {
        item.remove();
    }
});