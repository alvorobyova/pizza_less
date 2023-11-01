// прокрутка к блоку при нажатии на кнопку
document.getElementById('choose-pizza').onclick = function () {
    document.getElementsByClassName('products')[0].scrollIntoView({behavior: "smooth"})
}

// нажатие на кнопку "в корзину", название этого товара будет помещаться в форму + скролл к форме
let productInput = document.getElementById('product-input');
let addToCartButtons = document.getElementsByClassName('btn-add-to-cart');

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].onclick = function () {
        scrollToForm.call(this);
    };
}

function scrollToForm() {
    productInput.value = this.parentElement.previousElementSibling.previousElementSibling.innerText;
    document.getElementsByClassName('order')[0].scrollIntoView({behavior: "smooth"})
}

let input = document.querySelectorAll('.order-input');
input.style = 'border: #B99150';

// валидация формы
document.getElementById('create-order').onclick = function () {
    let addressInput = document.getElementById('address-input');
    let phoneInput = document.getElementById('phone-input');
    if (!productInput.value) {
        alert('Вы не выбрали пиццу!');
        return;
    }
    if (!addressInput.value) {
        alert('Заполните адрес доставки');
        return;
    }
    if (!phoneInput.value) {
        alert('Введите номер телефона')
        return;
    }
    alert('Спасибо за заказ!');
    phoneInput.value = '';
    addressInput.value = '';
    productInput.value = '';
}
