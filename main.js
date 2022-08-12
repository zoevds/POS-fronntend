fetch("https://point-of-salee.herokuapp.com/products", {
  method: "get",
})
  .then((response) => response.json())
  .then((data) => {
    let products = [];
    products = data;
    products.forEach((product) => {
      document.querySelector("#products").innerHTML += `
      <div class="container">
      <div id="card" class="card mb-3">
      <div class="row">
     <div class="Item"  onclick='showItem(this.id)' id="${product.product_id}" >
    <h1 id="productname">${product.name}</h1>
    <img id="cardimg" src="${product.image}" alt="${product.image}">
    <p id="productdesc">${product.descriptions}</p>
    <div class="row">
    <div id="row" class="col-6">
    <p> <i class="fa-solid fa-tag"></i> ${product.price}</p>
    </div>
    <div id="" class="col-6">
    <p><i class="fa-solid fa-weight-scale"></i> ${product.weight}</p>
 </div>
 </div>

</div>
</div>
    `;
    });
  });
