// Mobile menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Typing animation

const words = [
    "Frontend Developer",
    "CSE Student",
    "Web Designer",
    "JavaScript Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
    } else {

        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 70 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;
        speed = 1200;

    } else if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// Contact form validation

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const text = document.getElementById("message").value.trim();

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name===""){

        message.style.color="red";
        message.textContent="Please enter your name.";
        return;
    }

    if(!emailPattern.test(email)){

        message.style.color="red";
        message.textContent="Please enter a valid email.";
        return;
    }

    if(subject===""){

        message.style.color="red";
        message.textContent="Please enter a subject.";
        return;
    }

    if(text.length<10){

        message.style.color="red";
        message.textContent="Message should contain at least 10 characters.";
        return;
    }

    message.style.color="lightgreen";
    message.textContent="Message sent successfully!";

    form.reset();

});


// Scroll to top button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";
    }
    else{

        topBtn.style.display="none";
    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// Active navbar link

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");
        }

    });

});


// Fade animation while scrolling

const cards = document.querySelectorAll(
".skill-card, .project-card, .about-info div"
);

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition="all 0.8s ease";

    observer.observe(card);

});