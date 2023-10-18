var responsive = function(){
    //-----------Price-----------
    let rangeInput = document.querySelectorAll('.range-input input');
    let rangeText = document.querySelectorAll('.range-text div');
    let progress = document.querySelector('.progress');
    let priceMax = rangeInput[0].max;
    let priceGap = 100000;
    
    rangeInput.forEach(input => {
        input.addEventListener('input', (event) => {
            let minVal = parseInt(rangeInput[0].value);
            let maxVal = parseInt(rangeInput[1].value);
    
            if(maxVal - minVal < priceGap){
                if(event.target.className === 'range-min'){
                    minVal = rangeInput[0].value = maxVal - priceGap;
                }else{
                    maxVal = rangeInput[1].value = minVal + priceGap;
                }
            }
    
            let positionMin = (minVal / priceMax) * 100;
            let positionMax = 100 - ((maxVal / priceMax) * 100);
            progress.style.left = positionMin + '%';
            progress.style.right = positionMax + '%';
            rangeText[0].style.left = positionMin + '%';
            rangeText[1].style.right = positionMax + '%';
            rangeText[0].innerText = minVal.toLocaleString();
            rangeText[1].innerText = maxVal.toLocaleString();
        })
    })

    //-----------Sort------------
    const Btnprice = document.querySelector("#criteria-dropdown-price");
    const listDropdownprice = document.querySelector(".range-price");
    addClickEvent(Btnprice, listDropdownprice);
    
    const Btn = document.querySelector("#criteria-dropdown");
    const listDropdown = document.querySelector(".list-dropdown");
    addClickEvent(Btn, listDropdown);
    
    const Btn2 = document.querySelector("#criteria-dropdown-2");
    const listDropdown2 = document.querySelector(".list-dropdown-2");
    addClickEvent(Btn2, listDropdown2);
    
    const Btn3 = document.querySelector("#criteria-dropdown-3");
    const listDropdown3 = document.querySelector(".list-dropdown-3");
    addClickEvent(Btn3, listDropdown3);
    
    const Btn4 = document.querySelector("#criteria-dropdown-4");
    const listDropdown4 = document.querySelector(".list-dropdown-4");
    addClickEvent(Btn4, listDropdown4);
    
    const Btn5 = document.querySelector("#criteria-dropdown-5");
    const listDropdown5 = document.querySelector(".list-dropdown-5");
    addClickEvent(Btn5, listDropdown5);
    
    const Btn6 = document.querySelector("#criteria-dropdown-6");
    const listDropdown6 = document.querySelector(".list-dropdown-6");
    addClickEvent(Btn6, listDropdown6);
    
    const Btn7 = document.querySelector("#criteria-dropdown-7");
    const listDropdown7 = document.querySelector(".list-dropdown-7");
    addClickEvent(Btn7, listDropdown7);
    
    const Btn8 = document.querySelector("#criteria-dropdown-8");
    const listDropdown8 = document.querySelector(".list-dropdown-8");
    addClickEvent(Btn8, listDropdown8);
    
    const Btn9 = document.querySelector("#criteria-dropdown-9");
    const listDropdown9 = document.querySelector(".list-dropdown-9");
    addClickEvent(Btn9, listDropdown9);
    
    const Btn10 = document.querySelector("#criteria-dropdown-10");
    const listDropdown10 = document.querySelector(".list-dropdown-10");
    addClickEvent(Btn10, listDropdown10);

    function addClickEvent(Btn, listDropdown) {
        Btn.addEventListener("click", function () {
            listDropdown.style.display = "flex";
        });
    
        document.addEventListener("click", function (event) {
            if (!listDropdown.contains(event.target) && !Btn.contains(event.target)) {
                listDropdown.style.display = "none";
            }
        });
    }  
}

window.onload = function() {
    responsive();  
}
//--------------------------------
let isButtonClicked=true;
function changeColor() {
    const availableButton = document.querySelector(".sort-btn");
    if (isButtonClicked)
    {
        availableButton.style.backgroundColor = "pink"; // Đổi màu nền thành đỏ
        availableButton.style.color = "red"; // Đổi màu chữ thành trắng
        availableButton.style.border = "1px solid red"; // Đổi màu viền thành đỏ
    }
    else
    {
        
        availableButton.style.backgroundColor = "rgb(238, 238, 238)"; // Đổi màu nền thành đỏ
        availableButton.style.color = "black"; // Đổi màu chữ thành trắng
        availableButton.style.border = "none"; // Đổi màu viền thành đỏ
    }
    isButtonClicked = !isButtonClicked;
}

//---------------------------------

let selectedElement = null;
document.addEventListener("DOMContentLoaded", function() {
    const initialElement = document.querySelector('.sort-list-changeColor:nth-child(4)');
    toggleColorSee(initialElement);
});
function toggleColorSee(element) {
    const availableButtonSee = element;
    if (selectedElement !== availableButtonSee) {
        // Nếu phần tử được nhấp vào khác với phần tử đã chọn trước đó
        if (selectedElement) {
            selectedElement.style.backgroundColor = "rgb(238, 238, 238)";
            selectedElement.style.color = "black";
            selectedElement.style.border = "none";
        }

        availableButtonSee.style.backgroundColor = "#FFB6C1";
        availableButtonSee.style.color = "red";
        availableButtonSee.style.border = "1px solid red";
        
        selectedElement = availableButtonSee;
    } else {
        // Nếu phần tử được nhấp vào là phần tử đã chọn trước đó, thì ẩn nó
        availableButtonSee.style.backgroundColor = "rgb(238, 238, 238)";
        availableButtonSee.style.color = "black";
        availableButtonSee.style.border = "none";
        selectedElement = null;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.show-more-product');
    const moreContent = document.querySelector('.more-product');
    button.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            button.innerText = 'Thu gọn';
        } else {
            moreContent.style.display = 'none';
            button.innerText = 'Xem thêm';
        }
    });

    const button2 = document.querySelector('.show-more-content');
    const moreContent2 = document.querySelector('.more-content');
    button2.addEventListener('click', function() {
        if (moreContent2.style.display === 'none' || moreContent2.style.display === '') {
            moreContent2.style.display = 'block';
            button2.innerText = 'Thu gọn';
        } else {
            moreContent2.style.display = 'none';
            button2.innerText = 'Xem thêm';
        }
    });
});
    