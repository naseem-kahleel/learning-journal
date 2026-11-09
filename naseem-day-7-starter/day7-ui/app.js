"use strict";

const price = 8;
let stock = 2;

const priceOutput = document.getElementById("price");
const stockOutput = document.getElementById("stock");
const inventoryOutput = document.getElementById("inventory");
const quantityInput = document.getElementById("quantity");
const feedbackOutput = document.getElementById("feedback");

const sellButton = document.getElementById("sell-button");
const restockButton = document.getElementById("restock-button");

function render(message) {
  priceOutput.textContent = price;
  stockOutput.textContent = stock;
  inventoryOutput.textContent = stock * price;
  feedbackOutput.textContent = message;
}

function handleSell(quantity) {
  if (!Number.isInteger(quantity) || quantity <= 0) {
    return "Refused: use a positive number.";
  }

  if (quantity > stock) {
    return "Refused: insufficient stock.";
  }

  stock = stock - quantity;
  return `Accepted: sold ${quantity} ticket(s).`;
}

function handleRestock(deliveryquantity) {
  if (!Number.isInteger(deliveryquantity) || deliveryquantity <= 0) {
    return "Refused: enter a positive number.";
  }

  stock = stock + deliveryquantity;
  return `Accepted: restocked ${deliveryquantity} ticket(s).`;
}

sellButton.addEventListener("click", () => {
  const raw = quantityInput.value.trim();
  if (raw === "") {
    render("Refused: enter a number.");
    return;
  }
  const qty = Number(raw);
  const msg = handleSell(qty);
  render(msg);
});

restockButton.addEventListener("click", () => {
  const raw = quantityInput.value.trim();
  if (raw === "") {
    render("Refused: enter a number.");
    return;
  }
  const qty = Number(raw);
  const msg = handleRestock(qty);
  render(msg);
});

render("Ready");