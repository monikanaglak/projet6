    
  
    const hearts = document.getElementsByClassName('heart');
    for(let i=0; i<hearts.length;i++){
        hearts[i].addEventListener("click", likes(i))
    };
    function likes(i){
        let counts = 0;
        let counter = document.querySelectorAll(".num")[i];
        console.log("click")
        counts = counts +1;
        console.log(counts)
        counter.innerHTML =  counts;
};
    
    /*
    let counts = 0;
    function likes(){
    let heart = document.getElementById("heart");
    let licznik = document.getElementById("num");
    counts = counts +1;
    console.log(counts)
    licznik.innerHTML =  counts;
};
    
*/
