// @ts-ignore
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

document.addEventListener("DOMContentLoaded", () => {
  const galleryLinks = document.querySelectorAll(".galeria-detall a");
  
  if (galleryLinks.length > 0) {
    try {
      const lightboxClass = SimpleLightbox.default || SimpleLightbox;
      
      const lightbox = new lightboxClass(".galeria-detall a", {
        captionsData: "alt",
        captionDelay: 250,
      });
      
      console.log("SimpleLightbox actiu per a", galleryLinks.length, "imatges.");
    } catch (error) {
      console.error("Error inicialitzant SimpleLightbox:", error);
    }
  }

  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const searchError = document.getElementById("search-error");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const query = searchInput.value.trim().toLowerCase();
      
      const detailPages = ["det1.html", "det2.html", "det3.html", "det4.html"]; 
      let foundPage = null;

      if (searchError) searchError.style.display = "none";

      for (const page of detailPages) {
        try {
          const response = await fetch(page);
          if (response.ok) {
            const htmlText = await response.text();
            
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, "text/html");
            const pageTitle = doc.querySelector("title") 
              ? doc.querySelector("title").textContent.toLowerCase() 
              : "";

            if (pageTitle.includes(query)) {
              foundPage = page;
              break; 
            }
          }
        } catch (err) {
          console.error(`No s'ha pogut carregar ${page}:`, err);
        }
      }

      if (foundPage) {
        window.location.href = foundPage;
      } else {
        if (searchError) searchError.style.display = "block";
      }
    });
  }
});