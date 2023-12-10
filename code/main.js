window.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("moving-image");
    var containerWidth = image.parentNode.offsetWidth;
    var imageWidth = image.offsetWidth;
    var animationDuration = 5; // Thời gian di chuyển (giây)
    var animationDelay = 2; // Thời gian chờ giữa các lần di chuyển (giây)
    
    // Tính toán tốc độ di chuyển dựa trên containerWidth và imageWidth
    var movementSpeed = (containerWidth + imageWidth) / animationDuration;
  
    // Thiết lập thuộc tính animation và tốc độ di chuyển
    image.style.animationDuration = animationDuration + "s";
    image.style.animationTimingFunction = "linear";
    image.style.animationDelay = animationDelay + "s";
    image.style.animationIterationCount = "infinite";
    image.style.animationName = "slide";
  
    // Thiết lập tốc độ di chuyển
    image.style.transition = "transform " + animationDuration + "s linear";
    image.style.transform = "translateX(" + containerWidth + "px)";
  });