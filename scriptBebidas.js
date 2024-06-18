const products = [
    {
        price: "COP $3.000",
        img: "https://www.comidasrapidastaz1996.com/wp-content/uploads/2020/07/GaseosaPostobonpng.png",
        category: 'gaseosas'
    },
    {
        price: "COP $25.000",
        img: "https://copservir.vtexassets.com/arquivos/ids/1164267-1600-auto?v=638414499146670000&width=1600&height=auto&aspect=true",
        category: 'gaseosas'
    },
    {
        price: "COP $20.000",
        img: "https://exitocol.vtexassets.com/arquivos/ids/23195981/Licor-De-Whisky-Tradicional-JOHN-THOMAS-750-ml-1654978_a.jpg?v=638542596456400000",
        category: 'licores'
    },
    {
        price: "COP $20.000",
        img: "https://coopasan.com.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTUxMzY4NCwicHVyIjoiYmxvYl9pZCJ9fQ==--ee6f0a9e4ce292b68c8dc4b9e2812d3dbd547be6/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fZml0IjpbODAwLDgwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--cef66509c9cdc75663c0eefd9421db1d2ea4fead/ME00047.png?locale=es",
        category: 'aguas'
    },
]

const displayProducts = (productsToShow) => {  // Declara la función displayProducts que recibe un array de productos a mostrar
    const shopContent = document.getElementById("shopContent")  // Obtiene el elemento con el ID "shopContent"
    shopContent.innerHTML = ""  // Limpia el contenido HTML del elemento "shopContent"
    productsToShow.forEach(product => {  // Itera sobre cada producto en el array productsToShow
        const div = document.createElement("div")  // Crea un nuevo elemento div
        div.className = 'card-products'  // Asigna la clase "card-products" al div
        div.innerHTML = `               <!--Asigna contenido HTML al div-->
        <img src="${product.img}" alt="Gaseosa"> <!--Añade una imagen del producto-->
        <h3 class="nombreP">${product.price}</h3> <!--Añade el precio del producto en un elemento-->
        `
        shopContent.append(div)  // Añade el div creado como hijo de "shopContent"
    })
}

const filterProducts = (category) => {  // Declara la función filterProducts que recibe una categoría
    const productsToShow = products.filter(product => product.category === category)  // Filtra los productos por la categoría dada
    displayProducts(productsToShow)  // Llama a displayProducts con los productos filtrados
}

const Todas = document.getElementById("Todas");  // Obtiene el elemento con el ID "Todos"
const Gaseosas = document.getElementById("Gaseosas");  // Obtiene el elemento con el ID "Guantes"
const Licores = document.getElementById("Licores");
const Aguas = document.getElementById("Aguas");  // Obtiene el elemento con el ID "Manoplas"

Todas.addEventListener('click', () => {  // Añade un event listener para el click del elemento "Todos"
    displayProducts(products);  // Llama a displayProducts con todos los productos cuando se hace clic en "Todos"
})
Gaseosas.addEventListener('click', () => {  // Añade un event listener para el click del elemento "Guantes"
    filterProducts('gaseosas');  // Llama a filterProducts con la categoría 'guantes' cuando se hace clic en "Guantes"
})
Licores.addEventListener('click', () => {  // Añade un event listener para el click del elemento "Manoplas"
    filterProducts('licores');  // Llama a filterProducts con la categoría 'manoplas' cuando se hace clic en "Manoplas"
})
Aguas.addEventListener('click', () => {  // Añade un event listener para el click del elemento "Manoplas"
    filterProducts('aguas');  // Llama a filterProducts con la categoría 'manoplas' cuando se hace clic en "Manoplas"
})

displayProducts(products)  // Llama a displayProducts con todos los productos para mostrar inicialmente
