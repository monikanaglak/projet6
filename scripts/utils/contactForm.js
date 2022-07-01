function form_checking() {
  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const email = document.getElementById("email");
  const textMessage = document.getElementById("your_message");
  const valeur_string = /^(?=.{2,50}$)[[a-zàáâäçèéêëìíîïñòóôöùúûü]+(?:['-.\s][a-z]+)*$/i;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  const firstNameError = document.querySelector(".name_error");
  const lastNameError = document.querySelector(".last_name_error");
  const emailError = document.querySelector(".email_error");
  const textMessageError = document.querySelector(".your_message_error");
  const contact_button = document.querySelector(".contact_buttons");
  let name,surname,emailIn,messageIn;
  
  contact_button.addEventListener("click", () => {
    const body_div = document.querySelector("body");
    const main_div = document.getElementById("main");
    const contact_modal = document.getElementById("contact_modal");
    const modal_title = document.querySelector(".modal_title");

    contact_modal.style.display = "block";
    body_div.classList.add("no-scroll");
    main_div.setAttribute("aria-hidden", "true");
    contact_modal.setAttribute("aria-hidden", "false");
    /*function checking check if the form was fill correctly*/
    checking();

  /*getting all the element to put set attribute(tabindex -1)*/
  let elements_change= document.querySelectorAll(".switch");
  elements_change.forEach((el)=>{
    el.setAttribute("tabIndex","-1");
  })
  modal_title.focus();
  //closing form by x button
  const closeForm = document.querySelector(".close_form");
  
  // At the closing of form we put all things like before, scroling ect//
    closeForm.addEventListener("click", closing_by_x);
    function closing_by_x(){
    const body_div = document.querySelector("body");
    const main_div = document.getElementById("main");
    const contact_modal = document.getElementById("contact_modal");

    main_div.setAttribute("aria-hidden", "false");
    contact_modal.setAttribute("aria-hidden", "true");

    contact_modal.style.display = "none";
    body_div.classList.remove("no-scroll");

    chainging_tab_form();
    const contact_button = document.querySelector(".contact_me");
    contact_button.focus();
  };

   
  // Fonction qui réinitialise toute la navigation au clavier
  function chainging_tab_form() {
    let removing_reset = document.querySelectorAll(".switch");
    removing_reset.forEach((rem)=>{
      rem.setAttribute("tabIndex","0");
    })
  }
  
  firstName.addEventListener("focus", () => {
    firstNameError.style.display = "none";
  });
  lastName.addEventListener("focus", () => {
    lastNameError.style.display = "none";
  });
  email.addEventListener("focus", () => {
    emailError.style.display = "none";
  });
  textMessage.addEventListener("focus", () => {
    textMessageError.style.display = "none";
  });

  function checking(){
    let btn = document.querySelector("#test");
    firstName.addEventListener("input", (e) => {
      if (e.target.value) {
        name = e.target.value;
        if(name.match(valeur_string) && (name !== "")){
          e.target.style.border = "4px solid #51d115";
          firstNameError.style.display = "none";
          btn.removeAttribute("disabled");
        }
        else{
          e.target.style.border = "4px solid red";
          firstNameError.innerHTML =
          "Veuillez entrer 2 caractères ou plus pour le champ du prénom.Sans chiffres";
          firstNameError.style.display = "inline";
          btn.setAttribute("disabled","disabled");
        } 
      }
    })
    lastName.addEventListener("input", (e) => {
      if (e.target.value) {
        surname = e.target.value;
        if(surname.match(valeur_string) && (surname !=="")){
          e.target.style.border = "4px solid #51d115";
          lastNameError.style.display = "none";
          btn.removeAttribute("disabled");
        }
        else{
          e.target.style.border = "4px solid red";
          lastNameError.innerHTML =
          "Veuillez entrer 2 caractères ou plus pour le champ du nom de famille.";
          lastNameError.style.display = "inline";
          btn.setAttribute("disabled","disabled");
        } 
      }
    })
    email.addEventListener("input", (e) => {
      if (e.target.value) {
        emailIn = e.target.value;
        if(emailIn.match(emailRegex)&&(emailIn !=="")){
          e.target.style.border = "4px solid #51d115";
          emailError.style.display = "none";
          btn.removeAttribute("disabled");
        }
        else{
          e.target.style.border = "4px solid red";
          emailError.innerHTML =
          "Veuillez entrer un adresse email correct";
          emailError.style.display = "inline";
          btn.setAttribute("disabled","disabled");
          
        } 
      }
    })
    textMessage.addEventListener("input", (e) => {
      if (e.target.value) {
        messageIn = e.target.value;
        if(messageIn.length>=10 && messageIn.length<=50){
         e.target.style.border = "4px solid #51d115";
         textMessageError.style.display = "none";
         btn.removeAttribute("disabled");
        }
        else{
          e.target.style.border = "4px solid red";
          textMessageError.innerHTML =
          "Veuillez entrer un message plus long que 10 caractères";
          textMessageError.style.display = "inline";
          btn.setAttribute("disabled","disabled");
        } 
      }
    })
  }
}
)
let send_btn = document.querySelector("#test");

send_btn.addEventListener("click",function(e){
  e.preventDefault();
  if((name == undefined)){
    firstNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstNameError.style.color = "white";
  }
  if((surname == undefined)){
    lastNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom de famille.";
    lastNameError.style.color = "white";
  }
  if((emailIn == undefined)){
    emailError.innerHTML = "Veuillez entrer un adresse email correct";
    emailError.style.color = "white";
  }
  if((messageIn == undefined)){
    textMessageError.innerHTML = "Veuillez entrer un message plus long que 10 caractères";
    textMessageError.style.color = "white";
  }
  if(name && surname && emailIn && messageIn){
   
    clean_form();
  }
  let elements_rechange= document.querySelectorAll(".switch");
  elements_rechange.forEach((el)=>{
    el.setAttribute("tabIndex","0");
  })
});
function clean_form(){
  console.log(firstName.value,lastName.value,email.value,textMessage.value);
  let contact_modal = document.getElementById("contact_modal");
  contact_modal.style.display="none";
    firstName.value =" ";
    lastName.value =" ";
    email.value =" ";
    textMessage.value =" ";
    firstName.style.border="1px solid black";
    lastName.style.border="1px solid black";
    email.style.border="1px solid black";
    textMessage.style.border="1px solid black";
}
}


