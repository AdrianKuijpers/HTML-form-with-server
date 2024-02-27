const sendbutton = document.querySelector(".send-btn")
sendbutton.addEventListener("click", sendData);

function sendData() {
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const msg = document.querySelector("#msg").value
    console.log({name, email, msg});
}

fetch ('http://localhost:3000/msg?name=&email=&user_message=')