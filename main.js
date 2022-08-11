// const projects = JSON.parse(localStorage.getItem("properties"))
//   ? JSON.parse(localStorage.getItem("properties"))
//   : [];
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
      <div class="card">
    <div class="Item"  onclick='showItem(this.id)' id="${product.product_id}" >
    <h1>${product.name}</h1>
    <img src="${product.image}" alt="${product.image}">
    <p>${product.descriptions}</p>
    <p>${product.price}</p>
    <p>${product.weight}</p>
 </div>
 </div>
</div>
    `;
    });
  });
