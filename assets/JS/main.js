// لیست نمونه محصولات با تصاویر از JsonPlaceholder
const products = [
    {
        id: 1,
        title: "گوشی موبایل",
        price: 15000000,
        image: "assets/images/mobile02.jpg"
    },
    {
        id: 2,
        title: "گیم کنترلر",
        price: 20000000,
        image: "assets/images/car-02.webp"
    },
    {
        id: 3,
        title: "مانیتور 1",
        price: 81000000,
        image: "assets/images/hp2.png"
    },
    {
        id: 4,
        title: "مانیتور 2",
        price: 75000000,
        image: "assets/images/asus3.png"
    }
];

// نمایش محصولات در صفحه
const productsList = document.getElementById("products-list");

products.forEach(product =>{
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <div class="product-title">${product.title}</div>
    <div class="product-price">${product.price.toLocaleString()} تومان</div>
    <button class="add-btn" data-id="${product.id}">افزودن به سبد</button>`
    ;
    productsList.appendChild(div);
});

// هندلر دکمه افزودن به سبد خرید
productsList.addEventListener("click" , function (e) {
   if(e.target.classList.contains("add-btn")){
    const id = Number(e.target.dataset.id);
    console.log(e.target);
    
    addToCart(id);
   } 
});