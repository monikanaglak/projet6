function formularz() {
  const firstName = document.getElementById("first_name");
  console.log(firstName);
  const lastName = document.getElementById("last_name");
  const email = document.getElementById("email");
  const textMessage = document.getElementById("your_message");
  const formPhotograph = document.querySelector("#contact_Photograph");

 
  const firstNameError = document.querySelector(".name_error");
  const lastNameError = document.querySelector(".last_name_error");
  const emailError = document.querySelector(".email_error");
  const textMessageError = document.querySelector(".your_message_error");

  // Bouton d'ouverture de la popup
  const ContactButton = document.querySelector(".contact_buttons");

  // Lorsqu'on ouvre le formulaire de contact, on met le focus dessus et on désactive la tabulation sur tout le reste du site
  ContactButton.addEventListener("click", () => {
    const bodyDiv = document.querySelector("body");
    const MainDiv = document.getElementById("main");
    const contactModal = document.getElementById("contact_modal");
    const modalTitle = document.querySelector(".modal-title");

    contactModal.style.display = "block";
    bodyDiv.classList.add("no-scroll");
    MainDiv.setAttribute("aria-hidden", "true");
    contactModal.setAttribute("aria-hidden", "false");

  /*getting all the element to put set attribute(tabindex -1)*/
  let elements_change= document.querySelectorAll(".switch");
  elements_change.forEach((el)=>{
    el.setAttribute("tabIndex","-1");
  })
 /*****to remove?*********************** */ 
/*
    document.querySelector("header a").setAttribute("tabIndex", "-1");
    document.querySelector(".photograph-name").setAttribute("tabIndex", "-1");
    document.querySelector(".photograph-txt").setAttribute("tabIndex", "-1");
    document.querySelector(".contact_me").setAttribute("tabIndex", "-1");
    document.querySelector(".photograph-img").setAttribute("tabIndex", "-1");
    document.querySelector(".likes-price").setAttribute("tabIndex", "-1");
    document.querySelector("#sort").setAttribute("tabIndex", "-1");
    document.querySelector("#select_images").setAttribute("tabIndex", "-1");

    const imageSelected = document.querySelectorAll(".media_link");
    const imageTxt = document.querySelectorAll(".photograph-catalog-txt");
    const imageLike = document.querySelectorAll(".photograph-catalog-icon");
    const imageLikeHeart = document.querySelectorAll(".like_img");

    for (let i = 0; i < imageSelected.length; i++) {
      imageSelected[i].setAttribute("tabIndex", "-1");
      imageTxt[i].setAttribute("tabIndex", "-1");
      imageLike[i].setAttribute("tabIndex", "-1");
      imageLikeHeart[i].setAttribute("tabIndex", "-1");
    }

    const videoCatalog = document.querySelectorAll(".card_video");
    for (let i = 0; i < videoCatalog.length; i++) {
      videoCatalog[i].setAttribute("tabIndex", "-1");
    }

    modalTitle.focus();
  });
*/
modalTitle.focus();
  
  const closeForm = document.querySelector(".close_form");

  // A la fermeture de la popup, on remet tous les attributs de navigation au clavier par défaut
  closeForm.addEventListener("click", () => {
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
  });
  
   enableTabindexForm()
  // Fonction qui réinitialise toute la navigation au clavier
  function enableTabindexForm() {/*
    document.querySelector(".photograph-name").setAttribute("tabIndex", "2");
    document.querySelector(".photograph-txt").setAttribute("tabIndex", "2");
    document.querySelector(".contact_me").setAttribute("tabIndex", "2");
    document.querySelector(".photograph-img").setAttribute("tabIndex", "2");
    document.querySelector(".likes-price").setAttribute("tabIndex", "2");
    document.querySelector("#sort").setAttribute("tabIndex", "0");
    document.querySelector("#select_images").setAttribute("tabIndex", "0");

    const imageSelected = document.querySelectorAll(".media_link");
    const imageTxt = document.querySelectorAll(".photograph-catalog-txt");
    const imageLike = document.querySelectorAll(".photograph-catalog-icon");
    const imageLikeHeart = document.querySelectorAll(".like_img");

    for (let i = 0; i < imageSelected.length; i++) {
      imageSelected[i].setAttribute("tabIndex", "0");
      imageTxt[i].setAttribute("tabIndex", "0");
      imageLike[i].setAttribute("tabIndex", "0");
      imageLikeHeart[i].setAttribute("tabIndex", "0");
    }

    const videoCatalog = document.querySelectorAll(".card_video");
    for (let i = 0; i < videoCatalog.length; i++) {
      videoCatalog[i].removeAttribute("tabIndex", "-1");
    }*/

    let removing_reset = document.querySelectorAll(".switch");
    removing_reset.forEach((rem)=>{
      rem.setAttribute("tabIndex","0");
    })
  }
  /*** ask why tabindex2?  */
 

  // Suppression des messages d'erreur au focus
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

  //verify size first name
  firstName.addEventListener("input", (e) => {
    if (e.target.value.length < 2) {
      e.target.style.border = "4px solid red";
      firstNameError.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      firstNameError.style.display = "inline";
    } else {
      e.target.style.border = "4px solid #51d115";
      firstNameError.style.display = "none";
      submitBtn.removeAttribute("disabled");
    }
  });

  // Vérification de la validité des champs
  lastName.addEventListener("input", (e) => {
    if (e.target.value.length < 2) {
      e.target.style.border = "4px solid red";
      lastNameError.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      lastNameError.style.display = "inline";
      submitBtn.setAttribute("disabled", true);
    } else {
      e.target.style.border = "4px solid #51d115";
      lastNameError.style.display = "none";
      submitBtn.removeAttribute("disabled");
    }
  });

  email.addEventListener("input", (e) => {
    if (e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      e.target.style.border = "4px solid #51d115";
      emailError.style.display = "none";
      submitBtn.removeAttribute("disabled");
    } else {
      e.target.style.border = "4px solid red";
      emailError.innerHTML = "Veuillez entrer un adress email valide";
      emailError.style.display = "inline";
      submitBtn.setAttribute("disabled", true);
    }
  });

  textMessage.addEventListener("input", (e) => {
    if (e.target.value.length < 10) {
      e.target.style.border = "4px solid red";
      textMessageError.innerHTML =
        "Veuillez entrer 10 caractères ou plus pour le champ du message.";
      textMessageError.style.display = "inline";
      submitBtn.setAttribute("disabled", true);
    } else {
      e.target.style.border = "4px solid #51d115";
      textMessageError.style.display = "none";
      submitBtn.removeAttribute("disabled");
    }
  });

  // Validation du formulaire
  const submitBtn = document.querySelector(".submitting_form");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("in form")
    if (
      firstName.value === "" &&
      lastName.value === "" &&
      email.value === "" &&
      textMessage.value === ""
    ) {
      firstNameError.innerHTML = "Le prénom ne doit pas être vide";
      firstNameError.style.display = "inline";
      firstName.style.border = "4px solid red";

      lastNameError.innerHTML = "Le nom ne doit pas être vide";
      lastNameError.style.display = "inline";
      lastName.style.border = "4px solid red";

      emailError.innerHTML = "Le email ne doit pas être vide";
      emailError.style.display = "inline";
      email.style.border = "4px solid red";

      textMessageError.innerHTML = "Le message ne doit pas être vide";
      textMessageError.style.display = "inline";
      textMessage.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    }
    if (firstName.value === "") {
      firstNameError.innerHTML = "Le prénom ne doit pas être vide";
      firstNameError.style.display = "inline";
      firstName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (firstName.value.length < 2) {
      firstNameError.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      firstNameError.style.display = "inline";
      firstName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (firstName.value.length > 20) {
      firstNameError.innerHTML =
        "Le prénom ne doit pas être plus grande que 20 caractères";
      firstNameError.style.display = "inline";
      firstName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (firstName.value.match(/[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]/)) {
      firstNameError.innerHTML = "Le prénom ne doit pas avoir des symboles";
      firstNameError.style.display = "inline";
      firstName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (lastName.value === "") {
      lastNameError.innerHTML = "Le nom ne doit pas être vide";
      lastNameError.style.display = "inline";
      lastName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (lastName.value.length < 2) {
      lastNameError.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      lastNameError.style.display = "inline";
      lastName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (lastName.value.length > 20) {
      lastNameError.innerHTML =
        "Le nom ne doit pas être plus grande que 20 caractères";
      lastNameError.style.display = "inline";
      lastName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (lastName.value.match(/[ !@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]/)) {
      lastNameError.innerHTML =
        "Le nom ne doit pas avoir des espaces et symboles";
      lastNameError.style.display = "inline";
      lastName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (email.value === "") {
      emailError.innerHTML = "Le email ne doit pas être vide";
      emailError.style.display = "inline";
      email.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (
      !email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      emailError.innerHTML = "Veuillez entrer un adress email valide";
      emailError.style.display = "inline";
      email.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (textMessage.value === "") {
      textMessageError.innerHTML = "Le message ne doit pas être vide";
      textMessageError.style.display = "inline";
      textMessage.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (textMessage.value.length < 5) {
      textMessageError.innerHTML =
        "Le message doit être plus grande que 5 caractères";
      textMessageError.style.display = "inline";
      textMessage.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else {
      firstNameError.style.display = "none";
      lastNameError.style.display = "none";
      emailError.style.display = "none";
      textMessageError.style.display = "none";

      firstName.style.border = "4px solid #fff";
      lastName.style.border = "4px solid #fff";
      email.style.border = "4px solid #fff";
      textMessage.style.border = "4px solid #fff";

      e.preventDefault();
      console.log("Prénom: " + firstName.value);
      console.log("Nom: " + lastName.value);
      console.log("Email: " + email.value);
      console.log("Votre message: " + textMessage.value);

      formPhotograph.reset();
    }
  });
})
}
