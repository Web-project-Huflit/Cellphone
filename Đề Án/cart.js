document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.cart-product-color-dropdown');
    const colorContainer = document.querySelector('.cart-product-color');
    
    colorContainer.addEventListener("click", function() {
        colorContainer.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.cart-product-promotion span');
    const moreContent = document.querySelector('.cart-product-promotion-details');
    const icon = document.querySelector('.cart-product-promotion i');
    
    button.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'flex';
            button.innerText = 'Thu gọn';
            icon.classList.remove('fa-caret-down');
            icon.classList.add('fa-caret-up');
        } else {
            moreContent.style.display = 'none';
            button.innerText = 'Khuyến mãi';
            icon.classList.remove('fa-caret-up');
            icon.classList.add('fa-caret-down');
        }
    });
});


