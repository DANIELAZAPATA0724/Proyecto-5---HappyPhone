let shop = document.getElementById("product");

let shopItemsData = [{
    id:"H01",
    name:"Happy 1",
    description:"200 MP 256GB｜8GB Zoom óptico x5 6,1pulg resolución de pantalla 12MP de cámara frontal",
    price:"299,99",
    img:"../img/happy1.png"
}
]

let basket = JSON.parse(localStorage.getItem("data")) || [] ;

let generateProduct = () => {
return(shop.innerHTML = shopItemsData
    .map((x)=>{
        let {id, name, price, description, img} = x;
        let search = basket.find((x)=>x.id === id) || [];
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
        <div  id=${id} class="cantidad-input">${search.item === undefined ? 0: search.item}</div>
        <button onclick="increment(${id})" class="btn btn-incrementar">+</button>
    </div>
    <a href="./cart.html" target="_blank"> <button id="add-to-cart-btn" class="add-to-cart-btn">Carrito</button></a>
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

    localStorage.setItem("data",JSON.stringify(basket));
};

let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id ===selectedItem.id); 
    
    if (search === undefined) return;
    else if (search.item === 0) return;
    else{
        search.item -= 1;
    }
    
    update(selectedItem.id);
    //para que cuando un producto sea "0" desaparezca el objeto del LS
    basket = basket.filter((x) => x.item !== 0);
    //console.log(basket);
    
    localStorage.setItem("data",JSON.stringify(basket)); //save data back in LS after manipulate the basket

};

let update = (id) => {
    let search = basket.find((x)=>x.id === id);
    //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    addUpItems();
};

//ADD TO CART
let addUpItems = () => {
    let addCart = document.getElementById("cart-amount");
    addCart.innerHTML = basket.map((x) => x.item).reduce((x,y)=>x+y,0);
};
//se invoca la función para que los valores se conserven en el carrito
addUpItems();