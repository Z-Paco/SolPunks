document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".art-item img").forEach((img) => {
    img.addEventListener("click", function () {
      document.getElementById("lightbox-img").src = this.src;
      document.getElementById("lightbox").style.display = "block";
    });
  });

  document.getElementById("lightbox-close").onclick = function () {
    document.getElementById("lightbox").style.display = "none";
  };

  document.getElementById("lightbox").onclick = function (e) {
    if (e.target === this) this.style.display = "none";
  };

  document.getElementById("lightbox-img").onclick = function () {
    document.getElementById("lightbox").style.display = "none";
  };

  // Keyboard accessibility: close on Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.getElementById("lightbox").style.display = "none";
    }
  });

  // Add hover effect logging for future interaction tracking
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const h3 = card.querySelector("h3");
      console.log(`Hovered over: ${h3 ? h3.innerText : "Unknown Project"}`);
    });
  });
});

// Placeholder function for future dynamic content loading
function loadDiscussionContent() {
  console.log("Discussion content loading... (Coming Soon)");
}
