let shop = document.getElementById("product");

let shopItemsData = [{
    id:"01",
    name:"Happy 1",
    description:"200 MP 256GB｜8GB Zoom óptico x5 6,1pulg resolución de pantalla 12MP de cámara frontal",
    price:"299,99",
    img:"../img/happy1.png"
}
]

let generateProduct = () => {
return(shop.innerHTML = shopItemsData
    .map((x)=>{
        let {id, name, price, description, img} = x;
    return `<figure class="figure1">
    <img class="product-image" src=${img} alt="Foto Movil Happy 1">
    </figure>
    <article class="main-product">
    <div class="description">
        <h2>${name}</h2>
        <ul class="text-description">
            <li>200 MP</li>
            <li>256GB｜8GB</li>
            <li>Zoom óptico x5</li>
            <li>6,1" resolución de pantalla</li>
            <li>12MP de cámara frontal</li>
        </ul>
        <h3>${price}€</h3>
    </div>
    <div  class="cantidad">
        <button class="btn btn-decrementar">-</button>
        <div  id=${id} class="cantidad-input">0</div>
        <button class="btn btn-incrementar">+</button>
    </div>
    <a href="./cart.html" target="_blank"> <button class="buy-button">Agregar al carrito</button></a>
    </article>`
}).join(""));
   
};
generateProduct()

/*
let incrementar = ()=>{};
let decrementar = ()=>{};
let incrementar = ()=>{};*/