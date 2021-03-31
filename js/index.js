// ITERATION 1

function updateSubtotal(product) {
  const price = document.querySelector(".price span");
  const quantity = document.querySelector('.quantity input[type="number"]')
    .value;

  let subtotal = document.querySelector(".subtotal span");
  subtotal.innerText = Number(price.innerText) * Number(quantity);

  console.log(subtotal.innerText);

  //... your code goes here
}

function calculateAll() {
  let allProducts = document.querySelectorAll(".product");
  let price = document.querySelectorAll(".price span");

  let totalPrice = document.querySelector(".subtotal span");

  let totalPrice = Number();

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
