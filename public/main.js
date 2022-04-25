document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.getElementsByClassName('accordion');

    Array.from(accordions).forEach(accordion => {
        accordion.addEventListener('click', (e) => {
            const contents = e.target.parentNode.getElementsByClassName('accordion-content');
            const titles = e.target.parentNode.getElementsByClassName('accordion-title');
            
            Array.from(contents).forEach(content => {
                content.classList.toggle('accordion-content-displayed')
            })
            
            Array.from(titles).forEach(title => {
                title.classList.toggle('accordion-title-opened')
            })
        });
    });
})

function openAccordion(e) {
}