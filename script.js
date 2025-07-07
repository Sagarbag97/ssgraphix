
document.getElementById("categoryFilter").addEventListener("change", function () {
  const category = this.value;
  const items = document.querySelectorAll(".portfolio-grid .item");

  items.forEach((item) => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
