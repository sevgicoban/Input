const input = document.querySelector(".input__field");
const inputIcon = document.querySelector(".input__icon");

inputIcon.addEventListener('click', (e)=> {
    e.preventDefault();
    if(input.getAttribute("type") === "password") {
        inputIcon.setAttribute("src", "images.png");
        input.setAttribute("type","text");
    }else {
        inputIcon.setAttribute("src", "images.jpeg");
        input.setAttribute("type", "password");
    }
} );