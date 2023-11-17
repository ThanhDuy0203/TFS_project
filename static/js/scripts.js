var showqrButton = document.getElementById("showqrButton");
var qroverlay = document.getElementById("qroverlay");
var qrContainer = document.getElementById("qrContainer");

showqrButton.addEventListener("click", function() {
  // Hiển thị overlay
  qroverlay.classList.add("active");

  // Thay đổi src của ảnh trong container (nếu cần thiết)
  // document.getElementById("displayedImage").src = "new-image.jpg";

  // Hiển thị ảnh
  qrContainer.classList.add("active");
});

qroverlay.addEventListener("click", function() {
  // Ẩn overlay khi người dùng nhấn bất kỳ nơi nào trên overlay
  qroverlay.classList.remove("active");

  // Ẩn ảnh
  qrContainer.classList.remove("active");
});
