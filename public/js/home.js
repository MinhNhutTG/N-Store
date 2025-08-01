
document.addEventListener("DOMContentLoaded", () => {
    const mobileHeader = document.querySelector(".mobile-header");
    const barIcon = document.querySelector(".bars-icon");
    barIcon.addEventListener("click", () => {
        mobileHeader.classList.toggle("display-popup");
    })

    const buttonClosePopup = document.querySelector(".btn-close-popup");
    buttonClosePopup.addEventListener("click", () => {

        mobileHeader.classList.remove("display-popup");
    })

    const iconInput = document.querySelector(".mobile-input-icon");
    const inputPopup = document.querySelector(".mobile-input");
    const shape = document.querySelector(".icon-input");
    iconInput.addEventListener("click", e => {
        e.stopPropagation(); 
        inputPopup.classList.toggle("display-popup");
        shape.classList.toggle("display-popup");
    });

    const popup_LoginText = document.querySelector(".popup-login-text");
    const popupLogin = document.querySelector(".popup-login");
    

    popup_LoginText.addEventListener("click",(e)=>{
        e.stopPropagation();
        popupLogin?.classList.toggle("popup-header-show");
        popupCart?.classList.remove("popup-header-show");
    })

    const popupCartText = document.querySelector(".popup-cart-text");
    const popupCart = document.querySelector(".popup-cart");

    popupCartText.addEventListener("click",(e)=>{
        e.stopPropagation();
        popupCart?.classList.toggle("popup-header-show");
        popupLogin?.classList.remove("popup-header-show");
    })

    
   
})