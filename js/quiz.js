const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    console.log("CLICKED")
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const questionsAndAnswers = [
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
        },
        correctAnswer: "b"
    }
]