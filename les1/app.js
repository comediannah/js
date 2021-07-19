'use strict';

const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item, img ='mouse.jpg') =>
             `<div class="product-item">
                <img src="${img}" alt="тут мыш" class="product-img">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price} руб</p>
                <button class="buy-btn">В корзину</button>
            </div>`;
const renderProducts = list => {
    document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item, item.img)).join(''));
};



renderProducts(products);