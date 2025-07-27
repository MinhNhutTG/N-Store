 // Đổi ảnh khi click thumbnail
 const mainImage = document.getElementById('mainImage');
  const thumbnails = document.querySelectorAll('.thumb-img');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function () {
      const fullImage = this.getAttribute('data-full');
      mainImage.src = fullImage;

      thumbnails.forEach(t => t.classList.remove('active-thumb'));
      this.classList.add('active-thumb');
    });
  });
   // === 1. Tăng / Giảm số lượng ===
  const minusBtn = document.querySelector('.quantity-box button:first-child');
  const plusBtn = document.querySelector('.quantity-box button:last-child');
  const quantityDisplay = document.querySelector('.quantity-box span');
  let quantity = 1;

  minusBtn.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  plusBtn.addEventListener('click', () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  // === 2. Chọn size ===
  const sizeButtons = document.querySelectorAll('.size-options button');
  sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeButtons.forEach(b => b.classList.remove('btn-dark', 'active'));
      btn.classList.add('btn-dark', 'active');
    });
  });

  // === 3. Copy mã giảm giá khi bấm ===
  const voucherButtons = document.querySelectorAll('.voucher-buttons button');
  voucherButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.textContent.trim();
      navigator.clipboard.writeText(code).then(() => {
        alert(`Đã sao chép mã: ${code}`);
      });
    });
  });

  // === 4. Thêm vào giỏ hàng ===
  document.getElementById('addCart').addEventListener('click', () => {
    const selectedSize = document.querySelector('.size-options .active')?.textContent.trim();
    alert(`Đã thêm vào giỏ hàng\nSố lượng: ${quantity}\nSize: ${selectedSize}`);
  });

  // === 5. Mua ngay ===
  document.getElementById('buyNow').addEventListener('click', () => {
    const selectedSize = document.querySelector('.size-options .active')?.textContent.trim();
    alert(`Mua ngay sản phẩm\nSố lượng: ${quantity}\nSize: ${selectedSize}`);
    // Có thể redirect sang trang thanh toán tại đây
    // window.location.href = "/checkout.html";
  });
  