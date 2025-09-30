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
    <div class="product-title animate-pulse">${product.title}</div>
    <div class="product-price">${product.price.toLocaleString()} تومان</div>
    <button class="add-btn animate-bounce" data-id="${product.id}">افزودن به سبد</button>`
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

// ...Existing Code...
// سبد خرید به صورت آرایه ساده
const cart = [];

// افزودن محصول به سبد خرید
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const item = cart.find(i => i.id === productId);
    if(item){
        item.qty += 1;
    }else{
        cart.push({id: product.id, title: product.title, price: product.price, qty: 1});
    }
    
    renderCart();
}

// نمایش سبد خرید
function renderCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";

    cart.forEach(item =>{
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
        <span class="cart-item-title">${item.title}</span>
        <span class="cart-item-qty">${item.qty}</span>
        <button class="remove-btn" data-id="${item.id}">حذف</button>
        `;
        cartList.appendChild(li);
    });
}

// حذف محصول از سبد خرید
function removeFromCart(productId) {
    const index = cart.findIndex(i => i.id === productId);
    if(index !== -1){
        cart.splice(index , 1);
        renderCart();
    }
}