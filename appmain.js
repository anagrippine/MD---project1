const openShopping = document.querySelector(".shopping");
const body = document.querySelector("body");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCart = document.querySelector(".listCart")
const total = document.querySelector(".total");
const quantity = document.querySelector(".quantity");
openShopping.addEventListener("click", function () {
    body.classList.add("active");
});

closeShopping.addEventListener("click", function () {
    body.classList.remove("active");
});

let products = [
    { id: 1, name: "3D LED Pikachu Night Light", image: "3D LED Pikachu Night Light.jpg", price: 2 },
    { id: 2, name: "kids bag", image: "kids bag.jpg", price: 1 },
    { id: 3, name: "Kids watch", image: "Kids watch.jpg", price: 6 },
    { id: 4, name: "Maga Charizard Building set", image: "Maga Charizard Building set.jpg", price: 3 },
    { id: 5, name: "Pokemon Assorted cards", image: "Pokemon Assorted cards, 50 ps.jpg", price: 9 },
    { id: 6, name: "Ultra Ball.jpg", image: "Ultra Ball.jpg", price: 8 },

];
const listCards = JSON.parse(localStorage.getItem("listCarts")) || [];

// Hiển thị sp ra ngoài màn hình
function initApp() {
    for (let i = 0; i < products.length; i++) {
        let value = products[i];
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src ="picture/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price}</div>
        <button onclick="addToCart(${i})">Add to cart</button>
        `;
        list.appendChild(newDiv);
    }
}
initApp();
// Thêm  sp  vào  giỏ  hàng
function addToCart(key) {
    if (listCards[key] == null) {
        listCards[key] = { ...products[key], quantity: 1 };
    } else {
        listCards[key].quantity += 1;
    }
    localStorage.setItem("listCarts", JSON.stringify(listCards));
    reloadCart();
}
// Hiển thị sp trong giỏ hàng
function reloadCart() {
    listCart.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    for (let i = 0; i < listCards.length; i++) {
        let value = listCards[i];
        if (value != null) {
            let newLi = document.createElement("li");
            newLi.innerHTML = `
           <div><img src="./picture/${value.image}"/>></div>
           <div>${value.name}</div>
           <div>${value.price}</div>
           <div>
           <button onclick="changeQuantity(${i}, ${value.quantity - 1})">-</button>
           <div>${value.quantity}</div>
           <button onclick="changeQuantity(${i}, ${value.quantity + 1})">+</button>
           </div>`;
            listCart.appendChild(newLi);
            totalPrice += value.price * value.quantity;
            count += value.quantity;
        }
    }
    console.log(count);
    total.innerText = totalPrice;
    quantity.innerText = count;

}
reloadCart();

function changeQuantity(index, newQuantity) {
    if (newQuantity <= 0) {
        delete listCards[index];
    } else {
        listCards[index].quantity = newQuantity;
    }
    localStorage.setItem("listCarts", JSON.stringify(listCards));
    reloadCart();
}
var order = document.getElementsByClassName("order")[0];
order.onclick = function () {
    alert("Thank you!")
}