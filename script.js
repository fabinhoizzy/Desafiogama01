const form =document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome, 
        email,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let carregando = `<p>E-mail enviado com sucesso..</p>`

    content.innerHTML = carregando

})

//

//if(localStorage.estado){
//document.getElementById('email').value = localStorage.email;
//}

//var salvarData = function() {
  //  var email = document.getElementById('email').value;
    //localStorage.setItem('email', email);
//}
//document.onchange = salvarData;
