

const accordionButtons =
document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
        button.nextElementSibling;

        if(content.style.maxHeight){

            content.style.maxHeight = null;

        } else {

            content.style.maxHeight =
            content.scrollHeight + "px";
        }

    });

});

/* ==========================
   TAMANHO DA FONTE
========================== */

let currentFont = 16;

document
.getElementById("increaseFont")
.addEventListener("click", () => {

    currentFont += 1;

    document.documentElement.style.fontSize =
    currentFont + "px";
});

document
.getElementById("decreaseFont")
.addEventListener("click", () => {

    currentFont -= 1;

    if(currentFont < 12){
        currentFont = 12;
    }

    document.documentElement.style.fontSize =
    currentFont + "px";
});

/* ==========================
   TEMA ESCURO
========================== */

document
.getElementById("toggleTheme")
.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

/* ==========================
   LEITURA POR VOZ
========================== */

let speech;

document
.getElementById("startReading")
.addEventListener("click", () => {

    window.speechSynthesis.cancel();

    const content =
    document.getElementById("mainContent")
    .innerText;

    speech =
    new SpeechSynthesisUtterance(content);

    speech.lang = "pt-BR";
    speech.rate = 1;

    window.speechSynthesis.speak(speech);

});

document
.getElementById("stopReading")
.addEventListener("click", () => {

    window.speechSynthesis.cancel();

});

/* ==========================
   FORMULÁRIO
========================== */

const form =
document.querySelector("form");

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    alert(
        "Inscrição enviada com sucesso!"
    );

    form.reset();

});

/* ==========================
   COMENTÁRIOS
========================== */

const commentButton =
document.querySelector(".comment-btn");

commentButton.addEventListener("click", ()=>{

    alert(
        "Comentário enviado com sucesso!"
    );

});