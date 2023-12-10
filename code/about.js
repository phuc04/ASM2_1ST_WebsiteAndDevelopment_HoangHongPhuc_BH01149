document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Gửi tin nhắn (giả sử thành công)
        var message = document.getElementById("message");
        var successMessage = document.createElement("p");
        successMessage.textContent = "The message has been sent successfully!";
        successMessage.style.color = "green";
        form.appendChild(successMessage);

        // Xóa nội dung trong các trường nhập liệu
        form.reset();
              // Chuyển hướng về trang index.html sau 3 giây
      setTimeout(function() {
        window.location.href = "index.html";
      }, 3000);
    });
});