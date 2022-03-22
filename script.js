let time = 5000,
  currentImageIndex = 0,
  images = document.querySelectorAll("#slider img");
max = images.length;

function nextImage() {
  images[currentImageIndex].classList.remove("selected");

  currentImageIndex++;

  if (currentImageIndex >= max) currentImageIndex = 0;

  images[currentImageIndex].classList.add("selected");
}

function start() {
  setInterval(() => {
    // troca de image
    nextImage();
  }, time);
}

window.addEventListener("load", start);

// document.getElementById("email").addEventListener("blur", function () {
//   var email = document.getElementById("email").value;

//   var regex =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   if (email == "" || !regex.test(email)) {
//     document.getElementById("email").style.border = "1px solid red";
//   }

//   if (regex.test(email)) {
//     document.getElementById("email").style.border = "1px solid green";
//   } else {
//     document.getElementById("email").style.border = "1px solid red";
//   }
// });

// document.getElementById("nomesobrenome").addEventListener("blur", function () {
//   var name = document.getElementById("nomesobrenome").value;

//   if (name == "") {
//     document.getElementById("nomesobrenome").style.border = "1px solid red";
//   }
// });

function myFunction() {
  // Get the value of the input field with id="numb"
  //let x = document.getElementById("numb").value;
  // // If x is Not a Number or less than one or greater than 10
  // let text;
  // if (isNaN(x) || x < 1 || x > 10) {
  //   text = "Input not valid";
  // } else {
  //   text = "Input OK";
  // }
  let nome = document.getElementById("nomesobrenome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;
  let mensagem = document.getElementById("mensagem").value;
  console.log(nome, email, telefone, mensagem);

  if (nome === "") {
    document.getElementById("nomesobrenome").style.border = "1px solid red";
    document.getElementById("msmName").innerHTML =
      "Por favor, preencha o campo nome";
  } else {
    document.getElementById("nomesobrenome").style.border = "1px solid green";
    document.getElementById("msmName").innerHTML = "";
  }


  if (email === "") {
    document.getElementById("email").style.border = "1px solid red";
    document.getElementById("msmEmail").innerHTML =
      "Por favor, preencha o campo email";
      
  } else {
    document.getElementById("email").style.border = "1px solid green";
    document.getElementById("msmEmail").innerHTML = "";
  }


  if (telefone === "") {
    document.getElementById("telefone").style.border = "1px solid red";
    document.getElementById("msmTelefone").innerHTML =
      "Por favor, preencha o campo telefone";
  } else {
    document.getElementById("telefone").style.border = "1px solid green";
    document.getElementById("msmTelefone").innerHTML = "";
  }

  
  if (mensagem === "") {
    document.getElementById("mensagem").style.border = "1px solid red";
    document.getElementById("msmMensagem").innerHTML =
      "Por favor, preencha o campo mensagem";
  } else {
    document.getElementById("mensagem").style.border = "1px solid green";
    document.getElementById("msmMensagem").innerHTML = "";
  }

  document.getElementById("demo").innerHTML = text;
}
