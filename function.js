
const app = document.getElementById("app");

//! Products to be added to the cards
const products = [
    {
        src: 'https://www.itreseller.ch/imgserver/artikel/Produkte/2023/big/Apple_Vision_Pro_04jpg_5_2306157_080649.jpg',
        title: 'iFruit Vision Pro',
        text: 'iFruit Vision Pro, This is a great product for your needs.',
        preis: '$9999'
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwfBnWMRDrhCWYQoXpOJmvIidP_GisBaxXw&usqp=CAU',
        title: 'very smart phone galaxy 39',
        text: 'Description of Product 2. Get the best value with this product.',
        preis: '$123'
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMI-qcC2yaqpvhqaMftB6pmziEoMN2H_rPQ&usqp=CAU',
        title: 'earphone',
        text: 'The perfect solution for your requirements.',
        preis: '$230'
    }
]

//! Function that calls the Navbar
const renderNav = () => {
    app.innerHTML += `<nav class="navbar navbar-dark bg-danger text-white">
  <a class="navbar-brand" href="#">HiShoppers</a>
  <a class="navbar-brand" href="#">about us</a>
</nav>`;
}

//! Function that prints the cards
const renderContent = () => {
    app.innerHTML += `<div style="display:flex; justify-content:center; align-items:center"  >
        ${products.map(product =>//! Instead of writing each card one by one, map is used
        `
        <div class="col-3">
            <div class="card" style="width: 250px; height: 50;">
                <img src="${product.src}" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.text}</p>
                    <p class="card-text">${product.preis}</p>
                </div>
            </div>
        </div>
    `).join('')}
        </div>`;
}

//! Function that calls the Footer
const renderFooter = () => {
    app.innerHTML += `<div class="card-footer bg-danger text-white text-center" style="position: fixed; left:0; bottom:0; width:100%">
&copy HiShoppers. All rights reserved.
</div>`}


//! Function that executes functions sequentially
const appRender = () => {

    renderNav();
    renderContent();
    renderFooter();
}

//! to export to app.js
export { appRender };