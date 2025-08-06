// Hiệu ứng cuộn mượt khi click vào menu
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); // Ngăn trình duyệt chuyển trang ngay lập tức

    const target = document.querySelector(this.getAttribute("href")); // Lấy phần tử cần cuộn đến

    if (target) {
      target.scrollIntoView({
        behavior: "smooth" // Cuộn mượt
      });
    }
  });
});


