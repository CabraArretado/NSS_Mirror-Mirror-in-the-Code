
let message = document.getElementById("message");
let mirror = document.getElementsByClassName("mirror");

message.addEventListener("keyup", (event) => {
    for (let i = 0; i < mirror.length; i++){
        mirror[i].innerHTML = event.target.value;
    }
})