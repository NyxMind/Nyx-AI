document.addEventListener("DOMContentLoaded", () => {
    const portalLoader = document.querySelector(".portal-loader");
    const landingPage = document.getElementById("landing-page");
    const mainPage = document.getElementById("main-page");
    const enterButton = document.getElementById("enter-button");

    // Portal entrance animation
    setTimeout(() => {
        portalLoader.style.opacity = "0";
        setTimeout(() => portalLoader.style.display = "none", 1000);
    }, 2000);

    enterButton.addEventListener("click", () => {
        landingPage.style.display = "none";
        mainPage.style.display = "block";
    });

    // Starfield Effect
    const starfield = document.getElementById("starfield");
    const ctx = starfield.getContext("2d");
    starfield.width = window.innerWidth;
    starfield.height = window.innerHeight;

    let stars = Array(300).fill().map(() => {
        return {
            x: Math.random() * starfield.width,
            y: Math.random() * starfield.height,
            radius: Math.random() * 2,
            speed: Math.random() * 0.5
        };
    });

    function animateStars() {
        ctx.clearRect(0, 0, starfield.width, starfield.height);
        ctx.fillStyle = "white";

        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
            star.y += star.speed;
            if (star.y > starfield.height) {
                star.y = 0;
                star.x = Math.random() * starfield.width;
            }
        });
        requestAnimationFrame(animateStars);
    }

    animateStars();

    // Typing effect for Chatbot
    const chatMessages = document.getElementById("chat-messages");
    const chatInput = document.getElementById("chat-input");
    const sendButton = document.getElementById("send-button");

    function typeMessage(text) {
        let i = 0;
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("ai-message");
        chatMessages.appendChild(messageDiv);
        
        function type() {
            if (i < text.length) {
                messageDiv.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        type();
    }

    sendButton.addEventListener("click", () => {
        const userText = chatInput.value;
        if (!userText) return;
        
        const userMessage = document.createElement("div");
        userMessage.classList.add("user-message");
        userMessage.textContent = userText;
        chatMessages.appendChild(userMessage);

        chatInput.value = "";
        setTimeout(() => typeMessage("Processing..."), 1000); // Placeholder response
    });

    // Hover effect on planets to show roadmap details
    document.querySelectorAll(".floating-planet").forEach(planet => {
        planet.addEventListener("mouseover", () => {
            planet.style.transform = "scale(1.5)";
            planet.querySelector("h4").style.opacity = "1";
            planet.querySelector("p").style.opacity = "1";
        });
        
        planet.addEventListener("mouseleave", () => {
            planet.style.transform = "scale(1)";
            planet.querySelector("h4").style.opacity = "0";
            planet.querySelector("p").style.opacity = "0";
        });
    });
});
