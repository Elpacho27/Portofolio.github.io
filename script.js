
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("scroll", function() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(function(card) {
        const cardOffset = card.offsetTop - window.innerHeight;
        if (window.scrollY > cardOffset) {
            card.classList.add("visible");
        }
    });
});