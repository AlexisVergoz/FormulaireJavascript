window.onload = () => {
    // On récupère l'élément id="pseudo" et on le stock dans la variable pseudo
    let pseudo = document.querySelector("#pseudo");


    // On attend que la valeur de pseudo change (input)
    // Ecouteur d'évènement
    pseudo.addEventListener("input", function () {
        // ce code se déclenchera dès qu'on modifiera le contenu de pseudo 
        // On doit mettre une bordure verte si la longeur du pseudo tapé fait au moin 5 caractères
        // sinn on met une bordure rouge

        if (pseudo.textLength >= 5) {
            // La longueur est au moin égale à 5
            pseudo.style.borderColor = "green";
        } else {
            // La longueur est infèrieur à 5
            pseudo.style.borderColor = "red";
        }
    })

    

    let email2 = document.querySelector("#email2");

    // On ecoute l'évènement "change"
    email2.addEventListener("change", function () {
        // Ici la valeur d'email2 a changé ET on a quitté le champ
        // on compare la valeur de l'email1 et de l'email2
        // Si les valeurs sont identiques, bordure verte, sinn brodure rouge
        let email1 = document.querySelector("#email1");
        // On compare les 2 valeurs
        if (email2.value === email1.value) {
            // les deux valeurs sont identiques
            email2.style.borderColor = "green";
            email1.style.borderColor = "green";
        } else {
            // les deux valeurs ne sont pas identiques
            email2.style.borderColor = "red";
            email1.style.borderColor = "red";
        }

    });
   


// On effectue la meme chose pour les mots de pass

    let pass2 = document.querySelector("#pass2");
    pass2.addEventListener("change", function(){
        let pass1 = document.querySelector("#pass1");
        if (pass2.value === pass1.value) {
            pass2.style.borderColor = "green";
            pass1.style.borderColor = "green";
        }else{
            pass2.style.borderColor = "red";
            pass1.style.borderColor = "red";
        }
    });

    // mot de pass en clair
    // Au clic sur le bouton voir-pass on change le type de l'input pass1 et pass2 
    // Si le type est "password", on le change en "text", sinon on le change en "password"
    // On doit aller chercher pass1, pass2 existe dejà
    let pass1 = document.querySelector("#pass1");
    let voirPass = document.querySelector("#voir-pass");
    
    // On ecoute l'évènement "click" sur voirpass
    voirPass.addEventListener("click", function(){
        // ici on sait que l'utilisateur à cliqué sur le bouton
        if(pass2.type === "password"){
            pass2.type = "text";
            pass1.type = "text";
        }else{
            pass2.type = "password";
            pass1.type = "password";
        }
    })

}
// fin window.onload