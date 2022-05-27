localStorage.setItem("user", undefined);

 function isIncorrectPassword(password){
    var symbols = 0;
    var digits = 0;
    var upLetters = 0;
    var lowLetters = 0;
    var specailSymbols = "! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~";
    var isSpecialSymbolExists = false;
    for (var i = 0;i < password.length;++i){
        if (specailSymbols.indexOf(password[i]) != -1){
            isSpecialSymbolExists = true;
        }
        if (password[i] >= 'A' && password[i] <= 'Z'){
            upLetters++;
        }
        if (password[i] >= 'a' && password[i] <= 'z'){
            lowLetters++;
        }
        if (password[i] >= '0' && password[i] <= '9'){
            digits++;
        }
        symbols++;
    }
    if (symbols < 8 || symbols > 64){
        return "In the password minimum length of password is 8 and maximum length 64";
    }
    if (!digits){
        return "Password must contain digits [1..9]"
    }
    if (!upLetters){
        return "Password must contain upper case letters [A..Z]";
    }
    if (!lowLetters){
        return "Password must contain lower case letters [a..z]";
    }
    if (!isSpecialSymbolExists){
        return "Password must contain symbols like " + specailSymbols;
    }
    return false;
}

function signValid(form){
    var fail = false;
    var password = form.password.value;
    var email = form.email.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (mailformat.test(email)){
        document.getElementById("emailValidator").innerHTML = "";
    }
    if (!mailformat.test(email)){
        document.getElementById("emailValidator").innerHTML = "Invalid email | Email@example.com";
        fail = "true";
    }else if (localStorage.getItem(email) == null){
        document.getElementById("emailValidator").innerHTML = "Your email is not found. You should register";
        fail = true;
    }else if(password != JSON.parse(localStorage.getItem(email)).Password){
        fail = "true";
        document.getElementById("passwordValidator").innerHTML = "Incorrect password";
    }
    if (!fail){
        localStorage.setItem("user", JSON.parse(localStorage.getItem(email)).Name);
        window.location = "index.html";
    }

}

function regValid(form){
    var fail = false;
    var password = form.password.value;
    var email = form.email.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var repassword = form.repassword.value;
    var name = form.name.value;
    
    if (mailformat.test(email)){
        document.getElementById("emailValidator").innerHTML = "";
    }
    if (name) {
        document.getElementById("nameValidatorReg").innerHTML = "";
    }
    if (!isIncorrectPassword(password)){
        document.getElementById("passwordValidator1").innerHTML = "";
    }
    if (!name) {
        document.getElementById("nameValidatorReg").innerHTML = "Enter your name"
        fail = true;
    }else if(name.length > 12){
        document.getElementById("nameValidatorReg").innerHTML = "your nickname must be less than 12 letters";
        fail = true;
    }else if (!mailformat.test(email)){
        document.getElementById("emailValidatorReg").innerHTML = "Invalid email | Email@example.com";
        fail = "true";
    }else if(isIncorrectPassword(password)){
        fail = true;
        document.getElementById("passwordValidator1").innerHTML = isIncorrectPassword(password);
    }else if(repassword != password){
        fail = true;
        document.getElementById("passwordValidator2").innerHTML = "Passwords are not same";
    }
    if (!fail){
        const client = {Name: name, Email: email, Password: password};
        localStorage.setItem(email, JSON.stringify(client));
        localStorage.setItem("user", name);
        window.location = "index.html";
    }

}