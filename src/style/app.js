 const credits = document.getElementById("credits");

// جدا کردن خطوط متن//////////
credits.innerHTML = credits.innerHTML
  .split("<br>")
  .map(line => `<span>${line}</span>`)
  .join("");

const lines = credits.querySelectorAll("span");
const img = document.querySelector(".bread-img img");

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const vh = window.innerHeight;

    credits.style.transform = `translateY(${-scrolled * 0.09}px)`;

    lines.forEach((span, index) => {
        const top = span.getBoundingClientRect().top;

        if (top > vh * 0.70) {
            span.style.opacity = "0.5";
            span.style.filter = "blur(4px)";
          
            span.style.color = "#333";
        }
        else if (top <= vh * 0.70 && top > vh * 0.30) {
            span.style.opacity = "1";
            span.style.filter = "blur(0px)";
            
            span.style.color = "#000";
        }
        else if (top <= vh * 0.30) {
            let fade = top / (vh * 0.30);
            fade = Math.max(0.3, fade);

            span.style.opacity = fade;
            span.style.filter = `blur(${(1 - fade) * 6}px)`;
          
            span.style.color = "#444";
        }

        if(index === 1){
            if(scrolled === 0){
                span.style.filter = "blur(6px)";
                span.style.opacity = "1";
                span.style.color = "#000";
            }
            if(top <= vh * 0.40 && top >= vh * 0.40){
                span.style.filter = "blur(0px)";
                span.style.opacity = "1";
                span.style.color = "#000";
                
            }

            if(top < vh * 0.8){
                span.style.filter = "blur(8px)";
                span.style.opacity = "0.5";
                
            }
        }
    });


    const scale = 1 + scrolled * 0.00015;
    img.style.transform = `translateX(-50%) scale(${scale})`;
});

const breadImg = document.querySelector(".bread-img img");
const section1 = document.querySelector(".section1");

window.addEventListener("scroll", () => {
    const sectionRect = section1.getBoundingClientRect();

    if (sectionRect.bottom > 0) {
        breadImg.style.display = "block";
    } else {
        breadImg.style.display = "none";
    }
});


const panels = document.querySelectorAll(".para1");

panels.forEach((panel, i) => {
    panel.style.zIndex = 10 + i;
});


   const video = document.getElementById("myVideo");
const btn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");
const btnIcon = document.getElementById("btnIcon");

btn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        btnIcon.classList.remove("bi-play-fill");
        btnIcon.classList.add("bi-pause-fill");
        toggleText.innerText = "Pause";
    } else {
        video.pause();
        btnIcon.classList.remove("bi-pause-fill");
        btnIcon.classList.add("bi-play-fill");
        toggleText.innerText = "Play";
    }
});




//////////////////محو کردن هدر در فووتر//////////////////
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

function stickyFix() {
    const headerHeight = header.offsetHeight;
    const footerTop = footer.getBoundingClientRect().top;

    if (footerTop <= headerHeight) {
        header.classList.remove("fixed");   
        header.classList.add("stop-fixed");
        header.style.top = (footer.offsetTop - headerHeight) + "px";
    } else {
        header.classList.add("fixed");        
        header.classList.remove("stop-fixed");
        header.style.top = "0";
    }
}

window.addEventListener("scroll", stickyFix);
window.addEventListener("resize", stickyFix);
stickyFix();

/////////////////////////////////////حرکت المان های /////////////////
window.addEventListener("scroll", () => {
  document.querySelectorAll(".scrolls").forEach(el => {
    const triggerPoint = window.scrollY + window.innerHeight - 100;

    if (triggerPoint > el.offsetTop) {
      el.classList.add("show-text");
    }
  });
});


///////////////////////////دایره اسکرول بخش اول////////////////////////////
window.addEventListener("scroll", () => {
    const indicator = document.getElementById("scroll-indicator");

    if (window.scrollY > window.innerHeight * 0.5) {
        indicator.classList.add("hide");
    } else {
        indicator.classList.remove("hide");
    }
});
///////////////////////////////باز و بسته شدن منو در حالت موبایل////////////////
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('scale-y-0');
    mobileMenu.classList.add('scale-y-100');
});

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('scale-y-0');
    mobileMenu.classList.remove('scale-y-100');
});


