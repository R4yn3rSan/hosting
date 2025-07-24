window.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById("btn-menu");
  const dropdown = document.getElementById("dropdown");
  const loginBtn = document.getElementById("btn-login");
  const modalOverlay = document.getElementById("modal-overlay");
  const closeModalBtn = document.getElementById("close-modal");

  menuBtn.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });

  loginBtn.addEventListener("click", () => {
    modalOverlay.classList.add("show");
    modalOverlay.querySelector('input[type="email"]').focus();
  });

  closeModalBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("show");
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("show");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("show")) {
      modalOverlay.classList.remove("show");
    }
  });
});
