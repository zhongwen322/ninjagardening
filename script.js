// ================== 汉堡菜单 ==================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ================== Modal 图片放大 ==================
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// 给所有项目图片添加点击事件
const projectImages = document.querySelectorAll("#projects .gallery img");

projectImages.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerText = img.alt;
    });
});

// 点击 × 关闭 modal
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// 点击 modal 背景也关闭
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}



document.querySelector(".prev").addEventListener("click", () => {
    showImage(currentIndex - 1);
});

document.querySelector(".next").addEventListener("click", () => {
    showImage(currentIndex + 1);
});

// ================== Modal 左右切换 ==================
let currentIndex = 0;
let images = Array.from(document.querySelectorAll("#projects .gallery img"));

projectImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerText = img.alt;
        currentIndex = index;
    });
});

const showImage = (index) => {
    if(index < 0) index = images.length - 1;
    if(index >= images.length) index = 0;
    modalImg.src = images[index].src;
    captionText.innerText = images[index].alt;
    currentIndex = index;
}

document.querySelector(".prev").addEventListener("click", () => {
    showImage(currentIndex - 1);
});

document.querySelector(".next").addEventListener("click", () => {
    showImage(currentIndex + 1);
});


const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

const form = document.getElementById("contactForm");
const successBox = form.querySelector(".form-success");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
    });

    if (response.ok) {
        form.querySelectorAll("input, textarea, button").forEach(el => {
            el.style.display = "none";
        });
        successBox.style.display = "block";

        // 转化追踪（给 GA / Pixel 用）
        window.dispatchEvent(new Event("leadSubmitted"));
    }
});


const filterButtons = document.querySelectorAll(".filter-btn");
const galleryImages = document.querySelectorAll(".gallery img");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        galleryImages.forEach(img => {
            if (filter === "all" || img.dataset.category === filter) {
                img.classList.remove("hidden");
            } else {
                img.classList.add("hidden");
            }
        });
    });
});


const particleContainer = document.querySelector(".hero-particles");

for (let i = 0; i < 18; i++) {
    const p = document.createElement("span");
    p.classList.add("particle");

    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = 12 + Math.random() * 10 + "s";
    p.style.animationDelay = Math.random() * 8 + "s";
    p.style.width = p.style.height = 4 + Math.random() * 4 + "px";

    particleContainer.appendChild(p);
}




filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.dataset.target;
        if (!targetId) return;

        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            targetEl.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
