// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");
    const visibleCards = 3; // Number of cards to show at once
    let startIndex = 0;
  
    const showCards = (start) => {
      // Hide all cards
      cards.forEach((card) => card.classList.remove("active"));
  
      // Show only the visible cards
      for (let i = 0; i < visibleCards; i++) {
        const index = (start + i) % cards.length; // Loop through cards
        cards[index].classList.add("active");
      }
    };
  
    document.getElementById("prev").addEventListener("click", () => {
      // Move back by one card
      startIndex = (startIndex - 1 + cards.length) % cards.length;
      showCards(startIndex);
    });
  
    document.getElementById("next").addEventListener("click", () => {
      // Move forward by one card
      startIndex = (startIndex + 1) % cards.length;
      showCards(startIndex);
    });
  
    // Initial display of cards
    showCards(startIndex);
  });
  