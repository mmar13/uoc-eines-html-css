// @ts-ignore
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

document.addEventListener("DOMContentLoaded", () => {
  const galleryLinks = document.querySelectorAll(".galeria-detall a");

  if (galleryLinks.length > 0 && window.innerWidth >= 1024) {
    try {
      const lightboxClass = SimpleLightbox.default || SimpleLightbox;

      const lightbox = new lightboxClass(".galeria-detall a", {
        captionsData: "alt",
        captionDelay: 250,
      });

      console.log(
        "SimpleLightbox actiu per a",
        galleryLinks.length,
        "imatges.",
      );
    } catch (error) {
      console.error("Error inicialitzant SimpleLightbox:", error);
    }
  }

  const messageForm = document.getElementById("message-form");
  const messageInput = document.getElementById("message-input");

  if (messageForm && messageInput) {
    messageForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const textMissatge = messageInput.value.trim();

      if (textMissatge === "") {
        return;
      }

      alert("El teu missatge s’ha enviat correctament.");

      messageInput.value = "";
    });
  }
});
