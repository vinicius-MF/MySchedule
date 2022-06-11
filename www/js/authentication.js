var btnLogin = document.getElementById('btnLogin');
var inputEmail = document.getElementById('inputEmail');
var inputSenha = document.getElementById('inputSenha');


btnLogin.addEventListener('click', function () {

    firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputSenha.value).then(function (result) {
        alert("Usuário Conectado!");
        console.log("Success!");
        window.location.replace('index.html');

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        alert(errorMessage);
         console.log("Failure!")
    });

});