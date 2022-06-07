function formularz() {
  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const email = document.getElementById("email");
  let name; /*comment déclare en 1 seul ligne tout let?*/
  let surname;
  let emailIn;
  let messageIn;

  const textMessage = document.getElementById("your_message");
  const formPhotograph = document.querySelector("#contact_Photograph");
  const valeur_string = /^(?=.{2,50}$)[[a-zàáâäçèéêëìíîïñòóôöùúûü]+(?:['-.\s][a-z]+)*$/i;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const valeur_message = /^(?=.{10,50}$)[[a-zàáâäçèéêëìíîïñòóôöùúûü]+(?:['-.\s][a-z]+)*$/i;


 
  const firstNameError = document.querySelector(".name_error");
  const lastNameError = document.querySelector(".last_name_error");
  const emailError = document.querySelector(".email_error");
  const textMessageError = document.querySelector(".your_message_error");

  
  const ContactButton = document.querySelector(".contact_buttons");

  
  ContactButton.addEventListener("click", () => {
    const bodyDiv = document.querySelector("body");
    const MainDiv = document.getElementById("main");
    const contactModal = document.getElementById("contact_modal");
    const modalTitle = document.querySelector(".modal-title");

    contactModal.style.display = "block";
    bodyDiv.classList.add("no-scroll");
    MainDiv.setAttribute("aria-hidden", "true");
    contactModal.setAttribute("aria-hidden", "false");
    checking();

  /*getting all the element to put set attribute(tabindex -1)*/
  let elements_change= document.querySelectorAll(".switch");
  elements_change.forEach((el)=>{
    el.setAttribute("tabIndex","-1");
  })
  modalTitle.focus();
  
  const closeForm = document.querySelector(".close_form");
  
  // A la fermeture de la popup, on remet tous les attributs de navigation au clavier par défaut
    closeForm.addEventListener("click", closing_by_x);
    function closing_by_x(){
    const bodyDiv = document.querySelector("body");
    const MainDiv = document.getElementById("main");
    const contactModal = document.getElementById("contact_modal");

    MainDiv.setAttribute("aria-hidden", "false");
    contactModal.setAttribute("aria-hidden", "true");

    contactModal.style.display = "none";
    bodyDiv.classList.remove("no-scroll");

    enableTabindexForm();
    const ContactButton = document.querySelector(".contact_me");
    ContactButton.focus();
  };

   
  // Fonction qui réinitialise toute la navigation au clavier
  function enableTabindexForm() {
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

  /*const submitBtn = document.querySelector(".submitting_form");
  submitBtn.addEventListener("click", checking());*/
  function checking(){
      let test = document.querySelector("#test");
      firstName.addEventListener("input", (e) => {
        if (e.target.value) {
        name = e.target.value;
        if(name.match(valeur_string) && (name !== "")){
          e.target.style.border = "4px solid #51d115";
          firstNameError.style.display = "none";
          test.removeAttribute("disabled");
        }
        else{
          e.target.style.border = "4px solid red";
          firstNameError.innerHTML =
            "Veuillez entrer 2 caractères ou plus pour le champ du prénom.Sans chiffres";
            firstNameError.style.display = "inline";
            test.setAttribute("disabled","disabled");
          } 
      }
    })
        lastName.addEventListener("input", (e) => {
          if (e.target.value) {
          surname = e.target.value;
          if(surname.match(valeur_string) && (surname !=="")){
            e.target.style.border = "4px solid #51d115";
            lastNameError.style.display = "none";
            test.removeAttribute("disabled");
          }
          else{
            e.target.style.border = "4px solid red";
            lastNameError.innerHTML =
              "Veuillez entrer 2 caractères ou plus pour le champ du prénom.Sans chiffres";
              lastNameError.style.display = "inline";
              test.setAttribute("disabled","disabled");
            } 
          }
        })
     
          email.addEventListener("input", (e) => {
            if (e.target.value) {
              emailIn = e.target.value;
            if(emailIn.match(emailRegex)&&(emailIn !=="")){
            e.target.style.border = "4px solid #51d115";
            emailError.style.display = "none";
            test.removeAttribute("disabled");
      }
      else{
        e.target.style.border = "4px solid red";
        emailError.innerHTML =
          "Veuillez entrer un adresse email correct";
          emailError.style.display = "inline";
          test.setAttribute("disabled","disabled");
          
      } 
    }
})
     textMessage.addEventListener("input", (e) => {
        if (e.target.value) {
        messageIn = e.target.value;
        if(messageIn.match(valeur_message)&& (messageIn !=="")){
        e.target.style.border = "4px solid #51d115";
        textMessageError.style.display = "none";
        test.removeAttribute("disabled");
      }
      else{
       e.target.style.border = "4px solid red";
       textMessageError.innerHTML =
      "Veuillez entrer un message plus long que 10 caractères";
       textMessageError.style.display = "inline";
       test.setAttribute("disabled","disabled");
       
      } 
     }
    })
  } /*koniec funkcji checking*/
}
)
let test = document.querySelector("#test");

test.addEventListener("click",function(e){
  e.preventDefault();
  let contactModal = document.getElementById("contact_modal");
  contactModal.style.display="none";
  let elements_rechange= document.querySelectorAll(".switch");
  elements_rechange.forEach((el)=>{
    el.setAttribute("tabIndex","0");
  })
});


}



