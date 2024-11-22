document.addEventListener('DOMContentLoaded', () => {
    const aboutMeSection = document.getElementById('about-me');
    const aboutMeH1 = aboutMeSection.querySelector('h1');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;   
        const translateX = scrollY * 0.3;
        aboutMeH1.style.transform = `translateX(${translateX}px)`;
    });
});

function scrollToElement(elementSelector, offset = 0, instance = 0) {
    if (elementSelector === 'top') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        const elements = document.querySelectorAll(elementSelector);
        if (elements.length > instance) {
            const element = elements[instance];
            const headerHeight = document.querySelector('#header').offsetHeight;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - offset;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    }
}

function updateActiveLinkOnClick(clickedLink) {
    links.forEach(link => {
        link.classList.remove('active');
    });
    clickedLink.classList.add('active');
}

function updateActiveLink() {
    const sections = [
        { id: '#content', link: links[0] },
        { id: '#about-me', link: links[1] },
        { id: '#forfun3', link: links[2] }
    ];

    let currentSection = null;
    const headerHeight = document.querySelector('#header').offsetHeight;
    const scrollPosition = window.scrollY + headerHeight + 10;

    sections.forEach((section, index) => {
        const sectionElement = document.querySelector(section.id);
        const sectionTop = sectionElement.offsetTop - headerHeight;
        const sectionBottom = sectionTop + sectionElement.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section;
        }

        if (index > 0) {
            const previousSectionElement = document.querySelector(sections[index - 1].id);
            const previousSectionBottom = previousSectionElement.offsetTop + previousSectionElement.offsetHeight;

            if (scrollPosition >= previousSectionBottom && scrollPosition < sectionTop) {
                currentSection = sections[index - 1];
            }
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
    });

    if (currentSection) {
        currentSection.link.classList.add('active');
    } else if (scrollPosition < document.querySelector('#about-me').offsetTop - headerHeight) {
        links[0].classList.add('active');
    }

    const lastSection = sections[sections.length - 1];
    const lastSectionElement = document.querySelector(lastSection.id);
    const lastSectionTop = lastSectionElement.offsetTop - headerHeight;
    const lastSectionBottom = lastSectionTop + lastSectionElement.offsetHeight;

    if (scrollPosition >= lastSectionTop && scrollPosition < lastSectionBottom) {
        lastSection.link.classList.add('active');
    } else if (scrollPosition >= lastSectionBottom) {
        links.forEach(link => link.classList.remove('active'));
        lastSection.link.classList.add('active');
    }
}

window.addEventListener('scroll', updateActiveLink);

const links = document.querySelectorAll('#navbar .link a');
links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = link.getAttribute('data-scroll-target');
        if (target) {
            scrollToElement(target);
        } else {
            scrollToElement('top');
        }
        updateActiveLinkOnClick(link);
    });
});

updateActiveLink();

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.category-title');
    const projects = document.querySelectorAll('.pros-grid .image');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = button.id;

            filterButtons.forEach(btn => btn.classList.remove('activated'));

            button.classList.add('activated');

            projects.forEach(project => {
                if (category === 'all') {
                    project.style.display = 'block';
                } else {
                    project.style.display = project.getAttribute('data-category') === category ? 'block' : 'none';
                }
            });
        });
    });
});

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

const text = document.querySelector(".sec-text");

const texts = ["Front-End Developer", "UI Designer"];
let index = 0;

const textLoad = () => {
  text.classList.add("hidden");
  setTimeout(() => {
    
    text.textContent = texts[index];
    text.classList.remove("hidden");

    index = (index + 1) % texts.length;
  }, 50);
};

textLoad();
setInterval(textLoad, 3000);





