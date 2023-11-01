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

document.addEventListener('DOMContentLoaded', function(){
    const tang = document.querySelector('.cart-add');
    const giam = document.querySelector('.cart-reduce');
    const productquantify= document.querySelector('.product-quantity');
    const priceproduct = document.querySelector('.price-product-cart');
    const productquantify2= document.querySelector('.allprice');
    const totalallprice = document.querySelector('.totalprice');
    const moneyall=document.querySelector('.money-all');
    const moneypoint=document.querySelector('.money-point');
    let soluong=1;
    tang.addEventListener("click", function () {
        soluong+=1;
        productquantify.textContent = soluong;
        productquantify2.textContent = soluong; // Cập nhật giá trị số lượng sản phẩm trên trang
        capNhatTongGiaTien(); 
      });
    giam.addEventListener("click", function () {
        soluong-=1;
        if(soluong<=0)
        soluong=0;
        productquantify.textContent = soluong;
        productquantify2.textContent = soluong; // Cập nhật giá trị số lượng sản phẩm trên trang
        
        capNhatTongGiaTien();
      });
    function layGiaTien() {
        return parseInt(priceproduct.textContent, 10);
      }
      function capNhatTongGiaTien() {
        const giaTien = layGiaTien();
        const tongGiaTien = giaTien * soluong;
        moneyall.textContent= tongGiaTien;
        moneypoint.textContent=tongGiaTien/1000;
        totalallprice.textContent = tongGiaTien ;
    }
})
