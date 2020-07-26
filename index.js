const sections = Array.from(document.querySelectorAll("section"));
const navButtons = Array.from(document.querySelectorAll(".nav-option"));

window.onload = () => {
    // enable page swapping
    document.querySelector("nav").childNodes.forEach(button => {
        button.onclick = () => toggleSection(button);
    });

    // enable slides
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
    });

}

function toggleSection(button) {
    // change selected navButton
    navButtons.forEach(navButton => {
        navButton.classList.remove("selected");
    });
    button.classList.add("selected")

    // change visible section
    sections.forEach(section => {
        section.hidden = true;
    })
    const selected = sections.filter(section => section.id == button.dataset.page)[0];
    selected.hidden = false;
}

function swipePage(page) {
    document.querySelector(`[data-page=${page}`).click();
}