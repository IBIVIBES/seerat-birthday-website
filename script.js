
/* =========================
   1. LIVE BIRTHDAY COUNTDOWN
========================= */

// JavaScript months start at 0.
// 10 = November.
const birthday = new Date(2026, 10, 23, 0, 0, 0);

function updateCountdown() {
    const now = new Date();
    const difference = birthday.getTime() - now.getTime();

    const message = document.getElementById("countdownMessage");

    if (difference <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        message.textContent =
            "It's Seerat's birthday! Happy Birthday! 🎂";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

// Start immediately and update every second.
updateCountdown();
setInterval(updateCountdown, 1000);


/* =========================
   2. PAGE TRANSITIONS
========================= */

const pages = document.querySelectorAll(".page");

function showPage(pageId) {
    const targetPage = document.getElementById(pageId);

    if (!targetPage) return;

    pages.forEach(page => {
        page.classList.remove("active");
    });

    // Restart the entrance animation.
    void targetPage.offsetWidth;

    targetPage.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Next-page buttons
document.querySelectorAll("[data-next]").forEach(button => {
    button.addEventListener("click", () => {
        showPage(button.dataset.next);
    });
});

// Previous-page buttons
document.querySelectorAll("[data-prev]").forEach(button => {
    button.addEventListener("click", () => {
        showPage(button.dataset.prev);
    });
});


/* =========================
   3. ANIMATED BACKGROUND STARS
========================= */

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 55; i++) {
    const star = document.createElement("span");

    star.className = "star";
    star.textContent = Math.random() > 0.5 ? "✦" : "·";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.fontSize =
        (8 + Math.random() * 12) + "px";

    star.style.animationDelay =
        (Math.random() * 3) + "s";

    star.style.animationDuration =
        (2 + Math.random() * 4) + "s";

    starsContainer.appendChild(star);
}


/* =========================
   4. BACKGROUND MUSIC
========================= */

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
    if (music.paused) {
        try {
            await music.play();

            musicBtn.textContent = "♫ Pause Music";
        } catch (error) {
            musicBtn.textContent = "Music unavailable";

            alert(
                "Please add a valid music.mp3 file to your project folder."
            );
        }
    } else {
        music.pause();

        musicBtn.textContent = "♫ Play Music";
    }
});

// Keep the button label accurate if playback ends or changes.
music.addEventListener("pause", () => {
    musicBtn.textContent = "♫ Play Music";
});

music.addEventListener("play", () => {
    musicBtn.textContent = "♫ Pause Music";
});


/* =========================
   5. BIRTHDAY CELEBRATION
========================= */

const celebrateBtn = document.getElementById("celebrateBtn");

function createCelebration() {
    const symbols = ["♡", "✦", "✧", "💗", "✨", "🌸"];

    for (let i = 0; i < 45; i++) {
        const item = document.createElement("span");

        item.className = "confetti";

        item.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        item.style.left = window.innerWidth / 2 + "px";
        item.style.top = window.innerHeight / 2 + "px";

        item.style.color = [
            "#ffb9d7",
            "#bda0ff",
            "#f5d99a",
            "#fff9ff"
        ][Math.floor(Math.random() * 4)];

        item.style.fontSize =
            (12 + Math.random() * 18) + "px";

        item.style.setProperty(
            "--x",
            (Math.random() - 0.5) * window.innerWidth + "px"
        );

        item.style.setProperty(
            "--y",
            (Math.random() - 0.5) * window.innerHeight + "px"
        );

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 1900);
    }
}

celebrateBtn.addEventListener("click", () => {
    createCelebration();

    celebrateBtn.textContent =
        "You deserve all the happiness! 💗";

    setTimeout(() => {
        celebrateBtn.textContent =
            "Make a Little Birthday Magic ✨";
    }, 2500);
});
