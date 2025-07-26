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
  