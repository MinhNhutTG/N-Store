 document.addEventListener("DOMContentLoaded", function () {
    const btnThanhtoan = document.getElementById("btn-thanhtoan");
    const btnDathang = document.getElementById("btn-dathang");
    const form = document.querySelector("form");

    const nameInput = document.getElementById("customer_name");
    const phoneInput = document.getElementById("customer_phone");
    const addressInput = document.getElementById("customer_address");
    const provinceSelect = document.querySelector(".change-tinh");
    const districtSelect = document.querySelector(".select-quan");
    const wardSelect = document.querySelector(".select-phuong");

    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const addressError = document.getElementById("adressError");
    const tinhError = document.getElementById("tinhError");
    const quanError = document.getElementById("quanError");
    const phuongError = document.getElementById("phuongError");

    // Kiểm tra số điện thoại hợp lệ (bắt đầu bằng 0 và 10 chữ số)
    function isValidPhone(phone) {
      return /^0\d{9}$/.test(phone);
    }

    function validateForm() {
      let isValid = true;

      // Họ và tên
      if (nameInput.value.trim() === "") {
        nameError.style.display = "block";
        isValid = false;
      } else {
        nameError.style.display = "none";
      }

      // SĐT
      if (!isValidPhone(phoneInput.value.trim())) {
        phoneError.textContent = "Vui lòng nhập đúng số điện thoại!";
        phoneError.style.display = "block";
        isValid = false;
      } else {
        phoneError.style.display = "none";
      }

      // Địa chỉ
      if (addressInput.value.trim() === "") {
        addressError.style.display = "block";
        isValid = false;
      } else {
        addressError.style.display = "none";
      }

      // Tỉnh
      if (provinceSelect.value === "all") {
        tinhError.style.display = "block";
        isValid = false;
      } else {
        tinhError.style.display = "none";
      }

      // Quận
      if (districtSelect.value === "all") {
        quanError.style.display = "block";
        isValid = false;
      } else {
        quanError.style.display = "none";
      }

      // Phường
      if (wardSelect.value === "all") {
        phuongError.style.display = "block";
        isValid = false;
      } else {
        phuongError.style.display = "none";
      }

      return isValid;
    }

    // Gắn sự kiện cho cả 2 nút thanh toán
    [btnThanhtoan, btnDathang].forEach(button => {
      if (button) {
        button.addEventListener("click", function (e) {
          e.preventDefault(); // Ngăn submit ngay
          if (validateForm()) {
            form.submit(); // Gửi form nếu hợp lệ
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" }); // Cuộn lên để người dùng thấy lỗi
          }
        });
      }
    });
  });
  document.querySelectorAll('.payment-method').forEach(method => {
  method.addEventListener('click', function () {
    // Lặp qua tất cả phương thức để reset trạng thái
    document.querySelectorAll('.payment-method').forEach(item => {
      item.classList.remove('active');
      const radio = item.querySelector('input[type="radio"]');
      if (radio) radio.checked = false;
    });

    // Kích hoạt phương thức được chọn
    this.classList.add('active');
    const radio = this.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;

    // Hiển thị nội dung nếu chọn COD
    const content = document.querySelector('.content-chuyenkhoan');
    if (content) {
      content.style.display = (radio && radio.value === 'COD') ? 'block' : 'none';
    }
  });
});
  const voucherItems = document.querySelectorAll('.voucher-price');

voucherItems.forEach(item => {
  item.addEventListener('click', function () {
    // Bỏ active & unchecked tất cả voucher
    voucherItems.forEach(v => {
      v.classList.remove('active');
      const radio = v.querySelector('input[type="radio"]');
      if (radio) radio.checked = false;
    });

    // Thêm active & checked cho cái đang chọn
    this.classList.add('active');
    const currentRadio = this.querySelector('input[type="radio"]');
    if (currentRadio) currentRadio.checked = true;

    // Copy mã giảm giá vào ô input
    const voucherCode = currentRadio.dataset.code;
    const inputVoucher = document.querySelector('.input-voucher');
    if (inputVoucher && voucherCode) {
      inputVoucher.value = voucherCode;
    }
    this.scrollIntoView({
  behavior: 'smooth',
  block: 'start'
});
  });
});
const paymentMethods = document.querySelectorAll('.payment-method');
const contentChuyenKhoan = document.querySelector('.content-chuyenkhoan');
const imgInVoucherInfo = document.querySelector('.payment-voucher__info img');

paymentMethods.forEach(method => {
  method.addEventListener('click', function () {
    // Reset tất cả
    paymentMethods.forEach(item => {
      item.classList.remove('active');
      const radio = item.querySelector('input[type="radio"]');
      if (radio) radio.checked = false;
    });

    // Active và checked cho cái được chọn
    this.classList.add('active');
    const currentRadio = this.querySelector('input[type="radio"]');
    if (currentRadio) currentRadio.checked = true;

    // Hiển thị content-chuyenkhoan nếu chọn COD
    if (contentChuyenKhoan) {
      contentChuyenKhoan.style.display = currentRadio?.value === 'COD' ? 'block' : 'none';
    }

    // Đổi ảnh trong .payment-voucher__info
    const imgTag = this.querySelector('img');
    if (imgTag && imgInVoucherInfo) {
      imgInVoucherInfo.src = imgTag.src;
      imgInVoucherInfo.alt = imgTag.alt;
    }
  });
});