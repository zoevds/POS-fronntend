// let products = [];
// const uContainer = document.querySelector("#products");
// fetch("https://point-of-salee.herokuapp.com/products")
//   .then((response) => response.json())
//   .then((data) => {
//     products = data;
//     console.log(data);
//     showproducts(products);
//   });
// function showproducts(products) {
//   uContainer.innerHTML = "";
//   products.forEach((product) => {
//     uContainer.innerHTML += `
//       <div class="container">
//       <div id="card" class="card mb-3">
//       <div class="row">
//       <div class="product col-md-4 p-5">
//      <div class="Item"  onclick='showItem(this.id)' id="${product.product_id}" >
//     <h1 id="productname">${product.name}</h1>
//     <img id="cardimg" src="${product.image}" alt="${product.image}">
//     <p id="productdesc">${product.descriptions}</p>
//     <div class="row">
//     <div id="row" class="col-6">
//     <p> <i class="fa-solid fa-tag"></i> ${product.price}</p>
//     </div>
//     <div id="" class="col-6">
//     <p><i class="fa-solid fa-weight-scale"></i> ${product.weight}</p>
//  </div>
//  </div>
// </div>
// </div>
// </div>
//     `;
//   });
// }
