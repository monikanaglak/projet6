function AddClickHeart() {
    const hearts = document.querySelectorAll(".heart");
    for (const heart of hearts) {
      heart.addEventListener("click", () => {
        let siblingClick = heart.previousElementSibling;
        siblingClick.innerHTML = parseInt(siblingClick.innerHTML) + 1;
      });
      
    }
  }
    
  
