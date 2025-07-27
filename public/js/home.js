
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

    const innerProductList = document.getElementById("product-list-1");
    for (let i=0; i<10;i++){
        innerProductList.innerHTML += ` <div class="col">
                <div class="card product-card shadow-sm h-100 bg-white" style="position: relative;">
                    <span class="badge bg-warning text-dark position-absolute top-0 end-0 m-2">Hàng Mới</span>
                    <img src="./public/asset/Products/product1.jpg" class="card-img-top " alt="Áo Khoác Denim">

                    <div class="card-body ">
                        <div class="">
                            <h6 class="card-title mb-1"><a href="">Áo Khoác Denim Nam Stripe Trucker Form
                                    Regular</a>
                            </h6>
                            <div class="d-flex justify-content-between">
                                <p class="fw-bold text-dark m-0">649,000₫</p>
                                <div class="d-flex justify-content-end">
                                    <span
                                        class="bg-black rounded-circle d-flex align-items-center justify-content-center mx-3"
                                        style="width: 24px; height: 24px;cursor: pointer;">
                                        <i class="fa-solid fa-bag-shopping text-primary" style="font-size: 14px;"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
      
    }
   
})