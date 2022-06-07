function AddClickHeart() {
    const hearts = document.querySelectorAll(".heart");
    for (const heart of hearts) {
      heart.addEventListener("click", () => {
        let siblingClick = heart.previousElementSibling;
        siblingClick.innerHTML = parseInt(siblingClick.innerHTML) + 1;
        let counter_likes_footer = document.querySelector(".titre_like");
        counter_likes_footer.innerHTML++;
      });
    }
  } 
function AddClickEnter(){
  const hearts = document.querySelectorAll(".heart");
  for (const heart of hearts) {
    heart.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        let siblingClick = heart.previousElementSibling;
        siblingClick.innerHTML = parseInt(siblingClick.innerHTML) + 1;
        let counter_likes_footer = document.querySelector(".titre_like");
        counter_likes_footer.innerHTML++;
      }
    });
  }
}

    
  
