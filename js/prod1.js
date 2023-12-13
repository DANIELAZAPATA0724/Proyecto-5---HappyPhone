let shop = document.getElementById("product");

let shopItemsData = [{
    id:"H01",
    name:"Happy 1",
    description:"200 MP 256GB｜8GB Zoom óptico x5 6,1pulg resolución de pantalla 12MP de cámara frontal",
    price:"299,99",
    img:"../img/happy1.png"
}
]

let basket = [];

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
        <button onclick="decrement(${id})" class="btn btn-decrementar">-</button>
        <div  id=${id} class="cantidad-input">0</div>
        <button onclick="increment(${id})" class="btn btn-incrementar">+</button>
    </div>
    <a href="#" target="_blank"> <button class="add-to-cart-btn">Agregar al carrito</button></a>
    </article>`
}).join(""));
   
};
generateProduct()


let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id ===selectedItem.id); //this is going to check all the items one by one
    
    if (search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }else{
        search.item += 1;
    }
    
    //console.log(basket);
    update(selectedItem.id);
};

let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id ===selectedItem.id); 
    //I make it to stop adding items once it becomes "0"
    if (search.item === 0) return;
    else{
        search.item -= 1;
    }
    
    //console.log(basket);
    update(selectedItem.id);
};

let update = (id) => {
    let search = basket.find((x)=>x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

//ADD TO CART BTN
let calculation = () => {
    let btnCart = document.getElementById("cart-amount");
    console.log(basket);




};

