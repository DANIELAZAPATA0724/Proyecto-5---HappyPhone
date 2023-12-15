let label = document.getElementById("label")
let shoppingCart = document.getElementById("carrito")
let basket = JSON.parse(localStorage.getItem("data")) || [] ;

let addUpItems = () => {
    let addCart = document.getElementById("cart-amount");
    addCart.innerHTML = basket.map((x) => x.item).reduce((x,y)=>x+y,0);
};

addUpItems();

let generateCartItems = () => {
if (basket.length !==0){

}else{
    shoppingCart.innerHTML = `
    `
    label.innerHTML = `
    <h2>Carrito Vacio</h2>
    <a href="index.html">
     <button class="homeBtn">Volver al catálogo</button>
    </a>
    `;

};
};

generateCartItems()